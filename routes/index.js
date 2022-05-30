const router = require("express").Router();

const userRoutes = require("./userRoutes");
const thoughtRoutes = require("./thoughtsRoutes");

router.use("/api/user", userRoutes);
router.use("/api/thoughts", thoughtRoutes);

module.exports = router;
