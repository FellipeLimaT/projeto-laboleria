import clientValidation from "../schemas/clientSchema";

export async function validClient(req, res, next) {
  const { name, address, phone } = req.body;

  const validClient = clientValidation.validate({
    name,
    address,
    phone,
  });
  
  if (validClient.error) {
    return res.sendStatus(400);
  }
  next();
}
