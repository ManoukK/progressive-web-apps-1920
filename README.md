## Inhoudsopgave
* [De opdracht](#De-opdracht)
* [Mijn concept](#Mijn-concept)
* [Installatie](#Installatie)
* [Performance enhancements](#Performance-enhancements)
* [Features](#Features)
* [Conclusie](#Conclusie)
* [Bronnenlijst](#Bronnenlijst)
* [Credits](#Credits)

## De opdracht 
De opdracht is om (zoals de titel het al zegt) een website server side te renderen. Als bij iemand het javascript uit staat zou de data nog steeds te zien moeten zijn. Uiteindelijk word de website een progressive web app. Het is ook de bedoeling dat je feedback geeft als de gebruiker offline is en er worden enkele bestanden gecached zodat de website sneller is als de gebruiker er voor de tweede keer op komt. 

## Mijn concept
Ik ga mijn website gebruiken die ik bij web app from scratch heb gemaakt. Daarin heb ik de api, darksky gebruikt. Het concept blijft hetzelfde als mijn eerste concept. Alleen word de website nu niet meer client side gerenderd maar server side. 

#### De hoofdpagina
![Schermafbeelding 2020-03-27 om 11 51 36](https://user-images.githubusercontent.com/45541885/77748869-5b869600-7021-11ea-9bb6-9dcb1e94a50a.png)

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
Wil je meer weten over wat je allemaal moet/gaat installeren? Lees dan mijn wiki waarin ik kort uitleg waar het voor gebruikt word. 
https://github.com/ManoukK/progressive-web-apps-1920/wiki/Uitleg-installaties-&-hoe-deze-gebruikt-worden


### Server starten (en afsluiten)
Nu je alles hebt geïnstalleerd kan je de server starten door deze command in je terminal te typen:
```
npm start 
```

Je kan naar localhost:5000 om de website te zien. 

Wil je de server weer uitzetten? Ga naar je terminal en doe crtl+C. 

## Performance enhancements
### Before and after
### Before
![Schermafbeelding 2020-03-27 om 13 55 53](https://user-images.githubusercontent.com/45541885/77758611-8f6ab700-7033-11ea-9c48-4e495bd02e01.png)

![Schermafbeelding 2020-03-27 om 13 56 06](https://user-images.githubusercontent.com/45541885/77758630-9b567900-7033-11ea-941b-a2ee6b116b3d.png)

![Schermafbeelding 2020-03-27 om 13 56 23](https://user-images.githubusercontent.com/45541885/77758648-a14c5a00-7033-11ea-9756-054cb5e10793.png)

![Schermafbeelding 2020-03-27 om 13 56 32](https://user-images.githubusercontent.com/45541885/77758660-a8736800-7033-11ea-9dd9-3b00587c4a0e.png)

![Schermafbeelding 2020-03-27 om 13 56 40](https://user-images.githubusercontent.com/45541885/77758675-af01df80-7033-11ea-862c-9afe41a52683.png)

### After
![Schermafbeelding 2020-03-27 om 13 41 13](https://user-images.githubusercontent.com/45541885/77757602-c8a22780-7031-11ea-9fc9-a86e41ce16fa.png)

![Schermafbeelding 2020-03-27 om 13 41 34](https://user-images.githubusercontent.com/45541885/77757633-dc4d8e00-7031-11ea-9c42-15f32dacaee1.png)

![Schermafbeelding 2020-03-27 om 13 41 54](https://user-images.githubusercontent.com/45541885/77757651-e4a5c900-7031-11ea-83e3-3017bf361db9.png)

![Schermafbeelding 2020-03-27 om 13 42 01](https://user-images.githubusercontent.com/45541885/77757663-ed969a80-7031-11ea-8ac9-6989a8fc830a.png)

![Schermafbeelding 2020-03-27 om 13 42 10](https://user-images.githubusercontent.com/45541885/77757686-f8e9c600-7031-11ea-873c-08bcc27016b2.png)

De score bij mijn before website zijn een stuk lager dan bij mijn after(deze) website. Ook wel logisch want eerst had ik me helemaal niet op gefocust toen ik dit voor het eerst ging maken. Bij performance ben ik met snelheid er wel flink op vooruit gegaan. Eerst was de time to first byte 590 ms en nu is het 240 ms. Dat is meer dan de helft minder wachttijd! 240 ms is nog steeds niet super top maar wel al een stuk beter. 

Ook heb ik nu de accessibility omhoog gekregen omdat ik per ongeluk id’s gebruikte terwijl het classes moesten zijn. Nadat ik dit had gefixt ging mijn score naar 100. 

Bij before en after heb ik bij best practices allebei dezelfde error over http. Ik zou nu zo even niet weten hoe ik dat moet oplossen maar dat is een mooie taak voor als ik een twee verbeter ronde kon maken met dit project.

De SEO bij before is ook een stuk lager dan nu. Dat komt omdat daar een aantal kleine dingetjes tussen stonden die je makkelijk kon fixen. Nadat ik dat had gedaan kreeg ik een score van 100. 

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

Dankzij de revision-hash.js en de revision-replace.js word het css bestand pas opnieuw opgevraagd bij de server als ik wat in het bestand heb aangepast. Dit zorgt voor een snellere site als de gebruiker voor de tweede (of derde) keer op de site komt maar het heeft geen effect als je voor het eerst op de site komt. 

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
Ik had geen description in mijn head staan over mijn website. Ik heb nooit geweten dat het kon en het is heel makkelijk op te lossen! De description dient voor in de zoek resultaten zodat mensen al een stukje over jouw content/website kunnen lezen voordat zij erop klikken. 
Zo ziet dat er nu voor mij uit. 
```
<meta name="Description" content="The weather in Amsterdam for the next 3 hours">
```

### Geen theme color
Dit leek mij ook een easy fix. Ik miste nog een theme color in mijn head. Je kan de browser een kleur geven als iemand jouw pagina bezoekt op mobiel. Ik heb ervoor gekomen om gewoon de huidige kleur van de gebruiker aan te houden. Dit vind ik wel zo gebruiksvriendelijk vooral nu je met mobiel dark mode aan en uit kan zetten. 

```
<meta name="theme-color" content="currentcolor">
```

## Conclusie
https://github.com/ManoukK/progressive-web-apps-1920/wiki/Conclusie

## Bronnenlijst
- Hoe je alle id's achter de url pakt - https://stackoverflow.com/questions/25623041/how-to-configure-dynamic-routes-with-express-js
- Hoe je een manifest opzet - https://web.dev/add-manifest/
- Theme color in je head meegeven - https://webhint.io/docs/user-guide/hints/hint-meta-theme-color/
- Description in je head meegeven - https://web.dev/meta-description/?utm_source=lighthouse&utm_medium=devtools
- De voorbeeld codes en presentaties van Declan

## Credits
- Marissa Verdonck, met haar heb ik de eerste dag samengewerkt en we hebben samen alles opgezet. 
- Robin Stut, hij heeft me geholpen met het routen en dan ik dat op een dynamische manier kan doen. 
- Robin Frugte, hij heeft me geholpen met het offline bericht vanuit de service worker. 
- Daniel, hij heeft me geholpen met het pre cachen van een offline pagina.
- Daniel alweer :p , hij heeft me geholpen met de foutmeldingen van heroku. Ik kreeg mijn website niet gedeployed en Daniel heeft me geholpen met debuggen. 
- Declan, ik heb heel erg veel aan zijn voorbeeld codes gehad. Zo heb ik een buildtool, css in de borwser cache en een service worker.
