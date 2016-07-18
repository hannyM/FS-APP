angular.module('starter.controllers', ['starter.services'])

.controller('subCategoryDetails1Ctrl', function($scope, $state, $http, $ionicHistory,ServiceCategory) {
    var selectedcategory = ServiceCategory.getUserSelectedCategory();
    var subCategory;
    var showCategory ={};
    $scope.ShowData = [];
    console.log('In selectedTrend', selectedcategory);

    //$scope.subCategory =  ServiceCategory.getSubCategoryDetails('trendingCategory',selectedcategory.id)

    if (selectedcategory.category.name === 'What is trending ?') {
        ServiceCategory.getSubCategoryPostDetails().then(function (data) {
            subCategory = data;
            $scope.ShowData = getExactPostDetails(selectedcategory,subCategory)
            if($scope.ShowData.length === 0){
                 $scope.ShowData.message = "There's no post avalible for "+selectedcategory.category.subcategory.name+"Please Try other subcategory";
            }
        })       
    }

    function getExactPostDetails(selectedcategory,subCategory) {
         var postDataToShow = [];
        if(subCategory.posts.length > 0)
        {
            for(var i=0;i<subCategory.posts.length;i++) {
            var actualString = subCategory.posts[i].subcategory;  
            var searchString= selectedcategory.category.subcategory.name;
                if(actualString.indexOf(searchString) != -1)
                {
                 postDataToShow.push(subCategory.posts[i]);
                 console.log('Retrived data',selectedcategory.category.subcategory.name, subCategory.posts[i].subcategory);
                }
                else {
                    console.log("Not Found");
                }
            }
        }

        return postDataToShow;
    }

    $scope.selectedPost = function(postDetails) {
        ServiceCategory.setSubCategorySelectedPostDetails(postDetails);
        $state.go('tab.dash-postDetails');
    }

    $scope.hasLabels = function(subCategory) {
        if(subCategory.label.length > 0)
        {
            if(subCategory.label.name === selectedcategory.category.subCategory.label.name)
                console.log("gfhgfh",subCategory);

        }
    }    
})

.controller('subCategoryDetails2Ctrl', function($scope, $state, $http, $ionicHistory) {
    

    $http.get('json/groupCategory.json').success(function(data) {
        console.log(data);
        $scope.subCategory = data.groupCategory[0];
    }).error(function(error) {
        console.log(error);
    });
    console.log('In subCategoryDetails2Ctrl Ctrl');
})

.controller('postDetailsCtrl', function($scope, $state,ServiceCategory) {
   var postDetails = ServiceCategory.getSubCategorySelectedPostDetails();
   $scope.postDetails = postDetails.category.post;
        console.log('postDetailsCtrl', $scope.postDetails);

    $scope.title =  postDetails.category.post.title ;
    $scope.labels =  postDetails.category.post.label ;
})

.controller('SignInCtrl', function($scope, $state) {
    $scope.signIn = function(user) {
        console.log('Sign-In', user);
        $state.go('tab.dash');
    };
})

.controller('blogPostCtrl', function($scope, $state, $http,ServiceCategory) {
    ServiceCategory.getCategory().then(function(data) {
           $scope.categories = data.category;
          console.log($scope.categories);    
       $scope.showSelectValue($scope.categories);
    });

$scope.showSelectValue = function(categories) {
        if ( categories === "What is trending ?") {
            ServiceCategory.setUserSelectedCategory(categories);
            $scope.selectedSubcategoryDetails =ServiceCategory.getUserSelectedCategory();
        } else if ( categories === "Innovate to Disrupt") {
            ServiceCategory.setUserSelectedCategory(categories);
              $scope.selectedSubcategoryDetails = ServiceCategory.getUserSelectedCategory();
        } else if (categories === "Group Catalyst") {
            ServiceCategory.setUserSelectedCategory(categories);
              $scope.selectedSubcategoryDetails =   ServiceCategory.getUserSelectedCategory();
        } else if ( categories === "External Influences") {
            ServiceCategory.setUserSelectedCategory(categories);
             $scope.selectedSubcategoryDetails =  ServiceCategory.getUserSelectedCategory();
        } else if ( categories === "CTO Community") {
           ServiceCategory.setUserSelectedCategory(categories);
             $scope.selectedSubcategoryDetails =    ServiceCategory.getUserSelectedCategory();
        }
    };

    $scope.selectedSubcategoryDetails  = $scope.showSelectValue($scope.categories);

    $scope.publish = function() {
        ServiceCategory.publishPost().then(function(data){
            console.log(data);
        })
    }
})

.controller('CategoryCtrl', function($scope, $state, $http, $ionicHistory, ServiceCategory) {
    ServiceCategory.getSubCategory('trendingCategory1').then (function(data) {
             $scope.subCategory = data;
            //  console.log($scope.subCategory);
    }); 
        
    $scope.selectedTrend = function(category) {
        console.log('In selectedTrend', category);
        ServiceCategory.setUserSelectedSubCategory(category);
        $state.go('tab.dash-subCategoryDetails1');
    };

    $scope.myGoBack = function() {
        $ionicHistory.goBack();
    };
})

.controller('InnovateCategoryCtrl', function($scope, $state, $http, $ionicHistory, ServiceCategory) {
    ServiceCategory.getSubCategory('innovateCategory').then (function(data) {
             $scope.subCategory = data;
            //  console.log($scope.subCategory);
    }); 

    $scope.selectedTrend = function(category) {
        console.log('In selectedTrend', category);
        ServiceCategory.setUserSelectedCategory(category);
        $state.go('tab.dash-subCategoryDetails1');
    };

    $scope.myGoBack = function() {
        $ionicHistory.goBack();
    };
})

.controller('ExternalCategoryCtrl', function($scope, $state, $http, $ionicHistory, ServiceCategory) {
    ServiceCategory.getSubCategory('externalCategory').then (function(data) {
             $scope.subCategory = data;
            //  console.log($scope.subCategory);
    }); 

    $scope.selectedTrend = function(category) {
        console.log('In selectedTrend', category);
        ServiceCategory.setUserSelectedCategory(category);
        $state.go('tab.dash-subCategoryDetails2');
    };

    $scope.myGoBack = function() {
        $ionicHistory.goBack();
    };
})

.controller('GroupCategoryCtrl', function($scope, $state, $http, $ionicHistory, ServiceCategory) {
    ServiceCategory.getSubCategory('groupCategory').then (function(data) {
             $scope.subCategory = data;
            //  console.log($scope.subCategory);
    }); 

    $scope.selectedTrend = function(category) {
        console.log('In selectedTrend', category);
         ServiceCategory.setUserSelectedCategory(category);
        $state.go('tab.dash-subCategoryDetails2');
    };

    $scope.myGoBack = function() {
        $ionicHistory.goBack();
    };
})

.controller('CommunityCategoryCtrl', function($scope, $state, $http, $ionicHistory, ServiceCategory) {
    ServiceCategory.getSubCategory('communityCategory').then (function(data) {
             $scope.subCategory = data;
            //  console.log($scope.subCategory);
    }); 
    $scope.selectedTrend = function(category) {
        console.log('In selectedTrend', category);
        ServiceCategory.setUserSelectedCategory(category);
        $state.go('tab.dash-subCategoryDetails2');
    };

    $scope.myGoBack = function() {
        $ionicHistory.goBack();
    };
})

.controller('DashboardCtrl', function($scope, $http, $state, ServiceCategory,$q) {

    $scope.writeBlog = function(){
        $state.go('tab.writeBlog');
    }
    
    ServiceCategory.getCategory().then (function(data) {
             $scope.categories =data;
         //console.log($scope.categories);
    }); 
        
    $scope.selectCategory = function(categories) {
        if (categories.name == "What is trending ?") {
            ServiceCategory.setUserSelectedCategory(categories);
            $state.go('tab.dash-subCategory');
        } else if (categories.name == "Innovate to Disrupt") {
            ServiceCategory.setUserSelectedCategory(categories);
            $state.go('tab.dash-subCategoryInnovate');
        } else if (categories.name == "Group Catalyst") {
            ServiceCategory.setUserSelectedCategory(categories);
            $state.go('tab.dash-subCategoryGroup');
        } else if (categories.name == "External Influences") {
            ServiceCategory.setUserSelectedCategory(categories);
            $state.go('tab.dash-subCategoryExternal');
        } else if (categories.name == "CTO Community") {
           ServiceCategory.setUserSelectedCategory(categories);
           $state.go('tab.dash-subCategoryCommunity');
        }
    };
})

.controller('LogoutCtrl', function($scope, $state, $location) {
    $scope.settings = {
        enableFriends: true
    };
    $scope.toggleChange = function() {
        if ($scope.settings.enableFriends == false) {
            $state.go('signin');
        } else
            $scope.settings.enableFriends = true;

    };
})

.controller('ProfileCtrl', function($scope,Details,$state) {
    $scope.settings = {
        enableFriends: true
    };
    
    $scope.getUser = Details.getUser();


    $scope.update = function(userDetails) {
        console.log("update",userDetails);
        $state.go('tab.updatedProfile');
    }
})


.controller('updatedProfileCtrl', function($scope,Details,$state) {
    $scope.settings = {
        enableFriends: true
    };
    
    $scope.getUser = Details.getUser();

    $scope.saveProfile = function(userDetails) {
        console.log("saveProfile",userDetails);
        Details.updateUserDetails(userDetails);
        $state.go('tab.profile');
    }
})
.controller('NotificationsCtrl', function($scope,Notifications) {
    $scope.settings = {
        enableFriends: true
    };

    $scope.notificationDetails = Notifications.all();
    //console.log('NotificationsCtrl',$scope.notificationDetails);

})

.controller('ChatsCtrl', function($scope, Chats) {
   $scope.chats = Chats.all();
   $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
    $scope.settings = {
        enableFriends: true
    };
});