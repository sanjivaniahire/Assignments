import React from 'react'
import StudentForm from './components/StudentForm';
import './App.css'; // Import the CSS file

const App = () => {
  return (
    <div className="app-container">
      <h1>Student Information Form</h1>
      <StudentForm />
    </div>
  );
};

export default App;
