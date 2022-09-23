# Rest API with Express js Server

This is Our First Api

## First clone this repo and then install its packages

```consol
$ npm install
```

## Server Structure

```js
const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')


// Init Express
const app = express()

// Init Environment Variable
const PORT = process.env.PORT || 8080

// Data Manage
app.use(express.json())
app.use(express.urlencoded({ extended:false }))


// Listen Server
app.listen(PORT, ()=>{
    console.log('Server is Running on Port 5050'.bgGreen.black)
})
```

## Uses Stack

* Node js
* Express js
