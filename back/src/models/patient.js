import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // In your Patient model definition
      models.patient.hasMany(models.patientFiles, { foreignKey: "patientId" });
      models.patient.hasMany(models.appointment, { foreignKey: "patientId" });
    }
  }
  Patient.init(
    {
      id: {
        type: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [2, 20],
            msg: "The name must contain between two and twenty characters",
          },
        },
      },
      surname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [2, 20],
            msg: "The surname must contain between two and twenty characters",
          },
        },
      },
      identity_card: { type: DataTypes.STRING, allowNull: false, unique: true },
      active: { type: DataTypes.BOOLEAN, default: false },
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: {
            msg: "It has to be a valid email",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [6, 30],
            msg: "Password must have at least six characters and not more than thirty.",
          },
        },
      },
      mobile: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "patient",
      paranoid: true,
      timestamps: true,
    }
  );
  return Patient;
};
