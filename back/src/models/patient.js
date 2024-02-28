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
    Patient.init({
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
        identity_card: { type: DataTypes.STRING, allowNull: false, unique: true },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
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
        },
        mobile: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "patient",
        },
    }, {
        sequelize,
        modelName: "patient",
        tableName: "patients",
        paranoid: true,
        timestamps: true,
        freezeTableName: true,
    });
    return Patient;
};