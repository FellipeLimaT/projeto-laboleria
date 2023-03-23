import { Router } from "express";
import { validCake } from "../middlewares/cakesMiddleware";
import { newCake } from "../controllers/cake.controller";

const cakeRoute = Router();

cakeRoute.post("/cakes", validCake, newCake);

export default cakeRoute;