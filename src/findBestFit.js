import React, { useState } from 'react';

function MatchForm() {
  const [employerFields, setEmployerFields] = useState('');
  const [employeeFields, setEmployeeFields] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const employers = [{ name: 'Employer', fields: employerFields.split(',') }];
    const employees = [{ name: 'Employee', fields: employeeFields.split(','), flag: false }];

    // Call the findBestFit function and display the result
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Employer fields:
        <input type="text" value={employerFields} onChange={(e) => setEmployerFields(e.target.value)} />
      </label>
      <br />
      <label>
        Employee fields:
        <input type="text" value={employeeFields} onChange={(e) => setEmployeeFields(e.target.value)} />
      </label>
      <br />
      <button type="submit">Find best match</button>
    </form>
  );
}

export default MatchForm;
