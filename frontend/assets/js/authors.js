let authorsContainer = document.querySelector('.authors');
const searchBar = document.querySelector("#search");
let dataAuthors = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredAuthors = dataAuthors.filter((author) => {
        return (
            author.name.toLowerCase().includes(searchString)
        );
    });
    displayAuthors(filteredAuthors);
});

const getAuthors = async () => {
    try {
        const res = await fetch('http://localhost:3000/authors');
        dataAuthors = await res.json();
        displayAuthors(dataAuthors);
    } catch (err) {
        console.error(err);
    }
};

const displayAuthors = (authors) => {
    const htmlString = authors
        .map((author) => {
            return `
            <article class="author">
                <span><strong>${author.name}</strong></span>
            </article>
            `;
        })
        .join('');
    authorsContainer.innerHTML = htmlString;
};
getAuthors();