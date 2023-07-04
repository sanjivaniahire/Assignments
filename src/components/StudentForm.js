import React, { useState } from 'react';

const StudentForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [grade, setGrade] = useState('');
  const [major, setMajor] = useState('');
  const [students, setStudents] = useState([]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleGradeChange = (e) => {
    setGrade(e.target.value);
  };

  const handleMajorChange = (e) => {
    setMajor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const student = {
      name: name,
      age: age,
      grade: grade,
      major: major,
    };

    setStudents([...students, student]);

    // Reset form values
    setName('');
    setAge('');
    setGrade('');
    setMajor('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Age:
          <input type="number" value={age} onChange={handleAgeChange} />
        </label>
        <br />
        <label>
          Grade:
          <input type="text" value={grade} onChange={handleGradeChange} />
        </label>
        <br />
        <label>
          Major:
          <input type="text" value={major} onChange={handleMajorChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Grade</th>
            <th>Major</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.grade}</td>
              <td>{student.major}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentForm;
