## Inhoudsopgave
* [De opdracht](#De-opdracht)
* [Mijn concept](#Mijn-concept)
* [Installatie](#Installatie)
* [Performance enhancements](#Performance-enhancements)
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
 * CSS was eerst 890B en is nu 242B en wordt nu opgeslagen in de cache. 
 * Manifest was eerst 517B en is nu 293B.

Hier zie je het uiteindelijke grootte en hoe groot de bestanden in totaal eerst waren. 

![Schermafbeelding 2020-03-24 om 18 17 41](https://user-images.githubusercontent.com/45541885/77456628-c8b8e200-6dfb-11ea-9f63-43944871b10b.png)

### Web safe fonts 
Ik heb gebruik gemaakt van web safe fonts. Ik heb er 1 gekozen en dat is Courier New. Als fallback heb ik Courier en als beide fonts niet werken word monospace ingeschakeld. Het voordeel van web safe fonts is dat iedereen in elke browser/device deze kan zien. Wat betekend (volgens mij) is dat deze fonts standaard in de browser/device zitten van de gebruiker. Dit scheelt weer tijd in het laden van de website. 

```css
  font-family: "Courier New", Courier, monospace;
```

### Caching
Om er voor te zorgen dat de site de tweede keer sneller is dan de eerste keer heb ik de css opgeslagen in de cache. 

Dankzij de revision-hash.js en de revision-replace.js word het css bestand pas opnieuw opgevraagd bij de server als ik wat in het bestand heb aangepast. Dit zorgt voor een snellere site als het het revisit maar heeft geen effect als je voor het eerst op de site komt. 

Het css bestand word een jaar in de cache bewaard voordat het weggegooid word of opnieuw word aangevraagd. 
```js
app.use(/.*-[0-9a-f]{10}\..*/, function(req, res, next){
    res.header('Cache-Control', 'max-age=365000000');
    next();
})
```
Die generieke expressies achter app.use gebruik ik om het css bestand te onderscheiden van html bestanden. Want het css bestand krijgt een nummer mee met lage letters en cijfers. 

Deze methode kan je ook gebruiken voor javascript bestanden die je in je cache wilt opslaan. 

### Service worker (offline page)
In de cache sla ik ook mijn offline pagina op zodat je feedback kan geven als de server niet kan reageren. In de install fase in mijn service-worker.js cache ik dit html bestand al. 

```js
cacheName = 'v3'
urlsToCache = [
    '/index-7ede693bda.css',
    '/offline',
];

self.addEventListener('install', function(event) {
  console.log('activating!');
    event.waitUntil(
      caches.open(cacheName).then(function(cache) {
        return cache.addAll(urlsToCache);
      })
      .then(function(){
          self.skipWaiting();
      })
    );
  });
```

Bij de fetch fase zeg ik dat de fallback de offline pagina moet zijn en deze moet matchen met de pagina in de cache. 

```js
self.addEventListener('fetch', function(event){
        event.respondWith(
            caches
                .match(event.request)
                .then(function(response) {
                    if (response) {
                        return response;
                    }
                    return fetch(event.request);
                    })
                .catch(function() {
                    return caches.match('/offline');
                })
        );
});
```

Nu krijgt de gebruiker goede feedback en een meer "appie" gevoel. 

##### Mijn offline pagina
![Schermafbeelding 2020-03-24 om 18 47 08](https://user-images.githubusercontent.com/45541885/77459358-e5571900-6dff-11ea-919b-f258d585af40.png)

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
- Hoe je een manifest opzet - 

## Credits
- Marissa Verdonck, met haar heb ik de eerste dag samengewerkt en we hebben samen alles opgezet. 
- Robin Stut, hij heeft me geholpen met het routen en dan ik dat op een dynamische manier kan doen. 
- Robin Frugte, hij heeft me geholpen met het offline bericht vanuit de service worker. 
- Daniel, hij heeft me geholpen met het pre cachen van een offline pagina.
- Daniel alweer :p , hij heeft me geholpen met de foutmeldingen van heroku. Ik kreeg mijn website niet gedeployed en Daniel heeft me geholpen met debuggen. 
- Declan, ik heb heel erg veel aan zijn voorbeeld codes gehad. Zo heb ik een buildtool, css in de borwser cache en een service worker.
