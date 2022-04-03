const { Show } = require("../models");

const showData = [
  {
    id: 1,
    name: "Ted Lasso",
    description: "Very funny show",
    image: "ted.jpeg",
  },
  {
    id: 2,
    name: "Masha and the Bear",
    description: "Very funny show",
    image: "masha.jpeg",
  },
  {
    id: 3,
    name: "Tom and Jerry",
    description: "Very funny show",
    image: "tom.jpeg",
  },
  {
    id: 4,
    name: "Friends",
    description: "Very funny show",
    image: "friends.jpeg",
  },

  {
    id: 5,
    name: "The Wheel of Time",
    description: "Very funny show",
    image: "wheel.jpeg",
  },

  {
    id: 6,
    name: "Invincible",
    description: "Very funny show",
    image: "invincible.jpeg",
  },
];

const seedShow = () =>
  Show.bulkCreate(showData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedShow;
