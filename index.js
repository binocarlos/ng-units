var modulename = module.exports = 'ng-units';

angular
  .module(modulename, [])

  .filter('cm2inch', function(){
    return function(cms){
      return parseFloat(cms) / 2.54
    }
  })

  .filter('inch2cm', function(){
    return function(inches){
      parseFloat(inches) * 2.54;
    }
  })
