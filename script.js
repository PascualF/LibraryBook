const ul = document.querySelector('ul');
const btnAddBook = document.querySelector('.addBook');
const table = document.querySelector('table');

const myLibrary = [
    {
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
    }

];

const Book = () => {

}

const addBookToLibrary = () => {

}

myLibrary.forEach((book) => {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    var btnEl = document.createElement("button")
    td1.textContent = book.title;
    td2.textContent = book.author;
    td3.textContent = book.pages;
    btnEl.textContent = `X`;
    btnEl.classList.add('deleteBtn')
    table.appendChild(tr)
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    td4.appendChild(btnEl);
    
   
})

const rowDelete = (e) => {
    if (!e.target.classList.contains('deleteBtn')) {
        return;
    }

    const btn = e.target;
    btn.closest('tr').remove()
}

table.addEventListener('click', rowDelete)

btnAddBook.addEventListener('click', (e) => {
    e.preventDefault()
})