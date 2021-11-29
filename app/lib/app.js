let app = angular.module('myApp',[]);


app.controller('productsCtrl',['$scope',($scope)=>{

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
    }
]
   // see more details of items
    $scope.furtherInfo= (product)=>{
        let myimage = product.item.image
        let myname = product.item.name
        let myprice = product.item.price
        let mymodel = product.item.model
        let myrate = product.item.rating
              
        let itemImg = document.querySelector('#itemImg');
        itemImg.src = myimage
        
        let itemName = document.querySelector('#itemName');
        itemName.innerHTML = myname;

        let itemModel = document.querySelector('#itemModel');
        itemModel.innerHTML = mymodel;

        let itemRate = document.querySelector('#itemRate');
        itemRate.src = myrate

        let itemPrice = document.querySelector('#itemPrice');
        itemPrice.innerHTML = myprice;
        
    }

  
  
}])

app.controller('cntUs',['$scope',($scope)=>{

$scope.contactUs =[
    
]
}])


app.controller('myModal',['$scope',($scope)=>{

    // $scope.fName = '';
    // $scope.lName = '';
    // $scope.email = '';
    // $scope.message = '';

    $scope.submitForm = function(formValid){
        if(formValid) {
      console.log("good")
        }
      };
}])