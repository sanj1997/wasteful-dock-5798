const express = require("express");
const {
  addTocart,
  removeFromCart,
  updateCart,
  getCart,
  removeUserCart,
} = require("../controllers/carts.controller");
const router = express.Router();
const authmiddleware = require("../middlewares/authmiddleware");

//add to cart
router.post("/:id", authmiddleware, async (req, res) => {
  const { id } = req.params;
  // console.log(id, "req id");
  const mainToken = req.headers.authorization;
  const response = await addTocart(id, mainToken);
  if (response.message === "Item in cart updated successfully") {
    return res.send(response);
  } else if (response.message === "Item added to cart successfully") {
    return res.send(response);
  }
  return res.status(401).send(response);
});

//delete from cart
router.delete("/:id", authmiddleware, async (req, res) => {
  const { id } = req.params;
  
  const mainToken = req.headers.authorization;
  const response = await removeFromCart(id, mainToken);
  if (response.message === "Item removed successfully") {
    return res.send(response);
  }
  return res.status(401).send(response);
});

router.delete("/user-cart/:id",async(req,res)=>{
   const {id}=req.params
   console.log(id,"to remove")
   const response=await removeUserCart(id)
   if(response.message==="Successful")
   {
     return res.send(response)
   }
   return res.status(401).send(response)
})

//update Cart
router.patch("/", authmiddleware, async (req, res) => {
  const { id, quantity } = req.body;
  console.log(id,quantity)
  const mainToken = req.headers.authorization;
  const response = await updateCart(id, mainToken, quantity);
  if (response.message === "Cart updated successfully") {
    return res.send(response);
  }
  return res.status(401).send(response);
});

//get cart
router.get("/:id", authmiddleware, async (req, res) => {
  const { id } = req.params;
  console.log(id,"for getting cart")
  const response = await getCart(id);
  if (response.message === "Successful") {
    return res.send(response);
  }
  return res.status(401).send(response);
});
module.exports = router;
