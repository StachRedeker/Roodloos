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

Installatie van Roodloos is eenvoudig en duurt slechts één minuut. Na installatie werkt de extensie direct. Volg de stappen van het internetbrowser naar jouw keuze hieronder.

**Chrome:** <br>
Ga naar de [Chrome Web Store](https://chrome.google.com/webstore/detail/roodloos/kipkgojmkiodkalnlmliakflkclojgoj) en druk op de blauwe knop `Toev. aan Chrome`.

**Firefox:** <br>
Ga naar de [Add-on-library](https://addons.mozilla.org/nl/firefox/addon/roodloos/) en druk op de blauwe knop `Toevoegen aan Firefox`.

## Werking
Na een eerste inspectie van Magister vond ik dat onderstaande css-class verantwoordelijk is voor de rode kleur van onvoldoendes.

```css
.cijfers-k-grid.k-grid .grade.insufficient {
    font-weight: bold;
    color: #c3000c !important;
}
```

Ik besloot mijn eigen css-class te injecteren op Magister-pagina's. Deze css-class luidde als volgt:

```css
.cijfers-k-grid.k-grid .grade.insufficient {
    font-weight: normal !important;
    color: #000000 !important;
}
```

Klein probleempje: dit werkte niet (helemaal). Zowel mijn stukje css als Magisters css gebruiken `!important`. Dat forceert de waarde waarachter de `!important` staat. Mijn injectie vindt direct **voor** het inladen van de pagina plaats. Dit lijkt de enige standaard te zijn voor css-injecties, want dan wordt nooit de 'slechte' css-versie van een site ingeladen. Ik heb geen idee hoe ik dit kan wijzigen en dus staat mijn css-class hoger in `style.css` dan Magisters eigen class. Dit laatste heeft als gevolg dat Magisters eigen class wordt doorgevoerd, en niet de mijne.

Ik stuurde mijn hulpvraag naar de beste programmeur van het universum: Noah Verkaik ([Nowaha](https://github.com/Nowaha)). Hij vond al snel een JavaScript-oplossing die deels werkte. Wanneer onderstaand stukje code in de `console` werd ingevoerd, verdween de rode kleur als sneeuw voor de zon.

```JavaScript
$(".insufficient").removeClass("insufficient")
```

Helaas werkte deze methode niet als js-injectie, omdat de extensie geen toegang had tot `jquery`. Bovendien kon de extensie ook niet detecteren wanneer de cijferlijst volledig was ingeladen. Ik ging avondeten en nog voor ik mijn dessert had verorberd, kreeg ik een pull-request van Noah binnen. Hij had beide problemen binnen een uur oplost en is dus de échte held van deze extensie.

## Licentie
[MIT](LICENSE)

## Disclaimer
Roodloos is een privé-initatief en maakt geen deel uit van Magister, Schoolmaster BV en/of Iddink. Gebruik van deze extensie is op eigen risico. De makers zijn niet aansprakelijk voor eventuele schade.
