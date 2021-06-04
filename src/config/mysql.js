const mysql = require('promise-mysql');

async function query(sql) {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456789',
        database: 'users'
    });
    try {
        const result = await connection.query(sql);
        console.log('sql connected')

        await connection.end();
        return result;
    } catch (error) {
        console.log('error');
        throw error;
    }
}

module.exports = { query };