import React, { useState } from 'react';
import { findBestFit } from './match';
import { buildInvertedIndex } from './buildInvertedIndex';
function MatchForm() {
  const [employerFields, setEmployerFields] = useState('');
  const [employeeFields, setEmployeeFields] = useState('');
  const [matches, setMatches] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const employers = [{ name: 'Employer', fields: employerFields.split(',') }];
    const employees = [{ name: 'Employee', fields: employeeFields.split(','), flag: false }];
    const invertedIndex = buildInvertedIndex(employees);
    const matches = findBestFit(employers, employees, invertedIndex);
    setMatches(matches);
  };

  return (
    <div>
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
      {matches.map((match) => (
        <p>{`${match.employer} matched with ${match.employee} (Score: ${match.score}) ${match.message ? match.message : ''}`}</p>
      ))}
    </div>
  );
}

export default MatchForm;
