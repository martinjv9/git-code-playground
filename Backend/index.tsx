const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get("/tshirt", (req, res) => {
  res.status(200).send({
    name: "T-Shirt",
    price: 19.99,
    description: "A comfortable cotton t-shirt",
  });
});

app.post("/tshirt/:id", (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;
  if (!logo) {
    res.status(418).send({ message: "We need a logo!" });
  }

  res.send({
    tshirt: `shirt with your ${logo} and Id of ${id}`,
  });
});
