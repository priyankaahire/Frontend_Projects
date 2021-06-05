const surface = document.querySelector('.surface');
const car = document.querySelector('.car');

const night = document.querySelector('.night');

//keypress event


//window.onload = function() {
    // document.getElementById("night").onkeypress = runScript;
    document.addEventListener("keypress", function(event) {
        // Number 13 is the "Enter" key on the keyboard
        console.log(event);
        if (event.keyCode === 13 || event.keyCode === 32) {
          // Cancel the default action, if needed
          event.preventDefault();
          surface.classList.toggle("moveRight");
       
          // Trigger the button element with a click
         // document.getElementById("myBtn").click();
        }
      });
//}
//   function runScript(e) {
//       alert("data");
//     //See notes about 'which' and 'key'
//     if (e.keyCode == 13) {
//         var tb = document.getElementById("scriptBox");
//         eval(tb.value);
//         return false;
//     }
// }