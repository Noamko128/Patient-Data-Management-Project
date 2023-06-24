# Chronic Patient Data Management System

This project aims to develop a web-based system for managing chronic patients data using web technologies and integration with free cloud services. The system allows it's users to input and retrieve patient information, and receive initial diagnoses based on symptoms.

## Features

- Patient Data Input: The system allows for the input of patient details, including their first name, last name, date of birth, a picture of the patient, and up to five potential medical conditions they may be experiencing.

- Patient Card Retrieval: The system provides the functionality to retrieve a patient card based on the patient's ID, allowing users quick access to patient information.

- Image Verification: As part of the data entry process, the system performs a face image validation by leveraging the Imagga service. This integration with the Image Recognition API, ensures that the uploaded image meets the requirement of being a face image.

- Medical Condition Summary: Once the patient's details are saved, the system automatically generates a succinct summary, using Chat GPT, that provides information about the medical conditions the patient is experiencing. This summary greatly assists in swiftly comprehending the patient's condition.

- Symptom-based Diagnosis: users can input patient symptoms into the system and receive an initial diagnosis based on the integrated diagnostic service.

### To enhance the functionality of the system, integration with various cloud services is implemented. These services include:

## Cloud Computing Service:
1. Image Recognition API or Computer Vision AI (Imagga): Used to check if the uploaded image contains a face.
2. ChatGPT: Utilizing this service (GPT) for obtaining an initial diagnosis of the patient's condition and acquiring a summary of the medical conditions they are experiencing.

## Cloud Storage Service:
Patient data is securely stored using MongoDB Storage service, a NoSQL database known for its scalability and flexibility.

## Technologies Used

The project is developed using Express.js and Node.js, leveraging their capabilities for web application development and server-side scripting. The integration with cloud services adds functionalities and enhances the overall system capabilities.


*** This project was developed as part of a cloud computing course during my first degree in Digital Medical Tecnologies
