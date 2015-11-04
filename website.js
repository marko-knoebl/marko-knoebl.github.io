angular.module('todoApp', ['ngSanitize', 'ngRoute'])
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
    this.contentsOrder = ['aboutme', 'programming', /*'cv',*/ 'teaching', 'contact'];
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
      /*cv:{
        title: {
          en: 'Curriculum Vitae',
          de: 'Lebenslauf'
        }
      },*/
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
