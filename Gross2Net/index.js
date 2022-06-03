
    const express = require('express')
    
    const app = express();


    const bodyParser = require('body-parser')
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json({ type: 'application/json' }))
    app.use(bodyParser.raw());

    app.set('view engine', 'ejs');
    app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));

    require('./routes')(app);

    const port = 3000;
    app.listen(port, () => console.log(`Server running on: http://localhost:${port}`))
    
