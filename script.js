/* 
    Code to generate random numbers in range:
         Math.floor(Math.random() * (max - min + 1) ) + min;
    */
         var secretCode = random4Digit();
         var sCodeArray = [];
         getsCodeArray();
         console.log(secretCode);
     
     
     
         function getsCodeArray() {
             for (let i = 0; i < secretCode.length; i++) {
                 sCodeArray.push(secretCode.charAt(i));
             }
         }
     
         function random4Digit() {
             return shuffle("0123456789".split('')).join('').substring(0, 4);
         }
     
         function shuffle(o) {
             for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
             return o;
         }
     
         function check() {
             let g1 = document.getElementById("n0").value;
             let g2 = document.getElementById("n1").value;
             let g3 = document.getElementById("n2").value;
             let g4 = document.getElementById("n3").value;
             let guess = [g1, g2, g3, g4];
             let guessStr = g1 + g2 + g3 + g4;
             if (guessStr === secretCode) {
                 document.getElementById("alert").style.display = "block";
             }
             // changing background-colour of all digits to "red" [initialize with red]
             for (let i = 0; i < 4; i++) {
                 document.getElementById(i.toString()).style.backgroundColor = "red";
             }
             //checking for digits at wrong place
             for (let i = 0; i < 4; i++) {
                 for (let j = 0; j < 4; j++) {
                     if (guess[i] === sCodeArray[j]) {
                         document.getElementById(i.toString()).style.backgroundColor = "#ffd500";
                     }
                 }
             }
     
             //checking for digits at right place
             for (let i = 0; i < 4; i++) {
                 if (guess[i] === sCodeArray[i]) {
                     document.getElementById(i.toString()).style.backgroundColor = "green";
                 }
             }
         }