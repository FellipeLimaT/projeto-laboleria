import { Router } from "express";
import { clientOrders, myClients } from "../controllers/client.controller";
import { validClient } from "../middlewares/clientsMiddleware";

const clientRoute = Router();

clientRoute.post("/clients", validClient, myClients);
clientRoute.get("/clients/:id/orders", clientOrders);

export default clientRoute;