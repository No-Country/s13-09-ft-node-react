const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const password = await bcrypt.hash("password123", 10); // Replace 'password123' with your desired default password

    await queryInterface.bulkInsert("patients", [
      {
        id: "76cc92a5-af61-486f-bf87-43e2dbb6a159",
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
        id: "5f86b282-b78d-4c54-8918-80b5353e2a8a",
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
        id: "e7eb8dd8-0b5e-4c84-b582-c9d35b40d0d6",
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
        patientId: "76cc92a5-af61-486f-bf87-43e2dbb6a159",
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
        id: "d08e1992-00a3-4a85-a33a-3a06d5f11a4d",
        patientId: "76cc92a5-af61-486f-bf87-43e2dbb6a159",
        doctorId: "5f86b282-b78d-4c54-8918-80b5353e2a8a",
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
        doctorId: "5f86b282-b78d-4c54-8918-80b5353e2a8a",
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
