console.log("Kanban JS loaded...");

// Exemple éventuel de structure
window.addEventListener("DOMContentLoaded", () => {
  // Ici, on récupère les éléments du DOM
  const addCardBtn = document.getElementById("addCardBtn");
  const searchInput = document.getElementById("searchInput");
  const sortByPriorityBtn = document.getElementById("sortByPriorityBtn");

  // Éventuellement, on écoute les événements
  addCardBtn.addEventListener("click", () => {
    // ...
  });

  searchInput.addEventListener("input", () => {
    const searchValue = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      const cardText = card.textContent.toLowerCase();
      if (cardText.includes(searchValue)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });

  sortByPriorityBtn.addEventListener("click", () => {
    // ...
  });
});
