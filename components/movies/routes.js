const { Router } = require("express");
const { userValidationRules, validate } = require("./validator.js");
const router = Router();
const movies = require("./movies.json");
const controller = require("./controller");
const response = require("../../network/response");
router.get("/", validate, (req, res) => {
  response.succes(req, res, movies);
});

router.post("/", userValidationRules(), (req, res) => {
  const { title, director, year, rating } = req.body;
  if (title && director && year && rating) {
    let movieSave = { id: movies.length + 1, ...req.body };
    movies.push(movieSave);
    res.json(movieSave);
  } else {
    res.status(500).json({ error: "1", msn: "error de la informacion" });
  }
});

/**
 * 
 * const personas = [pedro, nelly, blacky, cassey, stefany, sasha];

const esAlta = ({ altura }) => altura > 1.8;

let personaAltas = personas.filter(function(persona) {
  return persona.altura > 0.8;
});
 */

router.delete("/:id", (req, res) => {
  console.log(req.params);

  movies.forEach(function(movie, index) {
    if (movie.id == req.params.id) {
      console.log(index);
      movies.splice(index, 1);
      return;
    }
  });

  res.send("eliminado");
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, director, year, rating } = req.body;
  if (title && director && year && rating) {
    movies.forEach(function(movie, index) {
      if (movie.id == req.params.id) {
        movie.title = title;
        movie.director = director;
        movie.year = year;
        movie.rating = rating;
      }
    });
    res.json("actualizado");
  } else {
    res.status(500), json({ error: "there was an error." });
  }
});

module.exports = router;
