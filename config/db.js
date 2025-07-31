const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'db.dorpvwudsdaigqviukdo.supabase.co',
    database: 'postgres',
    password:'bee@1100229933',
    port: 5432,
});

MediaSourceHandle.exports = pool;