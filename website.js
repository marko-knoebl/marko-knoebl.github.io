angular.module('resume', [])
  .directive('resume', ['$http', function($http) {
    return {
      restrict: 'E',
      templateUrl: 'templates/resume-template-angular-theme:flat.html',
      controller: function($scope) {
        $http({method: 'GET', url:'resume.json'})
        .then(function(result) {
          $scope.data = result.data;
          var topics = ['basics', 'work', 'volunteer', 'education', 'awards', 'publications',
                        'skills', 'languages', 'interests', 'references'];
          topics.forEach(function(topic) {
            $scope[topic] = $scope.data[topic];
          });
        });
      }
    }
  }]);

angular.module('karugaWebsiteApp', ['ngSanitize', 'ngRoute', 'resume'])
  .config(function($routeProvider) {
    $routeProvider.when('/:topic/:lang', {
      templateUrl: function(params) {return 'templates/' + params.topic + '_' + params.lang + '.html';},
      controller: 'WebsiteController'
    });
    $routeProvider.otherwise({redirectTo: '/aboutme/en'});
  })
  .controller('WebsiteController', function($scope, $location) {
    var parts = $location.path().split('/');
    this.topic = parts[1];
    this.language = parts[2];
    if (!this.topic) {
      this.topic = 'aboutme';
      this.language = 'en';
    }
    this.langs = {
      'en': 'English',
      'de': 'Deutsch'
    };
    this.contentsOrder = ['aboutme', 'programming', 'cv', 'teaching', 'contact'];
    this.contents = {
      aboutme:{
        title: {
          en: 'About Me',
          de: 'Über Mich'
        }
      },
      programming:{
        title: {
          en: 'Programming',
          de: 'Softwareentwicklung'
        }
      },
      cv:{
        title: {
          en: 'Curriculum Vitae',
          de: 'Lebenslauf'
        }
      },
      teaching:{
        title: {
          en: 'Teaching',
          de: 'Unterricht'
        }
      },
      contact:{
        title: {
          en: 'Contact',
          de: 'Kontakt'
        }
      }
    };
  });

$.material.init();
