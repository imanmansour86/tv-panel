const { Show } = require("../models");

const showData = [
  {
    name: "Ted Lasso",
    description: "Very funny show",
    image: "test",
  },
  {
    name: "Masha and the Bear",
    description: "Very funny show",
    image: "test",
  },
  {
    name: "Friends",
    description: "Very funny show",
    image: "test",
  },

  {
    name: "Tom and Jerry",
    description: "Very funny show",
    image: "test",
  },
];

const seedShow = () =>
  Show.bulkCreate(showData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedShow;
