console.log("Kanban JS loaded...");

// Exemple éventuel de structure
window.addEventListener("DOMContentLoaded", () => {
	// Ici, on récupère les éléments du DOM
	const addCardBtn = document.getElementById("addCardBtn");
	const searchInput = document.getElementById("searchInput");
	const sortByPriorityBtn = document.getElementById("sortByPriorityBtn");
	const card = document.getElementsByClassName("card");
  const column = document.getElementByClassName("column");
  card.draggable = true;


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

card.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData('text/plain', card.id);
  });

column.addEventListener("dragover", (event) => {
    event.preventDefault();
  });

column.addEventListener("drop", (event) => {
    event.preventDefault();
    const draggingCardId = event.dataTransfer.getData("text/plain");
    const draggingCard = document.getElementById(draggingCardId);
    column.appendChild(draggingCard);
  });

});