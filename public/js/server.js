var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyD8aLQ03upSGUP4'}).base('appmTuRZUmKLDDFEg');

base('Books').select({

    // Display first book
    maxRecords: 1,
    view: "Galerie – Tous les livres"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    let books = document.querySelector('.books__container');
    records.forEach(function(record) {
        books.innerHTML += `
        <div class="book">
            <img src="${url + film.poster_path}" alt="${film.title}">
            <h2>${record.get('Titre')}</h2>
        </div>
        `
        console.log('Retrieved', record.get('Titre'));
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});