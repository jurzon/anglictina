# Angličtina hrou

Angličtina hrou pre slovensky hovoriacich: príbehy, v ktorých sa dá ťuknúť na každé slovo, a minihry ku každej lekcii.

**Hrať:** https://jurzon.github.io/anglictina/

- 📖 **Living story** – príbeh, v ktorom sa dá ťuknúť na každé slovo
- ✨ **Constellations** – chytanie slov, ktoré k sebe patria
- 🚦 **Karty** – gramatika s vysvetlením
- 🧩 **Build the sentence** – skladanie viet

Každá lekcia si v `games: [...]` vyberá, ktoré minihry má.

## Štruktúra
- `js/` – engine, spoločný s repozitárom [taliancina](https://github.com/jurzon/taliancina). Opravy treba preniesť aj tam.
- `js/games/index.js` – register minihier
- `data/config.js` – jazyk, značka, maskot, texty
- `data/index.js` – zoznam lekcií; `data/unitX.js` – obsah lekcie

Čisté HTML/CSS/JS bez buildu. Lokálne: `python3 -m http.server 8000`. Kontrola obsahu: `node tools/validate.mjs`.

Autor: Juraj Zonnenschein · jurzon@seznam.cz
Licencia: pre školy a nekomerčné učenie zadarmo, pozri [LICENSE](LICENSE).
