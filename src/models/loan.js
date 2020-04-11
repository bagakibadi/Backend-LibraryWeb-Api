const connection = require('../configs/db');

module.exports = {
    getLoan: () =>{
        return new Promise((resolve, reject) => {
            connection.query("SELECT loan.*,book.title,book.author,user.fullname,user.email FROM loan INNER JOIN book ON loan.id_book = book.id INNER JOIN user ON loan.id_user = user.id", (err, result) => {
                if(!err) {
                resolve(result);
                } else {
                reject(new Error(err));
                }
            });
        });
    },
    insertLoan: (data) => {
        return new Promise((resolve, reject) => {
            connection.query("INSERT INTO `loan` SET ?", data, (err, result) => {
                if (!err) {
                resolve(result)
                } else {
                reject(new Error(err))
                }
            })
        })
    },
    updateLoan: (id_loan, data) => {
        return new Promise((resolve, reject) => {
            connection.query("UPDATE `loan` SET ? WHERE id_loan = ?", [data, id_loan], (err, result) => {
                if (!err) {
                resolve(result)
                } else {
                reject(new Error(err))
                }
            })
        })
    },
    deleteLoan: (id) => {
        return new Promise((resolve, reject) => {
            connection.query("DELETE FROM `loan` WHERE id_loan = ?", id, (err, result) => {
                if (!err) {
                resolve(result)
                } else {
                reject(new Error(err))
                }
            })
        })
      },
}