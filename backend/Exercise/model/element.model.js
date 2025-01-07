import pool from "../db.js";

export const getElement = async () => {
    let sql = 'SELECT * from public."Element";';
    let elements = await pool.query(sql);
    return elements.rows;
};

// SQL INJECTION QUERY
export const getElementById = async (id) => {
    // let sql = 'SELECT * from public."Element" WHERE element_id = $1;';
    // let values = [id];
    let elements = await pool.query(`SELECT * from public."Element" WHERE element_id = ${id};`);
    return elements.rows;
};