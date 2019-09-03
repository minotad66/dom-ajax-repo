const pullPromise = fetch(
  "https://api.github.com/repos/codeyourfuture/js-exercises/pulls"
).then(response => response.json());

console.log(pullPromise);

const repoWrap = document.querySelector("#pull-requests-list");
const searchPull = document.querySelector("#search");
const btnPull = document.querySelector("#boton");

function datos_pull() {
  pullPromise.then(repos => {
    const texto = searchPull.value;
    console.log(texto);
    repoWrap.innerHTML = "";
    for (let repo of repos) {
      console.log(repo);
      let name = repo.user.login;
      if (name.indexOf(texto) !== -1 && texto != "") {
        repoWrap.innerHTML += ` <div class="repo">
        <a href="${repo.html_url}" target="_blank">${repo.user.login}</a>
        </div>`;
      }
    }
  });
}

btnPull.addEventListener("click", datos_pull);
searchPull.addEventListener("keyup", datos_pull);
