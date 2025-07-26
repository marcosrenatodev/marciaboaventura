
function configurarCartaoExpandido(cardId) {
  const card = document.getElementById(cardId);
  const closeButton = card.querySelector(".close-card");

  card.onclick = function (event) {
    if (!card.classList.contains("expanded")) {
      card.classList.add("expanded");
    }
  };

  closeButton.onclick = function (event) {
    event.stopPropagation();
    card.classList.remove("expanded");
  };
}

configurarCartaoExpandido("card-direito-civil");
configurarCartaoExpandido("card-direito-consumidor");
configurarCartaoExpandido("card-direito-penal");
configurarCartaoExpandido("card-direito-familia");
