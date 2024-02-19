import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // In your Patient model definition

      models.appointment.belongsTo(models.patient, { foreignKey: "patientId" });
      models.appointment.belongsTo(models.doctor, { foreignKey: "doctorId" });
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
        allowNull: true, // You may change this to false if observations are required
      },
      day: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      time: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "appointment",
      tableName: "appointment",
      paranoid: true,
      timestamps: true,
    }
  );
  return Appointment;
};
