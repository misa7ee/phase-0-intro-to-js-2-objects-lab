const employee = {
    name: "Ajax",
    streetAddress: "29 Broadway"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
  const newEmployeeObj = { ...employee};

  newEmployeeObj[key] = value;

  return newEmployeeObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  
  employee[key] = value;

  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  const newEmployeeObj = {...employee};
  delete newEmployeeObj[key]

  return newEmployeeObj;
  
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key]

  return employee
}






  
      