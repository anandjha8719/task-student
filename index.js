const express = require('express');
// const expressLayouts = require('express-ejs-layouts');
const app = express();
const PORT = 5000;

const connectDB = require('./config/mongoose');

connectDB();




app.use(express.urlencoded());

app.use(express.static('./assets'));

// app.use(expressLayouts);
// app.set('layout extractStyles', true);
// app.set('layout extractScripts', true);

app.set('view engine', 'ejs');
app.set('views', './views');























app.use('/', require('./routes'));

app.listen(PORT, (err) => {
        if(err) {
            console.log('error in running server');
        } else {
            console.log(`server is running on port: ${PORT}`);
        }
    }
        
)