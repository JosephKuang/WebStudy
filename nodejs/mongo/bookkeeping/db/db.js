const mongoose = require('mongoose');
const config = require('../config/config');
const { DBHOST, DBNAME, DBPORT } = config;
async function connectDB( ) {
    try {
        await mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`,{serverSelectionTimeoutMS: 5000 });
        console.log('✅ 连接成功');
    } catch (err) {
        console.error('❌ 连接失败:');
        throw err;
    }
}

module.exports = connectDB;