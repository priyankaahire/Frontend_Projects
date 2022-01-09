const container = document.querySelector('#container');

const imgArr = [
    {
        details:"A developed country, Canada has the seventeenth-highest nominal per-capita income globally as well as the thirteenth-highest ranking in the Human Development Index. Its advanced economy is the tenth-largest in the world, relying chiefly upon its abundant natural resources and well-developed international trade networks.",
        imgname:"canda.jpeg",
        title:"Canda"
    },
    {
        details:`Japan (Japanese: 日本, Nippon or Nihon, and formally 日本国) is an island country in East Asia, located in the northwest Pacific Ocean. It is bordered on the west by the Sea of Japan, and extends from the Sea of Okhotsk in the north toward the East China Sea and Taiwan in the south`,
        imgname:"japan.jpg",
        title:"Japan"
    },
    {
        details:`Sydney is the capital city of the state of New South Wales, and the most populous city in Australia and Oceania. Located on Australia's east coast, the metropolis surrounds Port Jackson and extends about 70 km on its periphery towards the Blue Mountains to the west, Hawkesbury to the north, the Royal National Park to the south and Macarthur to the south-west. Sydney is made up of 658 suburbs, spread across 33 local government areas. Residents of the city are known as "Sydneysiders". As of June 2020, Sydney's estimated metropolitan population was 5,367,206, meaning the city is home to approximately 66% of the state's population. Nicknames of the city include the 'Emerald City' and the 'Harbour City'`,
        imgname:"sydney.jpg",
        title:"Sydney"
    },
    {
        details:`London is the capital and most populous city of England and the United Kingdom. Standing on the River Thames in the south east of the island of Great Britain, London has been a major settlement for two millennia. It was founded by the Romans, who named it Londinium. London's ancient core, the City of London, largely retains its 1.12-square-mile medieval boundaries. Since at least the 19th century, "London" has also referred to the metropolis around this core, historically split between Middlesex, Essex, Surrey, Kent and Hertfordshire, which today largely makes up Greater London, a region governed by the Mayor of London and the London Assembly.`,
        imgname:"london.jpg",
        title:"London"
    },
    {
        details:"Paris is the capital and most populous city of France, with an estimated population of 2,175,601 residents as of 2018 , in an area of more than 105 square kilometres (41 square miles). Since the 17th century, Paris has been one of Europe's major centres of finance, diplomacy, commerce, fashion, gastronomy, science, and arts. The City of Paris is the centre and seat of government of the",
        imgname:"paris.jpg",
        title:"Paris"
    }
];

const renderDom = function(data) {
    let htmlElemet = ``;
    for(let i=0; i<data.length; i++)
    {
        htmlElemet = htmlElemet + `<div class="parallax" style="background-image:url(images/${data[i].imgname})"></div>`;
        htmlElemet = htmlElemet + `<div class="parallax-info"><h3>${data[i].title}</h3><p>${data[i].details}</p></div>`;
    }
    container.innerHTML = htmlElemet;
}
renderDom(imgArr);
