const sql = require("../services/db");

const Books = function(book){
    this.title = book.title
    this.description = book.description
    this.cover_url = book.cover_url
    this.book_url = book.book_url
}

Books.create = (book, result) => {
    sql.query("INSERT INTO books SET ?", book, (err, res) => {
        if (err) {
            console.log("error");
            result(err, null)
            return;
        }
        console.log("created books: ", book)
        result(null, book)
    })
}

Books.findById = (id, result) => {
    sql.query(`SELECT * FROM books WHERE id = ${id}`, (err, res) =>{
        if(err){
            console.log("error", err);
            result(err, null)
            return;
        }
        if(res.length) {
            console.log("found books: ", res[0]);
            result(null, res[0])
            return;
        }
        result({
            kind: "not_found"
        }, null)
    })
}

Books.getAll = (title, result) => {
    var query= "SELECT * FROM books "
    if (title) {
        query += ` WHERE title LIKE '%${title}%'`
    }
    sql.query(query, (err,res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null)
            return;
        }
        console.log("books: ", res);
        result(null, res)
    })
}

Books.update = (id, book, result) => {
    sql.query(`UPDATE books SET title = ?, description = ?, cover_url = ?, book_url = ? WHERE id=${id}`, 
    [book.title, book.description, book.cover_url, book.book_url], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null)
            return;
        }
        if (res.affectedRows === 0) {
            result({
                kind: "not_found"
            }, null)
            return;
        }
            console.log("books: ", res);
            result(null, {
                id: id,
                ...book
            })
    })
}

Books.delete = (id, result) => {
    sql.query(`DELETE FROM books WHERE id=${id}`,(err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null)
            return;
        }
        if (res.affectedRows === 0) {
            result({
                kind: "not_found"
            }, null)
            return;
        }
            console.log("books: ", res);
            result(null, {
                id: id
            })
    })
}

module.exports = Books