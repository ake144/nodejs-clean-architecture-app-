# nodejs-clean-architecture-app-


📌 Project Structure
This project follows the Clean Architecture pattern, separating concerns into different layers:

domain/ → Business logic & entities
application/ → Use cases (services)
interfaces/ → Controllers & routes
infrastructure/ → Database & external services
📂 Folder Structure
Here’s how the project is structured:

pgsql
Copy
Edit
clean-arch/
│── app/
│   ├── interfaces/  (Controllers & Routes)
│   │   ├── controllers/
│   │   │   ├── UserController.js
│   │   ├── routes/
│   │       ├── userRoutes.js
│   │
│   ├── application/ (Use Cases)
│   │   ├── CreateUser.js
│   │   ├── GetUser.js
│   │
│   ├── domain/ (Core Business Logic)
│   │   ├── models/
│   │   │   ├── User.js (Includes validation logic)
│   │   ├── repositories/
│   │       ├── IUserRepository.js  (Abstract repository)
│   │
│   ├── infrastructure/ (External Dependencies)
│   │   ├── config/
│   │   │   ├── db.js
│   │   ├── repositories/
│   │   │   ├── UserRepository.js (Implements IUserRepository)
│   │   ├── orm/mongoose/
│   │       ├── UserSchema.js (Defines MongoDB schema)
│   │   ├── webserver/
│   │       ├── server.js
│
│── test/
│   ├── user.test.js (Unit tests for API)
│
│── .env (Environment variables)
│── .gitignore (Exclude .env & node_modules)
│── index.js (Entry point)
📸 Project Structure Image
(Replace with actual uploaded image in Markdown when hosted on GitHub, or provide a link to the image stored in your repository.)

css
Copy
Edit
![Folder Structure](./file.png)
