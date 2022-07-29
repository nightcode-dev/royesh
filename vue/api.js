var express = require('express')
var fs = require('fs')
var router = express.Router()
var bodyParser = require('body-parser')
var mysql = require('mysql')
var {valid} = require('./validator.js')
router.use(bodyParser.urlencoded({ extended: true }));
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'royesh'
})
connection.connect((err)=>{
    if(err){
        throw err
    }else{
        console.log('connected')
    }
})
router.use((rs,rq,next)=>{
    rs.header("Access-Control-Allow-Origin","*")
    rs.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next()
})
router.post('/user',(rq,rs) => {
    var rqdata = rq.query
    if(rqdata.method == 'login'){
        var rqQuery = JSON.parse(rqdata.data)
        var vd = new valid()
        var username = rqQuery.username
        var password = rqQuery.password
        var vUser = vd.validUandP(username)
        var vPass = vd.validUandP(password)
        if(vUser && vPass){
        var sql = `SELECT * FROM users WHERE username = '${username}' && password ='${password}'`
        connection.query(sql,(err, results, fields)=>{
            if(err){
                throw err
            }else{
                if(results.length != 0){
                    rs.set({
                        'Content-Type':'application/json'
                })
                    rs.send(JSON.stringify({
                        auth:true,
                        data:results
                    }))
                }else{
                    rs.set('Content-Type','application/json')
                    rs.send(JSON.stringify({
                        auth:false,
                        data:results
                    })) 
                }
                
            }
        })
        }else{
            rs.send({
                auth:false,
                err:'blocked char'
            })
        }
    }else if(rqdata.method == 'signUp'){
        var rqQuery = JSON.parse(rqdata.data)
        var username = rqQuery.username
        var password = rqQuery.password
        var vd = new valid()
        var vUser = vd.validUandP(username)
        var vPass = vd.validUandP(password)
        if(vUser && vPass){
        var sql = `SELECT * FROM users WHERE username = '${username}' && password ='${password}'`
        connection.query(sql,(err, results, fields)=>{
            if(err){
                throw err
            }else{
                if(results.length == 0){
                    var allName = rqQuery.name
                    var username = rqQuery.username
                    var password = rqQuery.password
                    var email = rqQuery.email
                    var state = rqQuery.state
                    var city = rqQuery.city
                    var vEmail = vd.validEmail(email)
                    var vState = vd.validParsain(state)
                    var vCity = vd.validParsain(city)
                    var vAName = vd.validParsain(allName)
                    if(vEmail && vState && vCity && vAName && username.length > 10 && password.length > 24){
                    var sql = `INSERT INTO users (allname,username,password,email,state,city) VALUES('${allName}','${username}','${password}','${email}','${state}','${city}')`
                    connection.query(sql,(err,results) => {
                        if(err){
                            throw err
                        }else{
                            rs.send({
                                auth:true
                            })
                        }
                    }) 
                    }else{
                        rs.send({
                            auth:false,
                            err:'blocked char',
                            step:[vEmail,vState,vCity,vAName]
                        })
                    }
                }else{
                    rs.send({
                        auth:false,
                        err:'username not avialable'
                    })
                }
                
            }
        })
        }else{
            rs.send({
                auth:false,
                err:'blocked char',
                step:[vUser,vPass]
            })
        }
    }else if(rqdata.method == 'info'){
        var rqQuery = JSON.parse(rqdata.data)
        var user = rqQuery.user
        var sql = `SELECT * FROM users WHERE username = '${user}'`
        connection.query(sql,(err,results,fields) => {
            if(err){
                throw err
            }else{
                rs.send(results)
            }
        })
    }else if(rqdata.method == 'getArts'){
        var rqQuery = JSON.parse(rqdata.data)
        var user = rqQuery.user
        var sql = `SELECT * FROM articles WHERE author = '${user}'`
        connection.query(sql,(err,results,fields) => {
            if(err){
                throw err
            }else{
                rs.send(results)
            }
        })
    }else if(rqdata.method == 'getMed'){
        var rqQuery = JSON.parse(rqdata.data)
        var user = rqQuery.user
        var sql = `SELECT * FROM media WHERE author = '${user}'`
        connection.query(sql,(err,results,fields) => {
            if(err){
                throw err
            }else{
                rs.send(results)
            }
        })
    }else if(rqdata.method == 'getPros'){
        var rqQuery = JSON.parse(rqdata.data)
        var user = rqQuery.user
        var sql = `SELECT * FROM products WHERE seller = '${user}'`
        connection.query(sql,(err,results,fields) => {
            if(err){
                throw err
            }else{
                rs.send(results)
            }
        })
    }else if(rqdata.method == 'getQues'){
        var rqQuery = JSON.parse(rqdata.data)
        var user = rqQuery.user
        var sql = `SELECT * FROM questions WHERE author = '${user}'`
        connection.query(sql,(err,results,fields) => {
            if(err){
                throw err
            }else{
                rs.send(results)
            }
        })
    }else{
        console.log(rqdata)
        rs.send('not found 404')
    }
})

router.post('/ask',(rq,rs,next)=>{
    var rqdata = rq.query
    if(rqdata.method == 'questions'){
        var sql = 'SELECT * FROM questions'
        connection.query(sql,(err,results,fields)=>{
            if(err){
                throw err
            }else{
                rs.send(results)
            }
        })
    }else if(rqdata.method == 'search'){
        var qData = JSON.parse(rqdata.data)
        var vd = new valid()
        var vSearch = vd.valid(qData.search)
        if(vSearch){
        var sql = `SELECT * FROM questions  WHERE tag LIKE '%${qData.search}%' `
        connection.query(sql,(err,results,fields)=>{
            if(err){
                throw err
            }else{
                rs.send(results)
            }
        })
    }else{
        rs.send({
            err:'blocked char'
        })
    }
    }else if(rqdata.method == 'upload'){
        if(rq.files.img.mimetype == 'image/png' || rq.files.img.mimetype == 'image/jpeg'){
            fs.readdir('./vue/uploads/',(err,lifile)=>{
                if (err) {
                    throw err
                }else{
                    var isExists = false;
                    for(var i = 0;i < lifile.length;i++){
                        if(lifile[i] == rq.files.img.name){
                            isExists = true
                        }else{
                            continue
                        }
                    }
                    if (isExists) {
                        rs.set('Content-Type','application/json')
                        rs.send(JSON.stringify({
                            upload:false,
                            err:'your file existed'
                        })) 
                    } else {
                        console.log(rq.files.img)
                        if(rq.files.img.mimetype == 'image/png' || rq.files.img.mimetype == 'image/jpeg'){
                        rq.files.img.mv(`./vue/uploads/${rq.files.img.name}`)  
                        rs.set('Content-Type','application/json')
                        rs.send(JSON.stringify({
                            upload:true,
                            data:{
                                link:`http://localhost:3000/imgs/${rq.files.img.name}`,
                                fileName:rq.files.img.name
                            }
                        }))
                        }else{
                            console.log('blocked format')
                           rs.send({
                               err:'format blocked'
                           }) 
                        }
                    }
                }
            })
        }
    }else if(rqdata.method == 'question'){
        var qData = JSON.parse(rqdata.data)
        var sql = `SELECT * FROM questions  WHERE id = ${qData.id}`
        connection.query(sql,(err,results,fields)=>{
            if(err){
                throw err 
            }else{
                rs.send(results)
            }
        })
    }else if(rqdata.method == 'answers'){
        var qData = JSON.parse(rqdata.data)
        var sql = `SELECT * FROM answers  WHERE question_id = ${qData.id}`
        connection.query(sql,(err,results,fields)=>{
            if(err){
                throw err 
            }else{
                rs.send(results)
            }
        })
    }else if(rqdata.method == 'addAnswer'){
        var qData = JSON.parse(rqdata.data)
        var vd = new valid()
        var vDesc = vd.valid(qData.desc)
        if(vDesc){
        var sql = `INSERT INTO answers ( author, descy, answer_date, question_id) VALUES ('${qData.author}', '${qData.desc}', '${qData.date}', '${qData.qid}');`
        connection.query(sql,(err,results)=>{
            if(err){
                throw err
            }else{
                rs.send({
                    inserted:true
                })
            }
        })
        }else{
            rs.send({
                inserted:false,
                err:'blocked char'
            })
        }
    }else if(rqdata.method == 'addQuestion'){
        var qData = JSON.parse(rqdata.data)
        var vd = new valid()
        var vTitle = vd.valid(qData.title)
        var vDesc = vd.valid(qData.desc)
        var vTags = vd.valid(qData.tags)
        if(vTitle && vDesc && vTags){
        var sql = `INSERT INTO questions (title, description, author, q_date,status,tag) VALUES ('${qData.title}','${qData.desc}','${qData.author}','${qData.date}','open','${qData.tags}');`
        connection.query(sql,(err,results)=>{
            if(err){
                throw err
            }else{
                rs.send({
                    inserted:true
                })
            }
        })
        }else{
            rs.send({
                inserted:false,
                err:'blocked char',
                step:[vTitle,vDesc,vTags]
            })
        }
    }
})

router.post('/blog',(rq,rs,nx) => {
    var rqdata = rq.query
    if(rqdata.method == 'arts'){
        var sql = 'SELECT * FROM articles'
        connection.query(sql,(err,result,fields) => {
            if(err){
                throw err
            }else{
                rs.send(result)
            }
        })
    }else if(rqdata.method == 'search'){
        var qData = JSON.parse(rqdata.data)
        var vd = new valid()
        var vSearch = vd.valid(qData.search)
        if(vSearch){
        var sql = `SELECT * FROM articles  WHERE title LIKE '%${qData.search}%' `
        connection.query(sql,(err,results,fields)=>{
            if(err){
                throw err
            }else{
                rs.send(results)
            }
        })
        }else{
            rs.send({
                err:'blocked char'
            })
        }
    }else if(rqdata.method == 'art'){
        var qData = JSON.parse(rqdata.data)
        var sql = `SELECT * FROM articles  WHERE id = ${qData.id}`
        connection.query(sql,(err,results,fields)=>{
            if(err){
                throw err 
            }else{
                rs.send(results)
            }
        })
    }else if(rqdata.method == 'comments'){
        var qData = JSON.parse(rqdata.data)
        var sql = `SELECT * FROM comments  WHERE tar_id = ${qData.id} && target = 'a'`
        connection.query(sql,(err,results,fields)=>{
            if(err){
                throw err 
            }else{
                rs.send(results)
            }
        })
    }else if(rqdata.method == 'addCom'){
        var qData = JSON.parse(rqdata.data)
        var vd = new valid()
        var vDesc = vd.valid(qData.desc)
        if(vDesc){
        var sql = `INSERT INTO comments ( author, descy, com_date,rate, tar_id,target) VALUES ('${qData.author}', '${qData.desc}', '${qData.date}','${qData.rate}', '${qData.qid}','${qData.targ}');`
        connection.query(sql,(err,results)=>{
            if(err){
                throw err
            }else{
                rs.send({
                    inserted:true
                })
            }
        })
        }else{
            rs.send({
                inserted:false,
                err:'blocked char'
            })
        }
    }else if(rqdata.method == 'addArt'){
        var qData = JSON.parse(rqdata.data)
        var vd = new valid()
        var vTitle = vd.valid(qData.title)
        var vDesc = vd.valid(qData.desc)
        if(vTitle && vDesc){
        var sql = `INSERT INTO articles (title, descy, author, art_date,imgLink) VALUES ('${qData.title}','${qData.desc}','${qData.author}','${qData.date}','${qData.img}');`
        connection.query(sql,(err,results)=>{
            if(err){
                throw err
            }else{
                rs.send({
                    inserted:true
                })
            }
        })
        }else{
            rs.send({
                inserted:false,
                err:'blocked char',
                step:[vTitle,vDesc]
            })
        }
    }
})

router.post('/media',(rq,rs,nx) => {
    var rqdata = rq.query
    if(rqdata.method == 'media'){
        var sql = 'SELECT * FROM media'
        connection.query(sql,(err,result,fields) => {
            if(err){
                throw err
            }else{
                rs.send(result)
            }
        })
    }else if(rqdata.method == 'search'){
        var qData = JSON.parse(rqdata.data)
        var vd = new valid()
        var vSearch = vd.valid(qData.search)
        if(vSearch){
        var sql = `SELECT * FROM media  WHERE title LIKE '%${qData.search}%' `
        connection.query(sql,(err,results,fields)=>{
            if(err){
                throw err
            }else{
                rs.send(results)
            }
        })
        }else{
            rs.send({
                err:'blocked char'
            })
        }
    }else if(rqdata.method == 'oneMedia'){
        var qData = JSON.parse(rqdata.data)
        var sql = `SELECT * FROM  media  WHERE id = ${qData.id}`
        connection.query(sql,(err,results,fields)=>{
            if(err){
                throw err 
            }else{
                rs.send(results)
            }
        })
    }else if(rqdata.method == 'comments'){
        var qData = JSON.parse(rqdata.data)
        var sql = `SELECT * FROM comments  WHERE tar_id = ${qData.id} && target = 'm'`
        connection.query(sql,(err,results,fields)=>{
            if(err){
                throw err 
            }else{
                rs.send(results)
            }
        })
    }else if(rqdata.method == 'addCom'){
        var qData = JSON.parse(rqdata.data)
        var vd = new valid()
        var vDesc = vd.valid(qData.desc)
        if(vDesc){
        var sql = `INSERT INTO comments ( author, descy, com_date,rate, tar_id,target) VALUES ('${qData.author}', '${qData.desc}', '${qData.date}','${qData.rate}', '${qData.qid}','${qData.targ}');`
        connection.query(sql,(err,results)=>{
            if(err){
                throw err
            }else{
                rs.send({
                    inserted:true
                })
            }
        })
        }else{
            rs.send({
                inserted:false,
                err:'blocked char'
            })
        }
    }else if(rqdata.method == 'addMed'){
        var qData = JSON.parse(rqdata.data)
        var vd = new valid()
        var vTitle = vd.valid(qData.title)
        var vDesc = vd.valid(qData.desc)
        if(vTitle && vDesc){
        var sql = `INSERT INTO media (title, descy, author, m_date,cover_link,v_link) VALUES ('${qData.title}','${qData.desc}','${qData.author}','${qData.date}','${qData.img}','${qData.video}');`
        connection.query(sql,(err,results)=>{
            if(err){
                throw err
            }else{
                rs.send({
                    inserted:true
                })
            }
        })
        }else{
            rs.send({
                inserted:false,
                err:'blocked char',
                step:[vTitle,vDesc]
            })
        }
    }
})

router.post('/shop',(rq,rs,nx) => {
    var rqdata = rq.query
    if(rqdata.method == 'products'){
        var sql = 'SELECT * FROM products'
        connection.query(sql,(err,result,fields) => {
            if(err){
                throw err
            }else{
                rs.send(result)
            }
        })
    }else if(rqdata.method == 'search'){
        var qData = JSON.parse(rqdata.data)
        var vd = new valid()
        var vSearch = vd.valid(qData.search)
        if(vSearch){
        var sql = `SELECT * FROM products WHERE title LIKE '%${qData.search}%' `
        connection.query(sql,(err,results,fields)=>{
            if(err){
                throw err
            }else{
                rs.send(results)
            }
        })
        }else{
            rs.send({
                err:'blocked char'
            })
        }
    }else if(rqdata.method == 'pro'){
        var qData = JSON.parse(rqdata.data)
        var sql = `SELECT * FROM  products  WHERE id = ${qData.id}`
        connection.query(sql,(err,results,fields)=>{
            if(err){
                throw err 
            }else{
                rs.send(results)
            }
        })
    }else if(rqdata.method == 'addPro'){
        var qData = JSON.parse(rqdata.data)
        var vd = new valid()
        var vTitle = vd.valid(qData.title)
        var vDesc = vd.valid(qData.desc)
        var vPrice = vd.validNumber(qData.price)
        var vPhone = vd.validNumber(qData.phone)
        if(vTitle && vDesc && vPrice && vPhone && qData.phone.length == 11){
        var sql = `INSERT INTO products (title, descy, img, seller,p_date,seller_name,price,loc,tel) VALUES ('${qData.title}','${qData.desc}','${qData.img}','${qData.seller}','${qData.date}','${qData.seller_name}',${+qData.price},'${qData.loc}','${qData.phone}');`
        connection.query(sql,(err,results)=>{
            if(err){
                throw err
            }else{
                rs.send({
                    inserted:true
                })
            }
        })
        }else{
            rs.send({
                inserted:false,
                err:'blocked char',
                step:[vTitle,vDesc,vPrice,vPhone]
            })
        }
    }
})


export {router}