module.exports = (app, db) => {
    const terminology = require('./controllers/terminology')(db)
    const descriptory = require('./controllers/description')(db)
    const categoree = require('./controllers/category')(db)
    const userHandler = require('./controllers/userCon')(db)

    app.get('/', (req,res) => {
        res.status(200).render('Home')
    })

    /*

        this route is for categories 
    */
    app.get('/category', categoree.getAllCategories)
    app.get('/category/:category', categoree.getSingleCategory)




    app.get('/:termid/viewall', terminology.listCategoryTerms)
    app.get('/:singleterm/all/', terminology.listSingleTerm)

    app.get('/alldesc', descriptory.getAllDescrip)
    app.get('/description/:descid', descriptory.getSingleDescrip)

    app.get('/registration', (req, res) => {
        res.status(200).render('Registration')
    })
    app.get('/login', (req,res) => {
        res.status(200).render('Login')
    })

    app.post('/register', userHandler.RegisterMe)
    app.post('/login', userHandler.LoginController)

    app.get('/logout', (req,res) => {
        res.clearCookie('userid')
        res.clearCookie('is_logged_in')
        res.clearCookie('sessionToken')
        res.redirect('/')
    })

    app.get('/submitterm', (req,res) => {
        res.status(200).render('SubmitTerm', {msg: 'Submit your terminologies'})
    })
    app.post('/submit-term', terminology.SubmitTerm)
    app.get('/submit', (req,res) => {
        res.send('submit new term to webmaster')
    })
    app.post('/submit-desc', descriptory.submitDescrip)
    app.post('/reccommendthis', descriptory.recThis)

    app.get('/contact-us', (req,res) => {
        res.send('contact us info/about us')
    })
  };