// Adventure k Unit 5: „A day in York“ – hráč prvýkrát sám v anglickom meste.
// Úroveň A2–B1 (English File Pre-intermediate): krátke vety, časté slová, len present simple/continuous,
// past simple, present perfect, going to/will. Žiadne idiómy.
// Formát je opísaný v js/games/adventure.js. V odpovediach (t, alt) sú voliteľné časti v zátvorkách.
// Slová z príbehu, ktoré nie sú v slovníku Unit 5, sú v `gloss` nižšie (pridá sa k slovníku lekcie).
export default {
  title: 'A day in York',
  sk: 'Deň v Yorku',
  intro: 'Prvýkrát cestuješ sám do Anglicka. Kamarát Tom (ten z pohľadnice) ťa čaká v Yorku, ale až poobede. Dovtedy si musíš poradiť sám – po anglicky.',
  start: 'station',

  // Rebrík nápovied ①: vysvetlenie po anglicky, iba jednoduchými slovami.
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

  scenes: {
    station: {
      title: 'Arriving in York',
      sk: 'Príchod do Yorku',
      lines: [
        ["You get off the train in York. It's ten o'clock in the morning, and the station is crowded and noisy.",
          'Vystúpiš z vlaku v Yorku. Je desať hodín ráno a stanica je plná ľudí a hlučná.'],
        ["Your friend Tom sent you a message: «Sorry! I'm at work until two. Meet me at the café next to [York Minster].»",
          'Kamarát Tom ti poslal správu: „Prepáč! Som v práci do dvoch. Stretneme sa v kaviarni vedľa York Minster.“'],
        ['You have a small bag, a phone with a dead battery and no map.',
          'Máš malú tašku, telefón s vybitou batériou a žiadnu mapu.'],
        ["Outside the station there's a man with a dog. He looks friendly.",
          'Pred stanicou stojí muž so psom. Vyzerá priateľsky.'],
        ["You want to go to the [city centre], but you don't know [the way].",
          'Chceš ísť do centra, ale nepoznáš cestu.'],
      ],
      choice: {
        sk: 'Opýtaj sa muža na cestu',
        options: [{
          sk: 'Prepáčte, ako sa dostanem do centra?',
          t: '(Excuse me,) how do I get to the city centre?',
          alt: ['(Excuse me,) how can I get to the city centre?', '(Excuse me,) where is the city centre?', '(Excuse me,) how do I get to the centre?'],
          go: 'directions',
          res: ["«It's easy! It's about ten minutes on foot,» says the man.", '„To je jednoduché! Je to asi desať minút pešo,“ hovorí muž.'],
        }],
      },
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

    directions: {
      title: 'Asking the way',
      sk: 'Pýtame sa na cestu',
      lines: [
        ["«[Go straight on] down this street,» says the man. «Then [turn left] at the bridge and [cross the river].»",
          '„Choďte rovno touto ulicou,“ hovorí muž. „Potom na moste odbočte doľava a prejdite cez rieku.“'],
        ["«Walk past the museum. The Minster is [on your right]. You can't [miss it]. It's enormous!»",
          '„Prejdite okolo múzea. Minster je po vašej pravej strane. Nemôžete ho prehliadnuť. Je obrovský!“'],
        ['You say thank you and start walking. On the bridge you stop. There are two signs.',
          'Poďakuješ a vykročíš. Na moste zastaneš. Sú tam dve tabule.'],
        ["One sign says: [Clifford's Tower], five minutes. The other says: [Shambles Market], seven minutes.",
          'Na jednej stojí: Cliffordova veža, päť minút. Na druhej: trh Shambles, sedem minút.'],
        ['You have four hours. Where are you going to go first?',
          'Máš štyri hodiny. Kam pôjdeš najprv?'],
      ],
      choice: {
        sk: 'Kam pôjdeš najprv?',
        options: [
          {
            sk: 'Povedz: Najprv pôjdem na hrad.',
            t: "I'm going to go to the castle (first).",
            alt: ["First I'm going to go to the castle.", "I'm going to the castle (first).", "First I'm going to the castle.", "I'm going to visit the castle (first).", "I'll go to the castle (first).", "First I'll go to the castle."],
            go: 'castle',
          },
          {
            sk: 'Povedz: Najprv pôjdem na trh.',
            t: "I'm going to go to the market (first).",
            alt: ["First I'm going to go to the market.", "I'm going to the market (first).", "First I'm going to the market.", "I'm going to visit the market (first).", "I'll go to the market (first).", "First I'll go to the market."],
            go: 'market',
          },
        ],
      },
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
      title: "Clifford's Tower",
      sk: 'Cliffordova veža',
      lines: [
        ["[Clifford's Tower] is on a small hill next to the river. It's the last part of the old [York Castle].",
          'Cliffordova veža stojí na malom kopci pri rieke. Je to posledná časť starého yorského hradu.'],
        ['There are fifty-five steep steps to the top. You climb them slowly, and at the top you are [out of breath].',
          'Na vrchol vedie päťdesiatpäť strmých schodov. Vyjdeš ich pomaly a hore si celý zadychčaný.'],
        ['But the view is breathtaking! You can see the [old town], the [city walls] and the Minster [in the north].',
          'Ale výhľad je úchvatný! Vidíš staré mesto, mestské hradby a na severe Minster.'],
        ['A guide is talking to a group of tourists: «This tower is more than seven hundred years old.»',
          'Sprievodkyňa rozpráva skupine turistov: „Táto veža má viac ako sedemsto rokov.“'],
        ["You take some photos. Then you feel hungry. It's one o'clock.",
          'Urobíš pár fotiek. Potom dostaneš hlad. Je jedna hodina.'],
      ],
      choice: {
        sk: 'Si hladný. Opýtaj sa sprievodkyne',
        options: [{
          sk: 'Je tu blízko nejaká dobrá kaviareň?',
          t: 'Is there a good café near here?',
          alt: ['Is there a good cafe near here?', 'Is there a good café nearby?', 'Is there a good cafe nearby?', 'Is there a nice café near here?', 'Is there a nice cafe near here?'],
          go: 'cafe',
          res: ["«Yes, there's a lovely café next to the Minster. Walk along the river and then through the old town,» says the guide.",
            '„Áno, vedľa Minsteru je milá kaviareň. Choďte popri rieke a potom cez staré mesto,“ hovorí sprievodkyňa.'],
        }],
      },
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
      title: 'The Shambles',
      sk: 'Ulička Shambles a trh',
      lines: [
        ['The Shambles is a very old and narrow street. The houses are so close that people can almost touch hands from their windows.',
          'Shambles je veľmi stará a úzka ulička. Domy sú tak blízko, že ľudia si z okien takmer podajú ruky.'],
        ["Next to it there's a busy market with fruit, flowers, clothes and souvenirs.",
          'Hneď vedľa je rušný trh s ovocím, kvetmi, oblečením a suvenírmi.'],
        ['You stop at a small stall. A woman is selling colourful mugs with pictures of York.',
          'Zastavíš pri malom stánku. Žena predáva farebné hrnčeky s obrázkami Yorku.'],
        ['«Hello! [Can I help you]?» she asks with a smile.',
          '„Dobrý deň! Môžem vám pomôcť?“ pýta sa s úsmevom.'],
        ["You want to buy a mug for your mum, but there's no price on it.",
          'Chceš kúpiť hrnček pre mamu, ale nie je na ňom cena.'],
      ],
      choice: {
        sk: 'Opýtaj sa, koľko stojí hrnček',
        options: [{
          sk: 'Koľko stojí tento hrnček?',
          t: 'How much is this mug?',
          alt: ['How much does this mug cost?', 'How much is it?', 'How much does it cost?'],
          go: 'cafe',
          res: ["«It's six pounds. Would you like a bag?» You pay and ask about a café. «Try the one next to the Minster. It's lovely,» she says.",
            '„Šesť libier. Chcete tašku?“ Zaplatíš a opýtaš sa na kaviareň. „Skúste tú vedľa Minsteru. Je milá,“ povie.'],
        }],
      },
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

    cafe: {
      title: 'At the café',
      sk: 'V kaviarni',
      lines: [
        ['The café is small and warm. It smells of coffee and fresh cakes.',
          'Kaviareň je malá a teplá. Vonia kávou a čerstvými koláčmi.'],
        ['You sit down at a table by the window. You can see [York Minster] across the square.',
          'Sadneš si k stolu pri okne. Cez námestie vidíš York Minster.'],
        ['A young waiter comes to your table. «Hi! What would you like?»',
          'K stolu príde mladý čašník. „Ahoj! Čo si dáš?“'],
        ["On the menu there's tea, coffee, hot chocolate, sandwiches, soup and a Yorkshire scone with cream and jam.",
          'Na jedálnom lístku je čaj, káva, horúca čokoláda, sendviče, polievka a yorkshirský scone so smotanou a džemom.'],
        ["You're very hungry and [a bit] tired after the morning.",
          'Po celom dopoludní si veľmi hladný a trochu unavený.'],
      ],
      choice: {
        sk: 'Objednaj si',
        options: [{
          sk: 'Môžem dostať čaj a scone, prosím?',
          t: 'Can I have (a cup of) tea and a scone, please?',
          alt: ['Can I have a tea and a scone, please?', 'Could I have (a cup of) tea and a scone, please?', "I'd like (a cup of) tea and a scone, please.", "I'd like a tea and a scone, please.", 'A tea and a scone, please.'],
          go: 'postcard',
          res: ["«Sure!» A few minutes later the door opens. It's Tom! «Hi! Sorry I'm late! How was your day?»",
            '„Jasné!“ O pár minút sa otvoria dvere. Je to Tom! „Ahoj! Prepáč, že meškám! Aký bol tvoj deň?“'],
        }],
      },
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

    postcard: {
      title: 'A postcard home',
      sk: 'Pohľadnica domov',
      lines: [
        ["Tom laughs when you tell him about your morning. «You're a real tourist now!»",
          'Tom sa smeje, keď mu rozprávaš o svojom dopoludní. „Teraz si naozajstný turista!“'],
        ['At the counter you buy a postcard with a picture of the Minster.',
          'Pri pulte si kúpiš pohľadnicu s obrázkom Minsteru.'],
        ['Tom gives you a stamp. «Write it now, and we can post it on the way home.»',
          'Tom ti dá známku. „Napíš ju hneď a cestou domov ju hodíme do schránky.“'],
        ['You think about your day: the station, the people, the walk, the view and the food.',
          'Premýšľaš o svojom dni: stanica, ľudia, prechádzka, výhľad a jedlo.'],
        ['What are you going to write?', 'Čo napíšeš?'],
      ],
      write: {
        sk: 'Napíš pohľadnicu domov (40–80 slov). Kde je York a aké je to mesto? Čo si dnes videl a robil (minulý čas)? Čo sa ti páčilo najviac?',
        must: ['Dear', 'in the north of', 'famous for', 'there is', 'today I', 'Love'],
        words: [40, 80],
        model: "Dear Mum and Dad,\nGreetings from York! It's a beautiful city in the north of England. It's famous for its cathedral, York Minster, and its old city walls. There is a castle on a hill, too. Today I climbed Clifford's Tower and the view was breathtaking. Then I had tea and a scone with Tom in a lovely café. I'm tired but very happy!\nLove, Adam",
      },
    },
  },
};

// Slovník slov z príbehu (formát ako gloss v lekcii).
export const gloss = `
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
