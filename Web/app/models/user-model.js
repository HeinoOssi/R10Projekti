/* Should represent the temperature table
in mysql database*/

module.exports = (sequelize, Sequelize)=>{
    const User = sequelize.define("user", {
        idProjekti: {type: Sequelize.INTEGER, primaryKey: true},
        temperature: {type: Sequelize.STRING},
        date: {type: Sequelize.DATE}
    });
    return User;
};
