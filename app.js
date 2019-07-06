const express = require('express');
const app = express();
const registerRoute = require('./routes/register')
const loansRoute = require('./routes/loans')
const userDb = require('./db/users')
const loginRoute = require('./routes/login')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PORT = process.env.PORT || 3000;

// using required routes
app.use('/login', loginRoute)
app.use('/register', registerRoute)
app.use('/loans', loansRoute)


app.listen(PORT, () => console.log(`App is running on ${PORT}`))