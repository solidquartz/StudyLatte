

const countdown = function (timer) {
   
 
      if (Number(timer) > 0) {
        setTimeout(() => {
         console.log("beep!", timer);
        }, Number(timer) * 1000);
      }
   };
countdown(2); 