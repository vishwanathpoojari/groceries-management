const  Client  =  require('pg').Pool

const client  =  new Client({
    host :'groceriescom.postgres.database.azure.com',
    user :'groceriescomadmin@groceriescom',
    port : '5432',
    password : 'Naanu@1234',
    database : 'groceries'
})
 module.exports =  client
