console.log("Kanban JS loaded...");

// Exemple éventuel de structure
window.addEventListener("DOMContentLoaded", () => {
  // Ici, on récupère les éléments du DOM
  const addCardBtn = document.getElementById("addCardBtn");
  const searchInput = document.getElementById("searchInput");
  const sortByPriorityBtn = document.getElementById("sortByPriorityBtn");
  const cards = document.querySelectorAll('.card');

  // Éventuellement, on écoute les événements
  addCardBtn.addEventListener("click", () => {
    // ...
  });

  searchInput.addEventListener("input", () => {
    // ...
  });

  sortByPriorityBtn.addEventListener("click", () => {
    // ...
  });

  cards.forEach(card => {
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = '❌';
    deleteBtn.classList.add('delete-btn');

    deleteBtn.addEventListener('click', () => {
      card.remove();
    });

    card.append(deleteBtn);
  })
});
