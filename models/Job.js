const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jobSchema = mongoose.Schema(
  {
    job: {
      type: String,
      required: false,
    },
    company: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
    salary: {
      type: Number,
      required: false,
    },

    email: {
      type: String,
      required: false,
    },
    phone: {
      type: String,
      required: false,
    },
    field: {
      type: String,
      required: false,
    },
    // company: {
    //   type: Schema.Types.ObjectId,
    //   ref: "User",
    // },
    // Employee: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: "User",
    //   },
    // ],
  },
  { timestamps: true }
);
module.exports = mongoose.model("Job", jobSchema);
