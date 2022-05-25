const router = require("express").Router();

const userRoutes = require("./userRoutes");
const thoughtRoutes = require("./thoughtsRoutes");

// router.use("/api/usersRoutes", userRoutes);
// router.use("/api/thoughtsRoutes", thoughtRoutes);
router.use("/usersRoutes", userRoutes);
router.use("/thoughtsRoutes", thoughtRoutes);

module.exports = router;
