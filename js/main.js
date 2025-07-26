
window.onload = function () {
  document.body.classList.remove("is-preload");
};

const modal = document.getElementById("modalContato");
const btnsAbrirModal = document.querySelectorAll(".abrirModal");
const btnFecharModal = document.getElementsByClassName("close")[0];
const btnEnviarWhatsApp = document.getElementById("enviarWhatsApp");

function abrirModal() {
  modal.style.display = "block";
}

btnsAbrirModal.forEach((btn) => {
  btn.onclick = function () {
    abrirModal();
  };
});

btnFecharModal.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

btnEnviarWhatsApp.onclick = function () {
  const nome = document.getElementById("nome").value;
  const assunto = document.getElementById("assunto").value;
  const numeroWhatsApp = "5541997085626";

  if (nome.trim() === "") {
    alert("O nome é obrigatório.");
    return;
  }

  let mensagem = `Olá Dra. Marcia. Sou ${nome} e estou entrando em contato através do site. `;
  if (assunto.trim() !== "") {
    mensagem += `\nAssunto:\n${assunto}`;
  }

  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
  modal.style.display = "none";
  document.getElementById("nome").value = "";
  document.getElementById("assunto").value = "";
};

const navbarToggle = document.getElementById("navbar-toggle");
const navbarMenu = document.getElementById("navbar-menu");

navbarToggle.onclick = function () {
  navbarMenu.classList.toggle("show");
};

const navbarLinks = document.querySelectorAll("#navbar-menu a");

navbarLinks.forEach((link) => {
  link.onclick = function () {
    navbarMenu.classList.remove("show");
    if (link.classList.contains("abrirModal")) {
      abrirModal();
    }
  };
});

window.ontouchmove = function () {
  navbarMenu.classList.remove("show");
};

