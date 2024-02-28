const myLibrary = [];
const titleEntry = document.getElementById("title");
const authorEntry = document.getElementById("author");
const pageNumEntry = document.getElementById("pages");
const dialog = document.querySelector("dialog");

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(title, author, pages) {
  const bookEntry = new Book(title, author, pages);
  console.log(bookEntry);
  myLibrary.push(bookEntry);
  displayBooks(myLibrary);
}
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
function deleteBook(i) {
  myLibrary.splice(i, 1);
  displayBooks(myLibrary);
}
function findPosition(buttonID) {
  return buttonID.slice(-1);
}
document.body.addEventListener("click", function (event) {
  if (event.target.id == "openForm") {
    dialog.showModal();
  } else if (event.target.id == "createNewBook") {
    addBookToLibrary(titleEntry.value, authorEntry.value, pageNumEntry.value);
    event.preventDefault();
    dialog.close();
  } else if (event.target.id == "cancelForm") {
    event.preventDefault();
    dialog.close();
  } else if (event.target.className == "btnGen") {
    idRemove = findPosition(event.target.id);
    deleteBook(idRemove);
  }
});
function displayBooks(books) {
  let container = document.getElementById("outputContainer");
  removeAllChildNodes(container);
  books.forEach((book) => {
    let newContainer = document.createElement("div");
    let bookIndex = books.indexOf(book);
    newContainer.className = "card";
    newContainer.id = "card" + bookIndex;
    container.appendChild(newContainer);
    let bookText = document.createElement("div");
    bookText.className = "bookTextContainer";
    newContainer.appendChild(bookText);
    let bookTitle = document.createElement("div");
    bookTitle.textContent = "Title: " + book.title;
    bookText.appendChild(bookTitle);
    let bookAuthor = document.createElement("div");
    bookAuthor.textContent = "Author: " + book.author;
    bookText.appendChild(bookAuthor);
    let bookPages = document.createElement("div");
    bookPages.textContent = "Page count: " + book.pages;
    bookText.appendChild(bookPages);
    let newButton = document.createElement("button");
    newButton.className = "btnGen";
    newButton.id = "button" + bookIndex;
    newButton.textContent = "Remove Book";
    newContainer.appendChild(newButton);
  });
}
