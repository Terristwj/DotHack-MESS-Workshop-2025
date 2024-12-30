import pool from "../db.js";

export const getDrops = async () => {
    let sql = 'SELECT * FROM public."Drops";';
    let drops = await pool.query(sql);
    return drops.rows;
};

export const getDropsbyID = async (drop_id) => {
    let sql = 'SELECT * FROM public."Drops" WHERE drop_id = $1';
    let values = [drop_id];
    let drop = await pool.query(sql, values);
    return drop.rows;
};

export const createDrop = async (drop_name) => {
    let sql = 'INSERT INTO public."Drops" (drop_name) VALUES ($1);';
    let values = [drop_name];
    let results = await pool.query(sql, values);
    return results;
};

export const updateDrop = async (drop_id, drop_name) => {
    let sql = 'UPDATE public."Drops" SET drop_name = $1 WHERE drop_id = $2;';
    let values = [drop_name, drop_id];
    let results = await pool.query(sql, values);
    return results;
};

export const deleteDrop = async (drop_id) => {
    let sql = 'DELETE FROM public."Drops" WHERE drop_id = $1;';
    let values = [drop_id];
    let results = await pool.query(sql, values);
    return results;
};
