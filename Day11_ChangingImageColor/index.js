// const main = document.getElementById('main');
// const color_palatte = document.getElementById('color_palatte');
// const color_palatte_div = ['#ffffff', '#000000', '#cc7722'];

// //displayColorPalatte();
// const color = document.querySelector('.color');
// const car = document.querySelector('.car');
// let palatte = document.querySelectorAll('.palatte');
// console.log(palatte);
// for(let i=0; i< palatte.length; i++) {
//     palatte[i].addEventListener('click', () => {
//         let selected_color = window.getComputedStyle(palatte[i]).background;
//         console.log(selected_color);
//         car.style.background = selected_color;
//     })
// }

// function displayColorPalatte() {
//    for(let i=0; i < color_palatte_div.length; i++) {
//         var inputEle = document.createElement("INPUT");
//         inputEle.type= "color";
//         inputEle.id= "single_color"+i;
//         inputEle.value= color_palatte_div[i];
//         inputEle.classList.add('color');
//         color_palatte.appendChild(inputEle);
        
//    }
// }
// color.addEventListener('input', () => {
//     car.style.background = color.value;
// })