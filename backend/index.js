const express = require("express");
const dbConnect = require("./config/dbConnect");
const cors = require("cors");
const userRouter = require("./features/routes/users.route");
const productRouter = require("./features/routes/products.route");
const commentRouter = require("./features/routes/comments.route");
const wishlistRouter = require("./features/routes/wishlists.route");
const orderRouter=require("../backend/features/routes/orders.route")
const paymentRouter=require("../backend/features/routes/payments.route")
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req, res) => res.send("hello"));
app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/comments", commentRouter);
app.use("/wishlist", wishlistRouter);
app.use("/orders",orderRouter)
app.use("/payments",paymentRouter)
app.listen(8080, async () => {
  await dbConnect();
  console.log("server started on port http://localhost:8080");
});
