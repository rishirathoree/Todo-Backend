npm ci
cd token_secrets
node keygen.js
cd ..
npx sequelize db:create
npx sequelize db:migrate
npm run dev