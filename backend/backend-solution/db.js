import pg from "pg";
import { databaseConfig } from "./config.js";
const { Pool } = pg;

const pool = new Pool({
    user: databaseConfig.userName,
    database: databaseConfig.name,
    password: databaseConfig.password,
    host: databaseConfig.host,
    port: databaseConfig.port,
    max: 20,
});

export default pool;