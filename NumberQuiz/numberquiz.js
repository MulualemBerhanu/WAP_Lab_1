var express = require('express');
var app = express();
const bodyParser = require('body-parser');
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + './'));
app.set("view engine", "jade");
var all_q = ["1,1,2,3,5", "1,4,9,16,25", "2,3,5,7,11", "1,2,4,8,16"];
var answers = [8, 36, 13, 32];

app.use((req, res, next) => { next(); });

app.get('/', function(req, res, next) {


    res.render('numquiz.pug', viewvalue(0, 0));

});
app.post('/test', function(req, res, next) {
    let par = req.body;
    let num = parseInt(par.num);
    let score = parseInt(par.score);
    let answer = parseInt(par.answer);

    var data;
    if (num + 1 == all_q.length) {
        data = viewvalue(answer == answers[num] ? score++ : score, num);
        data.message = "You have completed the number quiz with the score of " +
            (answer == answers[num] ? score++ : score) + " out of " + answers.length;
        data.done = true;
    } else {
        data = viewvalue(answer == answers[num] ? parseInt(score + 1) : score, parseInt(num + 1));
    }
    console.log(data.message);

    res.render('numquiz.pug', data);


});
app.listen(8080, () =>{
    console.log("running");
} );


function viewvalue(score, num) {
    var data = {
        'score': score,
        'question': all_q[num],
        'num': num,
        'message': ""
    }
    return data;
}