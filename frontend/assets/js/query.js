let books = document.querySelector('.books');

const getBooks = async() => {
    const response = await fetch('http://localhost:3000/books');
    const dataB = await response.json();
    
    return dataB;
}

const main = async () => {
    let dataBooks = await getBooks();

    console.log(dataBooks);

    for (const book in dataBooks) {
        console.log("test");
    }
}

main();

// for (const book of dataB) {
//     section.innerHTML += `
//     <div class="book">
//         <h2>${book.id}</h2>
//     </div>
//     `
// }
// const main = async () => {
//     let dataB = await getBooks();
// }