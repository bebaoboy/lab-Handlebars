const controller = {};
const {zodiacs} = require('../models/data');
const title = 'Zodiac Characteristics';

controller.showList = (req, res) =>{
    res.locals.Ma = '20127527 - Phạm Nguyên Khang';
    res.render('task4', {title, zodiacs});
}


controller.showDetails = (req,res) =>{
    let name = req.params.name;
    let selectedZodiacs = zodiacs.filter(item=>item.name ==name);
    res.locals.Ma = '20127527 - Phạm Nguyên Khang';
    res.render('task4-details', {title, selectedZodiacs});

}

module.exports = controller