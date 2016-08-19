app.directive('tree',function() {
    return {
      restrict:'E',
      replace:true,
      templateUrl:'template/tree.html',
      link:function(scope,elem,attr){
      	 elem.bind('click',function(taget){
      	 	console.log(1)
      	 })
      }
    }
})
app.controller('treeCtrl',treeCtrl);
function treeCtrl($scope){
	$scope.SortList=new Array();
	$scope.addData = function(data){
		$scope.SortList.push(data)
		console.log($scope.SortList)
	}
}