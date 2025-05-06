const employees = [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Prepare report",
          "description": "Prepare the monthly financial report.",
          "date": "2025-05-01",
          "category": "Finance"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Update client list",
          "description": "Update the CRM with the latest client information.",
          "date": "2025-04-25",
          "category": "Sales"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "title": "Organize team meeting",
          "description": "Schedule and organize the next project team meeting.",
          "date": "2025-05-03",
          "category": "Management"
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Design new logo",
          "description": "Create new branding logo for upcoming campaign.",
          "date": "2025-05-02",
          "category": "Design"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Fix website bugs",
          "description": "Resolve critical bugs on the landing page.",
          "date": "2025-04-28",
          "category": "Development"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "title": "Submit project plan",
          "description": "Failed to submit the new project plan document.",
          "date": "2025-04-27",
          "category": "Project Management"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "title": "Attend workshop",
          "description": "Participate in AI development workshop.",
          "date": "2025-05-05",
          "category": "Learning"
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Client meeting",
          "description": "Meet with client to discuss new features.",
          "date": "2025-04-30",
          "category": "Client Relations"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "title": "Data backup",
          "description": "Backup server data to the cloud.",
          "date": "2025-05-01",
          "category": "IT Support"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Security audit",
          "description": "Complete internal security audit checklist.",
          "date": "2025-04-26",
          "category": "Cybersecurity"
        },
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Deploy app update",
          "description": "Deploy the v2.3 update for the mobile app.",
          "date": "2025-05-03",
          "category": "Development"
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Social media campaign",
          "description": "Launch the summer product launch campaign.",
          "date": "2025-05-04",
          "category": "Marketing"
        },
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Research competitor strategy",
          "description": "Analyze strategies of main competitors.",
          "date": "2025-05-06",
          "category": "Research"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Draft new ad copies",
          "description": "Write new advertisement content for Facebook ads.",
          "date": "2025-04-24",
          "category": "Content Writing"
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Prepare invoice list",
          "description": "List of pending invoices for April 2025.",
          "date": "2025-04-29",
          "category": "Finance"
        },
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Annual performance review",
          "description": "Set up meetings for annual employee reviews.",
          "date": "2025-05-07",
          "category": "HR"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "title": "System upgrade",
          "description": "Upgrade internal HR management system to latest version.",
          "date": "2025-05-02",
          "category": "IT"
        }
      ]
    }
  ];
  
  const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  ];
  

    export const setLocalStorage = () => {
        localStorage.setItem('employees', JSON.stringify(employees));
        localStorage.setItem('admin', JSON.stringify(admin));
      
    }

    export const getLocalStorage = () => {
        const employees= JSON.parse(localStorage.getItem('employees'));
        const admin= JSON.parse(localStorage.getItem('admin'));

        return {employees, admin};
    }