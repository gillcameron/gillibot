require('./app.js');
var db = require('./db');

//sql query function
function executeQuery(sql, cb) {
    db.query(sql, function (err, result, fields) {
        if (err) throw err;
        cb(result);
    });
}

module.exports = function (session) {
  function getAddictiontip(callback)
  {

  executeQuery("SELECT content FROM copingstrategies WHERE category = 'addiction' AND type ='tip' ORDER BY RAND() LIMIT 1", function (err, result) {
    if (err)
               callback(err,null);
           else
               callback(null,result[0].hexcode);
                       });


  }

getAddictiontip(function(data){
            // code to execute on data retrieval

addictiontip = data[0].content;


console.log(addictiontip);

session.send(addictiontip);

});


};
