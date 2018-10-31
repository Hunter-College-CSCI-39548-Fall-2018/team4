module.exports = function(sequelize, Sequelize) {
 
    var User = sequelize.define('Users', {
 
        userID: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
        firstname: { type: Sequelize.STRING,notEmpty: true},
		lastname: { type: Sequelize.STRING,notEmpty: true},
		username: {type:Sequelize.TEXT},
		email: { type:Sequelize.STRING, validate: {isEmail:true} },
        password : {type: Sequelize.STRING,allowNull: false }, 
        phonenumber: {type: Sequelize.INTEGER}
        
 
        

        
 
 
    });

    
 
    return User;
 
}