angular.module('todoApp', ['ngSanitize'])
  .controller('WebsiteController', function() {

    this.langs = {
      'en': 'English',
      'de': 'Deutsch'
    };
    this.contents = [
      {
        name: 'about_me',
        title: {
          en: 'About Me',
          de: 'Über Mich'
        },
        body: {
          en:
            '<p>I am a software developer and teacher from Austria.</p>' +
            '<p>I am experienced in <em>Python</em> and <em>JavaScript</em> and have worked with many other languages, '+
            'particularly in the area of 3D graphics and web programming.</p>' +
            '<p>I am also teaching mathematics and geometry in school and in private.</p>' +
            '<p>I enjoy working for the organisations <a href=http://www.cisv.org/ target="_blank">CISV</a> '+
            'and <a href=http://bonfaremo.org/ target="_blank">Bonfaremo</a>.</p>',
          de:
           '<p>Ich bin ein Softwareentwickler und Lehrer aus Wien.</p>' +
           '<p>Ich bin erfahren im Umgang mit <em>Python</em> und <em>JavaScript</em> ' +
           'und habe mit vielen anderen Programmiersprachen gearbeitet, ' +
           'insbesondere in den Bereichen der 3D Grafik und Web-Programmierung.</p>' +
           '<p>Außerdem unterrichte ich Mathematik und Geometrie in der Schule und als Nachhilfelehrer.</p>' +
           '<p>Weiters genieße ich es, für die gemeinnützigen Organisationen ' +
           '<a href=http://www.cisv.org/ target="_blank">CISV</a> '+
           'und <a href=http://bonfaremo.org/ target="_blank">Bonfaremo</a> zu arbeiten.</p>'
        }
      },
      {
        name: 'programming',
        title: {
          en: 'Programming',
          de: 'Softwareentwicklung'
        },
        body: {
          en:
            '<p>I am an enthusiastic supporter of open source software. ' +
            'Besides using Debian Linux as my operating system I contributed to and launched my own open source software projects.</p>' +
            'During my university thesis I developed <a href=http://sourceforge.net/p/kubos/wiki/Home/ target="_blank">Kubos</a>, ' +
            'a CAD modelling application written in Python. ' +
            'Thanks to its thought-through software design it consists of just 4000 lines of code.</p>' +
            '<p>More recently I turned my attention to Web content - especially interactive 3D content in browsers. <n>' +
            'I created a <a href=http://marko-knoebl.github.io/2048-3D/ target="_blank">3D version of 2048</a> ' +
            'and I am working on two 3D modeling applications: ' +
            '<a href=https://kubos.pythonanywhere.com/blocks target="_blank">Kubos Blocks</a> and ' +
            '<a href=https://kubos.pythonanywhere.com/solids target="_blank">Kubos Solids</a>.</p>' +
            'In general I\'m interested in anything related to web programming, including JavaScript and Python - ' +
            'this small website is in fact written entirely in JavaScript.</p>' +
            '<p>I have previously worked with: <br>' +
            '<em>Python, JavaScript, C#</em>, Visual Basic, PHP, CoffeeScript<br>' +
            '<em>HTML, CSS, HTTP, three.js, Django</em>, jQuery, SVG, webapp2, OAuth<br>' +
            'NumPy, SymPy, SciPy, Sage, Open Cascade, Mathematica, MATLAB<br>' +
            'Linux (Debian), Qt</p>',
          de:
            '<p>Ich habe mich bereits an einigen open-source Projekten ' +
            'beteiligt und auch eigene Programme entwickelt.</p>' +
            'Im Rahmen meiner Diplomarbeit habe ich mit ' +
            '<a href=http://sourceforge.net/p/kubos/wiki/Home/ target="_blank">Kubos</a> ' +
            'ein CAD-Modellierprogramm entwickelt. Die in Python ' +
            'geschriebene Software besteht aufgrund des durchdachten ' +
            'Softwaredesigns aus nur 4000 Codezeilen.</p>' +
            '<p>In letzter Zeit habe ich mich mehr mit Webinhalten beschäftigt ' +
            '- insbesondere mit interaktiven 3D-Inhalten in browsern. ' +
            'Ich habe eine <a href=http://marko-knoebl.github.io/2048-3D/ target="_blank">3D-Version von 2048</a> ' +
            'erstellt und arbeite an zwei 3D-Modellierungs-Anwendungen: ' +
            '<a href=https://kubos.pythonanywhere.com/blocks target="_blank">Kubos Blocks</a> und ' +
            '<a href=https://kubos.pythonanywhere.com/solids target="_blank">Kubos Solids</a>.</p>' +
            'Generell bin ich an allem interessiert, das mit Web-Programmierung zu tun hat, ' +
            'unter anderem JavaScript und Python - ' +
            'diese kleine Website ist beispielsweise vollständig in JavaScript geschrieben.</p>' +
            '<p>Ich habe Erfahrungen mit: <br>' +
            '<em>Python, JavaScript, C#</em>, Visual Basic, PHP, CoffeeScript<br>' +
            '<em>HTML, CSS, HTTP, three.js, Django</em>, jQuery, SVG, webapp2, OAuth<br>' +
            'NumPy, SymPy, SciPy, Sage, Open Cascade, Mathematica, MATLAB<br>' +
            'Linux (Debian), Qt</p>'
        }
      },
      {
        name: 'cv',
        title: {
          en: 'Curriculum Vitae',
          de: 'Lebenslauf'
        },
        body: {
          en: '<p><br>You can download my CV <a href=cv-marko-knoebl.pdf target="_blank">here</a>.</p>',
          de:
            '<p><br>Mein Lebenslauf steht ' +
            '<a href=cv-marko-knoebl.pdf target="_blank">hier</a> ' +
            'zum Download.</p>'
        }
      },
      {
        name: 'teaching',
        title: {
          en: 'Teaching',
          de: 'Unterricht'
        },
        body: {
          en:
            '<p>I am offering private lessons for students of all ages in Vienna for the subjects ' +
            'mathematics, geometry and informatics. I am located near the underground station ' +
            'Schönbrunn, but I can also visit you at your home.</p>' +
            '<p>Contact me if you are interested.</p>',
          de:
            '<p>Ich biete in Wien Nachhilfestunden für Schüler allen ' +
            'Alters für die Gegenstände Mathematik, Geometrie und ' +
            'Informatik. Meine Wohnung befindet sich in ' +
            'unmittelbarer Nähe der ' +
            'U-Bahn-Station Schönbrunn. Gerne komme ich auch zu dir ' +
            'nach Hause.</p>'
        }
      },
      {
        name: 'contact',
        title: {
          en: 'Contact',
          de: 'Kontakt'
        },
        body: {
          en:
            '<address>' +
            '<p>Marko "Karuga" Knöbl</p>' +
            '<p><a href="mailto:marko.kn@gmail.com">marko.kn@gmail.com</a></p>' +
            '<p>Baumgarten 21<br>7122 Gols<br>Austria</p>' +
            '<p>0043 680 2306962</p>' +
            '</address>',
          de:
            '<address>' +
            '<p>Marko "Karuga" Knöbl</p>' +
            '<p><a href="mailto:marko.kn@gmail.com">marko.kn@gmail.com</a></p>' +
            '<p>Baumgarten 21<br>7122 Gols<br>Österreich</p>' +
            '<p>0043 680 2306962</p>' +
            '</address>',
        }
      }
    ];
    this.selected = 0;
    this.language = 'en';
  });
