const myLibrary = [];
const titleEntry = document.getElementById("bookTitle");
const authorEntry = document.getElementById("bookAuthor");
const pageNumEntry = document.getElementById("bookPages");
const buttons = document.querySelectorAll("button");

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
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    addBookToLibrary(titleEntry.value, authorEntry.value, pageNumEntry.value);
  });
});
function displayBooks(books) {
  let container = document.getElementById("outputContainer");
  removeAllChildNodes(container);
  books.forEach((book) => {
    let newEl = document.createElement("div");
    newEl.className = "card";
    newEl.id = "card" + books.indexOf(book);
    newEl.textContent = book.title + ", " + book.author + ", " + book.pages;
    let newButton = document.createElement("button");
    newButton.id = "button" + books.indexOf(book);
    newButton.textContent = "X";
    container.appendChild(newEl);
    container.appendChild(newButton);
    // newButton.addEventListener("click", deleteBook(books.indexOf(book)));
  });
}

addBookToLibrary("Demo", "James", 310);
