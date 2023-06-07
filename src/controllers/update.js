const updateModule = require("../models/authorModel")

const updateUser = async function (req, res) {
    try {
        const email = req.params.email
        const { fname, lname, password } = req.body;
        let updateDetails = await updateModule.findOneAndUpdate({ email: email }, { $set: { fname: fname, lname: lname, password: password } }, { new: true });
        console.log(updateDetails);
        if(!updateDetails) return res.send("error")
        res.status(200).send({ msg: "updated successfully", res: updateDetails });
    }
    catch (error) {
        res.status(500).send({ msg: error });
    }
}

module.exports.updateUser = updateUser;