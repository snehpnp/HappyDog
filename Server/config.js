
const mysql=require('mysql')

const conn=mysql.createConnection({
    port:3306,
    host:"localhost",
    user:"root",
    password:"",
    database:"HappyDog"
})
conn.connect((err)=>{
    if(err)
    console.log(err)
    else{
        console.log("connected")
    }
})
module.exports=conn