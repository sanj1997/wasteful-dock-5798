const express = require("express");
const dbConnect = require("./config/dbConnect");
const cors = require("cors");
const userRouter = require("./features/routes/user.route");
const productRouter = require("./features/routes/product.route");
const commentRouter = require("./features/routes/comment.route");
const wishlistRouter = require("./features/routes/wishlist.route");
const orderRouter = require("./features/routes/order.route");
const paymentRouter = require("./features/routes/payment.route");
const authRouter = require("./features/routes/auth.email.route");
const googleRouter=require("../backend/features/routes/auth.google.route")
const cartRouter=require("../backend/features/routes/cart.route")
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req, res) => res.send("hello"));
app.use("/users", googleRouter);
app.use("/auth", authRouter);
app.use("/products", productRouter);
app.use("/comments", commentRouter);
app.use("/wishlist", wishlistRouter);
app.use("/orders", orderRouter);
app.use("/payments", paymentRouter);
app.use("/cart",cartRouter)


const PORT=process.env.PORT||8080;
app.listen(PORT, async () => {
  await dbConnect();
  console.log(`server started on port ${PORT}`);
});
