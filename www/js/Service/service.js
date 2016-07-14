angular.module('starter.services', [])

.factory('ServiceCategory', function($http, $q) {

    var categoriesData;
    var categoriesPostDetailsData;
    var userSelectedData = {};

    function getCategory() {
        var d = $q.defer();
        $http.get('../../json/category.json').success(function(data) {
            //console.log(data);
            categoriesData = data;
            d.resolve(categoriesData);
        }).error(function(error) {
            console.log(error);
            categoriesData = error;
        });

        return d.promise;
    }

    function getSubCategory(categoryName) {
        var d = $q.defer();
        var urldetails = '../../json/' + categoryName + '.json';

        $http.get(urldetails).success(function(data) {
            // console.log(data);
            d.resolve(data);
        }).error(function(error) {
            console.log(error);
            d.resolve(error);
        });
        return d.promise;
    }

    function setUserSelectedCategory(category) {
        userSelectedData.category = {};
        userSelectedData.category = category;
        //console.log("SET ",userSelectedData);
        
    }

    function getUserSelectedCategory() {
        console.log("GET", userSelectedData);
        return userSelectedData;
    }

    function setUserSelectedSubCategory(subcategory) {
        if (userSelectedData.category != undefined) {

            userSelectedData.category.subcategory = subcategory;
        } else {
            userSelectedData.category = {};
            userSelectedData.category.subcategory = subcategory;
        }
        //console.log("SET ",userSelectedData);
    }

    function getUserSelectedSubCategory() {
        // console.log("GET",userSelectedData);
        return userSelectedData;
    }

     function setSubCategorySelectedPostDetails(selectedPost) {
        if (userSelectedData.category != undefined) {
           // userSelectedData.category.subcategory = subcategory; 
            userSelectedData.category.post = selectedPost; 
        } 
        console.log("SET ",userSelectedData);
    }

    function getSubCategorySelectedPostDetails() {
        // console.log("GET",userSelectedData);
        return userSelectedData;
    }

 

    function getSubCategoryDetails(categoryName, index) {
        var d = $q.defer();
        var urldetails = '../../json/' + categoryName + '.json';

        // console.log("GET",userSelectedData);
        var index = userSelectedData.id;
        /*$http.get(urldetails).success(function(data) {
                var h1 = '.'+categoryName+'[index]';
                console.log(data+h1);
                d.resolve(data+h1);
            }).error(function(error) {
                console.log(error);
                d.resolve(error);
            });*/
        // return d.promise;

        return userSelectedData;
    }


    function getSubCategoryPostDetails() {
        var d = $q.defer();

        $http.get('../../json/postsDetails.json').success(function(data) {
            
            categoriesPostDetailsData = data;
           // console.log("categoriesPostDetailsData",data);
            d.resolve(categoriesPostDetailsData);
        }).error(function(error) {
            console.log(error);
            categoriesPostDetailsData = error;
        });

        return d.promise;
    }

    return {
        getCategory: getCategory,
        getSubCategory: getSubCategory,
        setUserSelectedCategory: setUserSelectedCategory,
        getUserSelectedCategory: getUserSelectedCategory,
        setUserSelectedSubCategory: setUserSelectedSubCategory,
        getUserSelectedSubCategory: getUserSelectedSubCategory,
        getSubCategoryDetails: getSubCategoryDetails,
        getSubCategorySelectedPostDetails: getSubCategorySelectedPostDetails,
        setSubCategorySelectedPostDetails: setSubCategorySelectedPostDetails,
        
        getSubCategoryPostDetails: getSubCategoryPostDetails
    }
})


.factory('Chats', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var chats = [{
        id: 0,
        name: 'Sudhir Pai',
        lastText: 'Melbourne, Australia',
        face: 'img/adam.png'
    }, {
        id: 1,
        name: 'Willem Veelenturf',
        lastText: 'Utrecht, Netherlands',
        face: 'img/ben.png'
    }, {
        id: 2,
        name: 'Bahar Khodabakhshi',
        lastText: 'Melbourne, Australia',
        face: 'img/max.png'
    }, {
        id: 3,
        name: 'Manish Grover',
        lastText: 'New York, USA',
        face: 'img/perry.png'
    }, {
        id: 4,
        name: 'Vishal Gupta',
        lastText: 'Pune, India',
        face: 'img/mike.png'
    }];

    return {
        all: function() {
            return chats;
        },
        remove: function(chat) {
            chats.splice(chats.indexOf(chat), 1);
        },
        get: function(chatId) {
            for (var i = 0; i < chats.length; i++) {
                if (chats[i].id === parseInt(chatId)) {
                    return chats[i];
                }
            }
            return null;
        }
    };
});