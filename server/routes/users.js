// -- routes/catRoutes.js
const router = require('express').Router();
const bcrypt = require('bcrypt');

const saltRounds = 10;







// const [loginStatus, setLoginStatus] = useState("");

// Axios.defaults.withCredentials = true


// const login = () => {
//   Axios.post("http://localhost:3001/login", {
//     username: username,
//     password: password,
//   }).then((response) => {
//     if (response.data.message){
//     setLoginStatus(response.data.message);
//   } else {
//     setLoginStatus(response.data[0].username);
//   }
// })
// };
// useEffect(() => {
//   Axios.get("http://localhost:3001/login").then ((response) => {
//     console.log(response);
//   })
// },[])
  






module.exports = (db) => {
  // all routes will go here 
  // `INSERT INTO users (name, display_name, email, password) VALUES($1,$2,$3,$4);`,

  router.post("/signup", (req, res) => {
    const name = req.body.name;
    const display_name = req.body.display_name;
    const password = req.body.password;
    const email = req.body.email;

    console.log("post:signup working", req.body)

    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) {
        console.log(err);
      }

      db.query(
        `INSERT INTO users (name, display_name, email, password) VALUES($1,$2,$3,$4);`,
        [name, display_name, email, hash]).then(result => {
          res.json(result.rows);

        })
      //   (err, result) => {
      //     console.log(err);
      //   }
      // );
    });
  });






  router.post("/login", (req, res) => {
    console.log("you are in POST /users/login")
    const email = req.body.email;
    const password = req.body.password;
    //bcrypt.compare(password, result[0].password

    const query = `SELECT * from users where email = $1`

    db.query(query,[email])
    .then(result => {
      console.log("result",result.rows)

      if (result.rows.length === 0) {
        res.send({emailError: "Email does not exists"})
      } 


      else if (result.rows.length > 0) {
        const actualPassword = result.rows[0].password;

        const compare = bcrypt.compareSync(password,actualPassword)
        
          //give password is matching
          if(compare) {
            req.session.user = result.rows[0].id;
            console.log("now the session is", req.session.user);
            res.send(result.rows[0])
          }


          //given password is not matching
          else {
            console.log("failed to login")
            res.send({passwordError: "Password does not match"})
          }



        
      }

    })

    

    

  })







  router.get('/', (req, res) => {
    const command = "SELECT * FROM users";
    db.query(command).then(data => {
      res.json(data.rows);
    });
  });

  return router;
};