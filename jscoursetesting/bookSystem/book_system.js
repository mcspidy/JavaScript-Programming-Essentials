let books = [];
hideButton();

function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        books.push(book);
        showbooks();
        hideButton();
        if (books.length >= 1) {
            alert('Book added successfully.');
        }
        clearInputs();
    } else {
        alert('Please fill in all fields correctly.');
    }
}

function showbooks() {
    const booksDiv = books.map((book, index) => `<h1>book Number: ${index + 1}</h1>
        <p><strong>Book Name: </strong>${book.name}</p>
        <p><strong>Author Name:</strong> ${book.authorName}</p>
        <p><strong>Book Description:</strong> ${book.bookDescription}</p>
        <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>`
    );
    document.getElementById('books').innerHTML = booksDiv.join('');
}

function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}

function hideButton() {
    if (books.length === 0) {
        document.getElementById("Delete Book").style.display = "none";
    } else {
        document.getElementById("Delete Book").style.display = "block";
    }
}

function deleteBook() {
    const bookIndex = parseInt(prompt('Enter the book number you want to delete:'));
    if (bookIndex && !isNaN(bookIndex) && bookIndex <= books.length) {
        books.splice(bookIndex - 1, 1);
        showbooks();
        hideButton();
    } else {
        alert('Please enter a valid book number.');
    }
}