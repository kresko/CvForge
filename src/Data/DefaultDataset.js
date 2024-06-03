const defaultDataset = {
    //general glossary
    generalGlossary: {
      delete: 'Delete',
      cancel: 'Cancel',
      save: 'Save'
    },

    generalGlossaryClassNames: {
      delete: 'delete',
      cancel: 'cancel',
      save: 'save'
    },

    personalInfo: {
      fullName: "Edo Kreš",
      email: "edo.kres@gmail.com",
      phoneNumber: "+385 99 999 999",
      address: "Zagreb, Croatia",
    },

    emptyPersonalInfo: {
      fullName: "",
      email: "",
      phoneNumber: "",
      address: "",
    },

    
    ids: {
      bachelorDegreeEducation: true,
      mastersDegreeEducation: true,
      theoreticalPhysicistJobExperience: true,
      experimentalPhysicistJobExperience: true
    },

    education: {
      label: 'Education',
      bachelorDegree: {
        degree: 'Bachelor degree in physics',
        institutionName: 'Tebeth University',
        startDate: '09/2015',
        endDate: '09/2018',
        location: 'Tebeth'
      },
      mastersDegree: {
        degree: "Master's degree in applied physics",
        institutionName: 'Utgaard University',
        startDate: '10/2018',
        endDate: '10/2024',
        location: 'Utgaard'
      }
    },

    educationFormLabels: {
      school: 'School',
      degree: 'Degree',
      startDate: 'Start Date',
      endDate: 'End Date',
      address: 'Address'
    },

    emptyEducation: {
      label: 'Education',
      bachelorDegree: {
        degree: '',
        institutionName: '',
        startDate: '',
        endDate: '',
        location: ''
      },
      mastersDegree: {
        degree: "",
        institutionName: '',
        startDate: '',
        endDate: '',
        location: ''
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
      },
      experimentalPhysicistJob: {
        institutionName: 'Black Mesa Labs',
        occupation: 'Experimental Physicist',
        jobDescription: 'Designing, building, and conducting experiments to test hypotheses, validate theories, and discover new phenomena.',
        startDate: '10/2018',
        endDate: 'present',
        location: 'Utgaard',
      }
    },

    experienceFormLabels: {
      companyName: 'Company Name',
      positionTitle: 'Position Title',
      startDate: 'Start Date',
      endDate: 'End Date',
      location: 'Location',
      description: 'Description'
    },

    emptyExperience: {
      label: 'Professional Experience',
      theoreticalPhysicistJob: {
        institutionName: '',
        occupation: '',
        jobDescription: '',
        startDate: '',
        endDate: '',
        location: '',
      },
      experimentalPhysicistJob: {
        institutionName: '',
        occupation: '',
        jobDescription: '',
        startDate: '',
        endDate: '',
        location: '',
      }
    },

    forms: {
      formController: 'formController',
      formCustomizer: 'formCustomizer'
    }
}

export default defaultDataset;