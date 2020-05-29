const { User, Faculty } = require("../../models");

module.exports = async function collectDepartmentInfo(department) {
  try {

    const finalDepartment = {
      id: department.id,
      email: department.email,
      phone: department.phone,
      title: department.title,
      short: department.short,
      address: department.address,
    }

    if (department.manager) {
      const manager = await User.findByPk(department.manager);

      if (manager) {
        finalDepartment.managerId = department.manager;
        finalDepartment.manager = [manager.surname, manager.name, manager.patronymic].join(' ').trim();
      }
    }
    
    if (department.faculty) {
      const faculty = await Faculty.findByPk(department.faculty);

      if (faculty) {
        finalDepartment.facultyId = department.faculty;
        finalDepartment.faculty = faculty.short;
      }
    }

    return finalDepartment;

  } catch (error) {
    throw error;
  }
}
