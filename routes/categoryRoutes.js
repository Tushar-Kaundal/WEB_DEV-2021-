const express = require("express");
const router = express.Router();
const databse = require("../database/db");
const { v4: uuidv4 } = require("uuid");

router.get("/all", (req, res) => {
  try {
    res.status(200).json({
      categories: databse.categories,
      message: "successfully fetched categories",
      status: "SUCCESS",
    });
  } catch (error) {
    res.status(200).json({
      categories: [],
      message: error.message,
      status: "FAILED",
    });
  }
});

router.post("/add", (req, res) => {
  try {
    const { name } = req.body;
    let newCategory = {
      name,
      id: uuidv4(),
    };
    databse.categories.push(newCategory);
    res.status(200).json({
      categories: databse.categories,
      message: "successfully fetched categories",
      status: "SUCCESS",
    });
  } catch (error) {
    res.status(200).json({
      categories: [],
      message: error.message,
      status: "FAILED",
    });
  }
});
