# Angličtina hrou

[![Kontrola obsahu](https://github.com/jurzon/anglictina/actions/workflows/validate.yml/badge.svg)](https://github.com/jurzon/anglictina/actions/workflows/validate.yml)

Angličtina pre slovensky hovoriacich žiakov: príbehy, v ktorých sa dá ťuknúť na každé slovo, a minihry ku každej lekcii z učebnice. Funguje v prehliadači na mobile aj počítači, bez inštalácie a bez registrácie.

### ▶ Hrať: https://jurzon.github.io/anglictina/

<p>
  <img src="docs/home.png" width="200" alt="Úvodná obrazovka s kartou lekcie">
  <img src="docs/voicemail.png" width="200" alt="Odkaz na záznamníku s mapou Slovenska">
  <img src="docs/sort.png" width="200" alt="Roztrieď – slovo padá do správnej skupiny">
  <img src="docs/lake.png" width="200" alt="Jazero opozít – slová sa vynárajú z vody">
</p>

## Pre učiteľa: ako to dať žiakom

<img src="docs/qr.svg" width="180" align="right" alt="QR kód na https://jurzon.github.io/anglictina/">

1. **Premietni QR kód** na tabuľu alebo ho vytlač (pravým tlačidlom → Uložiť obrázok). Žiaci ho naskenujú fotoaparátom v mobile.
2. Alebo im pošli odkaz **https://jurzon.github.io/anglictina/**
3. Appku si môžu pridať na plochu (v Chrome ⋮ → *Pridať na plochu*), potom sa otvára ako bežná aplikácia.

Netreba žiadne konto ani inštaláciu. Pokrok sa ukladá iba v mobile žiaka.

**Priame odkazy na hry** (napr. na domácu úlohu):
[Príbeh](https://jurzon.github.io/anglictina/#/l/u5/read/0) ·
[A day in York](https://jurzon.github.io/anglictina/#/l/u5/adventure) ·
[Voicemail](https://jurzon.github.io/anglictina/#/l/u5/walk) ·
[What is there to see?](https://jurzon.github.io/anglictina/#/l/u5/sort) ·
[Opposites](https://jurzon.github.io/anglictina/#/l/u5/pairs) ·
[Opposite Lake](https://jurzon.github.io/anglictina/#/l/u5/pond) ·
[Spell it!](https://jurzon.github.io/anglictina/#/l/u5/spell)

<br clear="right">

## Lekcie

| Lekcia | Téma | Slovná zásoba a gramatika |
|---|---|---|
| **U5** Towns and cities | Pohľadnice zo Slovenska, list z Yorku | svetové strany (*north of, in the east of*), prídavné mená a opozitá (*crowded – empty*), miesta v meste (*cathedral, harbour, town hall…*) |

## Hry

- 📖 **Living story**: príbeh v kapitolách. Ťuknutím na slovo sa ukáže preklad, podčiarknuté slová skrývajú otázku a na konci kapitoly sú otázky áno/nie.
- 🧭 **A day in York** (Adventure): interaktívny príbeh ako textová hra. Pokračuje, len keď žiak sám napíše alebo povie anglickú vetu. Pri neznámom slove dostane najprv anglickú nápovedu, potom prvé písmená a až nakoniec preklad. Po každej scéne nasleduje dril viet SK→EN (chybná veta sa vracia, kým ju žiak nedá) a „vypočuj a zopakuj“ s rozpoznávaním reči. Na konci napíše pohľadnicu, ktorú ohodnotí Claude. Čo žiak nevedel, sa mu vráti v opakovaní o 1, 3, 7, 14 a 30 dní.
- 📼 **Voicemail**: hráč počuje hlasový odkaz (text nevidí), napr. *„I'm in a city north of Prešov…“*, nájde mesto na mape a za odmenu dostane vtipný príbeh a výhru.
- 🗂️ **What is there to see?**: slovo padá a treba ho včas poslať do správnej skupiny (náboženské stavby, obchody, pamiatky, ostatné).
- 🔁 **Opposites**: spájanie opozít, každý správny pár naleje pohár, séria bez chyby robí combo.
- 🌊 **Opposite Lake**: slová sa na chvíľu vynoria z hladiny a treba chytiť pár, kým sa ponoria.
- 🔤 **Spell it!**: počúvanie hláskovania (*bee – are – eye – dee – gee – ee*), píše sa na papier alebo do appky.
- 🚦 **Karty** a 🧩 **Build the sentence**: gramatika s vysvetlením a skladanie viet.

Pokrok (hviezdy, prečítané kapitoly, séria dní, opakovanie) sa ukladá iba v prehliadači. Jediné, čo appka odosiela, je text pohľadnice v hre Adventure, a to iba keď je zapnuté AI hodnotenie (pozri [ai-proxy/README.md](ai-proxy/README.md)).

## Pre vývojárov

Čisté HTML, CSS a JavaScript bez buildu a bez závislostí (okrem voliteľného servera `ai-proxy/`).

```sh
python3 -m http.server 8000      # spustiť lokálne na http://localhost:8000
node tools/validate.mjs          # skontrolovať obsah lekcií
```

| Priečinok | Obsah |
|---|---|
| `js/` | engine, spoločný s repozitárom [taliancina](https://github.com/jurzon/taliancina) (zmeny treba preniesť aj tam) |
| `js/games/` | minihry; register je v `js/games/index.js` |
| `data/config.js` | jazyk, značka, maskot, texty hier |
| `data/index.js`, `data/unit*.js` | zoznam lekcií a ich obsah |
| `ai-proxy/` | Cloudflare Worker na AI hodnotenie písania (drží API kľúč, appka ho nevidí) |
| `tools/validate.mjs` | kontrola obsahu (beží aj automaticky na GitHube pri každom pushi) |

**Nová lekcia:** pozri [docs/lekcia.md](docs/lekcia.md).

## Autor a licencia

Juraj Zonnenschein · jurzon@seznam.cz

Pre školy a nekomerčné učenie zadarmo, pozri [LICENSE](LICENSE). Texty príbehov sú pôvodné; učebnica slúži iba ako zdroj slovnej zásoby.
