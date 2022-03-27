const router = require("express").Router();
const { Show } = require("../../models");

//get all shows
router.get("/", async (req, res) => {
  try {
    const shows = await Show.findAll({});
    res.json(shows);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get show by id
router.get("/:id", async (req, res) => {
  try {
    const shows = await Show.findByPk(req.params.id);

    res.json(shows);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newShow = await Show.create({
      ...req.body,
    });
    res.status(200).json(newShow);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const show = await Show.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!show) {
      res.status(404).json({ message: "No show found with this id!" });
      return;
    }

    res.status(200).json(show);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const show = await Show.update(
      {
        ...req.body,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    if (!show) {
      res.status(404).json({ message: "No show found with this id!" });
      return;
    }

    res.status(200).json(show);
  } catch (err) {
    res.status(500).json(err);
    console.error(err);
  }
});

module.exports = router;
