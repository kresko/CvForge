const defaultDataset = {
    personalInfo: {
      fullName: "Edo Kreš",
      email: "edo.kres@gmail.com",
      phoneNumber: "+385 99 999 999",
      address: "Zagreb, Croatia",
    },

    sections: {
      education: {
        label: 'Education',
        bachelorDegree: {
          degree: 'Bachelor degree in physics',
          institutionName: 'Tebeth University',
          startDate: '09/2015',
          endDate: '09/2018',
          location: 'Tebeth',
          id: 'bachelorDegreeEducation'
        },
        mastersDegree: {
          degree: "Master's degree in applied physics",
          institutionName: 'Utgaard University',
          startDate: '10/2018',
          endDate: '10/2024',
          location: 'Utgaard',
          id: 'mastersDegreeEducation'
        }
      },
  
      experience: {
        label: 'Professional Experience',
        theoreticalPhysicistJob: {
          institutionName: 'Tebeth citadel',
          occupation: 'Theoritecal Physicist',
          jobDescription: 'Designing, building, and conducting experiments to test hypotheses, validate theories, and discover new phenomena.',
          startDate: '09/2015',
          endDate: '10/2018',
          location: 'Tebeth',
          id: 'theoreticalPhysicistJobExperience'
        },
        experimentalPhysicistJob: {
          institutionName: 'Black Mesa Labs',
          occupation: 'Experimental Physicist',
          jobDescription: 'Designing, building, and conducting experiments to test hypotheses, validate theories, and discover new phenomena.',
          startDate: '10/2018',
          endDate: 'present',
          location: 'Utgaard',
          id: 'experimentalPhysicistJobExperience'
        }
      }
    }
}

export default defaultDataset;