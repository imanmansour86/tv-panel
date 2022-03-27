const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class ShowRating extends Model {}

ShowRating.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },

    show_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "show",
        key: "id",
      },
    },

    rating: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscore: true,
    modelName: "show_rating",
  }
);

module.exports = ShowRating;
