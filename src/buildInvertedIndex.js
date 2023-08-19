function buildInvertedIndex(employees) {
    const index = new Map();
    for (const employee of employees) {
      for (const field of employee.fields) {
        if (!index.has(field)) {
          index.set(field, []);
        }
        index.get(field).push(employee);
      }
    }
    return index;
  }
  