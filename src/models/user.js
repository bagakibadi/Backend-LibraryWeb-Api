const connection = require('../configs/db');

module.exports = {
    userDetail: (idUser) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM `user` WHERE id = ?", idUser, (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    },
    userGet: () => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM user", (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    },
    register: (data) => {
        return new Promise((resolve, reject) => {
            connection.query("INSERT INTO user SET ?", data, (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    },
    login: (email) => {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM user WHERE email = ?",email,  (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    },
    updateUser: (idUser, data) => {
        return new Promise((resolve, reject) => {
            connection.query("UPDATE user SET ? WHERE id = ?", [data, idUser], (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    },
    deleteUser: (id_user) => {
        return new Promise((resolve, reject) => {
            connection.query("DELETE FROM `user` WHERE id = ?", id_user, (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            })
        })
    }
}