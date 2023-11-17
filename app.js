const express = require('express')
const bodyParser=require('body-parser')
const mysql=require('mysql2')
const cors = require('cors');


const app = express()
app.use(cors())
app.use(bodyParser.json())
const port=3000

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    port: '3306',
    password: '1234',
    database: 'user'
});

app.get('/users',(req,res)=>{
    SecurityPolicyViolationEvent.query("SELECT * FROM user",
    function(err,rows,fields){
        res.json({result:rows})
    })
});

app.post('/api/users/login', (req, res) => {
    const { user_name, password } = req.body;

    pool.query(
        "SELECT * FROM user WHERE user_name=?",
        [user_name],
        function (err, rows, fields) {
            if (err) {
                console.error('쿼리 오류:', err);
                res.status(500).json({ result: "서버 오류" });
            } else {
                if (rows.length === 0) {
                    res.status(404).json({ result: "로그인 실패" });
                } else {
                    const user = rows[0];
                    if (user.password === password) {
                        res.json({ result: "로그인 성공" });
                    } else {
                        res.status(401).json({ result: "로그인 실패 (비밀번호 불일치)" });
                    }
                }
            }
        }
    );
});

app.post('/api/users/join',(req,res)=>{
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