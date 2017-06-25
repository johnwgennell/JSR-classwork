'use strict';

var MyApp = {};

//addToList, removeFromList

MyApp.compileItem = function(item){
  var source = $('#todo-template').html();
  var template =  Handlebars.compile(source);
  return template(item);
}

MyApp.addToList = function(list,item){
  var itemObject = {toDo:item.val()};
  var compiledItem = MyApp.compileItem(itemObject);
  list.append(compiledItem);
}

// Remove both the data from the model/array and from the DOM
MyApp.removeFromList = function($list, $item){
  var itemIndex = $item.index();
  $item.remove();
}

$(document).ready(function(){
  var $newTaskForm = $('#new_task');
  var $taskList = $('#task_list');
  $newTaskForm.submit(function(event){
    event.preventDefault();
    var $newTaskInput = $('#new_task_input');
    MyApp.addToList($taskList,$newTaskInput);
});

$taskList.on('click', '.delete', function(e) {
  e.preventDefault();
  var $listItem = $(this).parent();
  MyApp.removeFromList($taskList, $listItem)
});
