import { searchApi, searchRepos } from "./api.js";

const button = document.querySelector(".btn");
const inputName = document.querySelector(".inputName");

const modalTitle = document.querySelector(".modal-title");
const modalBody = document.querySelector(".modal-body");
const modalElement = document.getElementById("exampleModal");
const modal = new bootstrap.Modal(modalElement);

const showApi = async () => {
  const nameGit = inputName.value.trim();
  const datarepos = await searchRepos(nameGit);
  const data = await searchApi(nameGit);

  if (data && datarepos) {
    modalTitle.textContent = data.name || "No name available";
    modalBody.innerHTML = `
      <table class="table">
        <thead>
          <tr>
            <th>Usuário</th>
            <th>Followers</th>
            <th>Repositórios</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><img src="${data.avatar_url}" alt="${data.name}" style="width: 100px; height: 100px; border-radius: 50%;"></td>
            <td>${data.followers}</td>
            <td><strong>${datarepos.join('<br>')}</strong></td>
          </tr>
        </tbody>
      </table>
    `;
    modal.show();
  } else {
    modalTitle.textContent = "Error";
    modalBody.innerHTML = "<p>É necessário digitar um usuário válido!.</p>";
    modal.show();
  }
};

button.addEventListener("click", (e) => {
  e.preventDefault();
  showApi();
  inputName.value = "";
});
