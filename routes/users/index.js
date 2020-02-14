const {Router} = require('express')
const RestApi = require('../../api/RestApi')
const router = Router()

router.get('/', async (req,res)=>{
    const api = new RestApi('https://jsonplaceholder.typicode.com')
    let response = await api.get('/users',{}, 2000);
    res.json(response.data)
})


module.exports = router