import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Doctor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.doctor.belongsToMany(models.specialty, {
        through: "doctor_specialties",
        foreignKey: "doctorId",
      });
      models.doctor.hasMany(models.appointment, { foreignKey: "doctorId" });
    }
  }
  Doctor.init(
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
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
      active: { type: DataTypes.BOOLEAN, allowNull: false, default: false },
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
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "doctor",
      },
      schedule: {
        type: DataTypes.JSON,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "doctor",
      tableName: "doctors",
      paranoid: true,
      timestamps: true,
      freezeTableName: true,
    }
  );
  return Doctor;
};
