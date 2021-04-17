module.exports = {
    HOST: 'localhost',
    USER: 'ruojasol_shared',
    PASSWORD: 'projekti2021',
    DB: 'ruojasol_projekti',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000

    }
}