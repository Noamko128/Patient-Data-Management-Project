# Chronic Patient Data Management System

This project aims to develop a web-based system for managing chronic patient data using web technologies and integration with free cloud services. The system allows healthcare professionals to input and retrieve patient information, perform checks on patient data, and receive initial diagnoses based on symptoms.

## Features

- Patient Data Input: The system enables the entry of patient information, including first name, last name, date of birth, patient picture, and five potential medical conditions the patient may suffer from.

- Data Storage: Patient data is securely stored using a Storage service. The recommended choice is MongoDB, integrated as part of the Atlas provider, a NoSQL database known for its scalability and flexibility.

- Patient Card Retrieval: The system provides the functionality to retrieve a patient card based on the patient's ID card, allowing healthcare professionals quick access to patient information.

- Image Verification: During data entry, the system checks whether the uploaded image is a face image. This is achieved by integrating with the Image Recognition API or Computer Vision AI, specifically using the Imagga service.

- Medical Condition Summary: Patient cards include a summary of information about the medical conditions the patient suffers from. This information helps healthcare professionals quickly understand the patient's condition.

- Symptom-based Diagnosis: Healthcare professionals can input patient symptoms into the system and receive an initial diagnosis based on the integrated diagnostic service. One example of such a service is the EndlessMedicalAPI, which provides initial diagnoses based on symptoms.

## Cloud Services Integration

To enhance the functionality of the system, integration with various cloud services is implemented. These services include:

1. Image Recognition API or Computer Vision AI (Imagga): Used to check if the uploaded image contains a face.

2. ChatGPT: Integrated chat service (GIFITI) to facilitate communication and collaboration among healthcare professionals involved in patient care.

## Installation and Setup

To run the project locally, follow these steps:

1. Clone the repository from GitHub.
2. Install the required dependencies using npm or yarn.
3. Set up the necessary environment variables for cloud service integration.
4. Run the application using the provided npm or yarn commands.

## Additional Bonuses

In addition to the core project requirements, the system also includes input validation at the browser level. This validation ensures the correctness of the entered data, including the requirement for at least one medical condition to be selected from the five potential conditions.

## Technologies Used

The project is developed using Express.js and Node.js, leveraging their capabilities for web application development and server-side scripting. The integration with cloud services adds functionalities and enhances the overall system capabilities.

## Contributing

Contributions to this project are welcome. If you encounter any issues or have suggestions for improvement, please submit a pull request or open an issue in the GitHub repository.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

*** This project was developed as part of a cloud computing course during my first degree in Digital Medical Tecnologies
