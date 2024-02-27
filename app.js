const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(title, author, pages) {
  const bookEntry = new Book(title, author, pages);
  console.log(bookEntry);
  myLibrary.push(bookEntry);
  console.log(myLibrary);
  console.log(myLibrary.length);
}
const titleEntry = document.getElementById("bookTitle");
const authorEntry = document.getElementById("bookAuthor");
const pageNumEntry = document.getElementById("bookPages");
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    addBookToLibrary(titleEntry.value, authorEntry.value, pageNumEntry.value);
  });
});
