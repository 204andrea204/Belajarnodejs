// const array = ["Andre", "Mubarok", "Hhahaha"]
// console.log(array[0]) // Andre
// console.log(array[1]) // Mubarok
// console.log(array[2]) // Hhahahaha
// console.log("==========================");
// const object = {
//   "nama": "Andre",
//   "kelas": "182e2"
// }
// console.log(object.nama);
// console.log(object.kelas);
// console.log("==========================");
// const books = [
//   {
//     "id": "01",
//     "name": "Novel Apakek"
//   },
//   {
//     "id": "02",
//     "name": "Buku Bahasa Indonesia"
//   },
//   {
//     "id": "03",
//     "name": "Buku Bahasa Inggris"
//   },
//   {
//     "id": "04",
//     "name": "Buku Bahasa Alien"
//   },
// ]

// for (let i = 0; i < books.length; i++) {
//   console.log("Buku kesukaan ku yang ke-:" + i);
//   console.log(books[i].name);
// }


var jwt = require('jsonwebtoken')
var secret = "password123"
var token = jwt.sign({
  name:"andre",
  phone:"0895111"
}, secret,{
  expiresIn: '1h'
})

console.log(token)