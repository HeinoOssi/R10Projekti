module.exports = {
    HOST: 'eu-cdbr-west-01.cleardb.com/heroku_85c1858370fbe2a?reconnect=true',
    USER: 'b6671375cdd4fd',
    PASSWORD: 'aea732e4',
    DB: 'heroku_85c1858370fbe2a',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000

    }
}