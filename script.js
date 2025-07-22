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


  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
        card.draggable = true;
        card.addEventListener("dragstart", (event) => {
            event.dataTransfer.setData('text/plain',  card.dataset.id);
            card.classList.add('is-dragging');
        });


const columns = document.querySelectorAll(".column");
columns.forEach(column => {
        column.addEventListener("dragover", (event) => {
            event.preventDefault();
            column.classList.add('drag-over');
        });

        column.addEventListener("dragleave", () => {
            column.classList.remove('drag-over');
        });

        column.addEventListener("drop", (event) => {
            event.preventDefault();
            column.classList.remove('drag-over');
            const draggingCardId = event.dataTransfer.getData("text/plain");
            const draggingCard = document.querySelector(`[data-id="${draggingCardId}"]`);
            if (draggingCard) column.appendChild(draggingCard);
        });
    });
});

});

