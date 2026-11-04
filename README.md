# Smart Tourism API

## [University of Piraeus](https://www.unipi.gr/en/home/) | [Department of Informatics](https://cs.unipi.gr/en/)
**MSc course**: Advanced Programming Full Stack Javascript Frameworks

**Semester**: 1

**Project Completion Year**: 2025

## Description
The Smart Tourism API is a web service designed to support functionality for smart tourism. It allows users to access and manage country-related data, including quality of life, cost of living, and dining costs. Users can filter and sort countries based on various criteria to aid in travel decisions.

The API is built with Node.js, Express and MongoDB (Mongoose). On the first start it seeds the database automatically from a merged country dataset.

## Features
- **Fetch Countries:** Retrieve a list of all countries available in the database.
- **Filter and Sort:** Get the top or bottom countries for a chosen criterion, such as quality of life or cost of living, with a limit on the number of results.
- **CRUD Operations:** Manage country data with Create, Read, Update, and Delete functionalities.
- **Request Validation:** Middleware validates filter parameters and update payloads before they reach the database.
- **Error Handling:** A central error-handling middleware returns consistent JSON error responses.
- **Automatic Seeding:** The database is filled from `data/Merged_Country_Data.json` when it is empty.
- **Request Logging:** HTTP requests are logged with Morgan.

## Data Model

Each country has the following fields:

| Field | Type | Description |
|---|---|---|
| `Country` | String | Country name |
| `QualityOfLife` | Number | Quality of life score |
| `Adventure` | Number | Adventure score |
| `Heritage` | Number | Cultural heritage score |
| `CostOfLivingIndex` | Number | Cost of living index |
| `RestaurantPriceIndex` | Number | Restaurant price index |

## API Reference

Base URL: `http://localhost:8080/api/v1/countries`

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/` | Get all countries |
| `GET` | `/filter?criterion=<field>&type=<lowest\|highest>&limit=<n>` | Get the `n` countries with the lowest or highest value for a criterion |
| `POST` | `/` | Add a new country |
| `PUT` | `/:id` | Update a country |
| `DELETE` | `/:id` | Delete a country |

Valid values for `criterion`: `QualityOfLife`, `Adventure`, `Heritage`, `CostOfLivingIndex`, `RestaurantPriceIndex`.

**Example:** the 5 countries with the highest quality of life:

```bash
curl "http://localhost:8080/api/v1/countries/filter?criterion=QualityOfLife&type=highest&limit=5"
```

## Technologies Used
- Node.js
- Express
- MongoDB Atlas with Mongoose
- dotenv
- Morgan
- Nodemon

## Project Structure

```
app.js                      # Express app, middleware and routes
server.js                   # Server start-up and database seeding
/config
    DBconfig.js             # MongoDB connection
    seedDatabase.js         # Seeds the database from the JSON dataset
/controllers
    countryController.js    # Request handlers
/middlewares
    errorHandler.js         # Central error handling
    validateFilter.js       # Validates filter query parameters
    validateUpdate.js       # Validates update payloads
/models
    Country.js              # Mongoose schema
/routes
    countryRoutes.js        # API routes
/data
    Merged_Country_Data.json
```

## Setup Instructions

1. Clone the repository:

    ```bash
    git clone https://github.com/ApostolisSiampanis/smart-tourism-api.git
    cd smart-tourism-api
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Create a `config.ENV` file in the project root with your own MongoDB Atlas details:

    ```
    MONGO_USERNAME=<your-username>
    MONGO_PASSWORD=<your-password>
    MONGO_CLUSTER=<your-cluster>
    MONGO_DB_NAME=<your-database>
    MONGO_APP_NAME=<your-app-name>
    PORT=8080
    ```

4. Start the server:

    ```bash
    npm start
    ```

## Acknowledgments
This project was developed as part of the "Advanced Programming Full Stack Javascript Frameworks" MSc course at the University of Piraeus. Contributions and feedback are always welcome!

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
