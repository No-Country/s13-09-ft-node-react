"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "patients",
      {
        id: {
          type: Sequelize.UUID,
          allowNull: false,
          primaryKey: true,
          defaultValue: Sequelize.UUIDV4,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            len: {
              args: [2, 20],
              msg: "The name must contain between two and twenty characters",
            },
          },
        },
        surname: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            len: {
              args: [2, 20],
              msg: "The surname must contain between two and twenty characters",
            },
          },
        },
        identity_card: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        active: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
        email: {
          type: Sequelize.STRING,
          unique: true,
          validate: {
            isEmail: {
              msg: "It has to be a valid email",
            },
          },
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            len: {
              args: [6, 30],
              msg: "Password must have at least six characters and not more than thirty.",
            },
          },
        },
        mobile: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false,
        },
        role: {
          type: Sequelize.STRING,
          defaultValue: "patient",
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        deletedAt: {
          allowNull: true,
          type: Sequelize.DATE,
        },
      },
      {
        paranoid: true,
        timestamps: true,
        freezeTableName: true,
      }
    );
    await queryInterface.createTable(
      "patientFiles",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        description: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        filePath: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        patientId: {
          type: Sequelize.UUID,
          references: {
            model: "patients",
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        deletedAt: {
          allowNull: true,
          type: Sequelize.DATE,
        },
      },
      {
        paranoid: true,
        timestamps: true,
        freezeTableName: true,
      }
    );
    await queryInterface.createTable(
      "doctors",
      {
        id: {
          type: Sequelize.UUID,
          allowNull: false,
          primaryKey: true,
          defaultValue: Sequelize.UUIDV4,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            len: {
              args: [2, 20],
              msg: "The name must contain between two and twenty characters",
            },
          },
        },
        surname: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            len: {
              args: [2, 20],
              msg: "The surname must contain between two and twenty characters",
            },
          },
        },
        active: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
        email: {
          type: Sequelize.STRING,
          unique: true,
          validate: {
            isEmail: {
              msg: "It has to be a valid email",
            },
          },
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            len: {
              args: [6, 30],
              msg: "Password must have at least six characters and not more than thirty.",
            },
          },
        },
        mobile: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false,
        },
        role: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: "doctor",
        },
        schedule: {
          type: Sequelize.JSON,
          allowNull: false,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        deletedAt: {
          allowNull: true,
          type: Sequelize.DATE,
        },
      },
      {
        paranoid: true,
        timestamps: true,
        freezeTableName: true,
      }
    );
    await queryInterface.createTable(
      "appointments",
      {
        id: {
          type: Sequelize.UUID,
          allowNull: false,
          primaryKey: true,
          defaultValue: Sequelize.UUIDV4,
        },
        observations: {
          type: Sequelize.JSON,
          allowNull: false,
        },
        day: {
          type: Sequelize.DATEONLY,
          allowNull: false,
        },
        time: {
          type: Sequelize.TIME,
          allowNull: false,
        },
        doctorId: {
          type: Sequelize.UUID,
          references: {
            model: "doctors",
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },
        patientId: {
          type: Sequelize.UUID,
          references: {
            model: "patients",
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        deletedAt: {
          allowNull: true,
          type: Sequelize.DATE,
        },
      },
      {
        paranoid: true,
        timestamps: true,
        freezeTableName: true,
      }
    );
    await queryInterface.createTable(
      "specialties",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        deletedAt: {
          allowNull: true,
          type: Sequelize.DATE,
        },
      },
      {
        paranoid: true,
        timestamps: true,
        freezeTableName: true,
      }
    );
    await queryInterface.createTable("doctors_specialties", {
      doctorId: {
        type: Sequelize.UUID,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      specialtyId: {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    // Remove foreign key constraints from dependent tables
    // await queryInterface.removeConstraint(
    //   "patients",
    //   "patientFiles_patientId_fkey"
    // );
    // await queryInterface.removeConstraint(
    //   "patientFiles",
    //   "patientFiles_patientId_fkey"
    // );
    // await queryInterface.removeConstraint(
    //   "appointments",
    //   "appointments_patientId_fkey"
    // );
    // await queryInterface.removeConstraint(
    //   "doctors",
    //   "appointments_doctorId_fkey"
    // );
    // await queryInterface.removeConstraint(
    //   "DoctorSpecialties",
    //   "DoctorSpecialties_specialtyId_fkey"
    // );
    // await queryInterface.removeConstraint(
    //   "DoctorSpecialties",
    //   "DoctorSpecialties_doctorId_fkey"
    // );

    //drop tables
    await queryInterface.dropTable("doctors_specialties");
    await queryInterface.dropTable("specialties");
    await queryInterface.dropTable("appointments");
    await queryInterface.dropTable("doctors");
    await queryInterface.dropTable("patientFiles");
    await queryInterface.dropTable("patients");
  },
};
