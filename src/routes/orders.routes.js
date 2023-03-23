import { Router } from "express";
import { getOrdersByDate, orderByClient, orderById } from "../controllers/orderController";
import { validationOrder } from "../middlewares/ordersMiddleware";

const orderRoute = Router();

orderRoute.post("/order", validationOrder, orderByClient);
orderRoute.get("/orders", getOrdersByDate);
orderRoute.get("/orders/:id", orderById);

export default orderRoute;