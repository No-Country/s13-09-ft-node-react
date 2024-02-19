const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const password = await bcrypt.hash("password123", 10); // Replace 'password123' with your desired default password

    await queryInterface.bulkInsert("patients", [
      {
        id: "fc07b157-2cc8-41da-b00b-d7e0aa90d8b1",
        name: "John",
        surname: "Doe",
        identity_card: "123456715",
        active: true,
        email: "john.doe@examples.com",
        password: password,
        mobile: "1234567844",
        role: "patient",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more patient entries as needed
    ]);

    await queryInterface.bulkInsert("doctors", [
      {
        id: "c3f5fde5-74cf-43e5-bb86-5e894f55ff9d",
        name: "Jane",
        surname: "Smith",
        active: true,
        email: "jane.doe@examples.com",
        password: password,
        mobile: "9876543212",
        role: "doctor",
        schedule: JSON.stringify({
          monday: "9:00 AM - 5:00 PM",
          tuesday: "9:00 AM - 5:00 PM",
        }), // Example schedule
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "a6f42e24-4b87-4d1d-89b4-33ef18d9f215",
        name: "Admin",
        surname: "Smith",
        active: false,
        email: "admin@admin.com",
        password: password,
        mobile: "9876543343",
        role: "admin",
        schedule: JSON.stringify({
          monday: "9:00 AM - 5:00 PM",
          tuesday: "9:00 AM - 5:00 PM",
        }), // Example schedule
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more doctor entries as needed
    ]);

    await queryInterface.bulkInsert("patientFiles", [
      {
        id: 1,
        description: "Patient file description 1",
        filePath: "/path/to/file1",
        patientId: "fc07b157-2cc8-41da-b00b-d7e0aa90d8b1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more patient file entries as needed
    ]);

    await queryInterface.bulkInsert("specialties", [
      {
        id: 1,
        name: "Cardiology",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more specialty entries as needed
    ]);

    await queryInterface.bulkInsert("appointments", [
      {
        id: "29e801e2-aeec-4e6d-9ab3-8d40af6a8e65",
        patientId: "fc07b157-2cc8-41da-b00b-d7e0aa90d8b1",
        doctorId: "c3f5fde5-74cf-43e5-bb86-5e894f55ff9d",
        observations: JSON.stringify({}),
        day: "2024-02-16", // Example date
        time: "09:00:00", // Example time
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more appointment entries as needed
    ]);

    await queryInterface.bulkInsert("doctors_specialties", [
      {
        doctorId: "c3f5fde5-74cf-43e5-bb86-5e894f55ff9d",
        specialtyId: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more doctor-specialty associations as needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("patients", null, {});
    await queryInterface.bulkDelete("doctors", null, {});
    await queryInterface.bulkDelete("patientFiles", null, {});
    await queryInterface.bulkDelete("specialties", null, {});
    await queryInterface.bulkDelete("appointments", null, {});
    await queryInterface.bulkDelete("doctors_specialties", null, {});
  },
};
