const APIURL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const main = document.getElementById('conatiner');
const form = document.getElementById("form");
const search = document.getElementById("search");
var starTotal = 10;
var starPercentageRounded = '';
/**
 * Get Fav Movies on first time load
 */
getMovies(APIURL);
async function getMovies(url) {
    const resp = await fetch(url);
    const respData = await resp.json();
    showMovies(respData.results);
    return respData;
}
/**
 * 
 * @param {*} vote 
 * @returns 
 */
function getClassByRate(vote) {
    if (vote > 8) {
        return 'green';
    } else if (vote >= 5) {
        return 'orange'
    } else {
        return "red";
    }
}
/**
 * 
 * @param {*} movies 
 */
function showMovies(movies) {
    main.innerHTML = '';
    movies.forEach(movie => {
        const {
            poster_path, title, vote_average, overview
        } = movie;

        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
           
                <img onerror="this.onerror=null; this.src='thumbnail.png'" src="${IMGPATH + poster_path}" alt="${title}" />
                <div class="movie-info">
                    <h4>${title}</h4>
                    <div class="stars-outer">
                       <div style="width: ${getReating(vote_average)}" class="stars-inner"></div>
                    </div>
                </div>
              
                <div class="overview">
                <h4>Overview:</h4>
                ${overview}
                </div>`;
        main.appendChild(movieEl);
    })
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchTerm = search.value;
    if(searchTerm) {  
       getMovies(SEARCHAPI+searchTerm);
       search.value = '';
    }
});

 /**
   * 
   * @param avgRating 
   * This is called at table cell style level in that,
   * We round the value to the nearest 10. That means, 
   * the resulting value will be 0%, 10%, 20%, 30%, etc. 
   * This is important because it allows us to create neat half stars. 
   * For instance, a value of 50% denotes that two and a half stars are filled. 
   */
  function getReating(avgRating) {
    let starPercentage1 = (avgRating / this.starTotal) * 100;
    this.starPercentageRounded = `${(Math.round(starPercentage1 / 10) * 10)}%`;
    return this.starPercentageRounded;
  }
