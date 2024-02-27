function validateDoctorJson(doctor) {
  const expectedProperties = [
    "name",
    "surname",
    "email",
    "password",
    "mobile",
    "specialty",
    "schedule",
  ];
  const allowedOptionalProperties = ["role", "active"];
  const actualProperties = Object.keys(doctor);

  const hasRequiredProperties = expectedProperties.every((prop) =>
    actualProperties.includes(prop)
  );

  const hasOnlyAllowedOptionalProperties = actualProperties.every(
    (prop) =>
      expectedProperties.includes(prop) ||
      allowedOptionalProperties.includes(prop)
  );

  if (
    !hasRequiredProperties ||
    !hasOnlyAllowedOptionalProperties ||
    typeof doctor.name !== "string" ||
    typeof doctor.surname !== "string" ||
    typeof doctor.email !== "string" ||
    typeof doctor.password !== "string" ||
    typeof doctor.mobile !== "string" ||
    typeof doctor.specialty !== "string" ||
    !(
      doctor.schedule &&
      typeof doctor.schedule === "object" &&
      !Array.isArray(doctor.schedule)
    ) ||
    !doctor.schedule ||
    typeof doctor.schedule.monday !== "string" ||
    typeof doctor.schedule.tuesday !== "string"
  ) {
    throw new Error("El objeto JSON debe tener la estructura adecuada.");
  }
}

function validateDoctors(doctors) {
  if (
    !Array.isArray(doctors) &&
    (typeof doctors === "object") !== null &&
    doctors !== undefined
  ) {
    return validateDoctorJson(doctors);
  }

  if (!Array.isArray(doctors) || doctors.length === 0) {
    throw new Error("Debe proporcionar un array no vacío de objetos JSON.");
  }

  for (const doctor of doctors) {
    validateDoctorJson(doctor);
  }
}

export default validateDoctors;
