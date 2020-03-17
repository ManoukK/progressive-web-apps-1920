# Een website via server side renderen

### Inhoudsopgave
* [De opdracht](#De-opdracht)
* [Mijn concept](#Mijn-concept)
   * [De hoofdpagina](#De-hoofdpagina-(tot-nu-toe))
* [Installatie](#Installatie)
   * [Routie](#Routie)
* [De api en data](#De-api-en-data)
* [Features](#Features)
* [Bronnenlijst](#Bronnenlijst)
* [Credits](#Credits)

### De opdracht 
De opdracht is om (zoals de titel het al zegt) een website server side te renderen. Als bij iemand het javascript uit staat zou de data nog steeds te zien moeten zijn. Uiteindelijk word de website een progressive web app. 

### Mijn concept
Ik ga mijn website gebruiken die ik bij web app from scratch heb gemaakt. Daarin heb ik de api, darksky gebruikt. Het concept blijft hetzelfde als mijn eerste concept. Alleen word de website nu niet meer client side gerenderd maar server side. 

#### De hoofdpagina (tot nu toe)

### Installatie
Hier vertel ik wat je moet installeren om dit project te kunnen gebruiken en laat ik gelijk zien hoe je dat moet doen. Aller eerst moet je deze repo forken of downloaden met de groene knop rehcts boven. 

#### Nodejs
Om nodejs te installeren op mac moet je ook homebrew hebben. Eerst leg ik uit hoe je homebrew installeerd. 
Je kan in jouw global computer homebrew installeren met dit stukje. Plak dit in jouw terminal en druk op enter. 
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

Nu je homebrew hebt kan je nodejs installeren. Ook dit kan je in je global computer installeren zodat je het later weer kan gebruiken. 
Op deze manier kan je nodejs installeren. Type dit in de terminal. 
```
brew install node
```

#### Express.js
Ga nu naar de map waarin je wilt werken (de map waar dit project in staat) Als het goed is heb je de package.json ook mee gekregen van de download en hoef je daar verder niks mee te doen. 

Als je met de terminal in de juiste map zit installeer dan express.js. Dat doe je door dit in de terminal te zetten. Druk op enter en het begint te installeren. 
```
npm install express --save
```

#### ejs 
Express en ejs werken heel goed samen. Ejs zorgt ervoor dat je javascript in html kan schrijven waardoor je heel makkelijk data in html kan renderen. 

Als het goed is ben je nog steeds in de map waarin je wilt werken. Installeer hierin ook ejs door dit in je terminal te plakken. 
```
npm install ejs
```

#### node-fetch 
Om de fetch te gebruiken die ik in het vorige project ook heb gebruikt heb ik ook node-fetch gedownload. Dit moet je ook nog installeren om gebruik te kunnen maken van de api fetch. 

```
npm install node-fetch --save
```

#### nodemon
Nodemon hoef je niet te installeren maar is wel super handig. Het zorgt ervoor dat je bij elke aanpassing die je maakt in je code, je dat gewoon live kan zien. Als je dit niet installeerd moet je bij elke aanpassing de server afsluiten en weer opstarten om de verandering live te zien. Het installeren doe je in de map waarin je wilt werken met dit stukje:

```
install --save-dev nodemon
```

#### Server starten (en afsluiten)
Nu je alles hebt geïnstalleerd kan je de server starten door deze command in je terminal te typen:
```
npm start 
```

Je kan naar localhost:3000 om de website te zien. 

Wil je de server weer uitzetten? Ga naar je terminal en doe crtl+C. 

### De api en data

### Features

### Bronnenlijst
- Hoe je alle id's achter de url pakt - https://stackoverflow.com/questions/25623041/how-to-configure-dynamic-routes-with-express-js

### Credits
- Marissa Verdonck, met haar heb ik de eerste dag samengewerkt en we hebben samen alles opgezet. 
- Robin Stut, hij heeft me geholpen met het routen en dan ik dat op een dynamische manier kan doen. 
- Robin Frugte, hij heeft me geholpen met het offline bericht vanuit de service worker. 
