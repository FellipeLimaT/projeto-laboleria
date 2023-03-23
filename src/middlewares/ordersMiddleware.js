import { db } from "../database/db.js";
import orderValidation from "../schemas/orderSchema.js";

export async function validationOrder(req, res, next) {
  const { clientId, cakeId, quantity, totalPrice } = req.body;

  const validOrder = orderValidation.validate({
    clientId,
    cakeId,
    quantity,
    totalPrice,
  });

  if (validOrder.error) {
    return res.sendStatus(400);
  }

  try {
    const searchClientId = await db.query(`
      SELECT "clientId" FROM orders WHERE id = $1
    `, [clientId]);

    if (!searchClientId) {
      return res.sendStatus(404);
    }

    const searchCakeId = await db.query(`
      SELECT "cakeId" FROM orders WHERE id = $1
    `, [cakeId]);

    if (!searchCakeId) {
      return res.sendStatus(404);
    }

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
  next();
}