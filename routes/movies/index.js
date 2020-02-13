const {Router} = require('express')
const { userValidationRules, validate } = require('./validator.js')
const router = Router()
const movies = require('./movies.json')
const _ = require('underscore')


router.get('/', validate, (req,res)=>{
   res.json(movies)
})

router.post('/',userValidationRules(), (req, res)=> {
    const {title,director,year,rating} = req.body
    if(title && director && year && rating) {
    let movieSave = {id:movies.length +1,...req.body}
    movies.push(movieSave)
    res.json(movieSave) 
    }
    else {
        res.status(500).json({error:'1', msn:'error de la informacion'})
    }
})

router.delete('/:id', (req,res)=>{
    console.log(req.params)
    let objFilter=movies.filter(function(movie){
            return movie.id = req.params.id  
           
    })
    console.log(objFilter) 
    res.json(objFilter)
 })

module.exports= router