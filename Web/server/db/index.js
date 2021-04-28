const mysql = require('mysql');

const conn = mysql.createPool({
    connectionLimit: 10,
    password: "root",
    user: "root",
    database: "projekti2021",
    host: "localhost",
    port: "3306"

});

let projektiDB ={};

projektiDB.all = () => {
    return new Promise((resolve, reject)=> {
        conn.query('SELECT * FROM projekti', (err, results)=>{
            if (err) {
                return reject(err);
            }
            return resolve(results);
        })
    })
}

projektiDB.one = (id) => {
    
    return new Promise((resolve, reject)=> {
        conn.query('SELECT * FROM projekti WHERE id = ?', id, (err, results)=>{
            if (err) {
                return reject(err);
            }
            return resolve(results);
        })
    })
}

projektiDB.post = async (req) => {
    return new Promise((resolve, reject) =>{
        conn.query('INSERT INTO projekti(temperature, date) VALUES(?, ?)', [req.temperature, req.date], (err, results) =>{
            if (err){
                return reject(err);
            }    
            return resolve(results);
        });
    })
}

module.exports = projektiDB;