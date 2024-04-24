import React, { createContext, useState, useContext } from 'react';

const PatientsContext = createContext();

export const usePatients = () => useContext(PatientsContext);

export const PatientsProvider = ({ children }) => {
  const [patients, setPatients] = useState([
    { name: 'Agnes Young', image: require('./assets/patient_images/patient1.jpeg'),
        age: 76, dob: "April 23, 1948", hometown: "St. Louis, MO", family: "Julie Johnson"
    },
    { name: 'Doreen Johnson', image: require('./assets/patient_images/patient2.jpeg') 
    , age: 76, dob: "April 23, 1948", hometown: "St. Louis, MO", family: "Julie Johnson"    
    },
    { name: 'Harvey Walker', image: require('./assets/patient_images/patient3.jpeg') 
    , age: 76, dob: "April 23, 1948", hometown: "St. Louis, MO", family: "Julie Johnson" 
    },
    { name: 'Aliana Garcia', image: require('./assets/patient_images/patient4.jpeg') 
    , age: 76, dob: "April 23, 1948", hometown: "St. Louis, MO", family: "Julie Johnson" },
    { name: 'An Chen', image: require('./assets/patient_images/patient5.jpeg') 
    , age: 76, dob: "April 23, 1948", hometown: "St. Louis, MO", family: "Julie Johnson" },
  ]);

  return (
    <PatientsContext.Provider value={{ patients, setPatients }}>
      {children}
    </PatientsContext.Provider>
  );
};
