const db = require('../postgresql.js');

module.exports = {
  getAppetizers(req, res, next) {
    // not sure when we need to split cold and hot
    db.any("SELECT * FROM product WHERE category = 'Appetizers'")
      .then((data) => {
        console.log(data, 'appetizer data');
        res.locals.appetizers = data;
        return next();
      });
  },
};
