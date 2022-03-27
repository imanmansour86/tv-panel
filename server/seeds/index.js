const sequelize = require("../config/connection");
const seedUser = require("./userData");
const seedShow = require("./showData");
const seedShowRating = require("./showRatingData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedShow();

  await seedShowRating();

  process.exit(0);
};

seedAll();
