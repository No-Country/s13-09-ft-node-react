import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Specialty extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.specialty.belongsToMany(models.doctor, {
        through: "doctors_specialties",
        foreignKey: "specialtyId",
      });
    }
  }
  Specialty.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "specialty",
      tableName: "specialties",
      paranoid: true,
      timestamps: true,
      freezeTableName: true,
    }
  );
  return Specialty;
};
