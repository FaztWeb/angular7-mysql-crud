import mysql from 'promise-mysql';

import keys from './keys';

const pool = mysql.createPool(keys.database);

pool.getConnection()
    .then(connection => {
        pool.releaseConnection(connection);
        console.log('DB is Connected');
    });

export default pool;
