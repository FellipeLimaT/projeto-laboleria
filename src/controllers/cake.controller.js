import { db } from "../database/db";

export async function newCake(req, res) {
  const { name, price, image, description } = req.body;
  
  try {
    await db.query(`
        INSERT INTO cakes(name, price, image, description) 
        VALUES ($1,$2,$3,$4)
        `, [name, price, image, description]);

    return res.sendStatus(201);

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}