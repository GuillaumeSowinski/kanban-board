console.log("Kanban JS loaded...");

// Exemple éventuel de structure
window.addEventListener("DOMContentLoaded", () => {
	// Ici, on récupère les éléments du DOM
	const addCardBtn = document.getElementById("addCardBtn");
	const searchInput = document.getElementById("searchInput");
	const sortByPriorityBtn = document.getElementById("sortByPriorityBtn");


  // Éventuellement, on écoute les événements
  addCardBtn.addEventListener("click", () => {
    const title = prompt("Veuillez donner un titre");
    const content = prompt("Donnez le contenu de la carte");

  if (!title || !content) {
    alert("Titre et contenu sont obligatoires.");
    return;
  }

  let priority;
  while (true) {
    priority = prompt("Donnez une priorité : 1 (haute), 2 (moyenne), 3 (basse)");
    if (["1", "2", "3"].includes(priority) || priority === null || priority.trim() === "") break;
    alert("Veuillez entrer uniquement 1, 2 ou 3 !");
  }

  let colorPriority = ""
  switch (priority) {
    case "1": colorPriority = "high"
      break;
    case "2": colorPriority = "medium"
      break
    case "3": colorPriority = "low"
    break
    default:
      break;
  }

  const newCard = document.createElement("div");
  newCard.classList.add("card");
  newCard.setAttribute("data-priority", colorPriority)
  newCard.innerHTML = `
    <h3>${title}</h3>
    <p>${content}</p>
  `;

  const todoColumn = document.querySelector('.column[data-status="todo"]');
  todoColumn.appendChild(newCard);
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

