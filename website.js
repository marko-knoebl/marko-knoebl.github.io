angular.module('todoApp', ['ngSanitize', 'ngRoute'])
  .config(function($routeProvider) {
    $routeProvider.when('/:topic/:lang', {
      templateUrl: function(params) {return 'templates/' + params.topic + '_' + params.lang + '.html';}
    });
  })
  .controller('WebsiteController', function() {

    this.langs = {
      'en': 'English',
      'de': 'Deutsch'
    };
    this.contents = [
      {
        name: 'aboutme',
        title: {
          en: 'About Me',
          de: 'Über Mich'
        }
      },
      {
        name: 'programming',
        title: {
          en: 'Programming',
          de: 'Softwareentwicklung'
        }
      },
      {
        name: 'cv',
        title: {
          en: 'Curriculum Vitae',
          de: 'Lebenslauf'
        }
      },
      {
        name: 'teaching',
        title: {
          en: 'Teaching',
          de: 'Unterricht'
        }
      },
      {
        name: 'contact',
        title: {
          en: 'Contact',
          de: 'Kontakt'
        }
      }
    ];
    this.selected = 0;
    this.language = 'en';
  });
