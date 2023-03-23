import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import orderRoute from "./routes/orders.routes";
import clientRoute from "./routes/clients.routes";
import cakeRoute from "./routes/cakes.routes";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use(orderRoute);
app.use(clientRoute);
app.use(cakeRoute);

const port = process.env.PORT;

app.listen(port, () => console.log(`Server running in port: ${port}`));