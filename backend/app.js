// Imports
const express = require('express')
const app = express()
const port = 3000

var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyD8aLQ03upSGUP4'}).base('appmTuRZUmKLDDFEg');


app.get('/books', (req, res) => {
    let books = [];
    res.setHeader('Access-Control-Allow-Origin', '*');
    base('Books').select({
        maxRecords: 50,
        view: "Galerie – Tous les livres"
      })
      .eachPage(function page(records, next) {
          records.forEach(function(rec) {
              try {
                  books.push({
                    id: rec.id,
                    title: rec.get('Titre'),
                    authors : rec.get('Auteur(s)')
                  });
    
              } catch (err) {
                  console.error(err);
              }
          })
          try {
              next();
          } catch { return; }
    
      }, function (err) {
          if (err) {
              console.error(err);
              rej(err.statusCode);
              return;
          }
          res.json(books)
      });

})



//  Listen on port 3000
app.listen(port, () => console.info(`Listening on port ${port}`))