
import { Model } from "sequelize";
import doctor from "./doctor";
import specialty from './specialty'
const doctorSpecialty = (sequelize, DataTypes) => {
  class DoctorSpecialties extends Model {
    static associate(models) {
      // No associations needed for this model
      
    }
  };
  DoctorSpecialties.init({
    doctorId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'doctor',
        key: 'id'
      }
    },
    specialtyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'specialty',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'DoctorSpecialties',
    tableName: 'DoctorSpecialties',
    paranoid: true,
    timestamps: true,
  });
  return DoctorSpecialties;
};

export default doctorSpecialty;