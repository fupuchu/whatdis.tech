module.exports = (app) => {
    app.get('/', (req,res) => {
        res.send('you reached the homepage')
    })
    
    app.get('/analogy/viewall', (req,res) => {
        res.send('viewall analogies here')
    })

    app.get('/analogy/viewsingle', (req,res) =>{
        res.send('view single analogies')
    })
    
    app.get('/categories', (req,res) => {
        res.send('view categories')
    })

    app.get('/viewcategory/:category', (req,res) => {
        res.send('view single category ' + req.params.category)
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