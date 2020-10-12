


var app = angular.module('inheritanceDemo', []);

app.controller('MainCtrl', function() {
  this.dad = 'Agriculture is our wisest pursuit';
  this.mom = 'As long as there’s a few farmers out there, we’ll keep fighting for them';
  this.methodclick=function(){
    alert('You know, farming looks mighty easy when your plow is a pencil, and you’re a thousand miles from the corn field')
  }
});
app.controller('ChildCtrl', function($controller) {
  var ChildCtrl=this;
  ChildCtrl.child = $controller('MainCtrl',{});
  ChildCtrl.child.Name="Puppy"
  /*ChildCtrl.child.methodclick=function(){
     alert('I am their child');
    
  }
  ChildCtrl.child.methodclick1=function(){
     alert('We are separate');
      ChildCtrl.child.Name="We r free";
  }*/
});
