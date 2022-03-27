const router = require("express").Router();
const { ShowRating, User, Show } = require("../../models");

//get all show ratings
router.get("/", async (req, res) => {
  try {
    const shows = await ShowRating.findAll({});
    res.json(shows);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

//get showRatings userId
router.get("/:userId", async (req, res) => {
  try {
    const showRate = await ShowRating.findOne({
      where: {
        user_id: req.params.userId,
      },
    });

    res.json(showRate);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

//create new rating by userId
router.post("/", async (req, res) => {
  try {
    const newRating = await ShowRating.create({
      ...req.body,
    });
    res.status(200).json(newRating);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;
