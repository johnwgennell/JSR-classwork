'use strict';

var MyApp = {};

MyApp.compileItem = function(item){
  var source = $('to-do-template');
  var template = Handlebars.complile(source);
  returen template(item);
}

MyApp.addToList = function(list,item){
  var itemObject = {todo:item.val()};
  var compiledItem - MyApp.compileItem(itemObject);
  list.append(compiledItem);
}

// Not sure. Could be something like this. Just not sure what to select in HTML.
MyApp.removeFromList = function(){
  $('ul').on('click', 'li', function() {
          $(this).remove();
      });
}

$(document).ready(function(){
  var $newTaskForm = $('#new_task');
  var $taskList = $('task_list');
  $newTaskForm.submit(function(event){
    event.preventDefault();
    var $newTaskInput = $('#new_task_input');
    MyApp.addToList($taskList,$newTaskInput);
  });
});
