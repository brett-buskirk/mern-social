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

    ```bash
    touch .env
    ```

    Add your MongoDB connection string and any other necessary configuration variables.

    Example `.env` file used for this project:

    ```
    MONGODB_URI=mongodb://127.0.0.1:27017/social_backend
    # Add other variables as needed
    ```

5. **Start the application:**

    * **Backend:** Make sure you're still in `social_backend` and run:

        ```bash
        npm start
        ```

    * **Frontend:** Open a new terminal window/tab and run:

        ```bash
        cd social_frontend
        npm start
        ```

        This should open your default browser and display the MERN Social application.

## Using the App

When the app first loads, it won't have any posts yet:

![image](https://github.com/user-attachments/assets/9b989a43-8407-4d78-acc8-8b54771f172f)

Start by clicking on `Create Post`:

![image](https://github.com/user-attachments/assets/a7d510aa-febb-4863-8f86-dcf52b43a2fe)

Create a post and upload an image if you want:

![image](https://github.com/user-attachments/assets/098764b7-4c28-4e7c-96b1-8fc05d541740)

Click `Post` and then click on `Home` to see your post:

![image](https://github.com/user-attachments/assets/741b93fb-ee33-4792-bd13-2f70d6bb2f61)

At the bottom of your post, you can click the `Like` button or even add a comment:

![image](https://github.com/user-attachments/assets/1ae30b50-c251-4e5e-bc0f-d60efbade0b5)

![image](https://github.com/user-attachments/assets/641d2ead-cf5c-41e8-b0a8-c9209a1b3e8b)

## Make it Your Own

Remember that this is only a basic example of a MERN application. Feel free to experiment and make your own changes as you explore how this code works.

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.
