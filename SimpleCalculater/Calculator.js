const exp = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
app.use(express.urlencoded({ extended: false }))
const app = exp();
app.use(exp.static((__dirname, './')));
var urlencodedParser = bodyParser.urlencoded({ extended: true });
app.use(urlencodedParser);
//app.use(urlencodedParser.json());
app.use((req, res, next) => {
    next();

}).listen(3030);
app.get('/calculater', (req, res, next) => {
    fs.readFile('./calculaterpage.html', (err, data) => {
        if (err) return next(err)
        res.end(data);
    })

});

app.post('/calculate', (req, res, next) => {

    opreation(req, res, next)

})

function opreation(req, res, next) {
    let input1 = req.body.input1;
    let input2 = req.body.input2;
    let mop = req.body.operation;
    let mobsign;
    var result = 0;
    console.log(mop);
    switch (mop) {
        case "add":
            result = parseInt(input1) + parseInt(input2);
            mobsign = "+";
            break;

        case 'substract':
            result = input1 - input2;
            mobsign = "-";

            break;
        case 'multiply':
            result = input1 * input2;
            mobsign = "*";

            break;
        case 'divide':
            mobsign = "/";

            result = input1 / input2;
            break;


    }
    var htmlresult = `
	<!DOCTYPE html>
	<html lang="en">
	
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Simple Calculater</title>
		<link rel="stylesheet" href="cal.css">
	
	</head>

	<body>
		<div id="main">
			<h1>Result</h1>
			<h3>${input1} ${mobsign} ${input2} = ${result}</h3>
		<a href="/calculater">Back to calculator</a>

		</div>
	</body>
	</html>
	`
    res.end(htmlresult);

}