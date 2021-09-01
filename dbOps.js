var mysql = require('mysql')
var conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'mydb'
})

conn.connect(function(err){
    if(err)
        console.log(err.message)
    else
        console.log('connected..')
    // var q = 'create table Emp(Name varchar(20),Age int,Designation char(20))'
    // var q1 = 'insert into Emp values("Eren",19,"Officier"),("Mikasa",17,"Police")'
    var q1 = "select * from Emp"
    // var q1 = "drop table Emp"
    conn.query(q1,function(err,result){
        if(err)
            console.log(err)
        else
            console.log(result)
    })
})

