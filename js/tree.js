app.directive('tree', function () {
    return {
		restrict: 'E',
		replace: true,
		scope: {
			treelist: "="
		},
		templateUrl: 'template/tree.html',
		link: function (scope, elem, attr) {
			scope.Selectlist = new Array();
			for (var i in scope.treelist) {
				scope.treelist[i].status = false;
				for (var j in scope.treelist[i].children) {
					scope.treelist[i].children[j].status = false;
				}
			}
			console.log(scope.treelist)
			scope.Status = function (item) {
				if (!item.status) {
					if (item.children) {
						for (var i in item.children) {
							item.children[i].status = false;
						}
					}
				} else {
					// scope.Selectlist.push(item)
					item.active = true;
					for (var i in item.children) {
						item.children[i].status = true;
						item.children[i].active = true;
						scope.Selectlist.push(item.children[i]);
					}
				}
				console.log(scope.Selectlist)
			}
			scope.del = function(index,name){
				if(index||index==0){
					scope.Selectlist.splice(index,1);
					for(var i in scope.treelist){
						for(var j in scope.treelist[i].children){
							if(scope.treelist[i].children[j].name==name){
								scope.treelist[i].children[j].active=false;
								scope.treelist[i].children[j].status=false;
								scope.treelist[i].status=false;
								scope.treelist[i].active=false;
								console.log(scope.treelist[i])
							}
						}
					}
				}
			}
		}
    }
})