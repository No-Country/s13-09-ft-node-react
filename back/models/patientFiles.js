
import { Model } from "sequelize";
import patient from "./patient";
const patientFiles = (sequelize, DataTypes) => {
  class PatientFiles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // In your Patient model definition
      PatientFiles.belongsTo(patient, { foreignKey: 'patientId' });
    }
  }
  PatientFiles.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      filePath: {
        type: DataTypes.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      deletedAt: {
        allowNull: true,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "patientFiles",
      paranoid: true,
      timestamps: true,
    }
  );
  return PatientFiles;
};

export default patientFiles;
