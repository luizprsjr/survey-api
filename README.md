# Survey API

Welcome to the Survey API project! This API is designed for studying Clean Architecture and Test-Driven Development (TDD) principles. Follow the instructions below to set up and run the project.

## Installation

To install the project dependencies, open your terminal and navigate to the project directory. Then, run the following command:

```bash
npm install
```

## Prerequisites
Before you start the Survey API, make sure you have MongoDB installed and running locally on your machine. If you're using a Mac, you can check if MongoDB is running by executing the following command:

```bash
brew services list
```

If MongoDB is not running, start it with the following command:

```bash
brew services start mongodb-community
```

To stop MongoDB, use the command:

```bash
brew services stop mongodb-community
```

If you are not using macOS or if MongoDB is not installed locally, please refer to the [MongoDB documentation](https://www.mongodb.com/docs/manual/tutorial/) for installation instructions.

## Getting Started
Once you've installed the dependencies and ensured that MongoDB is running, you can start the Survey API by running:

```bash
npm start
```

The API server will start, and you'll see logs indicating that the server is running on port 5050.
