const Express = require("express");
const Transaction = require("../model/transactionSchema");
const router = Express.Router();

router.get("/transactions", async (req, res) => {
  res.send(await Transaction.find({}).exec());
});

router.post("/transaction", async (req, res) => {
  const { amount, category, vendor } = req.body;
  new Transaction({ amount, category, vendor }).save();
  res.send("Added");
});

router.delete("/transaction", (req, res) => {
  const { _id } = req.body;
  if (!_id) {
    res.status(400).send("error")
    return null
  }
  Transaction.findByIdAndDelete({ _id }).exec()
  res.send("Deleted");
});

module.exports = router;