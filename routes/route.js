let express = require('express')
let router = express.Router();
let mongojs = require('mongojs')

let db = mongojs("mongodb://<user>:<password>@.mlab.com:/databasename",['movies']);

router.get('/',(req,res) => {
    res.send("/api/movies for multiple movies and /movies/:id for single")
})
//Get all movies
router.get('/api/movies',(req,res,next)=>{
    db.movies.find((err,movies)=>{
        if(err){res.send(err)}
        else res.json(movies);
    })
})
//Get a single movie
router.get('/api/movies/:id',(req,res,next)=>{
    db.movies.findOne({_id:mongojs.ObjectId(req.params.id)},(err,task)=>{
        if(err) res.send(err)
        else res.json(task);
  })
})
/*
//Post request
router.post('/api/movie',(req,res,next) =>{
    let movie = req.body
    if(!movie.title || !movie.director || !movie.summary)
    {
    res.status(400)
    res.json({
        "error":"Data Not Valid"
    })
    }
    else {
    db.movies.save(movie,(err,movie)=>{
        if(err) res.send(err)
        else res.json(movie)
        })
    }
})
*/
module.exports = router