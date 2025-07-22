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
    // ...
  });

  sortByPriorityBtn.addEventListener("click", () => {
    // ...
  });
});
