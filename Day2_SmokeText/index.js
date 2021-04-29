
/**
 * First we split the text into the letters
 */
let text = document.querySelector('.prag_text');
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
/**
 * Then we add active class on <span> tag on hovered
 */
let letters = document.querySelectorAll('span');
let len = letters != 'undefined' ? letters.length : 0;
for(let i=0; i < len; i++ ) {
  letters[i].addEventListener("mouseover", function() {
      letters[i].classList.add('active')
  })
}
