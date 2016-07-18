// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic','ionic-datepicker'])//'angular-carousel'//'ui.bootstrap'//,//'chart.js'

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

app.controller('HomeCtrl', function ($scope, ionicDatePicker) {

    var ipObj1 = {
      callback: function (val) {  //Mandatory
        console.log('Return value from the datepicker popup is : ' + val, new Date(val));
      },
      disabledDates: [            //Optional
        new Date(2016, 2, 16),
        new Date(2015, 3, 16),
        new Date(2015, 4, 16),
        new Date(2015, 5, 16),
        new Date('Wednesday, August 12, 2015'),
        new Date("08-16-2016"),
        new Date(1439676000000)
      ],
      from: new Date(2012, 1, 1), //Optional
      to: new Date(2016, 10, 30), //Optional
      inputDate: new Date(),      //Optional
      mondayFirst: true,          //Optional
      disableWeekdays: [0],       //Optional
      closeOnSelect: false,       //Optional
      templateType: 'popup'       //Optional
    };

    $scope.openDatePicker = function(){
      ionicDatePicker.openDatePicker(ipObj1);
    };
});


//angular charts

//var app = angular.module('starter', ['ionic','chart.js']).config(['ChartJsProvider', function (ChartJsProvider) {
//    // Configure all charts
//    ChartJsProvider.setOptions({
//      colours: ['#FF5252', '#FF8A80'],
//      responsive: false
//    });
//    // Configure all line charts
//    ChartJsProvider.setOptions('Line', {
//      datasetFill: false
//    });
//  }]);
//
//
//app.controller('LineCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
//    $scope.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
//    $scope.series = ['Series A', 'Series B'];
//    $scope.data = [
//      [65, 59, 80, 81, 56, 55, 40],
//      [28, 48, 40, 19, 86, 27, 90]
//    ];
//    $scope.onClick = function (points, evt) {
//      console.log(points, evt);
//    };
//    $scope.onHover = function (points) {
//      if (points.length > 0) {
//        console.log('Point', points[0].value);
//      } else {
//        console.log('No point');
//      }
//    };
//
//    $timeout(function () {
//      $scope.labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
//      $scope.data = [
//        [28, 48, 40, 19, 86, 27, 90],
//        [65, 59, 80, 81, 56, 55, 40]
//      ];
//      $scope.series = ['Series C', 'Series D'];
//    }, 3000);
//  }]);
//
//app.controller('DoughnutCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
//    $scope.labels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
//    $scope.data = [0, 0, 0];
//
//    $timeout(function () {
//      $scope.data = [350, 450, 100];
//    }, 500);
//  }]);



//app.controller('mainTab', function($scope){
//    console.log("Ok");
//})
//
//
//app.controller('carouselCtrl', function ($scope) {
//
//    $scope.colors = ["#fc0003", "#f70008", "#f2000d", "#ed0012", "#e80017", "#e3001c", "#de0021", "#d90026", "#d4002b", "#cf0030", "#c90036", "#c4003b", "#bf0040", "#ba0045", "#b5004a", "#b0004f", "#ab0054", "#a60059", "#a1005e", "#9c0063", "#960069", "#91006e", "#8c0073", "#870078", "#82007d", "#7d0082", "#780087", "#73008c", "#6e0091", "#690096", "#63009c", "#5e00a1", "#5900a6", "#5400ab", "#4f00b0", "#4a00b5", "#4500ba", "#4000bf", "#3b00c4", "#3600c9", "#3000cf", "#2b00d4", "#2600d9", "#2100de", "#1c00e3", "#1700e8", "#1200ed", "#0d00f2", "#0800f7", "#0300fc"];
//
//    function getSlide(target, style) {
//        var i = target.length;
//        console.log("" + target.length);
//        return {
//            id: (i + 1),
//            label: 'slide #' + (i + 1),
//            img: 'http://lorempixel.com/250/250/' + style + '/' + ((i + 1) % 10),
//            color: $scope.colors[(i * 10) % $scope.colors.length],
//            odd: (i % 2 === 0)
//        };
//    }
//
//    function addSlide(target, style) {
//        target.push(getSlide(target, style));
//    };
//
//    $scope.carouselIndex = 3;
//    $scope.carouselIndex2 = 0;
//    $scope.carouselIndex2 = 1;
//    $scope.carouselIndex3 = 5;
//    $scope.carouselIndex4 = 5;
//
//    function addSlides(target, style, qty) {
//        for (var i = 0; i < qty; i++) {
//            addSlide(target, style);
//        }
//    }
//
//    // 1st ngRepeat demo
//    $scope.slides = [];
//    addSlides($scope.slides, 'sports', 50);
//
//    // 2nd ngRepeat demo
//    $scope.slides2 = [];
//    addSlides($scope.slides2, 'sports', 10);
//
//    // 3rd ngRepeat demo
//    $scope.slides3 = [];
//    addSlides($scope.slides3, 'people', 50);
//
//    // 4th ngRepeat demo
//    $scope.slides4 = [];
//    addSlides($scope.slides4, 'city', 50);
//
//
//    // 5th ngRepeat demo
//    $scope.slides6 = [];
//    $scope.carouselIndex6 = 0;
//    addSlides($scope.slides6, 'sports', 10);
//    $scope.addSlide = function (at) {
//        if (at === 'head') {
//            $scope.slides6.unshift(getSlide($scope.slides6, 'people'));
//        } else {
//            $scope.slides6.push(getSlide($scope.slides6, 'people'));
//        }
//    }
//
//    // End to End swiping
//    // load 130 images in main javascript container
//    var slideImages = [];
//    addSlides(slideImages, 'sports', 10);
//    addSlides(slideImages, 'people', 10);
//    addSlides(slideImages, 'city', 10);
//    addSlides(slideImages, 'abstract', 10);
//    addSlides(slideImages, 'nature', 10);
//    addSlides(slideImages, 'food', 10);
//    addSlides(slideImages, 'transport', 10);
//    addSlides(slideImages, 'animals', 10);
//    addSlides(slideImages, 'business', 10);
//    addSlides(slideImages, 'nightlife', 10);
//    addSlides(slideImages, 'cats', 10);
//    addSlides(slideImages, 'fashion', 10);
//    addSlides(slideImages, 'technics', 10);
//    $scope.totalimg = slideImages.length;
//    
//    //console.log("Total Images " + slideImages.length);
//    $scope.galleryNumber = 1;
//    console.log($scope.galleryNumber);
//
//    function getImage(target) {
//        var i = target.length,
//            p = (($scope.galleryNumber - 1) * $scope.setOfImagesToShow) + i;
//        console.log("i=" + i + "--" + p);
//
//        return slideImages[p];
//    }
//
//    function addImages(target, qty) {
//
//        for (var i = 0; i < qty; i++) {
//            addImage(target);
//        }
//    }
//
//    function addImage(target) {
//        target.push(getImage(target));
//    }
//
//    $scope.slides7 = [];
//    $scope.carouselIndex7 = 0;
//    $scope.setOfImagesToShow = 3;
//    addImages($scope.slides7, $scope.setOfImagesToShow);
//    $scope.loadNextImages = function () {
//        console.log("loading Next images");
//        if (slideImages[slideImages.length - 1].id !== $scope.slides7[$scope.slides7.length - 1].id) {
//            // Go to next set of images if exist
//            $scope.slides7 = [];
//            $scope.carouselIndex7 = 0;
//            ++$scope.galleryNumber;
//            addImages($scope.slides7, $scope.setOfImagesToShow);
//        } else {
//            // Go to first set of images if not exist
//            $scope.galleryNumber = 1;
//            $scope.slides7 = [];
//            $scope.carouselIndex7 = 0;
//            addImages($scope.slides7, $scope.setOfImagesToShow);
//        }
//    }
//    $scope.loadPreviousImages = function () {
//        if (slideImages[0].id !== $scope.slides7[0].id) {
//            // Go to previous set of images if exist
//            $scope.slides7 = [];
//            $scope.carouselIndex7 = 0;
//            --$scope.galleryNumber;
//            addImages($scope.slides7, $scope.setOfImagesToShow);
//        } else {
//            // Go to last set of images if not exist
//            console.log("slideimageslength: " + slideImages.length + ", " + slideImages.length - 1 / $scope.setOfImagesToShow);
//            // console.log("slideimageslength: " + slideImages.length );
//            $scope.galleryNumber = slideImages.length / $scope.setOfImagesToShow;
//            $scope.slides7 = [];
//            $scope.carouselIndex7 = 0;
//            addImages($scope.slides7, $scope.setOfImagesToShow);
//            console.log("no images left");
//        }
//    }
//});
//
//

// app.controller('modalCtrl', function ($scope) {
//
//         $scope.open = function () {
//             $scope.showModal = true;
//         };
//
//         $scope.ok = function () {
//             $scope.showModal = false;
//         };
//
//         $scope.cancel = function () {
//             $scope.showModal = false;
//         };
//  });

//app.controller('PopupDemoCont', ['$scope','$uibModal',function ($scope, $modal) {
//            $scope.open = function () {
//                var modalInstance = $modal.open({
//					  controller: 'PopupCont',
//                      templateUrl: 'popup.html',
//                });
//            }
//        }]);

//app.controller('PopupCont', ['$scope','$uibModalInstance',function ($scope, $modalInstance) {
//            $scope.close = function () {
//                $modalInstance.dismiss('cancel');
//            };
//        }]);

