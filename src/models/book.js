const connection = require('../configs/db');


module.exports = {
    getBooks: (search, descending, ascending) => {
        return new Promise((resolve,reject)=> {
            if(search){
                connection.query("SELECT * FROM `book` INNER JOIN category ON book.id_category = category.id_category WHERE title LIKE? OR description LIKE ? ORDER BY title ASC", [`%${search}%`,`%${search}%`], (err, result)=>{
                if(!err){
                    resolve(result)
                }else{
                    reject(new Error(err))
                }
                })
            } else if (descending) {
                connection.query("SELECT * FROM `book` INNER JOIN category ON book.id_category = category.id_category ORDER BY " + descending + ' DESC',  (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject (new Error(err))
                }
                })
            } else if (ascending) {
                connection.query("SELECT * FROM `book` INNER JOIN category ON book.id_category = category.id_category ORDER BY " + ascending+ " ASC", (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject (new Error(err))
                }
                })
            } else {
                connection.query("SELECT * FROM `book` INNER JOIN category ON book.id_category = category.id_category", (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
                })
            }
        })
    },
    getPage: (page, total)=> {
        const dataPage = 5;
        const totalPage = total / dataPage;
        const firstData = dataPage * page - dataPage;
        return new Promise((resolve,reject)=> {
          connection.query("SELECT * FROM `book` INNER JOIN category ON book.id_category = category.id_category ORDER BY book.id ASC LIMIT ?, ?",[firstData, dataPage], (err,result)=> {
            if(!err){
              const allPage = Math.ceil(totalPage);
                if(page <= allPage){
                  resolve([`Total Page: ${allPage}`, `Current Page: ${page}`,result])}
                } else {
                  reject(new Error(err))
                }
            })
        })
    },
    insertBook: (data) => {
        return new Promise((resolve, reject) => {
          connection.query("INSERT INTO `book` SET ?", data, (err, result) => {
            if (!err) {
              resolve(result)
            } else {
              reject(new Error(err))
            }
          })
        })
    },
    bookDetail: (id) => {
        return new Promise((resolve, reject) => {
          connection.query("SELECT * FROM `book` INNER JOIN category ON book.id_category = category.id_category WHERE id = ?", id, (err, result)=> {
            if (!err) {
              resolve(result)
            } else {
              reject(new Error(err))
            }
          })
        })
    },
    updateBook: (id_book, data) => {
        return new Promise((resolve, reject) => {
          connection.query("UPDATE book SET ? WHERE id = ?", [data, id_book], (err, result) => {
            if (!err) {
              resolve(result)
            } else {
              reject(new Error(err))
            }
          })
        })
    },
    deleteBook: (id) => {
        return new Promise((resolve, reject) => {
          connection.query("DELETE FROM book WHERE id = ?", id, (err, result) => {
            if (!err) {
              resolve(result)
            } else {
              reject(new Error(err))
            }
          })
        })
    },
}