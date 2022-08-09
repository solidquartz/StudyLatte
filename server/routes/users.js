// -- routes/catRoutes.js
const router = require('express').Router();
const bcrypt = require('bcrypt');
const app = require('../app');
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






  // router.post("/login", (req, res) => {
  //   const email = req.body.email;
  //   const password = req.body.password;

  //   db.query(
  //     "SELECT * FROM users WHERE email = ?;",
  //     email,
  //     (err, result) => {
  //       if (err) {
  //         res.send({ err: err });
  //       }
  //       if (result.length > 0) {
  //         bcrypt.compare(password, result[0].password, (error, response) => {
  //           if (response) {
  //             req.session.user = result;
  //             console.log(req.session.user); // HERE WE HAVE TO CHECK IN THE TERMINAL IF WE R GONNA SEE NAME AND ENCRYPTED PASSWORD

  //             res.send(result)
  //           } else {
  //             res.send({ message: "Wrong name/password!" });

  //           }
  //         });
  //       } else {
  //         res.send({ message: "User doesn't exist" })
  //       }
  //     }

  //   );

  // })







  router.get('/', (req, res) => {
    const command = "SELECT * FROM users";
    db.query(command).then(data => {
      res.json(data.rows);
    });
  });

  return router;
};