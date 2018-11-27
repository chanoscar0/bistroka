const db = require('../postgresql.js');

module.exports = {
  getAppetizers(req, res, next) {
		db.any(`select * from product where category = 'Appetizers';`)
		.then((info, err) => {
            if(err) return res.statusCode(500).send('error');
			res.locals.info = info;
			return next();
    }) 
	},
	getTempura(req, res, next){
		db.any(`select * from product where category = 'Tempura';`)
		.then((info, err) => {
            if(err) return res.statusCode(500).send('error');
			res.locals.info = info;
			return next();
    })
	},
	getYakitori(req, res, next){
		db.any(`select * from product where category = 'Yakitori';`)
		.then((info, err) => {
            if(err) return res.statusCode(500).send('error');
			res.locals.info = info;
			return next();
    }) 
	},
	getMakimono(req, res, next){
		db.any(`select * from product where category = 'Makimono';`)
		.then((info, err) => {
			if(err) return res.statusCode(500).send('error');
			res.locals.info = info;
			return next();
		})
	},
	
};
