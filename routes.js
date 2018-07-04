module.exports = (app, db) => {
    const terminology = require('./controllers/terminology')(db)
    const descriptory = require('./controllers/description')(db)
    app.get('/', (req,res) => {
        res.send('you reached the homepage')
    })
    
    app.get('/viewall', terminology.getAllTerminology)
    
    app.get('/categories', terminology.getAllCategories)

    app.get('/category/:category', terminology.getSingleCategory)

    app.get('/singledesc', descriptory.getAllDescrip)

    app.get('/category/:category/terminology', (req,res) => {
        res.send('viewing single ' + req.params.category + ' terminology')
    })
    app.get('/home/submitdev', (req,res) => {
        res.send('submit new term to webmaster')
    })

    app.get('/contact-us', (req,res) => {
        res.send('contact us info/about us')
    })
    app.use((req,res) => {
        //replace with renders
      res.status(404).send('error page')
    })
  };