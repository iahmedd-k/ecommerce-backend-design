
import express from "express";
import cors from "cors"
import { config } from "dotenv"
import connectDb from "./utils/db.js";
import user_routers from "./Routes/user_router.js";
import product_router from "./Routes/product_router.js";
import category_router from "./Routes/Category_Router.js";
import review_router from "./Routes/review_router.js";
const app = express()
app.use(cors())
app.use(express.json())
config();
const port = process.env.PORT || 3000


app.use('/api/user', user_routers)
app.use('/api/product', product_router)
app.use('/api/category', category_router)
app.use('/api/review', review_router)
app.get('/', (req, res) => res.send('Hello World!'))
connectDb();
app.listen(port, () => console.log(`Example app listening on port ${port}!`))