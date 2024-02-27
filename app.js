const myLibrary = [];



function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}
const titleEntry = "Demo Book";
const authorEntry = "Myself";
const pageNumEntry = 256;

function addBookToLibrary(title, author, pages) {
  const bookEntry = new Book(title, author, pages);
  console.log(bookEntry);
  myLibrary.push(bookEntry);
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    addBookToLibrary(titleEntry, authorEntry, pageNumEntry);
  });});