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
      models.appointment.belongsTo(models.patient, {
        foreignKey: "patientId",
      });
      models.appointment.belongsTo(models.doctor, { foreignKey: "doctorId" });
    }
  }
  Appointment.init(
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      observations: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      day: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      time: {
        type: DataTypes.TIME,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "appointment",
      tableName: "appointments",
      paranoid: true,
      timestamps: true,
      freezeTableName: true,
    }
  );
  return Appointment;
};
