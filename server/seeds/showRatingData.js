const { ShowRating } = require("../models");

const ShowRatingData = [
  {
    user_id: 1,
    show_id: 1,
    rating: 1,
  },
  {
    user_id: 2,
    show_id: 1,
    rating: 4,
  },
  {
    user_id: 3,
    show_id: 2,
    rating: 5,
  },
  {
    user_id: 4,
    show_id: 2,
    rating: 3,
  },
];

const seedShowRating = () =>
  ShowRating.bulkCreate(ShowRatingData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedShowRating;
