

const imgArr = [
    {
        imgtitle: "Great Wall of China (China)",
        url: "chinawall.jpeg"
    },
    {
        imgtitle: "Christ the Redeemer Statue",
        url: "Christ_Redeemer_Statue.jpeg"
    },
    {
        imgtitle: "Machu Picchu (Peru)",
        url: "MachuPicchu.jpeg"
    },
    {
        imgtitle: "Chichen Itza",
        url: "Chichen_Itza.jpeg"
    },
    {
        imgtitle: "The Roman Colosseum (Rome)",
        url: "Roman_Colosseum.jpeg"
    },
    {
        imgtitle: "Taj Mahal (Agra, India)",
        url: "Tajmahal.jpeg"
    },
    {
        imgtitle: "Petra (Jordan)",
        url: "Petra.jpeg"
    },
    {
        imgtitle: "Egypt’s Pyramid",
        url: "egypt.jpeg"
    }]
for (let i = 0; i < imgArr.length; i++) {
    var divElem = document.createElement("div");
    divElem.setAttribute("style", "background-image:url(images/" + imgArr[i].url + ")");

    if (i == 0) {
        divElem.setAttribute("class", "panel active");
    } else {
        divElem.setAttribute("class", "panel");
    }
    var textElem = document.createElement("h3");
    textElem.textContent = "" + imgArr[i].imgtitle;

    divElem.appendChild(textElem);
    document.getElementById("container").appendChild(divElem);
}

const panels = document.querySelectorAll('.panel');
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}