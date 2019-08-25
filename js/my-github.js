// Write code here to communicate with Github
const reposPromise = fetch("https://api.github.com/users/minotad66/repos").then(
  response => response.json()
);

const repoWrap = document.querySelector("#repos-list");
const quantity = document.querySelector("#repos-count");

function datos_web() {
  reposPromise
    .then(repos => {
      const html = repos.map(repo => {
        return ` <div class="repo">
        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
    </div>`;
      });
      return html.join("");
    })
    .then(htmlList => {
      repoWrap.innerHTML = htmlList;
    });
}

function renderLength() {
  reposPromise
    .then(repos => repos.length)
    .then(length => `<p>Qty: <b> ${length} </b> </p> `)
    .then(htmlList => {
      quantity.innerHTML = htmlList;
    });
}

renderLength();
datos_web();
