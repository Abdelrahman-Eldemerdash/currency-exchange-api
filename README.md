# Currency Exchange API

Welcome to the Currency Exchange API project. This guide will help you get the project up and running either by setting it up locally or using a Docker image.

## Getting Started

### Local Setup

1. **Download the Project**
    - Clone the repository or download the project zip file and extract it to your desired directory.

2. **Open Terminal**
    - Navigate to the project's root directory.

3. **Navigate to the API Directory**
    ```bash
    cd api
    ```

4. **Start the Application**
    ```bash
    npm start
    ```

### Using Docker

Alternatively, you can run the project using Docker. Follow these steps:

1. **Get the Docker Image**
    - Pull the Docker image from Docker Hub.
    ```bash
    docker pull eldemerdash19/currency_exchange_api
    ```

2. **Run the Docker Container**
    - Start the container with the following command:
    ```bash
    docker run -p 5000:5000 eldemerdash19/currency_exchange_api
    ```

## API Documentation

For detailed API documentation, open your browser and navigate to:

- [API Documentation](http://localhost:5000/api-docs/)

## Using the API

To get the exchange rate between two currencies, use the following endpoint:

- `GET /api/exchangeRate/{fromCurrency}/{toCurrency}`

Replace `{fromCurrency}` and `{toCurrency}` with the respective currency codes you want to convert.

### Example Request

- **Endpoint:**
    ```
    http://localhost:5000/api/exchangeRate/USD/EUR
    ```

- **Response:**
    ```json
    {
      "fromCurrency": "USD",
      "toCurrency": "EUR",
      "exchangeRate": 0.85
    }
    ```

---

By following these steps, you should be able to set up and use the Currency Exchange API either locally or via Docker

---
