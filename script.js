const sqlite3 = require('sqlite3').verbose();

// open database in memory
let db = new sqlite3.Database('/home/syfgwc/Desktop/musicWebsite/database.sqlite');

let sql = 'SELECT * FROM torrents';
db.all(sql, [], (err,rows) => {
  if(err){
    throw err;
  }
  rows.forEach((row) => {
    console.log(row.artist + "," + row.groupName);
  });
});
// close the database connection
db.close();
