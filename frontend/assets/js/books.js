const getBooks = async() => {
    const response = await fetch('http://localhost:3000/books');
    const dataB = await response.json();
    
    return dataB;
}
// import { getBooks } from './query.js'

let booksContainer = document.querySelector('.books');

const main = async () => {
    let dataBooks = Array.from(await getBooks());

    // console.log(dataBooks);

    for (const book of dataBooks) {
        booksContainer.innerHTML += `
        <article class="book">
            <div class="poster"><img src="${book.poster[0].url}"></div>
            <span><strong>${book.title}</strong></span>
            <div class="topic flex">${ book.topic }</div>
        </article>
        `
    }
}

main();