import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class PatientFiles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // In your Patient model definition
      models.patientFiles.belongsTo(models.patient, {
        foreignKey: "patientId",
      });
    }
  }
  PatientFiles.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      filePath: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "patientFiles",
      tableName: "patientFiles",
      paranoid: true,
      timestamps: true,
      freezeTableName: true,
    }
  );
  return PatientFiles;
};
