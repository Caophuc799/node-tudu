var Todos = require('../models/todoModel.js');

module.exports = function(app){
    app.get('/api/setupTodos',function(req,res){

        //setup seed data
        var seedTodos=[
            {
                text: 'Học Nodejs',
                isDone: false
            },
            {
                text: 'Học Angular.js',
                isDone: false
            },
            {
                text: 'Viet ung dung hoan chinh',
                isDone: false
            },
            {
                text: 'Viet mot ung dung hoan chinh',
                isDone: false
            }
        ];

        Todos.create(seedTodos, function(err,results ){
            res.send(results);
        });


    });
}