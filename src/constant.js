const dotenv = require('dotenv').config()
const fs = require("fs");
const path = require("path");
const dirname = path.dirname(__filename);

const ACCESS_PRIVATE_KEY = fs.readFileSync(path.join(dirname, "../token_secrets/access_private_key.pem"),"utf-8");
const ACCESS_PUBLIC_KEY = fs.readFileSync(path.join(dirname, "../token_secrets/access_public_key.pem"),"utf-8");
const REFRESH_PRIVATE_KEY = fs.readFileSync(path.join(dirname, "../token_secrets/refresh_private_key.pem"),"utf-8");
const REFRESH_PUBLIC_KEY = fs.readFileSync(path.join(dirname, "../token_secrets/refresh_public_key.pem"),"utf-8");
const PUBLIC_JWT_EXPIRY = String(process.env.ACCESS_TOKEN_EXPIRY)

const CORS_CONFIG = {
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  origin: [
    'http://localhost:5173',
  ],
  // origin:"*"
};

module.exports = {
    ACCESS_PRIVATE_KEY,
    CORS_CONFIG,
    ACCESS_PUBLIC_KEY,
    REFRESH_PRIVATE_KEY,
    REFRESH_PUBLIC_KEY,
    PUBLIC_JWT_EXPIRY
}