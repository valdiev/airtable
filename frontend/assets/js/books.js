let booksContainer = document.querySelector('.books');
const searchBar = document.querySelector("#search");
let dataBooks = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredBooks = dataBooks.filter((book) => {
        return (
            book.title.toLowerCase().includes(searchString)
        );
    });
    displayBooks(filteredBooks);
});

const getBooks = async() => {
    try {
        const res = await fetch('http://localhost:3000/books');
        dataBooks = await res.json();
        displayBooks(dataBooks);
    } catch (err) {
        console.error(err)
    }
};

const displayBooks = (books) => {
    const htmlString = books
        .map((book) => {
            return `
                <article class="book">
                    <div class="poster"><img src="${book.poster[0].url}"></div>
                    <span><strong>${book.title}</strong></span>
                    <div class="topic flex">${ book.topic }</div>
                </article>
            `;
        })
        .join('');
    booksContainer.innerHTML = htmlString;
};
getBooks();