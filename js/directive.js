var app = angular.module('app',[]);
app.controller('Ctrl',function($scope) {
    $scope.title = '这个是标题';
    $scope.list = [
        {name:'饮料',children:[
            {name:'雪碧'},
            {name:'可乐'},
            {name:'美年达'},
            {name:'芬达'}
        ]},
        {name:'面条',children:[
            {name:'热感冒'},
            {name:'热干面'},
            {name:'刀削面'},
            {name:'上洗面'}
        ]},
        {name:'包子',children:[
            {name:'肉包'},
            {name:'菜包'},
            {name:'糖宝'},
            {name:'流沙包'}
        ]},
        {name:'粥类',children:[
            {name:'皮蛋瘦肉粥'},
            {name:'菜粥'},
            {name:'牛肉粥'},
            {name:'羊肉粥'}
        ]},
    ]
})
