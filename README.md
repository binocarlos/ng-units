ng-units
========

Collection of angular filters for converting numeric measurements (like cm -> inch)

## installation

```
$ component install binocarlos/ng-units
```

## usage

```js
angular.module('myApp', [
	require('ng-units')
])

.controller('MyAppCtrl', function($scope, $safeApply){

	$scope.cms = 12;
	
})
```

```html
<div>
	{{ measurement }} CM
</div>
<div>
	{{ measurement | cm2inch | number:2 }} INCH
</div>
```

You can use the angular 'number' filter to round the results (the above is 2 decimal places).

## cm2inch(cm)

return cm / 2.54

## inch2cm(inch)

return inch * 2.54

## contributing

There are lots of other units to add - pull requests welcome : )



## license

MIT