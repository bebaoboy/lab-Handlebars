const express = require('express');
const app = express();

const expressHbs = require('express-handlebars');
app.engine('hbs', expressHbs.engine({
    layoutDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    defaultLayout: 'layout',
    extname: 'hbs'
}));

app.use(express.static(__dirname + '/HandleBars-Statistic'));
app.set('view engine', 'hbs');
app.set('port', process.env.PORT || 3000);
// app.use(express.json());
// app.use(express.urlencoded({ extended:false}))
app.get('/', (req, res)=>{
    res.locals.Ma = 'Nhom 6';
    res.render('index', { title: 'Jeopardize contest'});
})

app.get('/task1', (req, res)=>{
    let {emotions} = require('./models/data');
    let title = req.query.title;
    console.log(title);
    let selectedEmotion = emotions.filter(item => item.title == title);
    let quotePath = selectedEmotion.length ? selectedEmotion[0].quotePath : "images/task1/default.jpg";
    res.locals.emotions = emotions;
    res.locals.quotePath = quotePath;
    res.locals.Ma = '20127004 - Huỳnh Minh Bảo';
    res.render('task1', {title: 'Inspring quotes'});
})

app.use('/task2', require('./routes/task2Route'))

app.get('/task2', (req, res)=>{
    res.locals.Ma = '20127600 - Lưu Tuấn Quân';
    res.render('task2',  {title: 'Jars Saving'});
})

app.get('/task3', (req, res)=>{
    res.locals.Ma = '20127600 - Lưu Tuấn Quân';
    res.render('task3',  {title: 'TV Sales'});
})

app.get('/task4', (req, res)=>{
    res.locals.Ma = '20127 - Ten';
    res.render('task4', {title: 'Zodiac Characteristics'});
})

app.listen(app.get('port'), ()=>{
    console.log(`Server is runnning on port ${app.get('port')}`); 
})