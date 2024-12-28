import dotenv from "dotenv"

dotenv.config({ path: ".env.local" });

export const databaseConfig = {
    userName: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_DATABASE_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
};