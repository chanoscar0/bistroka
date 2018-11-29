const db = require('../postgresql.js');

module.exports = {
  createUser(req, res, next) {
		db.one(`INSERT INTO customer(first_name, last_name) VALUES ($1, $2) RETURNING *`, ['asdf','zxc'])
        .then(data => {
					console.log(data,'dt')
          res.locals.data = data;
          return next();
        })
        .catch(err => {
          console.log('ERROR: ', err)
          return res.status(404).send({ err: err });
        });
  },
  findUser(req, res, next) {
		db.any("SELECT user_id, username, password, role, firstname, lastname FROM users WHERE username = $1 AND password = $2", [req.body.username, req.body.password])
    .then((data) => {
      if(data.length === 0) {
        return res.status(300).send();
      } else{
        res.locals.data = data;
        return next();
      }
    })
    .catch((err) => {
      console.log('ERROR: ', err)
      next(err);
    })
	}
	
};
