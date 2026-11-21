# AI hodnotenie písania (Cloudflare Worker)

Hra **Adventure** posiela text žiaka (list, pohľadnicu) na tento malý server. Server ho pošle
Claude API (model Claude Sonnet 5.5) a vráti hodnotenie: skóre 0–10, krátke zhrnutie po slovensky,
najviac 5 opráv a vylepšenú verziu textu.

API kľúč je **iba na serveri** ako secret. V appke ani v gite nikdy nie je. Server prijme požiadavky
len z adries v `ALLOWED_ORIGINS` (a z localhostu) a stráži denné limity (`PER_IP_DAY`, `TOTAL_DAY`),
aby nikto neminul kredit. Jedna kontrola stojí približne 0,7 centa.

## Nasadenie (raz, asi 10 minút)

1. API kľúč: https://platform.claude.com → Settings → API Keys (a dobiť kredit v Billing).
2. Účet zadarmo na https://dash.cloudflare.com.
3. V tomto priečinku:
   ```bash
   npm install
   npx wrangler login
   npx wrangler kv namespace create LIMITS     # vypíše id – vlož ho do wrangler.toml a odkomentuj blok [[kv_namespaces]]
   npx wrangler secret put ANTHROPIC_API_KEY   # vlož kľúč sk-ant-...
   npx wrangler deploy                          # vypíše adresu, napr. https://anglictina-ai.<meno>.workers.dev
   ```
4. Do `data/config.js` v appke doplň `ai: { url: 'https://anglictina-ai.<meno>.workers.dev/assess', lang: 'en' }`.

Táto appka beží na `https://anglictina-ai.jurzon.workers.dev/assess`. Pri prvom `deploy` sa wrangler pýta na subdoménu workers.dev a to treba spustiť v bežnom termináli (nie cez `!` v Claude Code).

Bez adresy v `config.ai.url` hra funguje ďalej: žiak dostane vzorový text a kontrolný zoznam fráz.

## Lokálne skúšanie

Vytvor súbor `.dev.vars` (je v .gitignore) s riadkom `ANTHROPIC_API_KEY=sk-ant-...`, spusti `npm run dev`
a do `config.ai.url` daj dočasne `http://localhost:8787/assess`.

## Iný jazyk (taliancina)

V `src/worker.js` pridaj do `LANGS` riadok s úrovňou a gramatikou daného jazyka a v jeho
`data/config.js` nastav `ai.lang`. Do `ALLOWED_ORIGINS` pridaj adresu tej appky.
