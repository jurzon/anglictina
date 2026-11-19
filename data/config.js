// Všetko, čím sa táto appka líši od inej jazykovej verzie: jazyk, značka, maskot, texty.
// Kód v js/ je spoločný pre všetky jazyky (kópia z repozitára taliancina) – jazykové veci patria sem.
// Značka a maskot sú zatiaľ dočasné; prispôsobia sa téme učebnice.
export default {
  speechLang: 'en-GB',
  storeKey: 'anglictina.v1',
  defaultLesson: 'u0',
  // Jedno ťukateľné slovo (regex bez príznakov). Angličtina: aj stiahnuté tvary (don't, it's, I'm, Tom's).
  word: "\\p{L}+(?:['’]\\p{L}+)*",
  // Slová, ktoré sa na začiatku vety v skladačke nezmenšujú
  keepCaps: ['I'],

  brand: {
    kicker: 'Unit 0 · Ukážka',
    title: ['Angličtina', 'hrou'],
    source: 'Ukážková lekcia · na domáce precvičovanie',
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
