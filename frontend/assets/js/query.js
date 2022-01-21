const getBooks = async() => {
    const response = await fetch('http://localhost:3000/books');
    const dataB = await response.json();
    
    return dataB;
}

const getAuthors = async() => {
    const response = await fetch('http://localhost:3000/authors');
    const dataA = await response.json();
    displayAuthors(dataA)
    return dataA;
}

// export { getBooks, getAuthors }