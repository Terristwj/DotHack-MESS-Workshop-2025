import pool from "../db.js";

export const getPals = async () => {
    let sql = `
    SELECT
        P.pal_id,
        P.pal_name,
        P.pal_nickname,
        P.element_id,
        P.entry_desc,
        P.appearance_desc,
        P.behaviour_desc,
        P.pal_skill_name,
        P.pal_skill_desc,
        P.pal_menu_img,
        P.pal_big_img,
        E.element_name,
        E.element_img
    FROM public."Pals" AS P
    INNER JOIN public."Element" AS E ON P.element_id = E.element_id;
    `;
    let pals = await pool.query(sql);
    return pals.rows;
};

export const getPalByID = async (pal_id) => {
    let sql = `
    SELECT
        P.pal_id,
        P.pal_name,
        P.pal_nickname,
        P.element_id,
        P.entry_desc,
        P.appearance_desc,
        P.behaviour_desc,
        P.pal_skill_name,
        P.pal_skill_desc,
        P.pal_menu_img,
        P.pal_big_img,
        E.element_name,
        E.element_img,
        D.drop_id,
        D.drop_name
    FROM public."Pals" AS P
    INNER JOIN public."Pal_Drops" AS PD ON P.pal_id = PD.pal_id
    INNER JOIN public."Element" AS E ON P.element_id = E.element_id
    INNER JOIN public."Drops" AS D ON PD.drop_id = D.drop_id
    WHERE P.pal_id = $1;
    `;
    let values = [pal_id];
    let pal = await pool.query(sql, values);
    return pal.rows;
};

export const createPal = async (data) => {
    const values = Object.values(data);

    let sql = `INSERT INTO public."Pals" (
        pal_name, 
        pal_nickname, 
        element_id,
        entry_desc, 
        appearance_desc, 
        behaviour_desc, 
        pal_skill_name,
        pal_skill_desc,
        pal_menu_img,
        pal_big_img
        ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10);`;

    let results = await pool.query(sql, values);
    return results;
};

export const updatePal = async (pal_id, data) => {
    let values = Object.values(data);
    values.push(pal_id);
    let sql = `
    UPDATE public."Pals" SET 
        pal_name = $1, 
        pal_nickname = $2, 
        element_id = $3,
        entry_desc = $4, 
        appearance_desc = $5, 
        behaviour_desc = $6, 
        pal_skill_name = $7,
        pal_skill_desc = $8,
        pal_menu_img = $9,
        pal_big_img = $10
    WHERE pal_id = $11;
    `;
    let results = await pool.query(sql, values);
    return results;
};

export const deletePal = async (pal_id) => {
    let sql = 'DELETE FROM public."Pals" WHERE pal_id = $1;';
    let values = [pal_id];
    let results = await pool.query(sql, values);
    return results;
};
