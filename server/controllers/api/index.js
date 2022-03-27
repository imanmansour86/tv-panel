const router = require("express").Router();
const userRoutes = require("./userRoutes");
const showRoutes = require("./showRoutes");
const showRatingsRoutes = require("./showRatingRoutes");

router.use("/users", userRoutes);
router.use("/shows", showRoutes);
router.use("/showRating", showRatingsRoutes);

module.exports = router;
