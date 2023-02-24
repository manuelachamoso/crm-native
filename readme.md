# Customer Management Application - React Native

This is the final project from the Udacity course, "Senior Front End Engineer - OLX Scholarship". It is a customer management application developed using React Native, Redux, and Redux-Saga. The aim of this application is to provide a platform for managing customer information such as name, address, phone number, and region.

The application is designed to allow users to create new customers, view a list of existing customers, and edit or delete existing customers. The customers are categorized based on their region, and a user can filter the list of customers based on the region.

The application makes use of Redux to manage the state of the application, and Redux-Saga is used to manage the application's side effects, such as network requests. The application has been designed with modularity and scalability in mind, making it easy to add new features and maintain the existing ones.
  
![CRM Gif](https://github.com/manuelachamoso/crm-native/blob/main/example.gif)

* Clone the repository to your local machine.
* Navigate to the project directory.
* Run ``` yarn install ``` or ```npm install``` to install all the required dependencies.
* Install the Expo CLI tool globally: ``` npm install --global expo-cli ```. 
* Run ``` yarn start ``` or ```npm start``` to start the development server.
* Build and run the application on an emulator or a physical device.
* The application has been thoroughly tested to ensure that it works correctly on a variety of devices and platforms. 
* However, if you encounter any bugs or issues, please feel free to open an issue on the repository's issue tracker.

## About the project
The project was built using Expo and has several screens (views) that provide a complete user experience:

* Welcome Screen: This is the first screen the user will see when opening the app.
* List of regions: This screen displays a list of regions, allowing the user to select a region and view a list of customers associated with that region.
* List of customers by region: This screen displays a list of customers in a selected region.
* Show Customer Screen: This screen displays detailed information about a selected customer.
* New Customer Screen: This screen allows the user to create a new customer.
* Edit Customer Screen: This screen allows the user to edit an existing customer's information.

Navigation elements in the app allow users to click through the different screens, and the React Navigation library was used for navigation. The project uses stack navigation documentation, and all pages should be accessible with no navigation-related errors.

## Features
* Create new clients
* View existing clients
* Edit existing clients
* Delete existing clients

## Technologies
* JavaScript
* CSS
* Redux
* React Native
* Redux-Saga

## Usage
The application is user-friendly and easy to use. Simply click on the "Create New Client" button to create a new client and enter the required information. The information for existing clients can be viewed by clicking on the "View Clients" button. To edit or delete a client, simply click on the corresponding buttons for each client.

## Owner
The project was created by Manuela Chamoso, and it provides a comprehensive user experience for managing customers in different regions.
