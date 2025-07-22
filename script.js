console.log("Kanban JS loaded...");

// Exemple éventuel de structure
window.addEventListener("DOMContentLoaded", () => {
	// Ici, on récupère les éléments du DOM
	const addCardBtn = document.getElementById("addCardBtn");
	const searchInput = document.getElementById("searchInput");
	const sortByPriorityBtn = document.getElementById("sortByPriorityBtn");
	const cards = document.querySelectorAll(".card");
  const columns = document.querySelectorAll(".column");


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
        card.draggable = true;
        card.addEventListener("dragstart", (event) => {
            event.dataTransfer.setData('text/plain',  card.dataset.id);
            card.classList.add('is-dragging');
        });


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

