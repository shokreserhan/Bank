const Express = require("express");
const Transaction = require("../model/transactionSchema");
const router = Express.Router();

router.get("/transactions", async (req, res) => {
  let transactions = await Transaction.find({}).exec()
  res.send(transactions);
});

router.post("/transaction", async (req, res) => {
  const { amount, category, vendor } = req.body;
  new Transaction({ amount, category, vendor }).save();
  res.send("Added");
});

router.delete("/transaction", (req, res) => {
  const { amount, category, vendor } = req.body;
  Transaction.findOneAndDelete({ amount, category, vendor }).exec()
  res.send("Deleted");
});

module.exports = router;