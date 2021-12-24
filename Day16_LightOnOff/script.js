

const light_container = document.querySelector("#light_container");
light_container.addEventListener('click', function(e) {
    e.target.classList.toggle("light_on");
});
