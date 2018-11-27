module.export = {
    // Get requests to producs
	getTempura: (req, res, next) => {
		db.any(`select * from product where category = 'Tempura';`)
		.then(info, err) 
			if(err) return res.statusCode(500).send('error');
			res.locals.info = info;
			next();
	},
	getYakitori: (req, res, next) => {
		db.any(`select * from product where category = 'Yakitori';`)
		.then(info, err) 
			if(err) return res.statusCode(500).send('error');
			res.locals.info = info;
			next();
	},
	getMakimono: (req, res, next) => {
		db.any(`select * from product where category = 'Makimono';`)
		.then(info, err) 
			if(err) return res.statusCode(500).send('error');
			res.locals.info = info;
			next();
	},
	getAppetizers: (req, res, next) => {
		db.any(`select * from product where category = 'Appetizers';`)
		.then(info, err) 
			if(err) return res.statusCode(500).send('error');
			res.locals.info = info;
			next();
	},
	// getMakimonoFresh: (req, res, next) => {
	// 	db.any(`select * from product where category = 'Makimono' and sub_category = 'Fresh Rolls';`)
	// 	.then(info, error)
	// 		if(err) return res.statusCode(500).send('error');
	// 		res.locals.info = info;
	// 		next()
	// },
	// getMakimonoTempura: (req, res, next) => {
	// 	db.any(`select * from product where category = 'Makimono' and sub_category = 'Tempura';`)
	// 	.then(info, error)
	// 		if(err) return res.statusCode(500).send('error');
	// 		res.locals.info = info;
	// 		next()
	// },
	// getMakimonoBaked: (req, res, next) => {
	// 	db.any(`select * from product where category = 'Makimono' and sub_category = 'Baked';`)
	// 	.then(info, error)
	// 		if(err) return res.statusCode(500).send('error');
	// 		res.locals.info = info;
	// 		next()
	// },
	// getAppetizersHot: (req, res, next) => {
	// 	db.any(`select * from product where category = 'Appetizers' and sub_category = 'Hot';`)
	// 	.then(info, error)
	// 		if(err) return res.statusCode(500).send('error');
	// 		res.locals.info = info;
	// 		next()
	// },
	// getAppetizersCold: (req, res, next) => {
	// 	db.any(`select * from product where category = 'Appetizers' and sub_category = 'Cold';`)
	// 	.then(info, error)
	// 		if(err) return res.statusCode(500).send('error');
	// 		res.locals.info = info;
	// 		next()
	// },
}