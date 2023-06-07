const authorModel = require("../models/authorModel");
// const jwt = require('jsonwebtoken')
// const { isValidName, isValidEmail, isValidPassword, isValid } = require('src/middleware/validation.js')


const createAuthor = async function (req, res) {
    try {
        let { fname, lname, email, password } = req.body;

        if (Object.keys(req.body).length < 1) return res.status(400).send({ msg: "Insert data : BAD REQUEST" })

        // if (!isValid(fname)) {
        //     return res.status(400).send({ msg: "Enter your First Name" })
        // }

        // if (!isValidName(fname)) {
        //     return res.status(400).send({ msg: "fname only takes alphabates" })
        // }

        // if (!isValid(lname)) {
        //     return res.status(400).send({ msg: "Enter your last name" })
        // }
        // if (!isValidName(lname)) {
        //     return res.status(400).send({ msg: "lname only takes alphabates" })
        // }

        // if (!isValid(email)) {
        //     return res.status(400).send({ msg: "Enter your Email Id" })
        // }

        // if (!isValidEmail(email)) {
        //     return res.status(400).send({ msg: "Please Enter Valid Email" })

        // }

        // let checkEmail = await userModel.findOne({ email: email })
        // console.log(checkEmail)
        // if (checkEmail) return res.status(400).send({ msg: "Email already registered" })

        // if (!isValid(password)) {
        //     return res.status(400).send({ msg: "Minimum eight, atleast one letter and one number" })
        // }

        let savedData = await authorModel.create({
            fname,lname,email,password
        });
        return res.status(200).send({ status: true, data: savedData });


    }

    catch (err) {
        res.status(500).send({ msg: err.message })
    }
};

module.exports.createAuthor = createAuthor;