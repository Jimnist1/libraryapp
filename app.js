//Variables
const myLibrary = [];
const titleEntry = document.getElementById("title");
const authorEntry = document.getElementById("author");
const pageNumEntry = document.getElementById("pages");
const readStatus = document.getElementById("read");
const dialog = document.querySelector("dialog");
const bookForm = document.querySelector("form");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

//Creation and deletion
function addBookToLibrary(title, author, pages, read) {
  const bookEntry = new Book(title, author, pages, read);
  myLibrary.push(bookEntry);
  displayBooks(myLibrary);
  console.log(myLibrary);
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

//Events
function toggleRead(readID) {
  myLibrary[readID]["read"] = !myLibrary[readID].read;
}
document.body.addEventListener("click", function (event) {
  if (event.target.id == "openForm") {
    dialog.showModal();
  } else if (event.target.id == "cancelForm") {
    event.preventDefault();
    dialog.close();
    bookForm.reset();
  } else if (event.target.className == "bookRemoveBtn") {
    let idRemove = findPosition(event.target.id);
    deleteBook(idRemove);
  } else if (event.target.id == "buttonRead" || "buttonUnread") {
    let readID = findPosition(event.target.id);
    toggleRead(readID);
    console.log(myLibrary);
    displayBooks(myLibrary);
  }
});
submitBook = (e) => {
  addBookToLibrary(
    titleEntry.value,
    authorEntry.value,
    pageNumEntry.value,
    readStatus.checked
  );
  e.preventDefault();
  dialog.close();
  bookForm.reset();
};
bookForm.onsubmit = submitBook;

//Display
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
    bookTitle.textContent = '"' + book.title + '"';
    bookTitle.className = "cardText";
    bookText.appendChild(bookTitle);
    let bookAuthor = document.createElement("div");
    bookAuthor.textContent = book.author;
    bookAuthor.className = "cardText";
    bookText.appendChild(bookAuthor);
    let bookPages = document.createElement("div");
    bookPages.textContent = book.pages + " pages";
    bookPages.className = "cardText";
    bookText.appendChild(bookPages);
    let buttonRemove = document.createElement("button");
    buttonRemove.className = "bookRemoveBtn";
    buttonRemove.id = "button" + bookIndex;
    buttonRemove.textContent = "Remove Book";
    newContainer.appendChild(buttonRemove);
    let readButton = document.createElement("button");
    newContainer.appendChild(readButton);
    if (book.read == true) {
      readButton.className = "readButton";
      readButton.id = "buttonRead" + bookIndex;
      readButton.textContent = "Read";
    } else if (book.read == false) {
      readButton.className = "unreadButton";
      readButton.id = "buttonUnread" + bookIndex;
      readButton.textContent = "Unread";
    }
  });
}
