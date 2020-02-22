"use strict";

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = Schema({
  name: String,
  picture: String,
  price: { type: Number, default: 0 },
  category: { type: String, enum: ["computers", "phones", "accesorios"] },
  description: String
});

const UserSchema = Schema({
  email: { type: String, unique: true, lowercase: true },
  displayName: String,
  avatar: String,
  password: { type: String, select: false },
  signupDate: { type: Date, default: Date.now() },
  lastLogin: Date,

  price: { type: Number, default: 0 },
  category: { type: String, enum: ["computers", "phones", "accesorios"] },
  description: String
});
