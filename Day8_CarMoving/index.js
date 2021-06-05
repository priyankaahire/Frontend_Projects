const surface = document.querySelector('.surface');
//keypress event
document.addEventListener("keypress", function(event) {
    // Number 13 is the "Enter" key & 32 is the spacebar on the keyboard
    if (event.keyCode === 13 || event.keyCode === 32) {
      // Cancel the default action, if needed
      event.preventDefault();
      surface.classList.toggle("moveRight");
    }
});