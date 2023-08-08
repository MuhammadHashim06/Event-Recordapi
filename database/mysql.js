const mysql=require('mysql')

const connection=mysql.createConnection(
    {port:3306,
    host:'bnj0o98ojxgq3h3eodft-mysql.services.clever-cloud.com',
    database:'bnj0o98ojxgq3h3eodft',
    user:'ubqffe6xlcabbl1p',
    password:'VWg0jyKPcaSjYGADGZLe',
})

connection.connect((err)=>{
    if (err) throw err
    console.log('Database Connected');
})

module.exports={connection}