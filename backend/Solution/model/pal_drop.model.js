import pool from "../db.js";

export const getPalDrops = async () => {
    let sql = `
    SELECT 
        PD.pal_drop_id,
        PD.drop_id,
        PD.pal_id,
        D.drop_name
    FROM public."Pal_Drops" AS PD
    INNER JOIN public."Drops" AS D ON PD.drop_id = D.drop_id;
    `;
    let pal_drops = await pool.query(sql);
    return pal_drops.rows;
};

export const getPalDropByID = async (pal_drop_id) => {
    let sql = `
    SELECT 
        PD.pal_drop_id,
        PD.drop_id,
        PD.pal_id,
        D.drop_name
    FROM public."Pal_Drops" AS PD
    INNER JOIN public."Drops" AS D ON PD.drop_id = D.drop_id
    WHERE PD.pal_drop_id = $1;
    `;
    let values = [pal_drop_id];
    let pal_drops = await pool.query(sql, values);
    return pal_drops.rows;
};

export const getPalDropsbyPalID = async (pal_id) => {
    let sql = `
    SELECT 
        PD.pal_drop_id,
        PD.drop_id,
        PD.pal_id,
        D.drop_name
    FROM public."Pal_Drops" AS PD
    INNER JOIN public."Drops" AS D ON PD.drop_id = D.drop_id
    WHERE PD.pal_id = $1;
    `;
    let values = [pal_id];
    let pal_drops = await pool.query(sql, values);
    return pal_drops.rows;
};

export const createPalsDrop = async (data) => {
    const columns = ["drop_id", "pal_id"];
    let values = [];
    const placeholders = data.rows
        .map((row, index) => {
            const offset = index * columns.length;
            values.push(row.drop_id, row.pal_id); // Adjust keys to match your data
            return `( $${offset + 1}, $${offset + 2})`;
        })
        .join(", ");

    let sql = `
        INSERT INTO public."Pal_Drops" (drop_id, pal_id)
        VALUES ${placeholders}
        ON CONFLICT(drop_id, pal_id)
        DO UPDATE SET
        drop_id = EXCLUDED.drop_id,
        pal_id = EXCLUDED.pal_id;
        `;

    let results = await pool.query(sql, values);
    return results;
};

export const deletePalsDrop = async (pal_drop_id) => {
    let sql = 'DELETE FROM public."Pal_Drops" WHERE pal_drop_id = $1;';
    let values = [pal_drop_id];
    let result = await pool.query(sql, values);
    return result;
};
