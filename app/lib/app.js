let app = angular.module('myApp',[]);


app.controller('myCtrl',['$scope',($scope)=>{

$scope.products = [
    {
        name:"Black Rectangle Rimmed Eyeglasses",
        model: "E1399A1A1|52",
        price: 599,
        image: "images/products/E1399A1A152.jpg",
        rating:"images/star-rating/five.png"
    },

    {
        name:"Black Rectangle Semi-Rimmed Eyeglasses",
        model: "TW1128MHM1|52",
        price: 1194,
        image: "images/products/TW1128MHM152.jpg",
        rating:"images/star-rating/four.png"
    },
    {
        name:"Gold Rectangle Rimless Eyeglasses",
        model: "EW1017WRM1|50",
        price: 695 ,
        image: "images/products/EW1017WRM150.jpg",
        rating:"images/star-rating/four.png"
    },
    
    
    
    {
        name:"Silver Rectangle Semi-Rimmed Eyeglasses",
        model: "TW1119MHM1|51",
        price: 599,
        image: "images/products/TW1119MHM151.jpg",
        rating:"images/star-rating/zero.png"
    },

    {
        name:"Gold Rectangle Semi-Rimmed Eyeglasses",
        model: "TW1091WHM1|49",
        price: 998,
        image: "images/products/TW1091WHM149.jpg",
        rating:"images/star-rating/zero.png"
    },
    {
        name:"Grey Rectangle Rimmed Eyeglasses",
        model: "FT1076WFC6|53",
        price: 1144 ,
        image: "images/products/FT1076WFC653.jpg",
        rating:"images/star-rating/three.png"
    },


    // {
    //     name:"Purple Rectangle Rimless Eyeglasses",
    //     model: "TW1085WRM2|51",
    //     price: 695,
    //     image: "images/products/TW1085WRM251.jpg",
    //     rating:"images/star-rating/three.png"
    // }


]
    // console.log(angular.toJson($scope.products))
}])

app.controller('cntUs',['$scope',($scope)=>{

$scope.contactUs =[
    
]
}])


app.controller('myModal',['$scope',($scope)=>{

    $scope.ss
}])