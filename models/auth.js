const sql  = require("../services/db");

const Auth = {}

Auth.getIdentificationByEmail = (email, result) => {
    sql.query(`SELECT * FROM users WHERE email = '${email}'`, (err, res) => {
        if (err) {
            console.log("error", err);
            result(err, null)
            return;
        }
        if (res.length) {
            console.log("found users: ", res[0]);
            result(null, res[0])
            return;
        }
        result({
            kind:"not_found"
        }, null)
    })
}

module.exports = Auth