const APIURL = 'https://api.github.com/users/';
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
getUser("priyankaahire");
async function getUser(username) {
    const resp = await fetch(APIURL + username);
    const respData = await resp.json();
    createUserCard(respData);
    if(!respData.hasOwnProperty('message')) {
        console.log("In data");
        console.log(respData)
        getRepos(username);
    }
}
async function getRepos(username) {
    const resp = await fetch(APIURL + username + '/repos');
    const respData = await resp.json();
    addReposToCard(respData);
}
function createUserCard(user) {
    let cardHTML = '';
    if(user.hasOwnProperty('message')) {
        cardHTML = `
        <div class="card">
            <div class="user_info">
              <p>No User Info Found</p>
            </div>
        </div>
        `;
      main.innerHTML = cardHTML;
     } else {
         cardHTML = `
            <div class="card">
                <div>
                <img class="user_img" src="${user.avatar_url}" alt="${user.name}" />
                </div>
                <div class="user_info">
                    <h2><a url="${user.url}" target="_blank">${user.name}</a></h2>
                    <p>${user.bio}</p>
                    <ul>
                        <li>${user.followers}<strong>Followers</strong> </li>
                        <li>${user.following}<strong>Following</strong></li>
                        <li>${user.public_repos}<strong>Repos</strong></li>
                    </ul>
                    <h4>Repos: </h4>
                    <div class="repo_info" id="repo_info">
                    
                    </div>
                </div>
            </div>
        `;
       main.innerHTML = cardHTML;
    }
   
}

function addReposToCard(repos) {
const reposEl = document.getElementById('repo_info');
console.log(repos);
try {
    repos
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 10)
    .forEach(repo => {
        const repoEl = document.createElement('a');
        repoEl.classList.add('repo');
        repoEl.href = repo.html_url;
        repoEl.target = "_blank";
        repoEl.innerText = repo.name;
    
        reposEl.appendChild(repoEl);
    })
} catch(e) {
  console.log(e);
}

}
form.addEventListener('submit', e=> {
    e.preventDefault();
    const user = search.value;
    if(user) {
      getUser(user);
      search.value = "";
    }
})