const expree=require('express')
const bodyParser=require('body-parser')
const mysql=require('mysql2')
const app=express()
app.use(bodyParser.json())
const port=3000

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

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})