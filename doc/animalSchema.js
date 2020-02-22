"use strict";

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const animalSchema = new Schema({ name: String, type: String });

animalSchema.method.findSimilarTypes = function(cb) {
  return this.model("Animal").find({ type: this.type }, cb);
};

var Animal = mongoose.model("Animal", animalSchema);

var dog = new Animal({ type: "dog" });

dog.findSimilarTypes((err, dogs) => {
  console.log(dogs);
});
