module.exports = function(sequelize, DataTypes) {
  const Todo = sequelize.define("Todo", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    completed: DataTypes.BOOLEAN
  });
  return Todo;
};
