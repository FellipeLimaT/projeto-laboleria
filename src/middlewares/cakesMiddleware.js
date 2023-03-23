import { db } from "../database/db.js";
import cakeValidation from "../schemas/cakeSchema.js";

export async function validCake(req, res, next) {
  const { name, price, image, description } = req.body;

  const validCake = cakeValidation.validate({
    name,
    price,
    image,
    description,
  });

  if (validCake.error) {
    return res.sendStatus(400);
  }

  try {
    const searchName = await db.query(`
      SELECT name FROM cakes WHERE name=$1
    `, [name]);

    if (searchName) {
      return res.sendStatus(409);
    }

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
  next();
}