

// // function creat_pw(){

// //   // len >> Length Password                  *************
// //   // up >> Uppercase letter , True or False  *************
// //   // low >> Lowercase letter, True or False  *************
// //   // num >> Number , True or False           *************
// //   var len = 4 , up = "true" , low = "false" , num = "false";



// //   var bool = {
// //     'up' : up,
// //     'low' : low ,
// //     'num' : num
// //   }

// //   var pw = "",k=0;
// //   for(var i in bool)
// //     if(bool[i] == "true")
// //       k++;

//   switch (k) {
//     case 1:
//       if(bool.up == "true")
//         for (x = len ; x > 0 ; x--)
//           pw += String.fromCharCode((64 + ((Math.random()*25)+1)));

//       if(bool.low == "true")
//         for (x = len ; x > 0 ; x--)
//           pw += String.fromCharCode((96 + ((Math.random()*25)+1)));

//       if(bool.num == "true")
//         for (x = len ; x > 0 ; x--)
//           pw += String.fromCharCode((47 + ((Math.random()*9)+1)));
//     break;

//     case 2:
//       if(len%2 == 0){
// // -------------------------------------------------------------------------
//         if(bool.up == "true" && bool.low == "true"){
//           for (x = len/2 ; x > 0 ; x--){
//             pw += String.fromCharCode((64 + ((Math.random()*25)+1)));
//           }
//           for (x = len/2 ; x > 0 ; x--){
//             pw += String.fromCharCode((96 + ((Math.random()*25)+1)));
//           }
//         }

//       if(bool.up == "true" && bool.num == "true"){
//         for (x = len/2 ; x > 0 ; x--){
//           pw += String.fromCharCode((64 + ((Math.random()*25)+1)));
//         }
//         for (x = len/2 ; x > 0 ; x--){
//           pw += String.fromCharCode((47 + ((Math.random()*9)+1)));
//         }
//       }

//       if(bool.low == "true" && bool.num == "true"){
//         for (x = len/2 ; x > 0 ; x--){
//           pw += String.fromCharCode((96 + ((Math.random()*25)+1)));
//         }
//         for (x = len/2 ; x > 0 ; x--){
//           pw += String.fromCharCode((47 + ((Math.random()*9)+1)));
//         }
//       }
//   // -------------------------------------------------------------------------
//       }
//       else{
//   // -------------------------------------------------------------------------
//         if(bool.up == "true" && bool.low == "true"){
//           for (x = Math.floor(len/2) ; x > 0 ; x--){
//             pw += String.fromCharCode((64 + ((Math.random()*25)+1)));
//           }
//           for (x = Math.floor(len/2)+1 ; x > 0 ; x--){
//             pw += String.fromCharCode((96 + ((Math.random()*25)+1)));
//           }
//         }

//         if(bool.up == "true" && bool.num == "true"){
//           for (x = Math.floor(len/2) ; x > 0 ; x--){
//             pw += String.fromCharCode((64 + ((Math.random()*25)+1)));
//           }
//           for (x = Math.floor(len/2)+1 ; x > 0 ; x--){
//             pw += String.fromCharCode((47 + ((Math.random()*9)+1)));
//           }
//         }

//         if(bool.low == "true" && bool.num == "true"){
//           for (x = Math.floor(len/2) ; x > 0 ; x--){
//             pw += String.fromCharCode((96 + ((Math.random()*25)+1)));
//           }
//           for (x = Math.floor(len/2)+1 ; x > 0 ; x--){
//             pw += String.fromCharCode((47 + ((Math.random()*9)+1)));
//           }
//         }
//   // -----------------------------------------------------------------------
//       }
//     break;

//     case 3:
//       if ( len%3 == 0){
//           for (x = len/3 ; x > 0 ; x--)
//           pw += String.fromCharCode((64 + ((Math.random()*25)+1)));
//           for (y = len/3 ; y > 0 ; y--)
//           pw += String.fromCharCode((96 + ((Math.random()*25)+1)));
//           for (z = len/3 ; z > 0 ; z--)
//           pw += String.fromCharCode((47 + ((Math.random()*9)+1)));
//       }
//       else if(len%3 == 1) {
//           for (x = Math.floor(len/3) ; x > 0 ; x--)
//           pw += String.fromCharCode((64 + ((Math.random()*25)+1)));
//           for (y = Math.floor(len/3) ; y > 0 ; y--)
//           pw += String.fromCharCode((96 + ((Math.random()*25)+1)));
//           for (z = Math.floor(len/3)+1 ; z > 0 ; z--)
//           pw += String.fromCharCode((47 + ((Math.random()*9)+1)));
//       }
//       else if(len%3 == 2) {
//           for (x = Math.floor(len/3) ; x > 0 ; x--)
//           pw += String.fromCharCode((64 + ((Math.random()*25)+1)));
//           for (y = Math.floor(len/3) ; y > 0 ; y--)
//           pw += String.fromCharCode((96 + ((Math.random()*25)+1)));
//           for (z = Math.floor(len/3)+2 ; z > 0 ; z--)
//           pw += String.fromCharCode((47 + ((Math.random()*9)+1)));
//       }
//     break;
//   }

//   return pw;
// }




(function(win){

      win.create_pass = {
        "pw_text" : "",
        "count_true"  : 0 ,


        init : function(cnfg){
          this.config = cnfg ;
          this.bindEvents();
        },

        config : {
          length : 4 , 
          upper  : 'true' ,
          lowwer : 'false' ,
          number : 'false'
        },

        bindEvents : function(){
          this.lengthCnfg(); 
          this.buildPw();
          this.showPw();

        },

        lengthCnfg : function(){
            for(var i in this.config)
              if(this.config[i] == "true")
                 this.count_true++; 
        },

        buildPw : function(){
          switch (this.count_true) {
            case 1:
              if(this.config.upper == "true")
                for (x = this.config.length ; x > 0 ; x--)
                  this.pw_text += String.fromCharCode((64 + ((Math.random()*25)+1)));
        
              if(this.config.lowwer == "true")
                for (x = this.config.length ; x > 0 ; x--)
                this.pw_text += String.fromCharCode((96 + ((Math.random()*25)+1)));
        
              if(this.config.number == "true")
                for (x = this.config.length ; x > 0 ; x--)
                this.pw_text += String.fromCharCode((47 + ((Math.random()*9)+1)));
            break;
        
            case 2:
              if(this.config.length%2 == 0){
        // -------------------------------------------------------------------------
                if(this.config.upper == "true" && this.config.lowwer == "true"){
                  for (x = this.config.length/2 ; x > 0 ; x--){
                    this.pw_text += String.fromCharCode((64 + ((Math.random()*25)+1)));
                  }
                  for (x = this.config.length/2 ; x > 0 ; x--){
                    this.pw_text += String.fromCharCode((96 + ((Math.random()*25)+1)));
                  }
                }
        
              if(this.config.upper == "true" && this.config.number == "true"){
                for (x = this.config.length/2 ; x > 0 ; x--){
                  this.pw_text += String.fromCharCode((64 + ((Math.random()*25)+1)));
                }
                for (x = this.config.length/2 ; x > 0 ; x--){
                  this.pw_text += String.fromCharCode((47 + ((Math.random()*9)+1)));
                }
              }
        
              if(this.config.lowwer == "true" && this.config.number == "true"){
                for (x = this.config.length/2 ; x > 0 ; x--){
                  this.pw_text += String.fromCharCode((96 + ((Math.random()*25)+1)));
                }
                for (x = this.config.length/2 ; x > 0 ; x--){
                  this.pw_text += String.fromCharCode((47 + ((Math.random()*9)+1)));
                }
              }
          // -------------------------------------------------------------------------
              }
              else{
          // -------------------------------------------------------------------------
                if(this.config.upper == "true" && this.config.lowwer == "true"){
                  for (x = Math.floor(this.config.length/2) ; x > 0 ; x--){
                    this.pw_text += String.fromCharCode((64 + ((Math.random()*25)+1)));
                  }
                  for (x = Math.floor(this.config.length/2)+1 ; x > 0 ; x--){
                    this.pw_text += String.fromCharCode((96 + ((Math.random()*25)+1)));
                  }
                }
        
                if(this.config.upper == "true" && this.config.number == "true"){
                  for (x = Math.floor(this.config.length/2) ; x > 0 ; x--){
                    this.pw_text += String.fromCharCode((64 + ((Math.random()*25)+1)));
                  }
                  for (x = Math.floor(this.config.length/2)+1 ; x > 0 ; x--){
                    this.pw_text += String.fromCharCode((47 + ((Math.random()*9)+1)));
                  }
                }
        
                if(this.config.lowwer == "true" && this.config.number == "true"){
                  for (x = Math.floor(this.config.length/2) ; x > 0 ; x--){
                    this.pw_text += String.fromCharCode((96 + ((Math.random()*25)+1)));
                  }
                  for (x = Math.floor(this.config.length/2)+1 ; x > 0 ; x--){
                    this.pw_text += String.fromCharCode((47 + ((Math.random()*9)+1)));
                  }
                }
          // -----------------------------------------------------------------------
              }
            break;
        
            case 3:
              if ( this.config.length%3 == 0){
                  for (x = this.config.length/3 ; x > 0 ; x--)
                  this.pw_text += String.fromCharCode((64 + ((Math.random()*25)+1)));
                  for (y = this.config.length/3 ; y > 0 ; y--)
                  this.pw_text += String.fromCharCode((96 + ((Math.random()*25)+1)));
                  for (z = this.config.length/3 ; z > 0 ; z--)
                  this.pw_text += String.fromCharCode((47 + ((Math.random()*9)+1)));
              }
              else if(this.config.length%3 == 1) {
                  for (x = Math.floor(this.config.length/3) ; x > 0 ; x--)
                  this.pw_text += String.fromCharCode((64 + ((Math.random()*25)+1)));
                  for (y = Math.floor(this.config.length/3) ; y > 0 ; y--)
                  this.pw_text += String.fromCharCode((96 + ((Math.random()*25)+1)));
                  for (z = Math.floor(this.config.length/3)+1 ; z > 0 ; z--)
                  this.pw_text += String.fromCharCode((47 + ((Math.random()*9)+1)));
              }
              else if(this.config.length%3 == 2) {
                  for (x = Math.floor(this.config.length/3) ; x > 0 ; x--)
                  this.pw_text += String.fromCharCode((64 + ((Math.random()*25)+1)));
                  for (y = Math.floor(this.config.length/3) ; y > 0 ; y--)
                  this.pw_text += String.fromCharCode((96 + ((Math.random()*25)+1)));
                  for (z = Math.floor(this.config.length/3)+2 ; z > 0 ; z--)
                  this.pw_text += String.fromCharCode((47 + ((Math.random()*9)+1)));
              }
            break;
          }
        },

        showPw : function(){
          console.log(this.pw_text);
        }

      }


})(window);



window.create_pass.init({
                          length : 4 , 
                          upper  : 'true' ,
                          lowwer : 'false' ,
                          number : 'false'
});