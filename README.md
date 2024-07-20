# Employee_MERN_Project
# Employee Management System

## Overview

The Employee Management System is a full-stack web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. This application provides an intuitive interface for managing employee information within an organization. It offers features for adding, updating, and deleting employee records, as well as viewing a list of all employees.

## Features

- **Add Employees:** Easily add new employees to the system with necessary details such as name, position, department, and contact information.
- **Update Employee Information:** Update existing employee records to keep information current and accurate.
- **Delete Employees:** Remove employees from the system when they leave the organization.
- **Employee List View:** View a comprehensive list of all employees with sorting and search functionalities.
- **Responsive Design:** Fully responsive design for seamless use across different devices and screen sizes.

## Technologies Used

- **Frontend:**
  - React.js: A JavaScript library for building user interfaces.
  - Redux: A state management tool for managing application state.
  - CSS: Styling the application for a clean and modern look.

- **Backend:**
  - Node.js: JavaScript runtime for building the server-side of the application.
  - Express.js: A web application framework for Node.js.
  - MongoDB: A NoSQL database for storing employee data.
  - Mongoose: An ODM (Object Data Modeling) library for MongoDB and Node.js.

## Installation

To get a local copy of the project up and running, follow these steps:

1. **Clone the repository:**

```sh
git clone https://github.com/karthikkarthi-Ghost/Employee_MERN_Project.git
```

2. **Navigate to the project directory:**

```sh
cd employee-management-system
```

3. **Install backend dependencies:**

```sh
cd backend
npm install
```

4. **Install frontend dependencies:**

```sh
cd ../frontend
npm install
```

5. **Create a `.env` file in the `backend` directory and add your MongoDB connection string:**

```sh
MONGO_URI=your_mongodb_connection_string
```

6. **Start the backend server:**

```sh
cd backend
npm start
```

7. **Start the frontend server:**

```sh
cd ../frontend
npm start
```

The application should now be running on `http://localhost:3000` for the frontend and `http://localhost:5000` for the backend.

## Usage

1. **Navigate to the homepage:** View the list of all employees.
2. **Add a new employee:** Use the "Add Employee" button to add new employee details.
3. **Edit employee details:** Click on the "Edit" button next to an employee's record to update their information.
4. **Delete an employee:** Click on the "Delete" button next to an employee's record to remove them from the system.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or issues, please contact:

- **Name:** Karthik A N
- **Email:** karthikan3004@gmail.com
