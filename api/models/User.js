/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
module.exports = {
  attributes: {
    username: {
      type: 'string',
      required: true,
      unique: true,
    },
    password: {
      type: 'string'
    },
    email: {
      type: 'string',
      required: true,
      unique: true
    },
    photo: {
      type: 'string',
      defaultsTo: '',
      url: true
    },
    socialProfiles: {
      type: 'object',
      defaultsTo: {}
    },

    toJSON: function () {
      var obj = this.toObject();
      delete obj.password;
      delete obj.socialProfiles;
      return obj;
    }
  },
  beforeUpdate: function (values, next) {
    CipherService.hashPassword(values);
    next();
  },
  beforeCreate: function (values, next) {
    CipherService.hashPassword(values);
    next();
  }
};

