
//REQUIRED DEPENDENCIES
const express = require('express')
const { MongoClient } = require('mongodb')
const app = express()
const mongoClient = require ('mongodb').MongoClient
const  PORT = 3000
require('dotenv').config()

//DECLARED DB VARIABLES
let db,
dbConnectionStr = process.env.DB_STRING,
dbName = 'star-trek-api'

//CONNECTED TO MONGODB
MongoClient.connect(dbConnectionStr)
  .then(client=>{
    console.log(`connected to ${dbName} Database`)
    db = client.db(dbName)
  })

//SET MIDDLEWARE
  app.set('view engine','ejs')
  app.use(express.static('public'))
  app.use(express.urlencoded({extended: true}))
  app.use(express.json())

  //CRUD METHODS
  app.get('/', (request,reponse) => {
   let contents = db.collection('alien-info').find().toArray()
   console.log(contents);
  })

  app.post('/api', (request,reponse) => {

  })

  app.put('/updateEntry', (request,reponse) => {

  })

  app.delete('/deleteEntry', (request,reponse) => {

  })





//SET UP LOCALHOST ON PORT
  app.listen(process.env.PORT || PORT,()=>{
    console.log(`Server running on port ${PORT}`);
  })

