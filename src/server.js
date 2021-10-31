const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('/dist/userSkills/'));
app.get('/',function(req,res){
    res.sendFile(path.join('/dist/userSkills//index.html'));
});

app.listen(process.env.PORT || 8080);