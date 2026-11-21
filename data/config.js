// Všetko, čím sa táto appka líši od inej jazykovej verzie: jazyk, značka, maskot, texty.
// Kód v js/ je spoločný pre všetky jazyky (kópia z repozitára taliancina) – jazykové veci patria sem.
// Značka a maskot sú zatiaľ dočasné; prispôsobia sa téme učebnice.
export default {
  speechLang: 'en-GB',
  storeKey: 'anglictina.v1',
  defaultLesson: 'u5',
  // Jedno ťukateľné slovo (regex bez príznakov). Angličtina: aj stiahnuté tvary (don't, it's, I'm, Tom's).
  word: "\\p{L}+(?:['’]\\p{L}+)*",
  // Slová, ktoré sa na začiatku vety v skladačke nezmenšujú
  // Ako sa vyslovujú písmená pri hláskovaní (Spell it!). Hlas by inak hovoril „capital C“.
  letters: {
    a: 'ay', b: 'bee', c: 'see', d: 'dee', e: 'ee', f: 'eff', g: 'gee', h: 'aitch', i: 'eye',
    j: 'jay', k: 'kay', l: 'el', m: 'em', n: 'en', o: 'oh', p: 'pee', q: 'queue', r: 'are',
    s: 'ess', t: 'tee', u: 'you', v: 'vee', w: 'double you', x: 'ex', y: 'why', z: 'zed',
  },
  // Rovnocenné tvary pri kontrole napísaných viet (Adventure): obe strany sa prevedú na plný tvar.
  equivalents: {
    "i'm": 'i am', "i'd": 'i would', "i'll": 'i will', "i've": 'i have',
    "you're": 'you are', "it's": 'it is', "he's": 'he is', "she's": 'she is', "we're": 'we are', "they're": 'they are',
    "that's": 'that is', "there's": 'there is', "what's": 'what is', "where's": 'where is', "let's": 'let us',
    "isn't": 'is not', "aren't": 'are not', "wasn't": 'was not', "don't": 'do not', "doesn't": 'does not',
    "didn't": 'did not', "can't": 'cannot', 'can not': 'cannot', "won't": 'will not', "haven't": 'have not',
    'ok': 'okay',
    // bez apostrofu (mobil ho často vynechá); its, were, well, ill tu nie sú, sú to iné slová
    im: 'i am', youre: 'you are', hes: 'he is', shes: 'she is', theyre: 'they are', ive: 'i have',
    thats: 'that is', theres: 'there is', whats: 'what is', wheres: 'where is', lets: 'let us',
    isnt: 'is not', arent: 'are not', wasnt: 'was not', dont: 'do not', doesnt: 'does not',
    didnt: 'did not', cant: 'cannot', wont: 'will not', havent: 'have not',
    // americký a britský pravopis sú rovnako správne
    center: 'centre', theater: 'theatre', color: 'colour', colorful: 'colourful', favorite: 'favourite',
    meters: 'metres', kilometers: 'kilometres', mom: 'mum', gray: 'grey', traveling: 'travelling',
  },
  // Hodnotenie písania cez AI: adresa Cloudflare Workera z priečinka ai-proxy/ (prázdne = bez AI,
  // hráč dostane vzorový text a sebahodnotenie). lang vyberá v Workeri úroveň a pravidlá jazyka.
  ai: { url: 'https://anglictina-ai.jurzon.workers.dev/assess', lang: 'en' },
  keepCaps: ['I', 'Žilina', 'Košice', 'Bardejov', 'Bratislava', 'Prešov'],

  // Zdieľanie so žiakmi (tlačidlo 📲 na úvodnej obrazovke): verejná adresa appky a jej QR kód.
  share: { url: 'https://jurzon.github.io/anglictina/', qr: 'docs/qr.svg' },

  brand: {
    kicker: 'Towns and cities',
    title: ['Angličtina', 'hrou'],
    source: 'Na domáce precvičovanie k učebnici',
    author: 'Juraj Zonnenschein',
    email: 'jurzon@seznam.cz',
  },

  // Texty hier v cieľovom jazyku
  ui: {
    reader: 'Living story',
    vf: 'True or false?',
    vfTrue: 'True',
    vfFalse: 'False',
    stars: 'Constellations',
    starsExample: 'take → a → photo',
    build: 'Build the sentence',
    buildHint: 'Povedz to po anglicky. Pozor, jedno slovo je navyše.',
    buildDesc: 'Poskladaj anglickú vetu z dlaždíc',
    walk: 'Voicemail',
    walkDesc: 'Vypočuj si odkaz a nájdi mesto na mape',
    pairs: 'Opposites',
    pairsDesc: 'Spoj slová s opačným významom',
    pond: 'Opposite Lake',
    pondDesc: 'Slová sa vynárajú z vody – chyť pár, kým sa ponoria',
    sort: 'Sort it!',
    sortDesc: 'Slovo padá – pošli ho do správnej skupiny',
    spell: 'Spell it!',
    spellDesc: 'Počúvaj hláskovanie a píš',
    adventure: 'Adventure',
    adventureDesc: 'Príbeh ide ďalej, len keď to povieš po anglicky. Čítaj, píš, hovor.',
  },

  mascot: {
    name: 'Mrs Penny',
    face: '☂️',
    ok: ['Brilliant!', 'Well done!', 'Spot on!', 'Lovely!', 'Exactly!', 'Great job!', 'Perfect!'],
    ko: [
      'Skoro! Aj Mrs Penny si občas zabudne dáždnik.',
      'Nevadí. Aj v Londýne občas svieti slnko.',
      'Not quite. Dáme si čaj a skúsime znova.',
      'Close! Angličtina vie prekvapiť ako londýnske počasie.',
      'Step by step. Nabudúce to sadne.',
    ],
    nonsense: [
      'Zaujímavé, ale to žiadny Angličan nepovie.',
      'Mrs Penny dvíha obočie.',
      'Poetické. Ale nie.',
      'Odvážne spojenie! Bohužiaľ neexistuje.',
    ],
    home: [
      'Hello! Dnes prší, ideálny čas na slovíčka.',
      'Čaj je pripravený. Môžeme začať.',
      'Každé správne slovíčko je jedna kvapka v šálke.',
      'Keep calm and learn English.',
    ],
    // Podľa počtu hviezd 0–3
    verdicts: [
      'Dnes to bolo ako počasie v Londýne – nabudúce bude lepšie.',
      'Dobrý začiatok! Mrs Penny vám drží miesto pri čaji.',
      'Very good! Ešte kúsok a ste ako rodený Londýnčan.',
      'Perfect! Mrs Penny vám na počesť naliala čaj.',
    ],
    chapterDone: 'Kapitola prečítaná. Mrs Penny už chystá ďalšiu.',
    watching: 'Mrs Penny sa díva.',
  },
};
