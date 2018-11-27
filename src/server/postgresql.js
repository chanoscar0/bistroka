const connection = 'postgres://terasagp:nzXZ3KUJiB4bolCx54BH2Fig4wKoQ_E3@baasu.db.elephantsql.com:5432/terasagp';
const pgp = require('pg-promise')(/*options*/);
const db = pgp(connection);

module.exports = db;