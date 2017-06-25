	'use strict';

var MyApp = {};

// Blog App
// Use the todo app as an example of how this app should work.

// 1a) Comment should include the users name, email address and their comment
// 2) Create list of existing comments and add them on page load to the comment section
// 3) Make it so that a comment can get deleted, also deleting it from the array
// 4) BONUS: Make the other comment section work
// 5) BONUS: Make it so that you can edit a comment

$(document).ready(function(){
// 1) Make it so that you can add a comment, use handlebars for templating. Add comment to a javascript array.
$('.comment_form').submit(function(event){
    event.preventDefault();
    var commentMessage = $('.comment_text');
		myApp.addToList($list, commentMessage);
});

MyApp.compileItem = function(item){
  var source = $('#todo-template').html();
  var template =  Handlebars.compile(source);
  return template(item);
}

MyApp.addToList = function(item, list){
  var itemObject = {message:item.val()};
  MyApp.todos.push(itemObject);
  var compiledItem = MyApp.compileItem(itemObject);
  list.append(compiledItem);
}

var $list = $('.comments');

// next steps
MyApp.populateList = function(list){
  for(var i=0;i<MyApp.todos.length;i++){
    var newItem = MyApp.compileItem(MyApp.todos[i]);
    list.append(newItem);
  }
}
// Remove both the data from the model/array and from the DOM
MyApp.removeFromList = function($list, $item) {
  console.log($item);
  var itemIndex = $item.index();
  if (itemIndex > -1) {
    MyApp.todos.splice(itemIndex, 1);
  }
  $item.remove();
}

MyApp.todos = [
  {toDo:"Clean Fridge"},
  {toDo:"Burn Fridge because cleaning was unsuccessful"},
  {toDo:"Buy new fridge"},
  {toDo:"Buy food"}
];




});
