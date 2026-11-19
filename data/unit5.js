// Describing a town or city – svetové strany, opozitá a miesta v meste (Vocabulary Bank, str. 156).
// Značky v texte: [fráza] = jedna ťukateľná jednotka, [slovo|q=id] = slovo s otázkou.
// Texty sú vlastné, iba so slovnou zásobou lekcie.
export default {
  id: 'u5',
  code: 'U5',
  title: 'Towns and cities',
  subtitle: 'svetové strany · aké je mesto · opozitá',
  storyTitle: 'Postcards from Slovakia',
  choiceTitle: 'Where is it? What\'s it like?',
  choiceHint: 'in the north of Slovakia = na severe Slovenska (vo vnútri). north of Košice = na sever od Košíc (mimo nich).',
  sortTitle: 'What is there to see?',
  pairsTitle: 'Opposites',
  pairsHint: 'Ťukni na slovo vľavo a potom na jeho opak vpravo.',
  games: ['walk', 'sort', 'pairs', 'pond', 'spell', 'choice', 'build'],

  chapters: [
    {
      title: 'Greetings from Bratislava',
      sk: 'Pozdrav z Bratislavy',
      lines: [
        ["Dear Tom, greetings from Bratislava! It's the capital of Slovakia, and it's my [home town].",
          'Milý Tom, pozdravujem z Bratislavy! Je to hlavné mesto Slovenska a moje rodné mesto.'],
        ["Bratislava is [in the south-west of|q=a1] Slovakia, on the [River Danube|q=a8], very [close to] the border with Austria and Hungary.",
          'Bratislava je na juhozápade Slovenska, na rieke Dunaj, veľmi blízko hraníc s Rakúskom a Maďarskom.'],
        ["It's quite a big city, with a population of about four hundred and seventy thousand people.",
          'Je to dosť veľké mesto, má asi štyristosedemdesiat tisíc obyvateľov.'],
        ["The [old town] is historic and charming, but the suburbs are modern and [a bit] ugly.",
          'Staré mesto je historické a pôvabné, ale sídliská na okraji sú moderné a trochu škaredé.'],
        ["[There's|q=a2] a castle on a hill above the river. From the top, the view is breathtaking.",
          'Nad riekou je hrad na kopci. Z vrcholu je úchvatný výhľad.'],
        ["In summer the [old town] is crowded with tourists, and [at night] it can be very noisy.",
          'V lete je staré mesto plné turistov a v noci tam môže byť veľmi hlučno.'],
        ['Tomorrow Granny and I are starting a trip around Slovakia. She has a map, a compass and a very old car.',
          'Zajtra sa s babkou vydáme na výlet po Slovensku. Babka má mapu, kompas a veľmi staré auto.'],
        ['Love, Ema', 'S láskou, Ema'],
      ],
      vf: [
        ['Bratislava is in the north-east of Slovakia.', false, 'Je na juhozápade, blízko hraníc s Rakúskom a Maďarskom.'],
        ['The castle is on a hill above the Danube.', true, 'Z vrcholu je úchvatný výhľad.'],
        ['In summer the old town is empty.', false, 'Je plné turistov: crowded with tourists.'],
      ],
    },
    {
      title: 'A castle and an ice cream',
      sk: 'Hrad a zmrzlina',
      lines: [
        ["Hi Tom! Today we're in Trenčín, a [medium-sized|q=a3] town about a hundred and twenty kilometres [north-east of|q=a4] Bratislava.",
          'Ahoj Tom! Dnes sme v Trenčíne, stredne veľkom meste asi stodvadsať kilometrov na severovýchod od Bratislavy.'],
        ["Trenčín is [famous for] its castle. It's on a rock high above the town, and it looks enormous.",
          'Trenčín je známy svojím hradom. Stojí na skale vysoko nad mestom a vyzerá obrovský.'],
        ['Granny wanted to climb to the top. It was hot, the steps were steep, and I was [exhausted|q=a6].',
          'Babka chcela vyliezť až hore. Bolo horúco, schody boli strmé a ja som bola úplne vyčerpaná.'],
        ["In the [main square] there's a church, a fountain and [lots of] little cafés.",
          'Na hlavnom námestí je kostol, fontána a veľa malých kaviarní.'],
        ["In the afternoon we drove to Žilina. It's an industrial city, but the centre is lively and not boring [at all].",
          'Poobede sme išli do Žiliny. Je to priemyselné mesto, ale centrum je živé a vôbec nie nudné.'],
        ["Granny bought me an [ice cream] with five scoops. «It's a souvenir,» she said.",
          'Babka mi kúpila zmrzlinu s piatimi kopčekmi. „Je to suvenír," povedala.'],
        ['The [ice cream] melted in the car. Now the map is sticky.',
          'Zmrzlina sa v aute roztopila. Teraz je mapa lepkavá.'],
      ],
      vf: [
        ['Trenčín castle is on a rock above the town.', true, 'Vysoko nad mestom – a vyzerá obrovský.'],
        ['Ema thinks Žilina is boring.', false, 'Centrum je živé a vôbec nie nudné.'],
      ],
    },
    {
      title: 'In the mountains',
      sk: 'V horách',
      lines: [
        ["Dear Tom, now we're [in the north of] Slovakia, near the border with Poland.",
          'Milý Tom, teraz sme na severe Slovenska, blízko hraníc s Poľskom.'],
        ['The [High Tatras] are the highest mountains in the country. Some peaks are over two thousand six hundred metres high.',
          'Vysoké Tatry sú najvyššie hory v krajine. Niektoré štíty majú viac ako dvetisícšesťsto metrov.'],
        ["Poprad is a small town [at the foot of] the mountains. It isn't very pretty, but the air is fresh and clean.",
          'Poprad je malé mesto pod horami. Nie je veľmi pekné, ale vzduch je čerstvý a čistý.'],
        ["People here don't go to [shopping centres] at the weekend. They go hiking!",
          'Ľudia tu cez víkend nechodia do nákupných centier. Chodia na túry!'],
        ['We walked to a [mountain lake] called [Štrbské Pleso]. The water was [freezing|q=a6], but Granny jumped in anyway.',
          'Išli sme k horskému jazeru, ktoré sa volá Štrbské Pleso. Voda bola ľadová, ale babka aj tak skočila dnu.'],
        ["A group of tourists took photos of her. Now she's famous on the internet.",
          'Skupina turistov si ju fotila. Teraz je slávna na internete.'],
        ["Tomorrow we're going east. Granny says the roads there are narrow and dangerous. I'm [a bit] worried.",
          'Zajtra ideme na východ. Babka hovorí, že cesty sú tam úzke a nebezpečné. Trochu sa bojím.'],
      ],
      vf: [
        ['The air in Poprad is polluted.', false, 'Vzduch je čerstvý a čistý.'],
        ['Granny jumped into the lake.', true, 'Hoci voda bola ľadová.'],
      ],
    },
    {
      title: 'The east',
      sk: 'Východ',
      lines: [
        ["Hi Tom! Now we're in Košice, the second largest city in Slovakia. It's about three hundred kilometres [east of|q=a5] Bratislava.",
          'Ahoj Tom! Teraz sme v Košiciach, druhom najväčšom meste Slovenska. Sú asi tristo kilometrov na východ od Bratislavy.'],
        ["The [main street] is long and elegant, and it's [full of] people day and night.",
          'Hlavná ulica je dlhá a elegantná a vo dne v noci je plná ľudí.'],
        ["In the middle there's an enormous Gothic cathedral. It's the biggest church in the country.",
          'Uprostred stojí obrovská gotická katedrála. Je to najväčší kostol v krajine.'],
        ["[Next to] it there's a [singing fountain]. When the music starts, the water dances.",
          'Vedľa nej je spievajúca fontána. Keď začne hudba, voda tancuje.'],
        ['Then we drove to Bardejov, a tiny town [north of] Prešov, near the Polish border.',
          'Potom sme išli do Bardejova, maličkého mesta na sever od Prešova, blízko poľských hraníc.'],
        ["It has [city walls], a [town hall] in the middle of the square and [lots of] colourful houses. It's so peaceful!",
          'Má mestské hradby, radnicu uprostred námestia a veľa farebných domov. Je tam taký pokoj!'],
        ['There were no cars, no crowds and no noise. Just one very loud Granny.',
          'Žiadne autá, žiadne davy a žiadny hluk. Len jedna veľmi hlasná babka.'],
      ],
      vf: [
        ['Košice is the capital of Slovakia.', false, 'Je to druhé najväčšie mesto. Hlavné mesto je Bratislava.'],
        ['Bardejov is noisy and crowded.', false, 'Je pokojný, bez áut a bez davov.'],
      ],
    },
    {
      title: 'A letter from York',
      sk: 'List z Yorku',
      lines: [
        ['Dear Ema, thanks for your postcards! Your Granny is amazing.',
          'Milá Ema, vďaka za pohľadnice! Tvoja babka je úžasná.'],
        ["I live in York. It's a city [in the north of] England, about forty kilometres [north-east of] Leeds.",
          'Bývam v Yorku. Je to mesto na severe Anglicka, asi štyridsať kilometrov na severovýchod od Leedsu.'],
        ["It's on two rivers, the Ouse and the Foss, and it has a population of about two hundred thousand.",
          'Leží na dvoch riekach, Ouse a Foss, a má asi dvestotisíc obyvateľov.'],
        ["York is [famous for] its cathedral, [York Minster], and its old [city walls]. You can walk on them all around the centre.",
          'York je známy svojou katedrálou York Minster a starými mestskými hradbami. Môžeš sa po nich prejsť okolo celého centra.'],
        ['There are also the ruins of an old abbey, [lots of] museums and a very spooky [ghost tour].',
          'Sú tu aj ruiny starého opátstva, veľa múzeí a veľmi strašidelná prehliadka s duchmi.'],
        ["York is beautiful, but in summer it's [packed|q=a7] with tourists, and the traffic is terrible.",
          'York je krásny, ale v lete je natrieskaný turistami a doprava je hrozná.'],
        ["Next year, come and visit with your Granny. But please, don't let her jump into the river!",
          'Budúci rok príď na návštevu aj s babkou. Ale prosím, nenechaj ju skočiť do rieky!'],
        ['[Best wishes], Tom', 'Srdečne zdraví Tom'],
      ],
      vf: [
        ['York is in the south of England.', false, 'Je na severe Anglicka.'],
        ['You can walk on the city walls in York.', true, 'Okolo celého centra.'],
        ['York is quiet and empty in summer.', false, 'Je natrieskaný turistami: packed.'],
      ],
    },
  ],

  questions: {
    a1: ['Prečo «in the south-west of Slovakia»?',
      'Bratislava je vo vnútri Slovenska, v jeho juhozápadnej časti: in the south-west of Slovakia. Tak ako York is in the north of England.'],
    a2: ['Čo je «there\'s»?',
      'There\'s = there is, teda „je, nachádza sa“. Takto opisujeme, čo v meste je: There\'s a castle. Pri viacerých veciach: There are lots of cafés.'],
    a3: ['Čo znamená «medium-sized»?',
      'Ani malé, ani veľké, stredne veľké. Ako veľkosť trička: S = small, M = medium, L = large. Mesto môže byť small, medium-sized alebo big.'],
    a4: ['Ako sa povie severovýchod?',
      'Spojíme dve strany, pričom north a south idú vždy prvé: north-east, north-west, south-east, south-west. «of» tu znamená „od“.'],
    a5: ['Prečo tu nie je «in the»?',
      'Košice nie sú v Bratislave, sú od nej na východ: east of Bratislava. Rovnako: York is about 25 miles east of Leeds. Ale: Košice is IN THE east OF Slovakia.'],
    a6: ['Prečo nie «very tired» alebo «very cold»?',
      'Silné prídavné mená už obsahujú „veľmi“: exhausted = very tired, freezing = very cold, enormous = very big, breathtaking = very beautiful. Pred ne sa «very» nedáva.'],
    a7: ['Čo je «packed»?',
      'Úplne plný, natrieskaný. Je to silnejšie slovo ako crowded. Opak je empty.'],
    a8: ['Prečo je pred riekou «the»?',
      'Rieky majú v angličtine vždy člen the: the Danube, the Thames, the River Ouse. Mestá ho nemajú: Bratislava, York.'],
  },

  gloss: `
dear | milý, milá (na začiatku listu)
tom | Tom (meno)
ema | Ema (meno)
hi | ahoj
greetings | pozdravy
love | s láskou (na konci listu); láska
best wishes | srdečne zdraví (na konci listu)
thanks | vďaka
postcards | pohľadnice | postcard
bratislava | Bratislava
trenčín | Trenčín
žilina | Žilina
poprad | Poprad
košice | Košice
prešov | Prešov
bardejov | Bardejov
york | York (mesto v Anglicku)
leeds | Leeds (mesto v Anglicku)
york minster | York Minster (katedrála v Yorku)
ouse | Ouse (rieka)
foss | Foss (rieka)
štrbské pleso | Štrbské Pleso (jazero v Tatrách)
high tatras | Vysoké Tatry
slovakia | Slovensko
england | Anglicko
austria | Rakúsko
hungary | Maďarsko
poland | Poľsko
polish | poľský
capital | hlavné mesto
home town | rodné mesto
in the south-west of | na juhozápade (čoho) | | in the south-west of Slovakia = na juhozápade Slovenska
in the north of | na severe (čoho)
north-east of | na severovýchod od
east of | na východ od
north of | na sever od
east | na východ; východ
river danube | rieka Dunaj | | pred riekou je vždy the
river | rieka
rivers | rieky | river
close to | blízko (čoho)
near | blízko, pri
border | hranica
quite | dosť, celkom
big | veľký
biggest | najväčší | big
largest | najväčší | large
small | malý
tiny | maličký
medium-sized | stredne veľký
city | veľké mesto
town | mesto, mestečko
country | krajina
population | počet obyvateľov | | with a population of… = s počtom obyvateľov…
about | asi, približne
one | jeden
two | dva
four | štyri
five | päť
six | šesť
twenty | dvadsať
forty | štyridsať
seventy | sedemdesiat
hundred | sto
thousand | tisíc
three | tri
second | druhý
kilometres | kilometre | kilometre
metres | metre | metre
people | ľudia
old town | staré mesto, historické centrum
old | starý
historic | historický
charming | pôvabný, očarujúci
suburbs | predmestia, sídliská na okraji | suburb
modern | moderný
a bit | trochu
ugly | škaredý
there's | je, nachádza sa | there is
castle | hrad
hill | kopec
above | nad
top | vrchol
view | výhľad
breathtaking | úchvatný (veľmi pekný)
in summer | v lete
summer | leto
crowded | plný ľudí, preplnený
crowds | davy | crowd
tourists | turisti | tourist
at night | v noci
night | noc
day | deň
can | môže, dá sa
be | byť
noisy | hlučný
noise | hluk
tomorrow | zajtra
granny | babka
starting | začíname | start
starts | začne | start
trip | výlet
around | okolo, po
has | má | have
map | mapa
compass | kompas
car | auto
cars | autá | car
we're | sme | we are
she's | ona je | she is
isn't | nie je | is not
famous for | známy čím, slávny vďaka
famous | slávny
its | jeho (pri veciach)
rock | skala
high | vysoko; vysoký
highest | najvyšší | high
looks | vyzerá | look
enormous | obrovský
wanted | chcela | want
climb | vyliezť
hot | horúci, horúco
steps | schody | step
steep | strmý
were | boli | be
exhausted | úplne vyčerpaný (veľmi unavený)
main square | hlavné námestie
main street | hlavná ulica
square | námestie
church | kostol
fountain | fontána
singing fountain | spievajúca fontána
lots of | veľa
little | malý
cafés | kaviarne | café
afternoon | popoludnie
drove | išli sme autom | drive
industrial | priemyselný
centre | centrum
lively | živý, rušný
boring | nudný
at all | vôbec | | not … at all = vôbec nie
bought | kúpila | buy
me | mi, mňa
ice cream | zmrzlina
scoops | kopčeky | scoop
souvenir | suvenír, pamiatka
said | povedala | say
melted | roztopila sa | melt
now | teraz
sticky | lepkavý
mountains | hory | mountain
peaks | štíty, vrcholy | peak
over | viac ako; nad
at the foot of | pod (horou), na úpätí
pretty | pekný
air | vzduch
fresh | čerstvý
clean | čistý
shopping centres | nákupné centrá | shopping centre
weekend | víkend
hiking | turistika, chodenie na túry | hike
walked | išli sme pešo | walk
mountain lake | horské jazero
called | ktoré sa volá | call
water | voda
freezing | ľadový (veľmi studený)
jumped | skočila | jump
jump | skočiť
into | do (dovnútra)
anyway | aj tak
group | skupina
took | urobili (fotky) | take | take photos = fotiť
photos | fotky | photo
internet | internet
going | ideme | go
roads | cesty | road
narrow | úzky
dangerous | nebezpečný
worried | ustarostený, bojím sa
full of | plný (čoho)
long | dlhý
elegant | elegantný
middle | stred
gothic | gotický
cathedral | katedrála
next to | vedľa
when | keď
music | hudba
dances | tancuje | dance
then | potom
city walls | mestské hradby
town hall | radnica
colourful | farebný
houses | domy | house
so | taký, tak
peaceful | pokojný, tichý
no | žiadny
just | len
loud | hlasný
amazing | úžasný
live | bývam, žijem
beautiful | krásny
also | aj, tiež
ruins | ruiny, zrúcaniny
abbey | opátstvo, kláštor
museums | múzeá | museum
spooky | strašidelný
ghost tour | prehliadka s duchmi
packed | natrieskaný, úplne plný
traffic | doprava, premávka
terrible | hrozný
next | budúci, ďalší
year | rok
come | príď
visit | navštíviť; návšteva
please | prosím
let | nechať
them | ich, nich
all | celý, všetci
walk | prejsť sa
some | niektoré
go | ísť, chodiť
says | hovorí | say
`,

  // Odkaz na záznamníku: mapa Slovenska. Súradnice sú [zemepisná dĺžka, šírka], obrys je zjednodušený.
  walk: {
    vehicle: '🚌',
    start: 'ba',
    outline: [
      [16.95, 48.18], [16.85, 48.37], [16.9, 48.55], [17.05, 48.75], [17.2, 48.87], [17.55, 48.82], [17.85, 48.95],
      [18.1, 49.08], [18.35, 49.32], [18.6, 49.5], [18.85, 49.52], [19.2, 49.42], [19.45, 49.6], [19.75, 49.4],
      [19.9, 49.23], [20.1, 49.33], [20.35, 49.4], [20.65, 49.4], [21.1, 49.42], [21.55, 49.44], [21.95, 49.3],
      [22.4, 49.13], [22.56, 49.08], [22.42, 48.9], [22.15, 48.42], [21.75, 48.35], [21.45, 48.55], [21.05, 48.52],
      [20.6, 48.55], [20.3, 48.3], [19.95, 48.15], [19.6, 48.22], [19.15, 48.07], [18.85, 48.05], [18.75, 47.82],
      [18.4, 47.76], [17.85, 47.75], [17.45, 47.88], [17.15, 48.0], [17.05, 48.08],
    ],
    marks: [
      { icon: '⛰️', at: [20.05, 49.3], label: 'High Tatras' },
      { icon: '🌊', at: [17.55, 47.95], label: 'Danube' },
    ],
    cities: {
      ba: { name: 'Bratislava', at: [17.11, 48.15], dx: 50, dy: 38 },
      tt: { name: 'Trnava', at: [17.59, 48.38] },
      nr: { name: 'Nitra', at: [18.09, 48.31] },
      kn: { name: 'Komárno', at: [18.13, 47.76] },
      tn: { name: 'Trenčín', at: [18.04, 48.89] },
      za: { name: 'Žilina', at: [18.74, 49.22] },
      bb: { name: 'Banská Bystrica', at: [19.15, 48.74] },
      lc: { name: 'Lučenec', at: [19.67, 48.33] },
      pp: { name: 'Poprad', at: [20.3, 49.06], dy: 42 },
      rv: { name: 'Rožňava', at: [20.53, 48.66] },
      bj: { name: 'Bardejov', at: [21.28, 49.29] },
      po: { name: 'Prešov', at: [21.24, 49.0], dx: -62, dy: 9 },
      ke: { name: 'Košice', at: [21.26, 48.72] },
      he: { name: 'Humenné', at: [21.91, 48.94] },
    },
    tour: [
      { to: 'nr',
        say: "Hi, it's Aunt Zuzka! Come and visit me. My city is in the west of Slovakia. It's about eighty kilometres east of Bratislava, and about forty kilometres east of Trnava. It's famous for its castle on a hill. See you soon!",
        story: [
          ['Nitra is a medium-sized city with a castle on a hill.', 'Nitra je stredne veľké mesto s hradom na kopci.'],
          ['The castle is historic, and the streets are quiet and clean.', 'Hrad je historický a ulice sú tiché a čisté.'],
          ["Aunt Zuzka is at the castle. She's wearing a crown! «I'm the queen of Nitra today,» she says.", 'Teta Zuzka je na hrade. Má na hlave korunu! „Dnes som kráľovná Nitry," hovorí.'],
        ],
        prize: ['👑', 'papierová koruna od tety Zuzky'] },
      { to: 'za',
        say: "Hello! It's your cousin Maroš. I'm in a city in the north-west of Slovakia. It's north-east of Trenčín, near the border with the Czech Republic and Poland. Hurry up, the ice cream is melting!",
        story: [
          ['Žilina is quite a modern city, but it has a lovely historic square.', 'Žilina je dosť moderné mesto, ale má krásne historické námestie.'],
          ["Maroš is in the square. He's eating ice cream – in December!", 'Maroš je na námestí. Je zmrzlinu – v decembri!'],
          ["«It isn't dangerous,» he says. «It's just very, very cold.»", '„Nie je to nebezpečné," hovorí. „Je to len veľmi, veľmi studené."'],
        ],
        prize: ['🍦', 'zmrzlina, ktorá sa nikdy neroztopí'] },
      { to: 'pp',
        say: "Hi, it's Uncle Jano. I'm in the mountains! My town is in the north of Slovakia, about a hundred kilometres east of Žilina. It's very near the High Tatras. It's quite small, but it's very exciting in winter.",
        story: [
          ["Poprad is a small town, but it isn't boring.", 'Poprad je malé mesto, ale nie je nudné.'],
          ['Uncle Jano has a sledge, a big hat and a very big dog.', 'Strýko Jano má sane, veľkú čiapku a veľmi veľkého psa.'],
          ['The dog pulls the sledge. Uncle Jano is screaming. The dog is very happy.', 'Pes ťahá sane. Strýko Jano kričí. Pes je veľmi šťastný.'],
        ],
        prize: ['🛷', 'jazda na saniach so psom (bez bŕzd)'] },
      { to: 'bj',
        say: "Good afternoon. This is Mr Novák from the town hall. We have a prize for you! Our town is in the north-east of Slovakia, near the border with Poland. It's north of Prešov. It's small, historic and very beautiful.",
        story: [
          ['Bardejov has a beautiful historic square with the town hall in the middle.', 'Bardejov má krásne historické námestie s radnicou v strede.'],
          ["Mr Novák gives you a gold medal. It's made of chocolate.", 'Pán Novák ti dá zlatú medailu. Je z čokolády.'],
          ["«Don't eat it now!» he says. Too late.", '„Hneď ju nejedz!" hovorí. Neskoro.'],
        ],
        prize: ['🏅', 'čokoládová medaila (už zjedená)'] },
      { to: 'ke',
        say: "Hi, sweetie! It's Granny. I'm in the second biggest city in Slovakia. It's in the east, south of Prešov. It's famous for its cathedral. Come for lunch!",
        story: [
          ['Košice is a big city. The main street is long, and it is always crowded.', 'Košice sú veľké mesto. Hlavná ulica je dlhá a vždy plná ľudí.'],
          ['The cathedral is very old and very beautiful.', 'Katedrála je veľmi stará a veľmi krásna.'],
          ["Granny is waiting with soup, dumplings and three cakes. «Eat!» she says. «You're too thin!»", 'Babka čaká s polievkou, knedľami a tromi koláčmi. „Jedz!" hovorí. „Si príliš chudý!"'],
        ],
        prize: ['🍰', 'tri koláče od babky (naraz)'] },
      { to: 'bb',
        say: "Good morning. This is Mrs Kováčová, your teacher. Our school trip is to a city in the centre of Slovakia. It's north-west of Lučenec and west of Poprad. Don't be late!",
        story: [
          ['Banská Bystrica has a big square with an old clock tower.', 'Banská Bystrica má veľké námestie so starou hodinovou vežou.'],
          ["The clock tower isn't straight. It looks a bit tired.", 'Hodinová veža nie je rovná. Vyzerá trochu unavene.'],
          ['«This trip is very interesting,» says Mrs Kováčová. Then she falls asleep on a bench.', '„Tento výlet je veľmi zaujímavý," hovorí pani Kováčová. Potom zaspí na lavičke.'],
        ],
        prize: ['🕰️', 'fotka so šikmou vežou'] },
      { to: 'ba',
        say: "Hi, it's Dad. Time to come home! Our city is the capital of Slovakia. It's in the south-west, on the Danube, near the border with Austria and Hungary. See you at the bus station!",
        story: [
          ["Bratislava is a big, busy city. It's noisy, but it's never boring.", 'Bratislava je veľké, rušné mesto. Je hlučné, ale nikdy nie nudné.'],
          ['There is a castle on a hill above the Danube.', 'Nad Dunajom je hrad na kopci.'],
          ['Dad is at the bus station with your cat. The cat is wearing your hat.', 'Ocko je na autobusovej stanici s tvojou mačkou. Mačka má na hlave tvoju čiapku.'],
        ],
        prize: ['🐱', 'mačka v tvojej čiapke'] },
    ],
  },

  // Opozitá: [slovo, opak, preklad]
  pairs: [
    ['boring', 'exciting', 'nudný – vzrušujúci'],
    ['crowded', 'empty', 'plný ľudí – prázdny'],
    ['dangerous', 'safe', 'nebezpečný – bezpečný'],
    ['modern', 'historic', 'moderný – historický'],
    ['noisy', 'quiet', 'hlučný – tichý'],
    ['polluted', 'clean', 'znečistený – čistý'],
    ['north', 'south', 'sever – juh'],
    ['east', 'west', 'východ – západ'],
    ['big', 'small', 'veľký – malý'],
  ],

  // Roztrieď (Vocabulary Bank, cvičenie 3): [slovo, skupina, preklad, ikona]
  sort: {
    bins: [
      { name: 'Religious buildings', sk: 'náboženské stavby', icon: '🛐' },
      { name: 'Places where you can buy things', sk: 'kde sa dá nakupovať', icon: '🛍️' },
      { name: 'Historic buildings and monuments', sk: 'historické budovy a pamiatky', icon: '🏰' },
      { name: 'Others', sk: 'ostatné', icon: '🧭' },
    ],
    items: [
      ['cathedral', 0, 'katedrála', '⛪'],
      ['church', 0, 'kostol', '⛪'],
      ['mosque', 0, 'mešita', '🕌'],
      ['synagogue', 0, 'synagóga', '🕍'],
      ['temple', 0, 'chrám', '🛕'],
      ['department store', 1, 'obchodný dom', '🏬'],
      ['market', 1, 'trh', '🧺'],
      ['shopping centre', 1, 'nákupné centrum (mall)', '🛒'],
      ['castle', 2, 'hrad', '🏰'],
      ['city walls', 2, 'mestské hradby', '🧱'],
      ['palace', 2, 'palác', '👑'],
      ['ruins', 2, 'ruiny, zrúcanina', '🏚️'],
      ['statue', 2, 'socha', '🗽'],
      ['town hall', 2, 'radnica', '🏛️'],
      ['bridge', 3, 'most', '🌉'],
      ['canal', 3, 'kanál (vodný)', '🛶'],
      ['harbour', 3, 'prístav', '⚓'],
      ['hill', 3, 'kopec', '⛰️'],
      ['lake', 3, 'jazero', '🏞️'],
      ['museum', 3, 'múzeum', '🖼️'],
    ],
  },

  // Spelling: w = slovo, sk = preklad
  spell: [
    { w: 'castle', sk: 'hrad' },
    { w: 'cathedral', sk: 'katedrála' },
    { w: 'church', sk: 'kostol' },
    { w: 'bridge', sk: 'most' },
    { w: 'market', sk: 'trh' },
    { w: 'museum', sk: 'múzeum' },
    { w: 'palace', sk: 'palác' },
    { w: 'statue', sk: 'socha' },
    { w: 'harbour', sk: 'prístav' },
    { w: 'town hall', sk: 'radnica' },
    { w: 'city walls', sk: 'mestské hradby' },
    { w: 'canal', sk: 'kanál (vodný)' },
    { w: 'department store', sk: 'obchodný dom' },
    { w: 'shopping centre', sk: 'nákupné centrum' },
    { w: 'hill', sk: 'kopec' },
    { w: 'lake', sk: 'jazero' },
    { w: 'mosque', sk: 'mešita' },
    { w: 'synagogue', sk: 'synagóga' },
    { w: 'temple', sk: 'chrám' },
    { w: 'ruins', sk: 'ruiny' },
    { w: 'crowded', sk: 'plný ľudí' },
    { w: 'dangerous', sk: 'nebezpečný' },
    { w: 'polluted', sk: 'znečistený' },
    { w: 'quiet', sk: 'tichý' },
    { w: 'historic', sk: 'historický' },
    { w: 'noisy', sk: 'hlučný' },
    { w: 'exciting', sk: 'vzrušujúci' },
    { w: 'north', sk: 'sever' },
    { w: 'south', sk: 'juh' },
    { w: 'east', sk: 'východ' },
    { w: 'west', sk: 'západ' },
  ],

  // Karty: s = veta s medzerou ___, o = možnosti (PRVÁ je správna), why = prečo, sk = preklad
  cards: [
    { s: 'Žilina is ___ of Košice.', o: ['west', 'east'],
      why: 'Žilina je na severozápade, Košice na východe Slovenska.', sk: 'Žilina je na západ od Košíc.' },
    { s: 'Bardejov is ___ of Prešov.', o: ['north', 'south'],
      why: 'Bardejov je bližšie k poľskej hranici, teda vyššie na mape.', sk: 'Bardejov je na sever od Prešova.' },
    { s: 'Trnava is ___ of Bratislava.', o: ['north-east', 'south-west'],
      why: 'Z Bratislavy do Trnavy ideš hore a doprava: na severovýchod.', sk: 'Trnava je na severovýchod od Bratislavy.' },
    { s: 'Košice is a city ___ Slovakia.', o: ['in the east of', 'east of'],
      why: 'Košice sú VO VNÚTRI Slovenska: in the east of Slovakia.', sk: 'Košice sú mesto na východe Slovenska.' },
    { s: 'Prešov is about 30 km ___ Košice.', o: ['north of', 'in the north of'],
      why: 'Prešov nie je vnútri Košíc, je od nich na sever: north of.', sk: 'Prešov je asi 30 km na sever od Košíc.' },
    { s: 'Bratislava is ___ the Danube.', o: ['on', 'in'],
      why: 'Mesto pri rieke: on the river. Ako York is on the River Ouse.', sk: 'Bratislava leží na Dunaji.' },
    { s: 'There are too many people in the street. It\'s ___ .', o: ['crowded', 'empty'],
      why: 'Priveľa ľudí = crowded. Opak je empty.', sk: 'Na ulici je priveľa ľudí. Je preplnená.' },
    { s: 'The air is very dirty. The city is ___ .', o: ['polluted', 'clean'],
      why: 'Špinavý vzduch = polluted. Opak je clean.', sk: 'Vzduch je veľmi špinavý. Mesto je znečistené.' },
    { s: 'You can walk in the park at night. It\'s ___ .', o: ['safe', 'dangerous'],
      why: 'Keď sa nemusíš báť, je to safe. Opak je dangerous.', sk: 'V parku sa môžeš prechádzať aj v noci. Je to bezpečné.' },
    { s: 'Nothing happens in this town. It\'s ___ .', o: ['boring', 'exciting'],
      why: 'Nič sa nedeje = boring. Opak je exciting alebo interesting.', sk: 'V tomto meste sa nič nedeje. Je nudné.' },
    { s: 'All the buildings are new. It\'s a ___ city.', o: ['modern', 'historic'],
      why: 'Nové budovy = modern. Staré, so zaujímavou históriou = historic.', sk: 'Všetky budovy sú nové. Je to moderné mesto.' },
    { s: 'There are bars and clubs with loud music. It\'s ___ .', o: ['noisy', 'quiet'],
      why: 'Hlasná hudba = noisy. Opak je quiet.', sk: 'Sú tam bary a kluby s hlasnou hudbou. Je tam hlučno.' },
  ],

  // Skladačka: sk = zadanie, t = správna veta, x = dlaždice navyše, alt = iné správne poradie
  build: [
    { sk: 'Žilina je na západ od Košíc.', t: 'Žilina is west of Košice.', x: ['in'] },
    { sk: 'Košice sú na východe Slovenska.', t: 'Košice is in the east of Slovakia.', x: ['on'] },
    { sk: 'Bardejov je malé historické mesto.', t: 'Bardejov is a small historic town.', x: ['modern'] },
    { sk: 'Bratislava leží na Dunaji.', t: 'Bratislava is on the Danube.', x: ['in'] },
    { sk: 'Je známe svojím hradom.', t: "It's famous for its castle.", x: ['of'] },
    { sk: 'Prešov je asi 30 kilometrov na sever od Košíc.', t: 'Prešov is about 30 kilometres north of Košice.', x: ['in'] },
  ],
};
