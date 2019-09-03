const repoWrap = document.querySelector("#repos-list");
const searchPull = document.querySelector("#search");
const btnPull = document.querySelector("#boton");
const quantity = document.querySelector("#repos-count");

function renderLength(reposPromise) {
  reposPromise
    .then(repos => repos.length)
    .then(length => `<p>Qty: <b> ${length} </b> </p> `)
    .then(htmlList => {
      quantity.innerHTML = htmlList;
    });
}

function datos_pull() {
  const name = searchPull.value;
  const reposPromise = fetch(`https://api.github.com/users/${name}/repos`).then(
    response => response.json()
  );
  reposPromise.then(repos => {
    repoWrap.innerHTML = "";
    for (let repo of repos) {
      repoWrap.innerHTML += ` <div class="repo">
      <a href="${repo.html_url}" target="_blank">${repo.name}</a>
      </div>`;
    }
  });
  renderLength(reposPromise);
}

btnPull.addEventListener("click", datos_pull);
