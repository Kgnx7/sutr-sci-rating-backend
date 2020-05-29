const { User } = require("../../models");

module.exports = async function collectFacultyInfo(faculty) {
  try {

    const finalFaculty = {
      id: faculty.id,
      email: faculty.email,
      phone: faculty.phone,
      title: faculty.title,
      short: faculty.short,
      address: faculty.address,
    }

    if (faculty.dean) {
      const dean = await User.findByPk(faculty.dean);

      if (dean) {
        finalFaculty.deanId = faculty.dean;
        finalFaculty.dean = [dean.surname, dean.name, dean.patronymic].join(' ').trim();
      }
    }

    return finalFaculty;

  } catch (error) {
    throw error;
  }
}
