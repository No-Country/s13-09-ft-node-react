
import { Model } from "sequelize";
import patient from './patient.js'
import doctor from "./doctor.js";
const appointment = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // In your Patient model definition
      Appointment.belongsTo(patient, { foreignKey: 'patientId' });
      Appointment.belongsTo(doctor, { foreignKey: 'doctorId' });
    }
  }
  Appointment.init(
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
      },
      observations: {
        type: DataTypes.JSON,
        allowNull: true // You may change this to false if observations are required
      },
      day: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      time: {
        type: DataTypes.TIME,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.literal("CURRENT_TIMESTAMP"),
      },
      deletedAt: {
        allowNull: true,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "appointment",
      paranoid: true,
      timestamps: true,
    }
  );
  return Appointment;
};

export default appointment;
