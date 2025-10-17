module.exports = (app) => {
    app.get('/routing/:nome/:lastname', (req, res) => {
        res.send('ola: '+req.params.nome+' '+req.params.lastname)
    })
    app.get('/routing2/:id',(req,res)=> {
        res.send ('O id é: '+req.params.id)
    })
    app.get('/routing3/:var',(req,res)=>{
        res.send('o Valor do parametro é: '+req.params.var)
    })
}

//https://expressjs.com/pt-br/guide/migrating-5.html#path-syntax