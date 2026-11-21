// Adventure k Unit 5: „Tom's Birthday Surprise“ – textová hra v Yorku.
// Hráč chodí po meste, zbiera veci, rozpráva sa s ľuďmi a do 14:00 zoženie 4 veci na oslavu.
// Úroveň A2–B1 (English File Pre-intermediate): krátke vety, časté slová, len present simple/continuous,
// past simple, present perfect, going to/will. Žiadne idiómy.
// Formát je opísaný v js/games/adventure.js a js/world.js. V odpovediach (t, alt) sú voliteľné časti v zátvorkách.
// Fotky sú z Wikimedia Commons, autor a licencia sú pri každej fotke (photo).
// Slová z textov, ktoré nie sú v slovníku Unit 5, sú v `gloss` na konci (pridá sa k slovníku lekcie).
const PD = { license: 'Public domain', licenseUrl: '' };
const SA = { license: 'CC BY-SA 2.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0/' };

export default {
  title: "Tom's Birthday Surprise",
  sk: 'Prekvapenie pre Toma',
  intro: 'Tvoj kamarát Tom z Yorku má dnes narodeniny a vôbec netuší, že si prišiel. O 14:00 sa s ním stretneš v kaviarni pri Minsteri. Dovtedy musíš zohnať 4 veci na oslavu – a máš len 20 libier. Všetko si vybavíš po anglicky.',
  start: 'station',
  state: { money: 20, time: 600, deadline: 840 },
  goal: { sk: 'Zožeň na oslavu', items: ['mug', 'flowers', 'cake', 'card'] },
  mapItem: 'map',
  talkMinutes: 10,

  // Príkazy hráča. Prvý tvar je správny (ukáže sa na tlačidle), ďalšie parser tiež pozná.
  verbs: {
    go: ['go to', 'walk to'],
    talk: ['talk to', 'speak to', 'say hello to'],
    take: ['take', 'pick up', 'get'],
    examine: ['look at', 'read', 'check'],
    give: ['give {item} to {person}', 'give {person} {item}'],
    look: ['look around', 'look'],
    time: ['what time is it', 'time'],
    inventory: ['what have i got', 'inventory'],
    wait: ['wait for Tom', 'wait'],
    card: ['write the birthday card', 'write the card', 'write a card'],
    where: ['where can I buy'],
    whereIs: ['where is'],
  },

  // Odpovede hry na príkazy (v cieľovom jazyku). {place}, {item}, {person}, {time}, {money}, {items}
  msgs: {
    take: 'You take {item}.',
    notHere: "There isn't {item} here.",
    nobody: "{person} isn't here.",
    unknownPlace: "You don't know the way to {place}. Ask someone, or find a map!",
    here: "You're already here.",
    time: "It's {time}.",
    inventory: "You've got {items}. And you've got £{money}.",
    empty: "You haven't got anything. But you've got £{money}.",
    give: 'You give {item} to Tom.',
    notGot: "You haven't got {item}.",
    wait: 'You sit down and wait for Tom…',
    late: "It's two o'clock! Tom is waiting at the café.",
    notYet: 'Tom is not here yet. He comes at two o’clock.',
    noMoney: ["Sorry, you haven't got enough money.", 'Prepáčte, nemáte dosť peňazí.'],
    whereAnswer: ["You can buy {item} at {place}. It isn't far!", '{itemSk} kúpiš na mieste: {placeSk}. Nie je to ďaleko!'],
    whereIs: ["{place}? It isn't far. Look for the signs!", '{placeSk}? Nie je to ďaleko. Hľadaj tabule!'],
    nobodyToAsk: "There's nobody here. Who can you ask?",
  },

  // Postava v poslednom mieste a koniec hry.
  final: {
    place: 'cafe', person: 'tom', flag: 'tomHere',
    arrive: [
      { say: ["Hi! Wait… what are you doing here? This is amazing!", 'Ahoj! Počkaj… čo ty tu robíš? To je úžasné!'] },
      { ask: { sk: 'Zaželaj Tomovi všetko najlepšie k narodeninám.', t: 'Happy birthday(, Tom)!', alt: ['Happy birthday to you!'] } },
      { say: ["Thank you! I can't believe it. Is this a party for me?", 'Ďakujem! Nemôžem tomu uveriť. To je oslava pre mňa?'] },
      { ask: { sk: 'Povedz: Áno! Mám pre teba darčeky.', t: "Yes! I've got some presents for you.", alt: ["Yes! I've got presents for you.", 'Yes! I have got some presents for you.', 'Yes! I have some presents for you.', "Yes, I've got some presents for you."] } },
      { say: ['Really? Show me!', 'Naozaj? Ukáž!'] },
    ],
    write: {
      sk: 'Napíš Tomovi do pohľadnice blahoželanie (30–60 slov). Zaželaj mu, napíš, čo si dnes robil v Yorku (minulý čas), a čo mu praješ.',
      must: ['Happy birthday', 'I hope', 'Today I', 'Love'],
      words: [30, 60],
      model: "Dear Tom,\nHappy birthday! I hope you have a fantastic day. Today I walked all around York and I bought some presents for you. I talked to a man who looks like Einstein! I hope you like the cake. See you soon!\nLove, Adam",
    },
  },

  clues: {
    crowded: 'Full of people.',
    noisy: 'With a lot of loud sounds. The opposite of quiet.',
    friendly: 'Nice and kind to other people.',
    battery: 'It gives power to your phone.',
    'the way': 'The road you take to get to a place.',
    message: 'A short text you send on your phone.',
    'go straight on': 'Don\'t turn. Walk in the same direction.',
    'turn left': 'Go to the left at a corner.',
    bridge: 'You walk over it to get to the other side of a river.',
    'cross the river': 'Go to the other side of the river.',
    sign: 'A board with words. It shows you where to go.',
    enormous: 'Very, very big.',
    'miss it': 'Not see it.',
    steep: 'It goes up very fast, so it is hard to walk up.',
    'out of breath': 'You can\'t breathe well after running or climbing.',
    breathtaking: 'Very, very beautiful.',
    guide: 'A person who shows tourists a place.',
    hungry: 'You want to eat.',
    narrow: 'Not wide. There is not much space.',
    almost: 'Nearly. Not completely.',
    stall: 'A small table or shop at a market.',
    mug: 'A big cup for tea or coffee.',
    price: 'How much money something costs.',
    smells: 'Your nose tells you about it.',
    waiter: 'A man who brings food and drinks in a café or restaurant.',
    tired: 'You want to sleep or rest.',
    stamp: 'A small picture you put on a letter or postcard before you send it.',
    post: 'Send a letter or postcard.',
  },

  tips: [
    {
      words: ['do'],
      title: 'Prečo je tam DO?',
      text: 'Po slovensky stačí zdvihnúť hlas: „Ako sa dostanem…?“ Angličtina si na začiatok otázky zavolá pomocníka DO. Sám nič neznamená, len zdvihne ruku a zakričí: „Pozor, ide otázka!“',
      memo: 'DO = Dávam Otázku. Otázka-slovo + do + I/you/we/they + sloveso: How do I get…? Where do you live?',
      say: ['How do I get to the station?', 'Where do you live?', 'What do you want?', 'How do you do? = pri zoznámení: Teší ma'],
    },
    {
      words: ['the'],
      title: 'Odkiaľ sa vzalo THE?',
      text: 'Angličan nejde „do centra“, ide do TOHO centra. THE ukazuje na vec, ktorú obaja poznáte: tá stanica, ten most, to centrum. Aj rieky ho majú: the Ouse, the Danube.',
      memo: 'THE = „ten jediný, o ktorom obaja vieme“.',
      say: ['Where is the station?', 'Turn left at the bridge.', 'Can I have the bill, please?'],
    },
    {
      words: ['is', 'are', 'am'],
      title: 'Kde je sloveso BYŤ?',
      text: 'Slovák povie „Ulička veľmi úzka“ a všetci rozumejú. Anglická veta bez slovesa byť (am / is / are) sa ani nepohne.',
      memo: 'Veta bez IS je ako auto bez kolies. I am, you are, it is.',
      say: ["I'm hungry.", 'The street is very narrow.', "It's on your right.", 'The houses are very old.'],
    },
    {
      words: ['a', 'an'],
      title: 'Prečo A?',
      text: 'Keď pýtaš jednu vec, angličtina pred ňu dá malé A: a coffee, a scone, a bag. Pred samohláskou (a, e, i, o, u) sa A zmení na AN, aby sa to dobre vyslovovalo: an ice cream.',
      memo: 'A = „jeden kus“. Jeden kus koláča, jedna káva.',
      say: ['Can I have a coffee, please?', "I'd like a cheese sandwich.", 'Would you like a bag?', 'An ice cream, please.'],
    },
    {
      words: ['at'],
      title: 'Prečo AT?',
      text: 'AT je špendlík zapichnutý do mapy alebo do hodín: presne tu, presne vtedy. At the bridge, at the café, at work, at two o’clock.',
      memo: 'AT = špendlík 📍. Kde presne? Kedy presne?',
      say: ['Turn left at the bridge.', "I'm at work until two.", "Let's meet at the café.", "See you at two o'clock!"],
    },
    {
      words: ['to'],
      title: 'Prečo TO?',
      text: 'Keď niekam ideš alebo sa niekam dostaneš, angličtina ukáže smer šípkou TO: get to the station, go to the market.',
      memo: 'TO = šípka ➡️ k cieľu.',
      say: ['How do I get to the city centre?', "I'm going to the market.", 'Welcome to York!'],
    },
    {
      words: ['going'],
      title: 'GOING TO = plán',
      text: 'Keď už vieš, čo ideš robiť, povieš I’m going to + sloveso. Je to plán, ktorý už máš v hlave.',
      memo: 'GOING TO = už som na ceste k plánu 🚶.',
      say: ["I'm going to visit the castle.", "I'm going to buy a mug.", 'Where are you going to go first?'],
    },
    {
      words: ['there'],
      title: 'THERE IS = nachádza sa',
      text: 'Slovenské „Je tu kaviareň?“ nezačína „Is a café…“. Angličtina najprv povie, ŽE niečo niekde je: There is… / Is there…?',
      memo: 'There is = „nachádza sa“. Otázka: Is there…? Viac vecí: There are…',
      say: ['There is a castle on a hill.', 'Is there a good café near here?', 'There are fifty-five steps.'],
    },
    {
      words: ['much'],
      title: 'HOW MUCH = koľko to stojí',
      text: 'Pýtaš sa na cenu? HOW MUCH. Doslova „ako veľa“ – koľko peňazí mám dať.',
      memo: 'HOW MUCH? 💷 Peňaženka sa otvára.',
      say: ['How much is it?', 'How much is this mug?', 'How much are the scones?'],
    },
    {
      words: ['have'],
      title: 'CAN I HAVE…?',
      text: 'V kaviarni aj v obchode je najjednoduchšie a zdvorilé: Can I have…, please? = Môžem dostať…, prosím?',
      memo: 'CAN I HAVE + PLEASE = kúzelná formulka k jedlu 🍰.',
      say: ['Can I have a tea, please?', 'Can I have the bill, please?', 'Can I have a scone, please?'],
    },
  ],

  items: {
    map: { name: 'the map', a: 'a map', aliases: ['map', 'the old map'], sk: 'mapa', icon: '🗺️',
      // reklamy na mape: kde sa čo predáva (po pozretí na mapu to hráč vie)
      ads: [
        { en: 'Fresh flowers, York mugs and postcards – The Shambles market!', sk: 'Čerstvé kvety, hrnčeky z Yorku a pohľadnice – trh Shambles!', items: ['flowers', 'mug', 'card'], place: 'market' },
        { en: 'The best birthday cakes in York – Stonegate Bakery!', sk: 'Najlepšie narodeninové torty v Yorku – pekáreň na Stonegate!', items: ['cake'], place: 'bakery' },
        { en: 'Taxi! Anywhere in York for one pound.', sk: 'Taxík! Kamkoľvek v Yorku za jednu libru.', items: [], place: 'station' },
      ],
      desc: [["It's an old map of York. You can see the river, the bridge, the castle, the market, Stonegate and the Minster.", 'Je to stará mapa Yorku. Vidíš na nej rieku, most, hrad, trh, ulicu Stonegate a Minster.']] },
    mug: { name: 'the mug', a: 'a mug', where: 'market', aliases: ['mug', 'mugs', 'the present', 'present', 'presents', 'souvenir', 'souvenirs'], sk: 'hrnček (darček)', icon: '☕', price: 6,
      desc: [["It's a big blue mug with a picture of York Minster.", 'Je to veľký modrý hrnček s obrázkom York Minster.']],
      tom: ["A York mug! Now I can have my tea with the Minster. I love it!", 'Hrnček z Yorku! Teraz si môžem piť čaj s Minsterom. Je super!'] },
    flowers: { name: 'the flowers', a: 'flowers', where: 'market', aliases: ['flowers', 'flower', 'the roses', 'roses', 'some flowers', 'flower shop'], sk: 'kvety', icon: '💐', price: 5,
      desc: [['They are red and yellow roses. They smell lovely.', 'Sú to červené a žlté ruže. Krásne voňajú.']],
      tom: ['Roses! They are beautiful. Nobody gives me flowers!', 'Ruže! Sú nádherné. Mne nikto nedáva kvety!'] },
    cake: { name: 'the cake', a: 'a birthday cake', where: 'bakery', aliases: ['cake', 'cakes', 'the birthday cake', 'birthday cake', 'a cake'], sk: 'torta', icon: '🎂', price: 8,
      desc: [['A chocolate cake with the words Happy Birthday, Tom.', 'Čokoládová torta s nápisom Happy Birthday, Tom.']],
      tom: ['A chocolate cake with my name on it! Let\'s eat it now!', 'Čokoládová torta s mojím menom! Poďme ju hneď zjesť!'] },
    card: { name: 'the card', a: 'a birthday card', where: 'market', aliases: ['card', 'cards', 'the postcard', 'postcard', 'postcards', 'the birthday card', 'birthday card'], sk: 'pohľadnica', icon: '💌', price: 1,
      desc: [["It's a postcard with a picture of Clifford's Tower. You can write a message for Tom on it.", 'Je to pohľadnica s obrázkom Cliffordovej veže. Môžeš na ňu Tomovi napísať odkaz.']],
      tom: ['A card for me? Thank you! What does it say?', 'Pohľadnica pre mňa? Ďakujem! Čo je na nej napísané?'] },
    tea: { name: 'a cup of tea', a: 'a cup of tea', where: 'cafe', aliases: ['tea', 'cup of tea'], sk: 'čaj', icon: '🍵', price: 2, consume: true,
      desc: [['A hot cup of tea with milk.', 'Horúci čaj s mliekom.']] },
  },

  // Postavy. who: portrét (fotka z Wikimedia Commons) a vtipný popis po slovensky.
  // talk: varianty rozhovoru, použije sa prvý, ktorého podmienka (if) platí.
  people: {
    einstein: {
      name: 'the man with a dog', aliases: ['man with a dog', 'the man', 'man', 'einstein', 'the dog', 'dog'],
      who: { name: 'Pán so psom', note: 'Nepripomína ti trochu Alberta Einsteina? Vlasy má rovnako rozstrapatené 😄',
        photo: { src: 'img/people/einstein.jpg', alt: 'Albert Einstein, 1947', author: 'Orren Jack Turner', ...PD, source: 'https://commons.wikimedia.org/wiki/File:Albert_Einstein_Head.jpg' } },
      talk: [
        { if: { flag: 'metEinstein' }, steps: [
          { say: ["Hello again! The bridge is that way. [Go straight on]!", 'Zase ahoj! Most je tamto. Choď rovno!'] },
        ] },
        { steps: [
          { say: ['Good morning! Can I help you?', 'Dobré ráno! Môžem vám pomôcť?'] },
          { ask: { sk: 'Prepáčte, ako sa dostanem do centra?', t: '(Excuse me,) how do I get to the city centre?', alt: ['(Excuse me,) how can I get to the city centre?', '(Excuse me,) where is the city centre?', '(Excuse me,) how do I get to the centre?'] } },
          { say: ["It's easy! [Go straight on] and [cross the river] at Lendal Bridge. It's about ten minutes on foot.", 'To je jednoduché! Choďte rovno a prejdite cez rieku po moste Lendal Bridge. Je to asi desať minút pešo.'] },
          { reveal: ['bridge'] },
          { flag: 'metEinstein' },
          { choose: [
            { sk: 'Opýtaj sa, či nemá mapu.', t: '(Excuse me,) have you got a map, please?', alt: ['(Excuse me,) do you have a map, please?', '(Excuse me,) have you got a map?', 'Could I have a map, please?', 'Can I have a map, please?'],
              then: [
                { say: ["Yes, I have. Here you are! I know York very well, so I don't need it.", 'Áno, mám. Nech sa páči! York poznám veľmi dobre, takže ju nepotrebujem.'] },
                { give: 'map' },
              ] },
            { sk: 'Poďakuj a rozlúč sa.', t: 'Thank you very much! Goodbye!', alt: ['Thank you! Goodbye!', 'Thanks a lot! Bye!', 'Thank you very much!', 'Thank you so much!'],
              then: [{ say: ["You're welcome! Have a nice day!", 'Nemáte za čo! Pekný deň!'] }] },
          ] },
        ] },
      ],
    },

    guide: {
      name: 'the guide', aliases: ['guide', 'the woman', 'woman', 'the lady', 'lady'],
      who: { name: 'Sprievodkyňa', note: 'Usmieva sa presne ako kráľovná Viktória na jedinej fotke, kde sa smeje 👑',
        photo: { src: 'img/people/victoria.jpg', alt: 'Queen Victoria smiling, 1887', author: 'Charles Knight', ...PD, source: 'https://commons.wikimedia.org/wiki/File:Her_Majesty%27s_Gracious_Smile_by_Charles_Knight.JPG' } },
      talk: [
        { if: { flag: 'quizDone' }, steps: [
          { say: ['Hello again! Good luck with the party!', 'Zase ahoj! Veľa šťastia s oslavou!'] },
        ] },
        { steps: [
          { say: ["Hello! Welcome to [Clifford's Tower]. Are you here for the history?", 'Dobrý deň! Vitajte v Cliffordovej veži. Prišli ste kvôli histórii?'] },
          { ask: { sk: 'Povedz, že nie – kupuješ darčeky, lebo tvoj kamarát má narodeniny.', t: "No, I'm buying presents. It's my friend's birthday today.", alt: ["No, I'm buying presents. My friend has a birthday today.", "No, I'm buying presents for my friend's birthday.", "No, I'm buying some presents. It's my friend's birthday today.", "No, I'm buying presents. It's my friend's birthday."] } },
          { say: ["How lovely! Then here's a question for you. How old is this tower? Read the sign. If you know, you get a free postcard!", 'Aké milé! Tak tu je otázka pre vás. Aká stará je táto veža? Prečítajte si tabuľu. Ak to viete, dostanete pohľadnicu zadarmo!'] },
          { choose: [
            { sk: 'Odpovedz: Má viac ako sedemsto rokov.', t: "It's more than seven hundred years old.", alt: ["It's over seven hundred years old.", 'More than seven hundred years.', "It's more than 700 years old.", 'It is more than seven hundred years old.'],
              then: [
                { say: ["That's right! Well done! Now, what do you say?", 'Správne! Výborne! A čo sa hovorí?'] },
                { ask: { sk: 'Zdvorilo poprosi o pohľadnicu.', t: 'Could I have a postcard, please?', alt: ['Can I have a postcard, please?', 'Could I have one, please?', 'Can I have one, please?', 'May I have a postcard, please?', 'Could I have the postcard, please?'] } },
                { say: ['Of course! Here you are. And if you need a birthday cake, go to the bakery in Stonegate. Their chocolate cake is the best in York!', 'Samozrejme! Nech sa páči. A ak potrebujete narodeninovú tortu, choďte do pekárne na Stonegate. Ich čokoládová torta je najlepšia v Yorku!'] },
                { give: 'card' },
                { reveal: ['bakery'] },
                { flag: 'quizDone' },
              ] },
            { sk: 'Odpovedz: Má asi sto rokov.', t: "It's about a hundred years old.", alt: ["It's about one hundred years old.", 'About a hundred years.'],
              then: [
                { say: ["Oh no, it's much older! Read the sign again and come back.", 'Ale nie, je oveľa staršia! Prečítajte si tabuľu ešte raz a vráťte sa.'] },
              ] },
          ] },
        ] },
      ],
    },

    seller: {
      name: 'the seller', aliases: ['seller', 'the man', 'man', 'shakespeare', 'the shop assistant'],
      who: { name: 'Predavač v stánku', note: 'Brada, golier, pero za uchom… Nie je to náhodou William Shakespeare? ✒️',
        photo: { src: 'img/people/shakespeare.jpg', alt: 'William Shakespeare, Chandos portrait', author: 'attributed to John Taylor', ...PD, source: 'https://commons.wikimedia.org/wiki/File:Shakespeare.jpg' } },
      talk: [
        { steps: [
          { say: ['Hello! [Can I help you]? Mugs, flowers, cards – I have got everything!', 'Dobrý deň! Môžem vám pomôcť? Hrnčeky, kvety, pohľadnice – mám všetko!'] },
          { choose: [
            { if: { not: 'mug' }, sk: 'Opýtaj sa, koľko stojí ten hrnček.', t: 'How much is this mug?', alt: ['How much is the mug?', 'How much does this mug cost?', 'How much is it?'],
              then: [
                { say: ["It's six pounds. It's a lovely present!", 'Šesť libier. Je to pekný darček!'] },
                { choose: [
                  { sk: 'Povedz, že si ho vezmeš.', t: "I'll take it(, please).", alt: ["I'll buy it.", 'I will take it.'],
                    then: [{ buy: 'mug', then: [{ say: ['Here you are. Your friend is a lucky person!', 'Nech sa páči. Váš kamarát má šťastie!'] }] }] },
                  { sk: 'Povedz, že sa len pozeráš.', t: "I'm just looking, thanks.", alt: ["I'm just looking, thank you.", "I'm only looking, thanks."],
                    then: [{ say: ['No problem!', 'Žiadny problém!'] }] },
                ] },
              ] },
            { if: { not: 'flowers' }, sk: 'Opýtaj sa, koľko stoja kvety.', t: 'How much are the flowers?', alt: ['How much are these flowers?', 'How much do the flowers cost?', 'How much are they?'],
              then: [
                { say: ['These roses are five pounds.', 'Tieto ruže sú za päť libier.'] },
                { choose: [
                  { sk: 'Povedz, že si ich vezmeš.', t: "I'll take them(, please).", alt: ["I'll buy them.", 'I will take them.'],
                    then: [{ buy: 'flowers', then: [{ say: ['Here you are. They smell lovely!', 'Nech sa páči. Krásne voňajú!'] }] }] },
                  { sk: 'Odmietni zdvorilo.', t: 'No, thank you.', alt: ['No, thanks.'],
                    then: [{ say: ['OK!', 'Dobre!'] }] },
                ] },
              ] },
            { if: { not: 'card' }, sk: 'Opýtaj sa, či má pohľadnice.', t: 'Have you got any postcards?', alt: ['Do you have any postcards?', 'Have you got postcards?', 'Have you got a birthday card?'],
              then: [
                { say: ['Yes, this one is one pound.', 'Áno, táto je za jednu libru.'] },
                { buy: 'card', then: [{ say: ['Here you are!', 'Nech sa páči!'] }] },
              ] },
            { if: { noflag: 'askedCake' }, sk: 'Opýtaj sa, kde kúpiš tortu.', t: 'Where can I buy a birthday cake?', alt: ['Where can I buy a cake?', 'Where can I get a birthday cake?'],
              then: [
                { say: ['To be or not to be… hungry? Go to the bakery in Stonegate. It is very near.', 'Byť či nebyť… hladný? Choďte do pekárne na Stonegate. Je to veľmi blízko.'] },
                { reveal: ['bakery'] },
                { flag: 'askedCake' },
              ] },
            { exit: true, sk: 'Poďakuj a rozlúč sa.', t: 'Thank you! Goodbye!', alt: ['Thanks! Bye!', 'Thank you, goodbye!', 'Goodbye!', 'Bye!'],
              then: [{ say: ['Goodbye! Come again!', 'Dovidenia! Príďte zas!'] }] },
          ], loop: true },
        ] },
      ],
    },

    baker: {
      name: 'the baker', aliases: ['baker', 'the woman', 'woman', 'the cook'],
      who: { name: 'Pekárka', note: 'Isabella Beeton napísala najslávnejšiu kuchárku v Anglicku. A táto pani sa na ňu poriadne podobá 🍰',
        photo: { src: 'img/people/beeton.jpg', alt: 'Isabella Beeton', author: 'Maull & Polyblank', ...PD, source: 'https://commons.wikimedia.org/wiki/File:Isabella_Beeton,_by_Maull_%26_Polyblank.jpg' } },
      talk: [
        { if: { has: 'cake' }, steps: [
          { say: ['Enjoy the cake! And happy birthday to your friend!', 'Dobrú chuť! A všetko najlepšie vášmu kamarátovi!'] },
        ] },
        { if: { given: 'cake' }, steps: [{ say: ['Hello!', 'Dobrý deň!'] }] },
        { steps: [
          { say: ['Good morning! What would you like?', 'Dobré ránko! Čo si dáte?'] },
          { ask: { sk: 'Povedz, že by si chcel narodeninovú tortu.', t: "I'd like a birthday cake(, please).", alt: ['Can I have a birthday cake, please?', 'Could I have a birthday cake, please?', 'A birthday cake, please.', 'I would like a birthday cake, please.'] } },
          { say: ['Lovely! Our chocolate cake is eight pounds. Do you want a name on it?', 'Výborne! Naša čokoládová torta stojí osem libier. Chcete na nej meno?'] },
          { ask: { sk: 'Povedz áno a popros, nech napíše Happy Birthday, Tom.', t: 'Yes, please. Can you write Happy Birthday, Tom?', alt: ['Yes, please. Could you write Happy Birthday, Tom?', 'Yes please, can you write Happy Birthday Tom?', 'Yes, please. Happy Birthday, Tom.', 'Yes. Can you write Happy Birthday, Tom, please?'] } },
          { buy: 'cake',
            then: [{ say: ["There you are! It's beautiful, isn't it?", 'Nech sa páči! Je krásna, však?'] }],
            else: [{ say: ["Oh dear, it's eight pounds, and you haven't got enough money. Come back when you have!", 'Ach jaj, stojí osem libier a vy nemáte dosť peňazí. Vráťte sa, keď budete mať!'] }] },
        ] },
      ],
    },

    waiter: {
      name: 'the waiter', aliases: ['waiter', 'the man', 'man', 'chaplin'],
      who: { name: 'Čašník', note: 'Chodí medzi stolmi ako Charlie Chaplin – len bez paličky a buřinky 🎩',
        photo: { src: 'img/people/chaplin.jpg', alt: 'Charlie Chaplin, around 1920', author: 'unknown photographer', ...PD, source: 'https://commons.wikimedia.org/wiki/File:Chaplin_signed_c1920_(better_cropped).jpg' } },
      talk: [
        { steps: [
          { say: ['Hi there! What would you like?', 'Ahoj! Čo si dáš?'] },
          { choose: [
            { sk: 'Objednaj si šálku čaju (2 £).', t: 'Can I have a cup of tea, please?', alt: ['Could I have a cup of tea, please?', "I'd like a cup of tea, please.", 'A cup of tea, please.', 'Can I have a tea, please?'],
              then: [{ buy: 'tea',
                then: [{ say: ['Here you are. Enjoy!', 'Nech sa páči. Dobrú chuť!'] }],
                else: [{ say: ["Sorry, you haven't got enough money.", 'Prepáč, nemáš dosť peňazí.'] }] }] },
            { if: { noflag: 'table' }, sk: 'Opýtaj sa, či majú stôl pre dvoch.', t: 'Have you got a table for two?', alt: ['Do you have a table for two?', 'Is there a table for two?', 'Can we have a table for two?', 'Can I have a table for two?'],
              then: [
                { say: ["Yes, there's a nice table by the window. It's perfect for a party!", 'Áno, je tu pekný stôl pri okne. Ideálny na oslavu!'] },
                { flag: 'table' },
              ] },
            { exit: true, sk: 'Povedz, že nič, ďakuješ.', t: 'Nothing, thank you.', alt: ['Nothing, thanks.', 'No, thank you.', 'No, thanks.'],
              then: [{ say: ['No problem!', 'Žiadny problém!'] }] },
          ], loop: true },
        ] },
      ],
    },

    taxi: {
      name: 'the taxi driver', aliases: ['taxi driver', 'driver', 'the driver', 'taxi', 'the taxi', 'cab'],
      who: { name: 'Taxikár', note: 'Bokombrady, brada a rozpráva ako kniha. Nie je to náhodou Charles Dickens? 🚕',
        photo: { src: 'img/people/dickens.jpg', alt: 'Charles Dickens, 1868', author: 'Jeremiah Gurney', ...PD, source: 'https://commons.wikimedia.org/wiki/File:Charles_Dickens_1868.jpg', face: { pos: '50% 30%', zoom: 2.3 } } },
      // Taxík: hráč povie, kam chce ísť. Rýchle (minutes), ale stojí peniaze (price).
      taxi: {
        price: 1, minutes: 5,
        greet: ['Hello! Where do you want to go?', 'Dobrý deň! Kam to bude?'],
        ask: { sk: 'Povedz taxikárovi, nech ťa zavezie: {placeSk}', t: 'Can you take me to {place}, please?', alt: ['Could you take me to {place}, please?', 'Take me to {place}, please.', '{place}, please.', 'To {place}, please.', 'I want to go to {place}, please.'] },
        bye: { sk: 'Povedz, že nikam nejdeš.', t: 'No, thank you.', alt: ['No, thanks.', 'Nowhere, thank you.'] },
        arrive: ["Here we are! That's one pound, please.", 'Sme tu! Bude to jedna libra, prosím.'],
      },
      talk: [{ steps: [] }],
    },

    tom: {
      name: 'Tom', aliases: ['tom', 'my friend', 'friend'], when: { flag: 'tomHere' },
      who: { name: 'Tom', note: 'Tvoj kamarát z Yorku. Dnes má narodeniny! 🎉', emoji: '🧑' },
      talk: [
        { steps: [{ say: ['This is the best birthday ever!', 'Toto sú najlepšie narodeniny!'] }] },
      ],
    },
  },

  // Miesta. exits: kam sa dá ísť a koľko minút to trvá. known: čo hráč pozná hneď.
  // reveal: miesta, o ktorých sa hráč dozvie pri príchode (napr. z tabule). onMap: je na mape.
  places: {
    station: {
      name: 'the station', aliases: ['station', 'the train station', 'railway station'],
      title: 'York Station', sk: 'Stanica', onMap: true,
      photo: { src: 'img/york/station.jpg', alt: 'York railway station', author: 'Michael D Beckwith', license: 'CC0', licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/', source: 'https://commons.wikimedia.org/wiki/File:York_Train_Station_(56331202).jpeg' },
      lines: [
        ["You get off the train in York. It's ten o'clock in the morning, and the station is crowded and noisy.",
          'Vystúpiš z vlaku v Yorku. Je desať hodín ráno a stanica je plná ľudí a hlučná.'],
        ["Today is Tom's birthday, and he doesn't know you are here! You want to have a surprise party for him.",
          'Dnes má Tom narodeniny a nevie, že si tu! Chceš mu pripraviť oslavu s prekvapením.'],
        ["Tom's message says: «I'm at work until two. Let's meet at the café next to [York Minster]!»",
          'Tomova správa: „Som v práci do dvoch. Stretneme sa v kaviarni vedľa York Minster!“'],
        ["You've got twenty pounds. You need four things: a present, some flowers, a birthday cake and a card.",
          'Máš dvadsať libier. Potrebuješ štyri veci: darček, kvety, narodeninovú tortu a pohľadnicu.'],
        ["Outside the station there's a man with a dog. He looks friendly. But you don't know [the way]…",
          'Pred stanicou stojí muž so psom. Vyzerá priateľsky. Ale ty nepoznáš cestu…'],
      ],
      look: [["The station is big and busy. A man with a dog is standing outside.", 'Stanica je veľká a rušná. Vonku stojí muž so psom.']],
      people: ['einstein', 'taxi'],
      xy: [14, 70],
      exits: { bridge: 10, castle: 20, market: 20, bakery: 20, cafe: 25 },
      drill: [
        { sk: 'Prepáčte, kde je stanica?', t: '(Excuse me,) where is the station?' },
        { sk: 'Nepoznám cestu.', t: "I don't know the way." },
        { sk: 'Môj telefón je vybitý.', t: 'My phone is dead.', alt: ['My phone battery is dead.', 'My battery is dead.'] },
        { sk: 'Je desať hodín ráno.', t: "It's ten o'clock in the morning.", alt: ["It's ten in the morning."] },
        { sk: 'Stanica je hlučná a plná ľudí.', t: 'The station is noisy and crowded.', alt: ['The station is crowded and noisy.'] },
        { sk: 'Stretnime sa v kaviarni.', t: "Let's meet at the café.", alt: ["Let's meet at the cafe.", "Let's meet in the café.", "Let's meet in the cafe."] },
        { sk: 'Som v práci do dvoch.', t: "I'm at work until two.", alt: ["I'm at work until two o'clock.", "I'm at work till two."] },
      ],
      speak: ['Excuse me, how do I get to the city centre?', "I don't know the way.", "Sorry, I'm at work until two."],
    },
    bridge: {
      name: 'the bridge', aliases: ['bridge', 'lendal bridge', 'the river', 'river'],
      title: 'Lendal Bridge', sk: 'Most cez rieku Ouse', onMap: true,
      photo: { src: 'img/york/directions.jpg', alt: 'The River Ouse from Lendal Bridge', author: 'Chris Morgan', ...SA, source: 'https://commons.wikimedia.org/wiki/File:River_Ouse_at_Lendal_Bridge,_York_-_geograph.org.uk_-_2850983.jpg' },
      lines: [
        ['You are on Lendal Bridge. Below you, the River Ouse is wide and brown, and a red boat is full of tourists.',
          'Si na moste Lendal Bridge. Pod tebou je široká hnedá rieka Ouse a červená loď plná turistov.'],
        ["There are three signs: [Clifford's Tower], ten minutes. [The Shambles] market, ten minutes. [York Minster], fifteen minutes.",
          'Sú tu tri tabule: Cliffordova veža, desať minút. Trh Shambles, desať minút. York Minster, pätnásť minút.'],
      ],
      look: [['The river is below you. There are signs to the castle, the market and the Minster.', 'Pod tebou je rieka. Sú tu tabule k hradu, na trh a k Minsteru.']],
      reveal: ['castle', 'market', 'cafe', 'station'],
      people: ['taxi'],
      xy: [34, 48],
      exits: { station: 10, castle: 10, market: 10, bakery: 10, cafe: 15 },
      drill: [
        { sk: 'Choďte rovno.', t: 'Go straight on.', alt: ['Go straight.', 'Go straight ahead.'] },
        { sk: 'Na moste odbočte doľava.', t: 'Turn left at the bridge.' },
        { sk: 'Prejdite cez rieku.', t: 'Cross the river.' },
        { sk: 'Je to po vašej pravej strane.', t: "It's on your right.", alt: ["It's on the right."] },
        { sk: 'Je to asi desať minút pešo.', t: "It's about ten minutes on foot.", alt: ["It's about ten minutes' walk.", "It's about a ten-minute walk."] },
        { sk: 'Prejdite okolo múzea.', t: 'Walk past the museum.', alt: ['Go past the museum.'] },
        { sk: 'Ďakujem veľmi pekne!', t: 'Thank you very much!', alt: ['Thanks very much!', 'Thank you so much!', 'Thanks a lot!'] },
        { sk: 'Kam pôjdeš najprv?', t: 'Where are you going to go first?', alt: ['Where are you going first?', 'Where will you go first?'] },
      ],
      speak: ['Go straight on and turn left at the bridge.', "It's on your right. You can't miss it.", 'Thank you very much!'],
    },
    castle: {
      name: "Clifford's Tower", aliases: ['the castle', 'castle', 'the tower', 'tower', 'cliffords tower', "clifford's tower"],
      title: "Clifford's Tower", sk: 'Cliffordova veža', onMap: true,
      photo: { src: 'img/york/castle.jpg', alt: "Clifford's Tower on its hill", author: 'Steven Fruitsmaak', ...PD, source: 'https://commons.wikimedia.org/wiki/File:York_Castle_Clifford%27s_Tower_2007.jpg' },
      lines: [
        ["[Clifford's Tower] is on a small hill next to the river. It's the last part of the old [York Castle].",
          'Cliffordova veža stojí na malom kopci pri rieke. Je to posledná časť starého yorského hradu.'],
        ['There are fifty-five steep steps to the top. At the top you are [out of breath], but the view is breathtaking!',
          'Na vrchol vedie päťdesiatpäť strmých schodov. Hore si celý zadychčaný, ale výhľad je úchvatný!'],
        ['A sign says: «This tower is more than seven hundred years old.»',
          'Na tabuli stojí: „Táto veža má viac ako sedemsto rokov.“'],
        ['A guide with a big smile is talking to a group of tourists.',
          'Sprievodkyňa s veľkým úsmevom rozpráva skupine turistov.'],
      ],
      look: [['The tower is on a hill. A smiling guide is standing at the door.', 'Veža stojí na kopci. Pri dverách stojí usmiata sprievodkyňa.']],
      people: ['guide'],
      xy: [70, 84],
      exits: { bridge: 10, market: 10, bakery: 15, cafe: 20, station: 20 },
      drill: [
        { sk: 'Hrad je na malom kopci.', t: 'The castle is on a small hill.' },
        { sk: 'Na vrchol vedie päťdesiatpäť schodov.', t: 'There are fifty-five steps to the top.', alt: ['There are fifty five steps to the top.', 'There are 55 steps to the top.'] },
        { sk: 'Výhľad je úchvatný.', t: 'The view is breathtaking.' },
        { sk: 'Veža má viac ako sedemsto rokov.', t: 'The tower is more than seven hundred years old.', alt: ['The tower is over seven hundred years old.', 'The tower is more than 700 years old.'] },
        { sk: 'Môžete ma odfotiť, prosím?', t: 'Can you take a photo of me, please?', alt: ['Could you take a photo of me, please?', 'Can you take a picture of me, please?', 'Can you take my photo, please?'] },
        { sk: 'Je tu blízko bankomat?', t: 'Is there a cash machine near here?', alt: ['Is there an ATM near here?', 'Is there a cash machine nearby?', 'Is there an ATM nearby?'] },
        { sk: 'Som hladný.', t: "I'm hungry." },
        { sk: 'Je jedna hodina.', t: "It's one o'clock." },
      ],
      speak: ['The view is breathtaking!', 'Is there a good café near here?', 'Can you take a photo of me, please?'],
    },
    market: {
      name: 'the market', aliases: ['market', 'the shambles', 'shambles', 'the shops', 'shops'],
      title: 'The Shambles', sk: 'Ulička Shambles a trh', onMap: true,
      photo: { src: 'img/york/market.jpg', alt: 'The Shambles, a narrow old street', author: 'John M Wheatley', ...SA, source: 'https://commons.wikimedia.org/wiki/File:The_Shambles,_York_-_geograph.org.uk_-_2971409.jpg' },
      lines: [
        ['The Shambles is a very old and narrow street. The houses are so close that people can almost touch hands from their windows.',
          'Shambles je veľmi stará a úzka ulička. Domy sú tak blízko, že ľudia si z okien takmer podajú ruky.'],
        ["Next to it there's a busy market with fruit, flowers, clothes and souvenirs.",
          'Hneď vedľa je rušný trh s ovocím, kvetmi, oblečením a suvenírmi.'],
        ['At a small stall, a man with a beard is selling colourful mugs, flowers and postcards.',
          'V malom stánku predáva muž s bradou farebné hrnčeky, kvety a pohľadnice.'],
      ],
      look: [['The market is busy. The man with a beard is standing at his stall.', 'Na trhu je rušno. Muž s bradou stojí pri svojom stánku.']],
      people: ['seller'],
      xy: [68, 50],
      exits: { bridge: 10, castle: 10, bakery: 5, cafe: 10, station: 20 },
      drill: [
        { sk: 'Koľko to stojí?', t: 'How much is it?', alt: ['How much does it cost?'] },
        { sk: 'Stojí to šesť libier.', t: "It's six pounds.", alt: ['It costs six pounds.', "It's 6 pounds."] },
        { sk: 'Len sa pozerám, ďakujem.', t: "I'm just looking, thanks.", alt: ["I'm just looking, thank you."] },
        { sk: 'Môžem platiť kartou?', t: 'Can I pay by card?', alt: ['Can I pay with a card?', 'Can I pay with my card?'] },
        { sk: 'Vezmem si ho.', t: "I'll take it.", alt: ["I'll buy it."] },
        { sk: 'Ulička je veľmi úzka.', t: 'The street is very narrow.' },
        { sk: 'Je to darček pre moju mamu.', t: "It's a present for my mum.", alt: ["It's a gift for my mum.", "It's a present for my mom."] },
        { sk: 'Chcete tašku?', t: 'Would you like a bag?', alt: ['Do you want a bag?'] },
      ],
      speak: ['How much is this mug?', "I'm just looking, thanks.", 'Can I pay by card?'],
    },
    bakery: {
      name: 'the bakery', aliases: ['bakery', 'stonegate', 'the cake shop', 'cake shop'],
      title: 'Stonegate Bakery', sk: 'Pekáreň na Stonegate',
      photo: { src: 'img/york/bakery.jpg', alt: 'Stonegate, an old street with small shops', author: 'Derek Voller', ...SA, source: 'https://commons.wikimedia.org/wiki/File:Stonegate,_York_Geograph-3484534-by-Derek-Voller.jpg' },
      lines: [
        ['Stonegate is a pretty old street with lots of small shops. The bakery smells of fresh bread and chocolate.',
          'Stonegate je pekná stará ulica s množstvom malých obchodíkov. Pekáreň vonia čerstvým chlebom a čokoládou.'],
        ['In the window there are big birthday cakes with candles. A woman in a white hat is smiling at you.',
          'Vo výklade sú veľké narodeninové torty so sviečkami. Pani v bielom čepci sa na teba usmieva.'],
      ],
      look: [['The bakery is warm and it smells of chocolate. The baker is behind the counter.', 'V pekárni je teplo a vonia čokoláda. Pekárka stojí za pultom.']],
      people: ['baker'],
      xy: [52, 30],
      exits: { market: 5, cafe: 5, bridge: 10, castle: 15, station: 20 },
      drill: [
        { sk: 'Chcel by som narodeninovú tortu, prosím.', t: "I'd like a birthday cake, please.", alt: ['Can I have a birthday cake, please?', 'Could I have a birthday cake, please?'] },
        { sk: 'Koľko stojí čokoládová torta?', t: 'How much is the chocolate cake?', alt: ['How much does the chocolate cake cost?'] },
        { sk: 'Môžete na ňu napísať meno?', t: 'Can you write a name on it?', alt: ['Could you write a name on it?'] },
        { sk: 'Je to pre môjho kamaráta.', t: "It's for my friend.", alt: ['It is for my friend.'] },
        { sk: 'Dnes má narodeniny.', t: "It's his birthday today.", alt: ["Today is his birthday.", "It is his birthday today."] },
        { sk: 'Krásne to vonia!', t: 'It smells lovely!', alt: ['It smells wonderful!', 'It smells great!', 'It smells really nice!'] },
      ],
      speak: ["I'd like a birthday cake, please.", 'Can you write a name on it?'],
    },
    cafe: {
      name: 'the café', aliases: ['cafe', 'café', 'the cafe', 'the minster', 'minster', 'york minster', 'the coffee shop'],
      title: 'The café by the Minster', sk: 'Kaviareň pri Minsteri', onMap: true,
      photo: { src: 'img/york/cafe.jpg', alt: 'The west front of York Minster', author: 'Gordon Hatton', ...SA, source: 'https://commons.wikimedia.org/wiki/File:York_Minster,_west_front_-_geograph.org.uk_-_676054.jpg' },
      lines: [
        ['[York Minster] is enormous. Next to it there is a small, warm café. It smells of coffee and fresh cakes.',
          'York Minster je obrovský. Hneď vedľa je malá, útulná kaviareň. Vonia kávou a čerstvými koláčmi.'],
        ['A young waiter is walking between the tables. Tom is not here yet – he comes at two o’clock.',
          'Medzi stolmi chodí mladý čašník. Tom tu ešte nie je – príde o druhej.'],
      ],
      look: [['The café is small and warm. The waiter is busy.', 'Kaviareň je malá a útulná. Čašník má veľa práce.']],
      people: ['waiter', 'tom'],
      xy: [48, 12],
      exits: { bakery: 5, market: 10, bridge: 15, castle: 20, station: 25 },
      drill: [
        { sk: 'Môžem dostať kávu, prosím?', t: 'Can I have a coffee, please?', alt: ['Could I have a coffee, please?', "I'd like a coffee, please."] },
        { sk: 'Dám si syrový sendvič.', t: "I'd like a cheese sandwich.", alt: ["I'll have a cheese sandwich.", "I'd like a cheese sandwich, please.", "I'll have a cheese sandwich, please."] },
        { sk: 'Môžem dostať účet, prosím?', t: 'Can I have the bill, please?', alt: ['Could I have the bill, please?', 'The bill, please.'] },
        { sk: 'Nie, to je všetko, ďakujem.', t: "No, that's all, thanks.", alt: ["No, that's all, thank you.", "No, thanks, that's all."] },
        { sk: 'Je toto miesto voľné?', t: 'Is this seat free?' },
        { sk: 'Som trochu unavený.', t: "I'm a bit tired.", alt: ["I'm a little tired."] },
        { sk: 'Prepáč, že meškám!', t: "Sorry I'm late!", alt: ["I'm sorry I'm late!"] },
        { sk: 'Aký bol tvoj deň?', t: 'How was your day?' },
      ],
      speak: ['Can I have a cup of tea and a scone, please?', 'Can I have the bill, please?', "Sorry I'm late! How was your day?"],
    },
  },
};

export const gloss = `
again | znova
back | späť
baker | pekár, pekárka
bakery | pekáreň
behind | za
believe | veriť | | I can't believe it. = Nemôžem tomu uveriť.
below | pod
best | najlepší | good | the best = najlepší
between | medzi
birthday | narodeniny | | Happy birthday! = Všetko najlepšie k narodeninám!
blue | modrý
boat | loď, čln
bread | chlieb
brown | hnedý
cake | koláč, torta
candles | sviečky | candle
card | pohľadnica, prianie
cards | pohľadnice | card
clifford's | Cliffordov (meno)
course | (of course = samozrejme)
cup | šálka | | a cup of tea = šálka čaju
doing | robíš | do | What are you doing? = Čo robíš?
done | urobený | do | Well done! = Výborne!
door | dvere
easy | jednoduchý, ľahký
eat | jesť
eight | osem
enjoy | užiť si | | Enjoy! = Dobrú chuť! / Užite si to!
enough | dosť
ever | niekedy, kedy | | the best ever = najlepší vôbec
everything | všetko
fifteen | pätnásť
foot | noha (chodidlo) | | on foot = pešo
free | zadarmo; voľný
full | plný
good | dobrý | | Good luck! = Veľa šťastia!
goodbye | dovidenia
got | (have got = mať) | get | I've got = mám
happy | šťastný | | Happy birthday! = Všetko najlepšie!
hat | klobúk, čiapka
haven't | nemáš, nemám | have not
help | pomôcť
here's | tu je | here is
history | história
how | ako | | How much? = Koľko?
if | ak, keby
lendal | Lendal (názov mosta)
let's | poďme | let us
lots | (lots of = veľa)
lovely | milý, krásny
luck | šťastie | | Good luck! = Veľa šťastia!
lucky | šťastný (má šťastie)
milk | mlieko
money | peniaze
much | veľa | | How much is it? = Koľko to stojí?
name | meno
need | potrebovať
nice | pekný, milý
nobody | nikto
oh | och, ach | | Oh dear! = Ach jaj!
ok | dobre, v poriadku
older | starší | old
o’clock | (celá hodina) | | two o’clock = dve hodiny
party | oslava, večierok
perfect | dokonalý, ideálny
person | človek, osoba
pound | libra (peniaze)
pounds | libry (peniaze) | pound
present | darček
problem | problém | | No problem! = Žiadny problém!
question | otázka
read | čítať, prečítať
really | naozaj
red | červený
right | správny; pravý | | That's right! = Správne!
roses | ruže | rose
shops | obchody | shop
show | ukázať
smell | voňať
smiling | usmiaty, usmieva sa | smile
standing | stojí | stand
stonegate | Stonegate (ulica v Yorku)
surprise | prekvapenie | | a surprise party = oslava s prekvapením
tables | stoly | table
that's | to je | that is
the shambles | Shambles (stará ulička v Yorku)
these | tieto
things | veci | thing
tom's | Tomov | | Tom's birthday = Tomove narodeniny
wait | počkať | | Wait… = Počkaj…
welcome | vitajte | | You're welcome. = Nemáte za čo.
well | dobre | | Well done! = Výborne!
white | biely
wide | široký
words | slová | word
yellow | žltý
yes | áno
taxi | taxík
anywhere | kamkoľvek, kdekoľvek
driver | vodič
yet | ešte (v zápore) | | not yet = ešte nie
you've | máš (have got) | you have
get off | vystúpiť (z vlaku, autobusu)
get | dostať sa; dostať
off | dolu, preč
train | vlak
ten | desať
seven | sedem
fifty | päťdesiat | | fifty-five = päťdesiatpäť
o'clock | (celá hodina) | | ten o'clock = desať hodín
morning | ráno, dopoludnie | | in the morning = ráno
station | stanica
friend | kamarát, priateľ
sent | poslal | send
message | správa (v mobile)
sorry | prepáč, prepáčte
work | práca; pracovať | | at work = v práci
until | až do | | until two = do dvoch
meet | stretnúť sa
café | kaviareň
minster | katedrála (v Yorku), Minster
bag | taška
phone | telefón
dead | vybitý (batéria); mŕtvy | | My phone is dead. = Mám vybitý telefón.
battery | batéria
outside | pred, vonku
man | muž
dog | pes
friendly | priateľský
want | chcieť
city centre | centrum mesta
know | vedieť, poznať
the way | cesta (kam ísť) | | I don't know the way. = Nepoznám cestu.
way | cesta | | on the way home = cestou domov
go straight on | choďte rovno
street | ulica
turn left | odbočiť doľava
bridge | most
cross the river | prejsť cez rieku
past | okolo (popri) | | walk past the museum = prejsť okolo múzea
museum | múzeum
on your right | po vašej pravej strane
can't | nemôžete, nedá sa | can not
miss it | prehliadnuť to, minúť to
say | povedať
thank | ďakovať | | thank you = ďakujem
start | začať
walking | kráčať, ísť pešo | walk
stop | zastaviť (sa)
signs | tabule, značky | sign
sign | tabuľa, značka
other | druhý, iný
clifford's tower | Cliffordova veža (zvyšok hradu v Yorku)
shambles market | trh Shambles
shambles | Shambles (stará ulička v Yorku)
hours | hodiny | hour
minutes | minúty | minute
where | kde, kam
first | najprv; prvý
last | posledný
part | časť
york castle | yorský hrad
tower | veža
beard | brada
out of breath | zadychčaný
slowly | pomaly
in the north | na severe
guide | sprievodca, sprievodkyňa
talking | rozpráva | talk
more | viac | | more than = viac ako
than | ako (pri porovnaní)
years | roky | year | seven hundred years old = sedemsto rokov starý
take | urobiť (fotku); vziať | | take photos = fotiť
feel | cítiť sa | | feel hungry = dostať hlad
hungry | hladný
almost | takmer
touch | dotknúť sa
hands | ruky | hand
their | ich
windows | okná | window
window | okno
close | blízko
busy | rušný
market | trh
fruit | ovocie
flowers | kvety | flower
clothes | oblečenie
souvenirs | suveníry | souvenir
stall | stánok
woman | žena
selling | predáva | sell
mugs | hrnčeky | mug
mug | hrnček
pictures | obrázky | picture
picture | obrázok
hello | ahoj, dobrý deň
can i help you | môžem vám pomôcť?
asks | pýta sa | ask
smile | úsmev
buy | kúpiť
mum | mama
price | cena
smells | vonia | smell | smells of coffee = vonia kávou
coffee | káva
cakes | koláče | cake
warm | teplý
sit | sadnúť si | | sit down = sadnúť si
down | dolu
table | stôl
by | pri
see | vidieť
across | cez, na druhej strane
young | mladý
waiter | čašník
comes | príde | come
what | čo
would | (podmieňovací spôsob) | | What would you like? = Čo si dáte?
like | mať rád; chcieť | | I'd like = chcel by som
menu | jedálny lístok
tea | čaj
chocolate | čokoláda | | hot chocolate = horúca čokoláda
sandwiches | sendviče | sandwich
soup | polievka
yorkshire | Yorkshire (kraj v Anglicku); yorkshirský
scone | scone (anglický pagáčik k čaju)
cream | smotana
jam | džem
you're | si, ste | you are
tired | unavený
after | po
laughs | smeje sa | laugh
tell | povedať, rozprávať
him | mu, jemu
real | skutočný, naozajstný
tourist | turista
counter | pult
postcard | pohľadnica
gives | dá | give
stamp | známka (poštová)
write | napísať
post | poslať poštou, hodiť do schránky
home | domov
think | myslieť, premýšľať
food | jedlo
have | mať
`;
