const router = require("express").Router();
const winesController = require("../../controllers/winesController");

// Matches with "/api/wines"
router.route("/")
  .get(winesController.findAll);

// Matches with "/api/wines/regions"
router.route("/regions")
  .get(winesController.findRegions);

// Matches with "/api/wines/varietals"
router.route("/varietals")
  .get(winesController.findVarietals);


// Matches with "/api/wines/:id"
router
  .route("/:id")
  .get(winesController.findById);


module.exports = router;
