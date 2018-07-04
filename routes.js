module.exports = (app, db) => {
    const terminology = require('./controllers/terminology')(db)
    const descriptory = require('./controllers/description')(db)
    const categoree = require('./controllers/category')(db)
    app.get('/', (req,res) => {
        res.status(200).render('home')
    })
    //View categories
    app.get('/category', categoree.getAllCategories)
    app.get('/category/:category', categoree.getSingleCategory)
    //View terminologies
    app.get('/:termid/viewall', terminology.listCategoryTerms)
    app.get('/:singleterm/all/', terminology.listSingleTerm)

    app.get('/alldesc', descriptory.getAllDescrip)
    app.get('/description/:descid', descriptory.getSingleDescrip)


    app.get('/submitterm', (req,res) => {
        res.status(200).render('submitterm', {msg: 'Submit your terminologies'})
    })
    app.post('/submit-term', terminology.SubmitTerm)
    // app.get('/category/:category/terminology', descriptory.getSingle)
    app.get('/submit', (req,res) => {
        res.send('submit new term to webmaster')
    })

    app.post('/submit-desc', (req, res) => {
        console.log(req.body)
        res.status(200).redirect('/' + req.body.terminology_title + '/all')
    })

    app.get('/contact-us', (req,res) => {
        res.send('contact us info/about us')
    })
    app.use((req,res) => {
        //replace with renders
      res.status(404).send('error page')
    })
  };