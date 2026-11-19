# Angličtina hrou

Učebná hra pre slovensky hovoriacich. Čisté HTML/CSS/JS bez buildu, nasadené cez GitHub Pages (https://jurzon.github.io/anglictina/).

## Zdieľaný engine
- `js/` a `tools/` sú **spoločný engine**, ktorý je identický so sesterským repozitárom `../taliancina`. Každú zmenu v `js/` alebo `tools/` treba preniesť aj tam (skopírovať priečinok) a skontrolovať oba repozitáre cez `diff -r`.
- V `js/` nesmie byť nič jazykovo špecifické. Jazyk, značka, maskot a texty hier patria do `data/config.js`, zoznam lekcií do `data/index.js`.
- Minihry: register je v `js/games/index.js`. Každá hra exportuje `view(lesson, rerender)` a `validate(lesson, err)`. Lekcia si hry vyberá cez `games: [...]`.
- Hry: `stars`, `choice`, `build`, `walk` (odkaz na záznamníku + mapa), `pairs` (páry s pohármi), `pond` (páry na jazere), `sort` (triedenie do skupín), `spell` (hláskovanie). Formát lekcie je opísaný v `docs/lekcia.md`. Zvuky a efekty sú v `js/fx.js`.
- Štýly hier sú v `css/style.css`; ten zdieľaný nie je, nové štýly treba do taliancina preniesť ručne.

## Obsah
- Lekcie: `data/unitX.js` (príbeh, otázky, slovník, súhvezdia, karty, skladačka; formát je opísaný v komentároch v súbore).
- Fotky učebnice sú v `DATA/`. Sú chránené autorským právom, preto sú v .gitignore a nikdy nesmú ísť do gitu.
- Po každej zmene obsahu spusti `node tools/validate.mjs`.
- Rozhranie je po slovensky. Prvá lekcia z učebnice je `data/unit5.js` (Towns and cities).
- Značka a maskot (Mrs Penny) v `data/config.js` sú dočasné a prispôsobia sa téme učebnice.

Lokálne: `python3 -m http.server 8000`.
