# Roodloos
>Roodloos is een Chrome/Firefox-extensie die onvoldoendes op Magister.net zwart kleurt. Zo vallen ze minder op.

Geïnspireerd door een artikel van Rixt Hofenk op [Scholieren.com](https://www.scholieren.com/blog/onvoldoende-liever-niet-in-het-rood) waarin ze schreef dat 'na het halen van een onvoldoende haar cijferlijst eruit ziet als een slagveld', bedacht ik Roodloos. 

![Roodloos werkt supersimpel](vergelijking.jpg)

### Wat doet Roodloos?
Roodloos is een simpele extensie voor Chrome en Firefox die dit probleem oplost. De extensie maakt alle rode onvoldoendes zwart. Hierdoor kijk je nooit meer tegen een slagveld aan. Da's wel zo prettig.

### Wat doet Roodloos niet?
Roodloos is geen helaas geen toverstaf of magische methode om van je onvoldoendes af te komen.

Roodloos...
- past je cijfers niet aan;
- 'hackt' je Magister niet;
- zorgt er niet voor dat je ouders minder boos worden;
- past geen pagina's aan van personen die de extensie niet hebben geïnstalleerd;
- werkt niet in de Magister-app.

## Installatie

Roodloos wordt op dit moment ingediend om in de Chrome Web Store en de Firefox add-ons-library te verschijnen.

Je kunt de extensie nu al handmatig installeren. Download het zip-bestand van de laatste versie.

**Chrome:** <br>
Ga naar [`extensies`](chrome://extensions/) en activeer `Ontwikkelaarsmodus`. Druk dan op `Uitgepakte extensie laden` en navigeer naar de downloadlocatie op je computer. Druk op `selecteren` en je hebt de extensie succesvol geïnstalleerd!

**Firefox:** <br>
Ga naar [`add-ons`](about:addons) en klik op het instellingenpictogram. Selecteer `Add-ons debuggen` en klik daarna op `Tijdelijke add-on laden...`. Upload een zip-bestand met als inhoud de zojuist gedownloade map.

## Werking
Na een eerste inspectie van Magister vond ik dat onderstaande css-class verantwoordelijk is voor de rode kleur van onvoldoendes.

```css
.cijfers-k-grid.k-grid .grade.insufficient {
    font-weight: bold;
    color: #c3000c !important;
```

Ik besloot mijn eigen css-class te injecteren op Magister-pagina's. Deze css-class luidde als volgt:

```css
.cijfers-k-grid.k-grid .grade.insufficient {
    font-weight: normal !important;
    color: #000000 !important;
}
```

Klein probleempje: dit werkt niet (helemaal). Zowel mijn stukje css als Magisters css gebruiken `!important`. Dat forceert de waarde waarachter de `!important` staat. Mijn injectie vindt direct **voor** het inladen van de pagina plaats. Dit lijkt de enige standaard te zijn voor css-injecties, want dan wordt nooit de 'slechte' css-versie van een site ingeladen. Ik heb geen idee hoe ik dit kan wijzige en dus staat mijn css-class hoger in `style.css` dan Magisters eigen class. Dit laatste heeft als gevolg dat Magisters eigen class wordt doorgevoerd, en niet de mijne.

## Licentie
[MIT](LICENSE)
