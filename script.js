const ul = document.querySelector('ul');
const btnAddBook = document.querySelector('.addBook');
const table = document.querySelector('table');
const btnSubmit = document.querySelector('.btnSubmit');
const bookName = document.querySelector(".book-name");
const bookAuthor = document.querySelector(".book-author");
const bookPages = document.querySelector(".book-pages");
const modal = document.querySelector(".container-modal");
const closeModal = document.querySelector(".closeModal");

const read = false;
let countBooks = 0

const myLibrary = [
    /* {
        title: 'The Hobbit',
        author: 'J.R.R Tolkien',
        pages: 320
    },
    {
        title: 'Mistborn',
        author: 'Brandon Sanderson',
        pages: 672
    },
    {
        title: 'Godfather',
        author: 'Mario Puzo',
        pages: 433
    },
    {
        title: 'Stormlight Archive',
        author: 'Brandon Sanderson',
        pages: 1001
    } */

];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.newBook = addBookToLibrary(this.title, this.author, this.pages);
}

const addBookToLibrary = (title, author, pages) => {
    const newBook = {
        title: title,
        author: author,
        pages: pages
    }
    return newBook;
}

const updateLibrary = () => {
    myLibrary.forEach((book) => {
        console.log(book)
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const td4 = document.createElement("td");
        const td5 = document.createElement("td");
        var btnEl = document.createElement("button");
        var btnRead = document.createElement("button");
        td1.textContent = book.title;
        td2.textContent = book.author;
        td3.textContent = book.pages;
        td5.textContent = 'Not read yet';
        btnEl.textContent = `X`;
        btnEl.classList.add('deleteBtn');
        btnRead.textContent = `Read it?`;
        btnRead.classList.add('readBtn');
        table.appendChild(tr)
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        td4.appendChild(btnEl);
        td5.appendChild(btnRead);
    })
}

const rowDelete = (e) => {
    if (!e.target.classList.contains('deleteBtn')) {
        return;
    }

    const btn = e.target;
    btn.closest('tr').remove()
}

table.addEventListener('click', rowDelete);

btnAddBook.addEventListener('click', (e) => {
    modal.style.display = 'flex';
})

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const addingBook = new Book(bookName.value, bookAuthor.value, bookPages.value);
    bookName.value = '';
    bookAuthor.value = '';
    bookPages.value = '';
    newBookAdd = addingBook.newBook
    //console.log(newBookAdd)
    
    //console.log(myLibrary.length)
    myLibrary.push(addingBook.newBook)
    console.log(myLibrary[0].title)
    table.remove()
    updateLibrary()
    modal.style.display = 'none';
});

closeModal.addEventListener('click', (e) => {
    modal.style.display = 'none';
})


