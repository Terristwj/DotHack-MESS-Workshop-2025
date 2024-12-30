import pool from "../db.js";

export const getPalDrops = async () => {
    let sql = 'SELECT * FROM public."Pal_Drops";';
    let pal_drops = await pool.query(sql);
    return pal_drops.rows;
};

export const getPalDropByID = async (pal_drop_id) => {
    let sql = 'SELECT * FROM public."Pal_Drops" WHERE pal_drop_id = $1';
    let values = [pal_drop_id];
    let pal_drops = await pool.query(sql, values);
    return pal_drops.rows;
};

export const getPalDropsbyPalID = async (pal_id) => {
    let sql = 'SELECT * FROM public."Pal_Drops" WHERE pal_id = $1';
    let values = [pal_id];
    let pal_drops = await pool.query(sql, values);
    return pal_drops.rows;
};

export const createPalsDrop = async (data) => {};

export const deletePalsDrop = async (pal_drop_id) => {
    let sql = 'DELETE FROM public."Pal_Drops" WHERE pal_drop_id = $1;';
    let values = [pal_drop_id];
    let result = await pool.query(sql, values);
    return result;
};
