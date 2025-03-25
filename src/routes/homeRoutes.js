const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");

router.get("/", homeController.home);

app.get("/api/historial", async (req, res) => {
  const [rows] = await db.query("SELECT * FROM historial ORDER BY fecha DESC");
  res.json(rows);
});

module.exports = router;
