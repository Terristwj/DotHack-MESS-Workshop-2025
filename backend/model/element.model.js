import pool from "../db.js"

export const getElement = async () => {
    let sql = 'SELECT * from public."Element";'
    let elements = await pool.query(sql);
    return elements.rows;
}