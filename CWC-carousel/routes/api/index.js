const router = require("express").Router();
const bookRoutes = require("./books");
const wineRoutes = require("./wines");

// Book routes
router.use("/books", bookRoutes);

// Wine routes
router.use("/wines", wineRoutes);

module.exports = router;
