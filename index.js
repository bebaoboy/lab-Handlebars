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

app.get('/', (req, res)=>{
    res.locals.Ma = 'Nhom 6';
    res.render('index', { title: 'Jeopardize contest'});
})

app.get('/task1', (req, res)=>{
    res.locals.Ma = '20127004 - Huỳnh Minh Bảo';
    res.render('task1', {title: 'Inspring quotes'});
})

app.get('/task2', (req, res)=>{
    res.locals.Ma = '20127 - Ten';
    res.render('task2', {title: 'Jars Saving'}  );
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