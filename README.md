# Backend Setup Guide

This README explains how to set up and run the backend application
locally.

------------------------------------------------------------------------

## Prerequisites

Make sure you have the following installed:

-   Node.js (v18+ recommended)
-   npm
-   PostgreSQL
-   Sequelize CLI (`npm install -g sequelize-cli`)

------------------------------------------------------------------------

## Installation Steps

### 1. Install dependencies

``` bash
npm install
```

### 2. Generate token secrets

``` bash
cd token_secrets
node keygen.js
cd ..
```

### 3. Configure Environment Variables

Create/Make Changes to `.env` file if your pgadmin has different user or password change according to you

``` env
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=todo-app
DB_HOST=localhost
DB_DIALECT=postgres
```

> ⚠️ Make sure PostgreSQL is running and the credentials match your
> local setup.

------------------------------------------------------------------------

### 4. Create and migrate the database

``` bash
npx sequelize db:create
npx sequelize db:migrate
```

------------------------------------------------------------------------

### 5. Start the development server

``` bash
npm run dev
```

The backend server should now be running successfully 🚀

------------------------------------------------------------------------

## Troubleshooting

-   Ensure PostgreSQL service is running
-   Double‑check `.env` values
-   Verify Sequelize config is reading from environment variables

------------------------------------------------------------------------

## Notes

-   Do not commit `.env` or secret keys to version control
-   Regenerate secrets if compromised

------------------------------------------------------------------------

Happy Coding 👨‍💻👩‍💻
