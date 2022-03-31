const { Show } = require("../models");

const showData = [
  {
    name: "Ted Lasso",
    description: "Very funny show",
    image: "tedlasso.jpeg",
  },
  {
    name: "Masha and the Bear",
    description: "Very funny show",
    image: "masha.jpeg",
  },
  {
    name: "Friends",
    description: "Very funny show",
    image: "friends.jpeg",
  },

  {
    name: "Tom and Jerry",
    description: "Very funny show",
    image: "tom.jpeg",
  },
];

const seedShow = () =>
  Show.bulkCreate(showData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedShow;
