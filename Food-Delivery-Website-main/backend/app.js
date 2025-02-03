import express from "express";
import dotenv from "dotenv";
import dbconnection from "./db/user.db.js";
import router from "./router/user.router.js";
import francise from "./router/francise.router.js";
import contact from "./router/contect.router.js";
import Admincontact from "./router/Admincontact.router.js";
import Ed from "./router/ed.router.js";
import cartRouter from "./router/cart.router.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import sendotpRouter from "./router/otp.router.js"
import orderRouter from './router/order.router.js'
import { fileURLToPath } from 'url';
import path from "path";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

dbconnection();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, '../frontend/dist')));


app.use("/", router);
app.use("/api", francise);
app.use("/api", contact);

app.use("/api", Admincontact);
app.use("/", Ed);

app.use("/api", cartRouter);
app.use("/api/otp", sendotpRouter);
app.use("/cust", orderRouter);

app.get("/login", (req, res) => {
  res.send("login")
})

app.listen(PORT, () => {
  console.log(`server is start ${PORT}`);
});
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});
