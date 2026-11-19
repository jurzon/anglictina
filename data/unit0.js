// Unit 0 – ukážková lekcia, aby appka bežala. Nahradí ju lekcia z učebnice.
// Značky v texte: [fráza] = jedna ťukateľná jednotka, [slovo|q=id] = slovo s otázkou.
export default {
  id: 'u0',
  code: 'U0',
  title: 'A rainy day',
  subtitle: 'ukážka · present simple vs. present continuous',
  storyTitle: 'A rainy day in London',
  choiceTitle: 'Simple or continuous?',
  choiceHint: 'Zvyky a stále veci: present simple. Čo sa deje práve teraz: present continuous (am/is/are + -ing).',
  games: ['stars', 'choice', 'build'],

  chapters: [
    {
      title: 'The umbrella',
      sk: 'Dáždnik',
      lines: [
        ["Mrs Penny [lives|q=a1] in London. It [rains] [a lot] in London.",
          'Pani Penny žije v Londýne. V Londýne veľa prší.'],
        ["Today [it's raining|q=a2] and she [is looking for] her umbrella.",
          'Dnes prší a ona hľadá svoj dáždnik.'],
        ["«I [don't|q=a3] understand. My umbrella is always here!»",
          '„Nerozumiem. Môj dáždnik je vždy tu!"'],
        ["Her cat is sleeping on the sofa. [Under] the cat there is a blue umbrella.",
          'Jej mačka spí na gauči. Pod mačkou je modrý dáždnik.'],
      ],
      vf: [
        ['Mrs Penny lives in Paris.', false, 'Žije v Londýne – a tam veľa prší.'],
        ['The umbrella is under the cat.', true, 'Mačka na ňom spí.'],
      ],
    },
  ],

  questions: {
    a1: ['Prečo «lives» a nie «live»?',
      'V present simple má 3. osoba jednotného čísla (he, she, it) koncovku -s: she lives, it rains.'],
    a2: ['Prečo tu nie je «it rains»?',
      'Lebo prší práve teraz, dnes. Na to je present continuous: it is raining. «It rains a lot» je všeobecná pravda.'],
    a3: ['Ako vznikne zápor v present simple?',
      'Pomocou do/does + not: I don\'t understand, she doesn\'t understand. Po «doesn\'t» už sloveso nemá -s.'],
  },

  gloss: `
mrs | pani (pred priezviskom)
penny | Penny (priezvisko)
lives | žije | live
london | Londýn
rains | prší | rain
a lot | veľa
it's raining | prší (práve teraz) | rain
is looking for | hľadá (práve teraz) | look for
umbrella | dáždnik
understand | rozumieť
always | vždy
cat | mačka
is | je | be
sleeping | spí, spiaca | sleep
sofa | gauč, pohovka
under | pod
there | tam | | there is = je, nachádza sa
blue | modrý
`,

  // Constellations: c = slovo v strede, chains = [slová oddelené |, preklad celého spojenia], x = nezmysly
  rounds: [
    { c: 'take', chains: [
      ['a|photo', 'odfotiť'], ['a|shower', 'osprchovať sa'], ['the|bus', 'ísť autobusom'], ['a|break', 'dať si prestávku'],
    ], x: ['homework', 'a mistake', 'the bed', 'a noise'] },
    { c: 'make', chains: [
      ['a|mistake', 'urobiť chybu'], ['the|bed', 'ustlať posteľ'], ['a|noise', 'robiť hluk'], ['friends', 'nájsť si priateľov'],
    ], x: ['a photo', 'homework', 'a shower', 'the bus'] },
  ],

  // Karty: s = veta s medzerou ___, o = možnosti (PRVÁ je správna), why = prečo, sk = preklad
  cards: [
    { s: 'Look! It ___ .', o: ['is raining', 'rains'],
      why: '«Look!» – deje sa to práve teraz: present continuous.', sk: 'Pozri! Prší.' },
    { s: 'It ___ a lot in London.', o: ['rains', 'is raining'],
      why: 'Všeobecná pravda, nie práve teraz: present simple.', sk: 'V Londýne veľa prší.' },
    { s: 'She ___ tea every morning.', o: ['drinks', 'is drinking'],
      why: '«Every morning» je zvyk: present simple, a pri «she» koncovka -s.', sk: 'Každé ráno pije čaj.' },
    { s: 'Where is Tom? He ___ in the garden.', o: ['is working', 'works'],
      why: 'Pýtame sa, kde je teraz: present continuous.', sk: 'Kde je Tom? Pracuje v záhrade.' },
    { s: '___ you like cats?', o: ['Do', 'Are'],
      why: 'Otázka v present simple: do/does + sloveso. «Like» sa v continuous takmer nepoužíva.', sk: 'Máš rád mačky?' },
    { s: 'My cat ___ under the umbrella right now.', o: ['is sleeping', 'sleeps'],
      why: '«Right now» = práve teraz: present continuous.', sk: 'Moja mačka práve spí pod dáždnikom.' },
  ],

  // Skladačka: sk = zadanie, t = správna veta, x = dlaždice navyše, alt = iné správne poradie
  build: [
    { sk: 'Pani Penny žije v Londýne.', t: 'Mrs Penny lives in London.', x: ['live'] },
    { sk: 'Dnes prší.', t: "Today it's raining.", x: ['rains'], alt: ["It's raining today."] },
    { sk: 'Hľadám svoj dáždnik.', t: 'I am looking for my umbrella.', x: ['look'] },
    { sk: 'Mačka spí na gauči.', t: 'The cat is sleeping on the sofa.', x: ['sleeps'] },
    { sk: 'Nerozumiem.', t: "I don't understand.", x: ['doesn\'t'] },
  ],
};
