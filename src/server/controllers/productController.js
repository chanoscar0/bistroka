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
	postOrder(req, res, next){
		console.log(req.body,'req');
		// the number is our fake customer id, 
		db.one(`INSERT INTO "order"(customer_id, total_price) VALUES ($1, $2) RETURNING *`, [3, req.body.totalPrice])
        .then(data => {
					console.log(data.order_id,'order_id')
					for (let key in req.body) {
						if(key !== 'totalPrice'){
						db.one(`INSERT INTO "order_product"(order_id, product_id, qty) VALUES ($1,$2,$3) RETURNING *`, [data.order_id, req.body[key].product_id, req.body[key].quantity])
						.then(test => console.log(test,'everything'))
						}
					}
          res.locals.data = data;
          return next();
        })
        .catch(err => {
          console.log('ERROR: ', err)
          return res.status(404).send({ err: err });
        });
	}
	
};
