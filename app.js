const express=require('express')
const bodyParser=require('body-parser')
const mysql=require('mysql2')

const app = express()
app.use(bodyParser.json())
const port=3000

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    port: '3306',
    password: '1234',
    database: 'user'
});

app.get('/api/users',(req,res)=>{
    SecurityPolicyViolationEvent.query("SELECT * FROM user",
    function(err,rows,fields){
        res.json({result:rows})
    })
});

app.post("/api/login",(req,res)=>{
    const {user_name,password}=req.body
    pool.query(
        "SELECT * FROM user WHERE user_name=?",
        [user_name],
        function(err,rows,fields){
            if(rows.length===0){
                res.status(404).json({result:"로그인 실패"})
            }else{
                const user=rows[0]
            }
        }
    )
})

app.post("/api/users",(req,res)=>{
    pool.query("INSERT INTO user(user_name,password,email) VALUES(?,?,?)",
     [req.body.user_name,req.body.password, req.body.email],
            function(err, rows, fields) {
                if(err) {
                    res.json({ result: err })
                } else {
                    res.json({ result: "ok" })
                }
            })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})