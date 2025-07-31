const db = require('./config/db');

db.query('SELCET id, word FROM words', (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(res.row);
});