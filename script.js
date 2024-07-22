const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

// Function to load notes from local storage and render them
function loadNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes") || "";
}

loadNotes();

// Function to save notes to local storage
function saveNotes() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

// Event listener for the create button to add new note
createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "./images/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img);
});

// Event listener for the notes container to handle delete and save actions
notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    saveNotes();
  } else if (e.target.tagName === "P") {
    const notes = document.querySelectorAll(".input-box");
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        saveNotes();
      };
    });
  }
});

// Event listener to handle "Enter" key to insert a line break
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
