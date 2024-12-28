import pool from "../db.js"

export const getElement = async () => {
    try {
        let sql = 'SELECT * from public."Element";'
        let elements = await pool.query(sql);
        return elements.rows;
    } catch (error) {
        return error;
    }
}