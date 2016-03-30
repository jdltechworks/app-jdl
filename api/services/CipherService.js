var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var salt = bcrypt.genSaltSync(10);
 
module.exports = {
  secret: sails.config.jwtSettings.secret,
  issuer: sails.config.jwtSettings.issuer,
  audience: sails.config.jwtSettings.audience,
 
  /**
   * Hash the password field of the passed user.
   */
  hashPassword: function (user) {
    if (user.password) {
      user.password = bcrypt.hashSync(user.password, salt);
    }
  },
 
  /**
   * Compare user password hash with unhashed password
   * @returns boolean indicating a match
   */
  comparePassword: function(password, user){
    return bcrypt.compareSync(password, user.password);
  },
 
  /**
   * Create a token based on the passed user
   * @param user
   */
  createToken: function(user)
  {
    return jwt.sign({
        user: user.toJSON()
      },
      sails.config.jwtSettings.secret,
      {
        algorithm: sails.config.jwtSettings.algorithm,
        expiresInMinutes: sails.config.jwtSettings.expiresInMinutes,
        issuer: sails.config.jwtSettings.issuer,
        audience: sails.config.jwtSettings.audience
      }
    );
  }
};