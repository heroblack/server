const {Router} = require('express')
const router = Router();

router.get('/', (req,res)=>{
    let listaMovies = {
        nombre:'Titanic',
        ano:2001,
        director:'James Cameron',
        rating:8.5
    }
    res.json(listaMovies)
})


module.exports = router
