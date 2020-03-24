### Inhoudsopgave
* [De opdracht](#De-opdracht)
* [Mijn concept](#Mijn-concept)
   * [De hoofdpagina](#De-hoofdpagina-(tot-nu-toe))
* [Installatie](#Installatie)
   * [Routie](#Routie)
* [Features](#Features)
* [Bronnenlijst](#Bronnenlijst)
* [Credits](#Credits)

### De opdracht 
De opdracht is om (zoals de titel het al zegt) een website server side te renderen. Als bij iemand het javascript uit staat zou de data nog steeds te zien moeten zijn. Uiteindelijk word de website een progressive web app. Het is ook de bedoeling dat je feedback geeft als de gebruiker offline is en er worden enkele bestanden gecached zodat de website sneller is als de gebruiker er voor de tweede keer op komt. 

### Mijn concept
Ik ga mijn website gebruiken die ik bij web app from scratch heb gemaakt. Daarin heb ik de api, darksky gebruikt. Het concept blijft hetzelfde als mijn eerste concept. Alleen word de website nu niet meer client side gerenderd maar server side. 

#### De hoofdpagina (tot nu toe)

### Installatie
Hier vertel ik wat je moet installeren om dit project te kunnen gebruiken en laat ik gelijk zien hoe je dat moet doen. Aller eerst moet je deze repo forken of downloaden met de groene knop rechts boven. Als je wilt weten wat je allemaal installeerd, lees dan mijn wiki warin ik uitleg wat alles kan en doet. 

#### Zorg ervoor dat je deze commands in je terminal uitvoerd in de map waar dit project in is opgeslagen. 

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

#### Server starten (en afsluiten)
Nu je alles hebt geïnstalleerd kan je de server starten door deze command in je terminal te typen:
```
npm start 
```

Je kan naar localhost:5000 om de website te zien. 

Wil je de server weer uitzetten? Ga naar je terminal en doe crtl+C. 

### Features

### Bronnenlijst
- Hoe je alle id's achter de url pakt - https://stackoverflow.com/questions/25623041/how-to-configure-dynamic-routes-with-express-js

### Credits
- Marissa Verdonck, met haar heb ik de eerste dag samengewerkt en we hebben samen alles opgezet. 
- Robin Stut, hij heeft me geholpen met het routen en dan ik dat op een dynamische manier kan doen. 
- Robin Frugte, hij heeft me geholpen met het offline bericht vanuit de service worker. 
