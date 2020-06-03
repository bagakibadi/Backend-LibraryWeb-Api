const bookModel = require('../models/book');
const MiscHelper = require('../helpers/helpers');
const connection = require('../configs/db');
const redis = require('redis');
// const client = redis.createClient(process.env.PORT_REDIS);

module.exports = {
  getBooks: (req, res)=>{
    const search = req.query.search;
    const ascending = req.query.sortasc;
    const descending = req.query.sortdesc;
    const page = req.query.page;

    if (!page) {
      bookModel.getBooks(search, ascending, descending)
        .then((result)=>{
          // client.setex('getallbooks',3600 ,JSON.stringify(result))
          MiscHelper.response(res, result, 200, 'Bener');
        })
        .catch(err=> {
          MiscHelper.response(res, err, 202, 'Salah')
        });
    } else {
      connection.query("SELECT COUNT(*) as total FROM `book` ", (err, result)=> {
        const total = result[0].total;
        if(page > 0 ) {
            bookModel.getPage(page, total)
            .then((result)=> {
                MiscHelper.response(res,result, 200)
            })
            .catch((err)=> {
                MiscHelper.response(res, {}, 202,err)
            })
        }
      })
    }
  },
  bookDetail: (req, res) => {
    const idBook = req.params.id_book
    bookModel.bookDetail(idBook)
      .then((result) => {
        if(result[0].length === 0) {
          MiscHelper.response(res, err, 202,'Book Not Found!')
        }
        MiscHelper.response(res, result, 200, 'Succes');
      })
      .catch((err) => {
        MiscHelper.response(res, err, 202,'Book Not Found!')
      });
  },
  insertBook: (req, res)=>{
    const {title, description, author, status, id_category} = req.body;
    const data = {
      title,
      description,
      author,
      image:`http://localhost:8000/uploads/${req.file.filename}`,
      status,
      id_category,
      created_at: new Date()
    }
    bookModel.insertBook(data)
      .then((result) => {
        res.send(result);
      })
      .catch(err => console.log(err));
  },
  updateBook: (req, res) => {
    const idBook = req.params.id_book
    const { title, description, image, status, author, id_category } = req.body;
    const data = {
      title,
      description,
      author,
      image,
      status,
      id_category,
      update_at: new Date(),
    }
    bookModel.updateBook(idBook, data)
      .then((result) => {
        MiscHelper.response(res, result, 200);
      })
      .catch(err => {
        MiscHelper.response(res, {}, 400, 'Error!')
      });
  },
  deleteBook: (req, res) => {
    const idBook = req.params.id_book
    bookModel.deleteBook(idBook)
      .then((result) => {
        MiscHelper.response(res, result, 200)
      })
      .catch(err => {
        MiscHelper.response(res, {}, 400, 'Error!')
      });
  },
}