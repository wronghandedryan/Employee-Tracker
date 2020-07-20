const router = require("express").Router();
const postRoutes = require("./employee");

// Post routes
router.use("/employee", postRoutes);

module.exports = router;
