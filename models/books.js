module.exports = (sequelize, DataTypes) => {
  return sequelize.define('books', {
    nameOfBook: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    author: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    genre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pubYear: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  })
}