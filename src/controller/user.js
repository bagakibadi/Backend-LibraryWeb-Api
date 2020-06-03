require('dotenv').config();
const { genSaltSync, compareSync, hashSync} = require('bcrypt');
const userModel = require('../models/user');
const MiscHelper = require('../helpers/helpers');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const connection = require('../configs/db');

module.exports = {
    userDetail: (req, res) => {
        const idUser = req.params.id_user
        userModel.userDetail(idUser)
            .then((result) => {
                if (!result[0].id) {
                    MiscHelper.response(res, err, 202, 'User Not Found');
                }else {
                    MiscHelper.response(res, result, 200, 'Success')
                }
            })
            .catch((err) => {
                MiscHelper.response(res, err, 202, 'User Not Found');
            });
    },
    userGet: (req, res) => {
        userModel.userGet()
            .then((result) => {
                MiscHelper.response(res, result, 200 );
            })
            .catch(err => {
                MiscHelper.response(res, result, 400, err);
            });
    },
    register: (req, res) => {
        const {email, fullname, password} = req.body
        const data = {
            email,
            fullname,
            password,
            photo: 'https://www.classicindiascale.com/wp-content/uploads/2018/06/header-profile-default.png',
            status: 0,
        }
        const salt = genSaltSync(10)
        data.password = hashSync(data.password, salt)
        userModel.register(data)
            .then((result) => {
                console.log(result)
                result.email = data.email
                const newresult = result;
                const token = jwt.sign({id: result.insertId ,email: result.email}, process.env.SECRET_KEY);
                const extraxt = jwt.verify(token, process.env.SECRET_KEY);
                console.log(extraxt);
                newresult.token = token
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'ivan.putra.13.13.13@gmail.com',
                        pass: 'cr0nald07',
                    }
                });
                const mailFrom = {
                    from: 'ivan.putra.13.13.13@gmail.com',
                    to: extraxt.email,
                    subject: 'Activation Email',
                    html: '<a href="http://localhost:8080/#/auth?activated=' + token+'">Click Here</a>',
                };
                transporter.sendMail(mailFrom, (err, info) => {
                    if (err) {
                        console.log(err)
                        res.send('Email Activation Failed!')
                    } else {
                        const result = {
                            token: extraxt,
                            status: 'success'
                        };
                        MiscHelper.response(res,result,200)
                    }
                })
                MiscHelper.response(res, newresult, 200, 'Register Succes Please Check Your Email')
            })
            .catch(err => {
                MiscHelper.response(res, err, 201, 'Register Failed!')
            })
    },
    login: (req, res) => {
        const {email, password} = req.body
        const data = {
            email,
            password
        }
        console.log(data.email)
        userModel.login(data.email)
            .then((result) => {
                const token = jwt.sign({id: result[0].id, email: result[0].email}, process.env.SECRET_KEY);
                const checkPass = compareSync(data.password, result[0].password)
                console.log(checkPass)
                if (checkPass === false) {
                    MiscHelper.response(res, null, 202, 'Invalid Password!');
                } else {
                    return res.json({
                    success: 1,
                    message: 'Login Success',
                    result: result[0],
                    token: token,
                    })
                }
            })
            .catch(err => {
                MiscHelper.response(res, err, 202, 'Invalid Email');
            })
    },
    updateUser: (req, res) => {
        const idUser = req.params.id_user
        const {fullname, email, password, phone} = req.body
        const data = {
            email,
            fullname,
            password,
            phone
        }
        const salt = genSaltSync(10)
        data.password = hashSync(data.password, salt)
        userModel.updateUser(idUser, data)
            .then((result) => {
                MiscHelper.response(res, result, 200)
            })
            .catch(err => {
                MiscHelper.response(res, result, 400)
            })
    },
    deleteUser: (req, res) => {
        const idUser = req.params.id_user
        userModel.deleteUser(idUser)
            .then((result) => {
                if(result.length <= 0) {
                    MiscHelper.response(res, {}, 400, 'User Not Found')
                } else {
                    userModel.deleteUser(idUser)
                    .then((result) => {
                        MiscHelper.response(res, result, 200, 'Deleteing Success!')
                    })
                }   
            })
            .catch(err => {
                MiscHelper.response(res, result, 400, 'User Not Found');
            })
    },
    authentication: (req, res) => {
        const reqtoken = req.query.activated;
        const verify = jwt.verify(reqtoken, process.env.SECRET_KEY);
        // console.log(verify);
        const status = {
            status: 1,
        }
        connection.query(`UPDATE user SET status = ${status.status} WHERE id = ${verify.id}`, (err, result) => {
            if(err){
                MiscHelper.response(res, err, 202, 'Failed Activation');
            }
            MiscHelper.response(res, result, 200, 'Success Activation');
        })
    },
}