## Inhoudsopgave
* [De opdracht](#De-opdracht)
* [Mijn concept](#Mijn-concept)
   * [De hoofdpagina](#De-hoofdpagina-(tot-nu-toe))
* [Installatie](#Installatie)
   * [Routie](#Routie)
* [Features](#Features)
* [Bronnenlijst](#Bronnenlijst)
* [Credits](#Credits)

## De opdracht 
De opdracht is om (zoals de titel het al zegt) een website server side te renderen. Als bij iemand het javascript uit staat zou de data nog steeds te zien moeten zijn. Uiteindelijk word de website een progressive web app. Het is ook de bedoeling dat je feedback geeft als de gebruiker offline is en er worden enkele bestanden gecached zodat de website sneller is als de gebruiker er voor de tweede keer op komt. 

## Mijn concept
Ik ga mijn website gebruiken die ik bij web app from scratch heb gemaakt. Daarin heb ik de api, darksky gebruikt. Het concept blijft hetzelfde als mijn eerste concept. Alleen word de website nu niet meer client side gerenderd maar server side. 

#### De hoofdpagina (tot nu toe)

## Installatie
Hier vertel ik wat je moet installeren om dit project te kunnen gebruiken en laat ik gelijk zien hoe je dat moet doen. Aller eerst moet je deze repo forken of downloaden met de groene knop rechts boven. Als je wilt weten wat je allemaal installeerd, lees dan mijn wiki warin ik uitleg wat alles kan en doet. 

##### Zorg ervoor dat je deze commands in je terminal uitvoerd in de map waar dit project in is opgeslagen. 

Allereest moet je ervoor zorgen dat je homebrew hebt geïnstalleerd:
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

vervolgens installeer je node:
```
brew install node
```

Als je dat hebt gedaan kan je alle dependencies installeren met deze command
```
npm install
```

Lukt dat niet? Dan heb ik hier nog alle install commands op een rijtje
```
npm install express --save
npm install ejs
npm install node-fetch --save
npm install npm-run-all --save-dev
npm install --save-dev nodemon
npm install dotenv
npm install rimraf
npm install chokidar
npm install --save-dev gulp
npm install --save-dev gulp-autoprefixer
npm install gulp-clean-css --save-dev
npm install --save-dev gulp-concat
npm install --save-dev gulp-filter
npm install --save-dev gulp-rev
npm install gulp-rev-css-url
npm install --save-dev gulp-rev-replace
```

### Server starten (en afsluiten)
Nu je alles hebt geïnstalleerd kan je de server starten door deze command in je terminal te typen:
```
npm start 
```

Je kan naar localhost:5000 om de website te zien. 

Wil je de server weer uitzetten? Ga naar je terminal en doe crtl+C. 

## Performance enhancements
### Before and after

### Server side rendering
Om de ervaring van de website te verbeteren heb ik het server side gemaakt. Dit heb ik gedaan met nodejs, express en ejs. Op deze manier kan ik bestanden browser cachen, een offline pagina tonen en javascript en css bestanden comprimeren. 

### Minifying 
Dankzij Gulp heb ik mijn css, manifest en service worker bestanden kleiner gemaakt. Dit scheelt weer een stukje in de snelheid. 
- 

### Web safe fonts 

### Caching

### Service worker (offline page)

## Low hanging fruit
Toen ik aan het einde nog mijn website ging testen kwam ik nog een paar dingen tegen die verbeterd konden worden. Dit heb ik gedaan voordat ik mijn definitieve test wilde vergelijken met mijn eerste website. 

### Overbodige CSS
Ik kwam erachter dat ik nog een aantal regels code in mijn css bestand had staan niet niet meer relevant waren. Deze heb ik verwijderd en het scheelt toch weer een klein beetje kb. 

### Semantische html
![Schermafbeelding 2020-03-24 om 17 52 47](https://user-images.githubusercontent.com/45541885/77454586-05cfa500-6df9-11ea-9bdd-174138c0d6d6.png)

Een van de errors die ik kreeg is dat ik id's gebruikte waar classes moesten staan. Dit heb ik opgelost door de id's te vervangen voor de classes en hierdoor is mijn website weer een stukje beter in SEO. 

### Geen meta description

### Geen theme color

## Features

## Bronnenlijst
- Hoe je alle id's achter de url pakt - https://stackoverflow.com/questions/25623041/how-to-configure-dynamic-routes-with-express-js

## Credits
- Marissa Verdonck, met haar heb ik de eerste dag samengewerkt en we hebben samen alles opgezet. 
- Robin Stut, hij heeft me geholpen met het routen en dan ik dat op een dynamische manier kan doen. 
- Robin Frugte, hij heeft me geholpen met het offline bericht vanuit de service worker. 
