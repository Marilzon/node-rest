# NODE REST

## Introduction

Hello, I'm Marilzon de Sousa. This repository is dedicated to training patterns and creating a complete NODE REST API with NODE from scratch using only native Node.js modules.

## Features

- Create a complete Node.js REST API
- Utilize only native Node.js modules

## Patterns

In this project, we follow a specific pattern structure to organize code:

- **N - Layer**

## src/
 -  database/: Contains database-related files and configurations.
 -  entities/: Stores core data structures or business entities, like user profiles or product listings.
 -  factories/: Houses files responsible for creating instances of entities, making it easier to manage entity creation.
 -  handler/: Handles HTTP requests and responses, often containing route-specific logic.
 -  main.js: The entry point for your application, where server initialization occurs.
 -  routes/: Contains route definitions and controllers for handling HTTP requests and routing to appropriate logic.
 -  services/: Houses business logic that doesn't belong in route handlers or data access, providing a modular approach to application functionality.
 -  shared/: Stores shared utility functions or modules utilized across different parts of the application, promoting code reusability.

## tests
 -   Integration Tests: Verify how different parts of a system work together, testing their interactions and ensuring seamless cooperation between components.
 -
 -   Unit Tests: Evaluate individual code units in isolation, such as functions or methods, to validate their behavior under various conditions, without testing interactions with external dependencies.

## License

This project is licensed under the [MIT License](LICENSE).
