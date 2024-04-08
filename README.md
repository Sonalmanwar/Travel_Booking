# Welcome to Travel Booking Application

# Journey Junction

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Frontend
### Navigation Bar

The navigation bar consists of the following buttons:

- **Home**: Navigate to the home page.
- **About**: Navigate to the about page.
- **Contact**: Navigate to the contact page.
- **Login**: Navigate to the login page.
- **Register**: Navigate to the registration page.

### Home Page

The home page contains the following elements:

- Option to choose your transport:
  - **Train**: Navigate to the train details page.
  - **Bus**: Navigate to the bus details page.
 
 ### Contact Page
 The contact page allows users to get in touch with support or leave feedback.

Email: infotravelbooking@gmail.com

Phone: +1234567890


### About Page

The about page provides information about the Journey Junction application.

### Login Page

The login page contains a form for users to enter their email and password and a login button to authenticate.

### Registration Page

The registration page contains a form for users to enter their name, email, contact number, password, and a register button to create an account.


## Backend
### Endpoints

- **POST** `/logincheck`: Endpoint for user login authentication.
- **GET** `/start`: Endpoint to get started.
- **GET** `/index`: Endpoint for login form.
- **GET** `/Register`: Endpoint for registration form.
- **GET** `/Home`: Endpoint for the home page.
- **GET** `/about`: Endpoint for the about page.
- **GET** `/contact`: Endpoint for the contact page.
- **GET** `/bus`: Endpoint for bus details page.
- **GET** `/train`: Endpoint for train details page.
- **GET** `/login`: Endpoint for login page.
- **POST** `/Home1`: Endpoint to save record.
- **GET** `/get`: Endpoint to get form values.
- **DELETE** `/travel/{email}`: Endpoint to delete a record by email.
- **PUT** `/update/{email}`: Endpoint to update a booking by email.




