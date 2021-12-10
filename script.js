let myLibrary = [];

const libraryView = document.querySelector('.library')

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
    }
}


function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
    displayLibrary();
}




function displayLibrary() {
    libraryView.querySelectorAll('*').forEach(element => element.remove());
    for (const book of myLibrary) {

        const bookContainer = document.createElement('div');
        const bookTitle = document.createElement('div');
        const bookAuthor = document.createElement('div');
        const bookPages = document.createElement('div');
        const bookRead = document.createElement('div');

        bookContainer.classList.add('book');
        bookTitle.classList.add('book__title');
        bookAuthor.classList.add('book__author');
        bookPages.classList.add('book__pages');
        bookRead.classList.add('book__read');

        bookTitle.textContent = book.title;
        bookAuthor.textContent = book.author;
        bookPages.textContent = book.pages;
        bookRead.textContent = book.read;


        bookContainer.appendChild(bookTitle);
        bookContainer.appendChild(bookAuthor);
        bookContainer.appendChild(bookPages);
        bookContainer.appendChild(bookRead);

        libraryView.appendChild(bookContainer);
    }
}

const formPopup = document.querySelector(".form-popup");
const body = document.querySelector('.container');
const form = document.querySelector('.form-container');
const addBtn = document.querySelector('.container__add-book-button');
const submitBtn = document.querySelector('.submit-btn');
const cancelBtn = document.querySelector('.cancel-btn');

addBtn.addEventListener('click', () => {
    formPopup.style.display = "block";
    body.classList.add('is-blurred')
});


cancelBtn.addEventListener('click', () => {
    formPopup.style.display = "none";
    body.classList.remove('is-blurred');
});

window.addEventListener('click', (event) => {
    if (event.target == formPopup) {
        formPopup.style.display = "none";
        body.classList.remove('is-blurred');
    }
})


function convertRead(readFieldValue) {
    return readFieldValue == "on" ? "read" : "not yet read";
}

const titleField = document.querySelector('.title-field');
const authorField = document.querySelector('.author-field');
const pagesField = document.querySelector('.pages-field');
const readField = document.querySelector('.read-field');

submitBtn.addEventListener('click', () => {
    if (titleField.value == titleField.defaultValue || authorField.value == authorField.defaultValue || pagesField.value == pagesField.defaultValue) {
        alert('Please Complete All Fields')
        return
    }

    addBookToLibrary(titleField.value, authorField.value, pagesField.value, convertRead(readField.value));

    clearForm();
    formPopup.style.display = "none";
    body.classList.remove('is-blurred');

});

function clearForm() {
    titleField.value = titleField.defaultValue;
    authorField.value = authorField.defaultValue;
    pagesField.value = pagesField.defaultValue;
    readField.value = readField.defaultValue;
}