# Ako pridať lekciu

Lekcia je jeden súbor `data/<nazov>.js`, ktorý exportuje objekt. Appka ho načíta zo zoznamu v `data/index.js`:

```js
import u6 from './unit6.js';
export const lessons = [u5, u6];
```

Po každej zmene spusti kontrolu: `node tools/validate.mjs`. Upozorní na chýbajúce preklady, zlé značky, nedosiahnuteľné ciele a podobne.

## Základ

```js
export default {
  id: 'u6',                  // jednoznačné id (používa sa v adrese a v ukladaní pokroku)
  code: 'U6',                // krátky kód na karte lekcie
  title: 'Holidays',         // veľký nadpis lekcie
  subtitle: 'past simple · cestovanie',   // témy oddelené „ · “ sa ukážu ako štítky
  storyTitle: 'A trip to Scotland',       // názov príbehu
  games: ['walk', 'sort', 'pairs', 'spell', 'choice', 'build'],  // poradie hier na úvodnej obrazovke
  chapters: [...], questions: {...}, gloss: `...`,
  // + dáta pre vybrané hry (pozri nižšie)
};
```

## Príbeh (Living story)

```js
chapters: [
  {
    title: 'The castle', sk: 'Hrad',
    lines: [
      ["There's a [castle|q=a1] on a [hill].", 'Na kopci je hrad.'],
    ],
    vf: [['The castle is on a hill.', true, 'Vysvetlenie po odpovedi.']],
  },
],
questions: { a1: ['Otázka pri slove?', 'Odpoveď.'] },
```

- Každý riadok je `[text v cieľovom jazyku, slovenský preklad]`.
- Na každé slovo sa dá ťuknúť. `[slovné spojenie]` urobí z viacerých slov jednu jednotku, `[slovo|q=a1]` pridá k slovu otázku z `questions`.
- `vf` sú otázky áno/nie na konci kapitoly: `[výrok, true/false, vysvetlenie]`.

Slovník `gloss` má jeden riadok na slovo: `tvar | preklad | základný tvar | poznámka` (posledné dve časti sú voliteľné). Malé slová (the, a, is…) sú spoločné v `data/common.js`.

## Minihry

| id | hra | dáta v lekcii |
|---|---|---|
| `stars` | Súhvezdia – chytaj slová, ktoré k sebe patria | `rounds: [{ c: 'take', chains: [['a\|photo', 'odfotiť'], …], x: ['nezmysel', …] }]` |
| `choice` | Karty s medzerou a vysvetlením | `choiceTitle`, `choiceHint`, `cards: [{ s: 'It ___ .', o: ['správne', 'zlé'], why, sk }]` |
| `build` | Skladanie viet z dlaždíc | `build: [{ sk: 'zadanie', t: 'Správna veta.', x: ['navyše'], alt: ['iné poradie'] }]` |
| `walk` | Odkaz na záznamníku a mapa | `walk: { outline, cities, marks, start, tour: [{ to, say, story, prize }] }` |
| `sort` | Roztrieď padajúce slová do skupín | `sortTitle`, `sort: { bins: [{ name, sk, icon }], items: [['slovo', skupina, 'preklad', 'ikona']] }` |
| `pairs` | Páry (napr. opozitá) s pohármi | `pairsTitle`, `pairsHint`, `pairs: [['noisy', 'quiet', 'hlučný – tichý']]` |
| `pond` | Páry na jazere (slová sa vynárajú) | rovnaké `pairs`, voliteľne `pondTitle` |
| `spell` | Hláskovanie – počúvaj a píš | `spell: [{ w: 'castle', sk: 'hrad' }]` |
| `adventure` | Interaktívny príbeh s drilom, hovorením a písaním (AI) | `adventure: { title, start, clues, scenes }`, pozri nižšie |

Podrobnosti ku každej hre sú v komentári na začiatku jej súboru v `js/games/`. Úplný príklad je lekcia `data/unit5.js` v repozitári [anglictina](https://github.com/jurzon/anglictina).

### Odkaz na záznamníku (`walk`)

- `outline`: obrys krajiny ako body `[zemepisná dĺžka, šírka]`.
- `cities`: `{ id: { name, at: [dĺžka, šírka], dx?, dy? } }`, kde `dx`/`dy` posunie popisok, ak sa prekrýva.
- `marks`: orientačné body, ktoré sa nedajú ťukať, napr. `{ icon: '⛰️', at: [...], label: 'High Tatras' }`.
- `tour`: správy za sebou. Text `say` hráč iba počuje, preto musí jednoznačne opísať cieľ (napr. *„north of Prešov, near the border with Poland“*). Po príchode sa ukáže `story` (riadky `[text, preklad]`) a výhra `prize: [ikona, text]`.

## Texty a jazyk appky

Všetko jazykovo špecifické je v `data/config.js`: jazyk hlasu (`speechLang`), názvy hier (`ui`), maskot a jeho hlášky (`mascot`), názvy písmen na hláskovanie (`letters`). Kód v `js/` je spoločný pre všetky jazykové verzie.

### Interaktívny príbeh (`adventure`)

Príbeh ide ďalej, len keď hráč sám napíše alebo povie anglickú vetu. Jedna scéna má tieto kroky:
rozcvička z opakovania → čítanie → rozhodnutie → dril viet SK→EN → hovorenie → prípadne písanie.

```js
adventure: {
  title: 'A day in York', sk: 'Deň v Yorku', intro: 'Úvod po slovensky.', start: 'station',
  clues: { crowded: 'Full of people.' },        // anglická nápoveda k slovu (prvý stupeň rebríka)
  scenes: {
    station: {
      title, sk, lines: [['Text so [značkami].', 'preklad']],   // ako v Living story
      choice: { sk: 'Čo urobíš?', options: [{ sk: 'Zámer po slovensky', t: '(Excuse me,) where is the station?', alt: [], go: 'directions', res: ['Odpoveď postavy.', 'preklad'] }] },
      drill: [{ sk: 'Veta po slovensky.', t: 'English sentence.', alt: ['Iné správne znenie.'] }],
      speak: ['Sentence to repeat.'],
      write: { sk: 'Zadanie', must: ['frázy', 'ktoré má použiť'], words: [40, 80], model: 'Vzorový text.' },
    },
  },
},
```

- **Rebrík nápovied** pri slove: anglické vysvetlenie (`clues`) → prvé písmená slovenského prekladu → preklad. Body 2 / 1 / 0. Nevedené slová idú do opakovania.
- **Odpovede** (`t`, `alt`): časti v zátvorkách sú voliteľné. Interpunkcia, veľké písmená a jeden preklep sa tolerujú. Stiahnuté tvary (where's = where is) sú v `config.equivalents`.
- **Opakovanie**: čo hráč nevedel, sa vráti o 1, 3, 7, 14 a 30 dní (Leitnerove krabičky v `js/srs.js`).
- **Písanie** hodnotí Claude cez server v `ai-proxy/` (adresa v `config.ai.url`). Bez neho hráč dostane vzorový text.
- Každá scéna musí mať `choice` (kam ďalej) alebo `write` (koniec). Slová z `lines` musia byť v slovníku; slovník príbehu môže byť v samostatnom súbore (pozri `data/unit5-adventure.js`).
