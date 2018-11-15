module.exports = function(sequelize, Sequelize) {
 
    var User = sequelize.define('Users', {
 
        id: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
        firstname: { type: Sequelize.STRING,notEmpty: true},
		lastname: { type: Sequelize.STRING,notEmpty: true},
		username: {type:Sequelize.TEXT},
		email: { type:Sequelize.STRING, validate: {isEmail:true} },
        password : {type: Sequelize.STRING,allowNull: false }, 
        phonenumber: {type: Sequelize.INTEGER}
        
 
        

        
 
 
    });

    var Metrocard = sequelize.define('Metrocard', {

        metrocardID: {autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
        metrocardType: {type: Sequelize.TEXT, notEmpty: true},
        dateOfPurchase: {type: Sequelize.DATEONLY, notEmpty: true},
        totalAmount: {type: Sequelize.DOUBLE, allowNull: true},
        expiration: {type: Sequelize.DATEONLY, allowNull: true}


    });

    User.hasMany(Metrocard, {as: 'metrocardID'});
 
    return User, Metrocard;
 
}