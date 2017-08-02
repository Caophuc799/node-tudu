// Get a reference to the database service
// var firebase = require("firebase");


var app = angular.module("app.todos", ["xeditable", "firebase"]);



app.controller("todoController", ['$scope', '$log', "$firebaseArray", "$firebaseObject", function ($scope, $log, $firebaseArray, $firebaseObject) {
    var databaseRef = firebase.database().ref();


    $scope.appname = "Node Dashboard!!!";
    $scope.formData = {};
    // $scope.todos = databaseRef.child("/todoList").on('value',function(snapshot){

    //     console.log( snapshot.val());
    //     snapshot.val().forEach(todo, function(){
    //         console.log(todo)
    //     })
    // });
    $scope.todos = [];
    $scope.todos = $firebaseArray(databaseRef.child("/todoList"));
    $scope.todos.$loaded().then(function () {

        for (var i = 0; i < $scope.todos.length; ++i) {
            console.log($scope.todos[i]);
        }
    })

    $scope.createTodo = function () {


        var newKey = databaseRef.child('/todoList').push().key;

        var todo = {
            id: newKey,
            text: $scope.formData.text,
            isDone: false
        }
        databaseRef.child("/todoList/" + newKey).set(todo);

        $scope.formData.text = '';
    }

    $scope.updateTodo = function (todo) {
        var updates = {};
        var totoTemp = {
            id:todo.id,
            text: todo.text,
            isDone: todo.isDone
        }
        updates['/todoList/' + todo.id] = todo;
        console.log(todo);
       
        databaseRef.child('todoList').child(todo.id).update(totoTemp);
        //databaseRef.child("/todoList/" + todo.id).update(todo);
    }

    $scope.deleteTodo = function (todo) {
        console.log(todo.text);
        databaseRef.child("/todoList/" + todo.id).remove();
    }


}]);