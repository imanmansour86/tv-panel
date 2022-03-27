const User = require("./user");
const Show = require("./show");
const ShowRating = require("./show_rating");

//User and Show have many to many relationship through ShowRating table

User.belongsToMany(Show, {
  through: {
    model: ShowRating,
  },

  as: "user_show",
  foreignKey: "user_id",
});

Show.belongsToMany(User, {
  through: {
    model: ShowRating,
  },

  as: "show_user",
  foreignKey: "show_id",
});

module.exports = { User, Show, ShowRating };
