# MERN Social

A social networking application built using the MERN stack (MongoDB, Express.js, React, Node.js).

## Project Structure

* `mern-social/` - Root directory
    * `social_frontend/` - Contains the React frontend code
    * `social_backend/` - Houses the Express.js backend server

## Prerequisites

* **Node.js and npm:** Make sure you have Node.js and npm installed on your machine.
* **MongoDB:** You'll need a running MongoDB instance.

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/brett-buskirk/mern-social.git
   cd mern-social

2. **Install dependencies:**

    * **Frontend:**

        ```bash
        cd social_frontend
        npm install
        ```

    * **Backend:**

        ```bash
        cd ../social_backend
        npm install
        ```

3. **Set up environment variables:**

    Create a `.env` file in the `social_backend` directory.

    Add your MongoDB connection string and any other necessary configuration variables.

    Example `.env` file:

    ```
    MONGODB_URI=mongodb://localhost:27017/mern-social
    # Add other variables as needed
    ```

4. **Start the application:**

    * **Backend:**

        ```bash
        cd social_backend
        npm start
        ```

    * **Frontend:** Open a new terminal window/tab and run:

        ```bash
        cd social_frontend
        npm start
        ```

        This should open your default browser and display the MERN Social application.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
