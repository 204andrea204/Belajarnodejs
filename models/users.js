const sql = require("../services/db");

const Users = function(user){
    this.name = user.name
    this.email = user.email
    this.phone = user.phone
    this.address = user.address
    this.password = user.password
}

Users.create = (user, result) => {
    sql.query("INSERT INTO users SET ?", user, (err, res) => {
        if (err) {
            console.log("error");
            result(err, null)
            return;
        }
        console.log("Created Users: ", user)
        result(null, user)
    })
}


Users.findById = (id, result) => {
    sql.query(`SELECT * FROM users WHERE id = ${id}`, (err, res) =>{
        if(err){
            console.log("error", err);
            result(err, null)
            return;
        }
        if(res.length) {
            console.log("found users: ", res[0]);
            result(null, res[0])
            return;
        }
        result({
            kind: "not_found"
        }, null)
    })
}

Users.getAll = (name, result) => {
    var query= "SELECT * FROM users "
    if (name) {
        query += ` WHERE name LIKE '%${name}%'`
    }
    sql.query(query, (err,res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null)
            return;
        }
        console.log("users: ", res);
        result(null, res)
    })
}

Users.update = (id, user, result) => {
    let query = `UPDATE users SET name = ?, email = ?, phone = ?, address = ?`
    let bodyArr = [user.name, user.email, user.phone, user.address]
    if (user.password) {
        query += ', password = ?'
        bodyArr.push(user.password)
    }
    query += `WHERE id=${id}`
    sql.query(query, 
    bodyArr, (err, res) => {
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
            console.log("users: ", res);
            result(null, {
                id: id,
                ...user
            })
    })
}

Users.delete = (id, result) => {
    sql.query(`DELETE FROM users WHERE id=${id}`,(err, res) => {
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
            console.log("users: ", res);
            result(null, {
                id: id
            })
    })
}

module.exports = Users