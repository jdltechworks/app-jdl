/**
 * Page.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	_id: {
  		type: 'int',
  	},
  	title: {
  		type: 'string',
  		required: true
  	},
  	content: {
  		type: 'string',
  		required: true
  	},
  	image: {
  		type: 'json'
  	},
  	published: {
  		type: 'boolean'
  	},
  	slug: {
  		type: 'string'
  	},

  	//User reference
  	owner: {
  		model: 'user'
  	}
  }
};