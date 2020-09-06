const knex = require('knex');
const pws = require('p4ssw0rd');

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'zivuch',
    database : 'shopping-list'
  }
});

const createUser = ({ username,email, password }) => {
  return db('users')
    .returning('*')
    .insert({username: username,
             email: email.toLowerCase(),
             password: pws.hash(password,10),
             createdAt: new Date(),
             updatedAt: new Date()});
}

const findUser = (username) => {
  return db.select('*')
    .from('users')
    .where({username})
}


module.exports = {
  findUser,
  createUser
};
