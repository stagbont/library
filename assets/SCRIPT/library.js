// Open modal
const addButton = document.querySelector('.add__button'),
      modalContainer = document.querySelector('.modal-container');

addButton.addEventListener('click', () => {
    modalContainer.classList.add('show-modal');
});

// Close modal


let myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}

function addBookToLibrary() {

}