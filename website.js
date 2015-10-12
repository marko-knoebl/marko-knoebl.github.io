angular.module('todoApp', [])
  .controller('WebsiteController', function() {

    this.langs = {
      'en': 'English',
      'de': 'Deutsch'
    };
    this.contents = [
      {
        name: 'home',
        title: {
          en: 'Home',
          de: 'Home'
        },
        body: {
          en: 'Welcome to my website!',
          de: 'Willkommen auf meiner Website!'
        }
      },
      {
        name: 'teaching',
        title: {
          en: 'Teaching',
          de: 'Unterricht'
        },
        body: {
          en: "I teach private lessons.",
          de: 'Ich gebe Nachhilfe.'
        }
      },
      {
        name: 'programming',
        title: {
          en: 'Programming',
          de: 'Entwicklung'
        },
        body: {
          en: 'programming rocks!',
          de: 'uii'
        }
      }
    ];
    this.selected = 0;
    this.language = 'en';
  });
