const { v4: uuidv4 } = require("uuid");

const events = [
  {
    _id: 2006,
    year: 2006,
    events: [
      {
        _id: uuidv4(),
        artist: ["Triple Burner", "Glenn Jones"],
        date: "2006-06-01",
        venue: "Casa Del Popolo",
        price: "$6 adv / $8 door",
      },
      {
        _id: uuidv4(),
        artist: ["Narcy of Euphrates", "Syncop"],
        date: "2006-06-01",
        venue: "La Sala Rossa",
        price: "$8 adv / $10 door",
      },
      {
        _id: uuidv4(),
        artist: [
          "The Unireverse",
          "Eastern Stars",
          "The Perfect Dancers",
          "Natacha's Recording System",
        ],
        date: "2006-06-02",
        venue: "Casa Del Popolo",
        price: "$6",
      },
      {
        _id: uuidv4(),
        artist: ["Josephine Foster", "Diane Cluck", "White Flower"],
        date: "2006-06-02",
        venue: "La Sala Rossa",
        price: "$8 adv / $10 door",
      },
      {
        _id: uuidv4(),
        artist: ["Jack Rose", "Emerald Cloud Cobra", "Firewood for the Sun"],
        date: "2006-06-03",
        venue: "Casa Del Popolo",
        price: "$8 adv / $10 door",
      },
      {
        _id: uuidv4(),
        artist: ["Wharton Tiers", "Creeping Nobodies", "Man Man"],
        date: "2006-06-03",
        venue: "La Sala Rossa",
        price: "$10 adv / $12 door",
      },
      {
        _id: uuidv4(),
        artist: ["Plastic Crimewave Sound", "Mammatus", "Residual Echoes"],
        date: "2006-06-04",
        venue: "Casa Del Popolo",
        price: "$8 adv / $10 door",
      },
      {
        _id: uuidv4(),
        artist: ["Amir Amiri", "Hassan El Hadi"],
        date: "2006-06-04",
        venue: "La Sala Rossa",
        price: "$8 adv / $10 door",
      },
      {
        _id: uuidv4(),
        artist: ["Torngat & Drumheller"],
        date: "2006-06-05",
        venue: "La Sala Rossa",
        price: "$8 adv / $10 door",
      },
      {
        _id: uuidv4(),
        artist: ["Sun Ra Arkestra"],
        date: "2006-06-06",
        venue: "La Sala Rossa",
        price: "$22 adv / $25 door",
      },
      {
        _id: uuidv4(),
        artist: ["Le Suck Machine", "Franziska Baumann", "Rabi Rabi"],
        date: "2006-06-07",
        venue: "Casa Del Popolo",
        price: "$7",
      },
      {
        _id: uuidv4(),
        artist: ["Dungen", "Trailer"],
        date: "2006-06-07",
        venue: "La Sala Rossa",
        price: "$15",
      },
      {
        _id: uuidv4(),
        artist: ["Awesome", "I Have Eaten the City"],
        date: "2006-06-08",
        venue: "Casa Del Popolo",
        price: "$6 adv / $8 door",
      },
      {
        _id: uuidv4(),
        artist: [
          "Lal",
          "Moonstar",
          "Soultribe",
          "Tony Ezzy",
          "More or Les",
          "DJs Andy Williams & Dialect",
        ],
        date: "2006-06-08",
        venue: "La Sala Rossa",
        price: "$10 adv / $12 door",
      },
      {
        _id: uuidv4(),
        artist: [
          "Avia Gardner",
          "Desormais",
          "Koen Holtlamp",
          "Vitaminsforyou",
        ],
        date: "2006-06-09",
        venue: "Casa Del Popolo",
        price: "$6 adv / $8 door",
      },
      {
        _id: uuidv4(),
        artist: ["Pink Mountaintops", "The Black Angels"],
        date: "2006-06-09",
        venue: "La Sala Rossa",
        price: "$12",
      },
      {
        _id: uuidv4(),
        artist: ["Think About Life", "Menace Ruine"],
        date: "2006-06-10",
        venue: "Casa Del Popolo",
        price: "$6 adv / $7 door",
      },
      {
        _id: uuidv4(),
        artist: ["Bardo Pond", "Kohoutek", "Hylozoists"],
        date: "2006-06-10",
        venue: "La Sala Rossa",
        price: "$10 adv / $12 door",
      },
      {
        _id: uuidv4(),
        artist: ["FReC TRIO"],
        date: "2006-06-11",
        venue: "Casa Del Popolo",
        price: "$6 adv / $8 door",
      },
      {
        _id: uuidv4(),
        artist: [
          "Jason Sharp & Mobius",
          "Michael Blake",
          "Ark of Infinity",
          "MM3",
        ],
        date: "2006-06-11",
        venue: "La Sala Rossa",
        price: "$8 adv / $10 door",
      },
      {
        _id: uuidv4(),
        artist: ["Charlemagne Palestine"],
        date: "2006-06-12",
        venue: "Eglise Saint-Jean Baptiste",
        price: "$22 adv / $25 door",
      },
      {
        _id: uuidv4(),
        artist: ["Réné Lussier's Prix Du Bonheur"],
        date: "2006-06-13",
        venue: "La Sala Rossa",
        price: "$8 adv / $10 door",
      },
      {
        _id: uuidv4(),
        artist: ["Joe Mcphee & Dominic Duval"],
        date: "2006-06-14",
        venue: "Casa Del Popolo",
        price: "$10 adv / $12 door",
      },
      {
        _id: uuidv4(),
        artist: [
          "Thee Silver Mt. Zion Memorial Orchestra & Tra-La-La Band",
          "Jerusalem in My Heart",
        ],
        date: "2006-06-14",
        venue: "La Sala Rossa",
        price: "$8",
      },
      {
        _id: uuidv4(),
        artist: ["Trio X"],
        date: "2006-06-15",
        venue: "Casa Del Popolo",
        price: "$13 adv / $15 door",
      },
      {
        _id: uuidv4(),
        artist: ["Don Caballero", "Scrambled Eggs"],
        date: "2006-06-15",
        venue: "La Sala Rossa",
        price: "$10 adv / $12 door",
      },
      {
        _id: uuidv4(),
        artist: ["Dragons 1976"],
        date: "2006-06-16",
        venue: "Casa Del Popolo",
        price: "$8 adv / $10 door",
      },
      {
        _id: uuidv4(),
        artist: ["AIDS Wolf", "USAISAMONSTER", "Yip Yip", "Nervous Sleepers"],
        date: "2006-06-16",
        venue: "La Sala Rossa",
        price: "$8 adv / $10 door",
      },
      {
        _id: uuidv4(),
        artist: ["CINC."],
        date: "2006-06-17",
        venue: "Casa Del Popolo",
        price: "$13 adv / $15 door",
      },
      {
        _id: uuidv4(),
        artist: [
          "Pengo",
          "Tetuzi Akiyama",
          "Crank Sturgeon",
          "Gastric Female Reflex",
        ],
        date: "2006-06-17",
        venue: "La Sala Rossa",
        price: "$10 adv / $12 door",
      },
      {
        _id: uuidv4(),
        artist: ["Mouthus", "Mucid Cuspidor"],
        date: "2006-06-18",
        venue: "Casa Del Popolo",
        price: "$8 adv / $10 door",
      },
      {
        _id: uuidv4(),
        artist: ["The Thing feat. Joe McPhee"],
        date: "2006-06-18",
        venue: "La Sala Rossa",
        price: "$13 adv / $15 door",
      },
      {
        _id: uuidv4(),
        artist: ["Fire Into Music"],
        date: "2006-06-19",
        venue: "La Sala Rossa",
        price: "$18 adv / $20 door",
      },
      {
        _id: uuidv4(),
        artist: ["Free Music Ensemble"],
        date: "2006-06-20",
        venue: "La Sala Rossa",
        price: "$13 adv / $15 door",
      },
      {
        _id: uuidv4(),
        artist: ["Klaxon Guele"],
        date: "2006-06-21",
        venue: "Casa Del Popolo",
        price: "$6",
      },
      {
        _id: uuidv4(),
        artist: [
          "Marianne Trudel & Pierre-Yves Martel & The Murray Street Band",
        ],
        date: "2006-06-21",
        venue: "La Sala Rossa",
        price: "$6 adv / $8 door",
      },
      {
        _id: uuidv4(),
        artist: ["Trio Derome-Guilbault-Tanguay"],
        date: "2006-06-22",
        venue: "Casa Del Popolo",
        price: "$6 adv / $8 door",
      },
      {
        _id: uuidv4(),
        artist: ["Chicarones", "DJ Skratch Bastid"],
        date: "2006-06-22",
        venue: "La Sala Rossa",
        price: "$8 adv / $10 door",
      },
      {
        _id: uuidv4(),
        artist: ["Thomas Ankersmit", "Intercom", "Ste. Sophie", "Minibloc"],
        date: "2006-06-02",
        venue: "Casa Del Popolo",
        price: "$8 adv / $10 door",
      },
      {
        _id: uuidv4(),
        artist: ["Excepter", "Feu Thérèse", "Thames"],
        date: "2006-06-23",
        venue: "La Sala Rossa",
        price: "$7",
      },
      {
        _id: uuidv4(),
        artist: ["Diebold", "Yomul Yuk", "Lullabye Arkestra"],
        date: "2006-06-24",
        venue: "Casa Del Popolo",
        price: "$6",
      },
      {
        _id: uuidv4(),
        artist: ["The Goods feat. Follow, Follow"],
        date: "2006-06-24",
        venue: "La Sala Rossa",
        price: "$10",
      },
      {
        _id: uuidv4(),
        artist: ["Black Ox Orkestar"],
        date: "2006-06-25",
        venue: "La Sala Rossa",
        price: "$8 adv / $10 door",
      },
    ],
  },
  {
    _id: 2007,
    year: 2007,
    events: [
      {
        _id: uuidv4(),
        artist: ["Graveyards", "Le Sentier Lumineux", "Tandoori Dream"],
        date: "2007-06-01",
        venue: "Casa Del Popolo",
        price: "$8 adv / $10 door",
      },
      {
        _id: uuidv4(),
        artist: ["Fucking Champs", "Birds of Avalon", "Red Fang"],
        date: "2007-06-01",
        venue: "La Sala Rossa",
        price: "$8 adv / $10 door",
      },
      {
        _id: uuidv4(),
        artist: ["Demons", "The Haunting", "Thames"],
        date: "2007-06-02",
        venue: "Casa Del Popolo",
        price: "$8 adv / $10 door",
      },
      {
        _id: uuidv4(),
        artist: [
          "Sunburned Hand of the Man",
          "The Michael Flower Band",
          "MV & EE with The Bummer Road",
        ],
        date: "2007-06-02",
        venue: "La Sala Rossa",
        price: "$10 adv / $12 door",
      },
      {
        _id: uuidv4(),
        artist: [
          "Wapstan / Kolumkilli",
          "Sunken Skulls / Blake Hargreaves",
          "Disguises",
          "Women in Tragedy",
        ],
        date: "2007-06-03",
        venue: "Casa Del Popolo",
        price: "$5",
      },
      {
        _id: uuidv4(),
        artist: ["The Sea and Cake", "Zincs"],
        date: "2007-06-03",
        venue: "La Sala Rossa",
        price: "$20",
      },
      {
        _id: uuidv4(),
        artist: ["Marc Ribot Solo Guitar"],
        date: "2007-06-04",
        venue: "La Sala Rossa",
        price: "$18 adv / $20 door",
      },
      {
        _id: uuidv4(),
        artist: ["Rob Brown Quartet"],
        date: "2007-06-05",
        venue: "La Sala Rossa",
        price: "$20 adv / $22 door",
      },
      {
        _id: uuidv4(),
        artist: ["Christina Carter", "Tom Carter", "Elizabeth Anka Vajagic"],
        date: "2007-06-06",
        venue: "Casa Del Popolo",
        price: "$8 adv / $10 door",
      },
      {
        _id: uuidv4(),
        artist: ["William Parker & Hamid Drake"],
        date: "2007-06-06",
        venue: "La Sala Rossa",
        price: "$18 adv / $20 door",
      },
      {
        _id: uuidv4(),
        artist: ["Charalambides", "GHQ", "Triceratreetops"],
        date: "2007-06-07",
        venue: "Casa Del Popolo",
        price: "$10 adv / $12 door",
      },
    ],
  },
  {
    _id: 2008,
    year: 2008,
    events: [
      {
        _id: uuidv4(),
        artist: ["Glenn Hall", "William Hooker", "Dominique Duval"],
        date: "2008-06-01",
        venue: "Casa Del Popolo",
        price: "$13 adv / $15 door",
      },
      {
        _id: uuidv4(),
        artist: ["Excepter", "Sam Shalabi", "Intercom", "All Dressed Trio"],
        date: "2008-06-01",
        venue: "La Sala Rossa",
        price: "$8 adv / $10 door",
      },
      {
        _id: uuidv4(),
        artist: ["Loren Connors", "Harris Newman"],
        date: "2008-06-02",
        venue: "Casa Del Popolo",
        price: "$13 adv / $15 door",
      },
      {
        _id: uuidv4(),
        artist: ["Quatuor Bozzini", "Malcolm Goldstein"],
        date: "2008-06-03",
        venue: "La Sala Rossa",
        price: "$15 adv / $17 door",
      },
      {
        _id: uuidv4(),
        artist: [
          "Jozef Van Wissem",
          "Spires That in the Sunset Rise",
          "L'ens Kesdjan",
        ],
        date: "2008-06-04",
        venue: "Casa Del Popolo",
        price: "$8 adv / $10 door",
      },
      {
        _id: uuidv4(),
        artist: ["Rozwell Rudd", "Mark Dresser"],
        date: "2008-06-04",
        venue: "La Sala Rossa",
        price: "$23 adv / $25 door",
      },
      {
        _id: uuidv4(),
        artist: ["The Luyas"],
        date: "2008-06-05",
        venue: "Casa Del Popolo",
        price: "$7",
      },
      {
        _id: uuidv4(),
        artist: ["Hard Cell"],
        date: "2008-06-05",
        venue: "La Sala Rossa",
        price: "$13 adv / $15 door",
      },
      {
        _id: uuidv4(),
        artist: [
          "Squintfucker Press presents: Cristof Mignone, Alexandre St-Onge, Jonathan Parant, Simon Brown, Martine H. Crispo, and Jacob Chelkowski",
        ],
        date: "2008-06-06",
        venue: "Casa Del Popolo",
        price: "$7",
      },
      {
        _id: uuidv4(),
        artist: ["Grant Hart", "Greg Macpherson"],
        date: "2008-06-06",
        venue: "La Sala Rossa",
        price: "$10 adv / $12 door",
      },
      {
        _id: uuidv4(),
        artist: ["Styrofoam", "Broken Spindles"],
        date: "2008-06-07",
        venue: "Casa Del Popolo",
        price: "$10 adv / $12 door",
      },
    ],
  },
  {
    _id: 2009,
    year: 2009,
    events: [
      {
        _id: uuidv4(),
        artist: ["TV On the Radio", "Dirty Projectors"],
        date: "2009-06-03",
        venue: "Metropolis",
        price: "$27",
      },
      {
        _id: uuidv4(),
        artist: ["Paul Metzger", "Elaine Evans", "Electric Kesdjan Ensemble"],
        date: "2009-06-05",
        venue: "Centre Gallego",
        price: "$8 adv / $10 door",
      },
      {
        _id: uuidv4(),
        artist: ["Pas Chic Chic", "Valleys", "Bernardino Femminielli"],
        date: "2009-06-05",
        venue: "La Sala Rossa",
        price: "$10 adv / $12 door",
      },
      {
        _id: uuidv4(),
        artist: ["Dave Burrell", "William Parker & Mike Wimberly"],
        date: "2009-06-06",
        venue: "La Sala Rossa",
        price: "$23 adv / $25 door",
      },
      {
        _id: uuidv4(),
        artist: ["ISIS", "Pelican", "Tombs"],
        date: "2009-06-06",
        venue: "Le National",
        price: "$20",
      },
      {
        _id: uuidv4(),
        artist: ["Gerard Van Herk", "Bloodshot Bill", "Skip Jensen"],
        date: "2009-06-07",
        venue: "Divan Orange",
        price: "$10 adv / $12 door",
      },
      {
        _id: uuidv4(),
        artist: ["Esmerine", "Jean the Hatchet", "Colin Stetson"],
        date: "2009-06-07",
        venue: "La Sala Rossa",
        price: "$8 adv / $10 door",
      },
      {
        _id: uuidv4(),
        artist: ["Ignatz", "Harris Newman"],
        date: "2009-06-08",
        venue: "La Sala Rossa",
        price: "$8 adv / $10 door",
      },
      {
        _id: uuidv4(),
        artist: ["Joe Lally", "Glorytellers", "Helen Money"],
        date: "2009-06-08",
        venue: "Divan Orange",
        price: "$10 adv / $12 door",
      },
      {
        _id: uuidv4(),
        artist: ["Ensemble Supermusique", "Mankind"],
        date: "2009-06-09",
        venue: "La Sala Rossa",
        price: "$10",
      },
      {
        _id: uuidv4(),
        artist: ["Fred Lonberg-Holm's Valentine Trio"],
        date: "2009-06-10",
        venue: "Divan Orange",
        price: "$10 adv / $12 door",
      },
    ],
  },
  {
    _id: 2010,
    year: 2010,
    events: [
      {
        _id: uuidv4(),
        artist: ["Mecha Fixes Clock", "Jean René"],
        date: "2010-06-06",
        venue: "Casa Del Popolo",
        price: "$8",
      },
      {
        _id: uuidv4(),
        artist: ["Clues", "Hrsta", "Elizabeth Anka-Vajagic", "Elfin Saddle"],
        date: "2010-06-06",
        venue: "La Sala Rossa",
        price: "$8 adv / $10 door",
      },
      {
        _id: uuidv4(),
        artist: [
          'Format Fucker w/ Bonaparte "Bobo" Boutin',
          "Bermuda Triangula",
          "Dominique Sirois & Alain Lefevre: Rituels Coporatifs",
          "Jonathan Parant",
        ],
        date: "2010-06-07",
        venue: "Casa Del Popolo",
        price: "$8 adv / $10 door",
      },
      {
        _id: uuidv4(),
        artist: ["Nive Nielsen & The Deer Children", "Nick Kuepfer"],
        date: "2010-06-07",
        venue: "La Sala Rossa",
        price: "$13 adv / $15 door",
      },
      {
        _id: uuidv4(),
        artist: ["Grouper", "Grimes", "THISQUIETARMY"],
        date: "2010-06-08",
        venue: "Casa Del Popolo",
        price: "$10 adv / $12 door",
      },

      {
        _id: uuidv4(),
        artist: ["NTSC", "Didi Bruckmayr", "Dieb 13 & Martin Tétreault"],
        date: "2010-06-08",
        venue: "La Sala Rossa",
        price: "$8 adv / $10 door",
      },
      {
        _id: uuidv4(),
        artist: ["AIDS Wolf", "Pocahaunted", "Rape Faction"],
        date: "2010-06-09",
        venue: "Casa Del Popolo",
        price: "$12",
      },
      {
        _id: uuidv4(),
        artist: [
          "Radian",
          "Christof Kurzmann & Michaela Grill",
          "Didi Bruckmayr & Hyena Hive",
          "Martin Brandlmayr & Christof Kurzmann",
        ],
        date: "2010-06-09",
        venue: "La Sala Rossa",
        price: "$13 adv / $15 door",
      },
      {
        _id: uuidv4(),
        artist: ["Emeralds", "Moth Cock", "Drainolith", "Dreamcatcher"],
        date: "2010-06-10",
        venue: "Casa Del Popolo",
        price: "$10 adv / $12 door",
      },
      {
        _id: uuidv4(),
        artist: ["Trio Kidd Jordan, Hamid Drake & William Parker"],
        date: "2010-06-10",
        venue: "La Sala Rossa",
        price: "$23 adv / $25 door",
      },
      {
        _id: uuidv4(),
        artist: [
          "Automelodi",
          "Death Domain",
          "The Pink Noise",
          "Xeno & Oaklander",
        ],
        date: "2010-06-11",
        venue: "Casa Del Popolo",
        price: "$8 adv / $10 door",
      },
      {
        _id: uuidv4(),
        artist: [
          "No-Neck Blues Band",
          "Stellar Om Source",
          "Gavin John Sheehan and Identity Protest Unit II",
        ],
        date: "2010-06-11",
        venue: "La Sala Rossa",
        price: "$13 adv / $15 door",
      },
      {
        _id: uuidv4(),
        artist: ["Oneida", "U.S.A. Out of Vietnam"],
        date: "2010-06-12",
        venue: "Casa Del Popolo",
        price: "$13 adv / $15 door",
      },
      {
        _id: uuidv4(),
        artist: [
          "Hair Police",
          "Burning Star Core",
          "Noveller",
          "Oneohtrix Point Never",
          "No Fun Acid",
          "Le Révélateur",
        ],
        date: "2010-06-12",
        venue: "La Sala Rossa",
        price: "$13 adv / $15 door",
      },
      {
        _id: uuidv4(),
        artist: ["tUnE YaRdS", "Katie Stelmanis"],
        date: "2010-06-12",
        venue: "Il Motore",
        price: "$12 adv / $15 door",
      },
      {
        _id: uuidv4(),
        artist: ["Fratelli D'Italia", "Guh"],
        date: "2010-06-13",
        venue: "Casa Del Popolo",
        price: "$8",
      },
      {
        _id: uuidv4(),
        artist: ["William Basinski", "Expo 70", "Discipline X"],
        date: "2010-06-13",
        venue: "La Sala Rossa",
        price: "$15 adv / $18 door",
      },
      {
        _id: uuidv4(),
        artist: [
          "Ghédalia Tazartes",
          "The Flaming Rays of the Sun",
          "Ghost's of Gazals",
        ],
        date: "2010-06-14",
        venue: "Casa Del Popolo",
        price: "$10 adv / $12 door",
      },
      {
        _id: uuidv4(),
        artist: ["Trio Matthew Ship w/ Whit Dickey & Mike Bisio"],
        date: "2010-06-14",
        venue: "La Sala Rossa",
        price: "$15 adv / $18 door",
      },
      {
        _id: uuidv4(),
        artist: ["The Frame Quartet"],
        date: "2010-06-15",
        venue: "Casa Del Popolo",
        price: "$15 adv / $17 door",
      },
      {
        _id: uuidv4(),
        artist: ["Natura Sonoris", "Steve Bates", "Joda Clement"],
        date: "2010-06-15",
        venue: "La Sala Rossa",
        price: "$10 adv / $12 door",
      },
      {
        _id: uuidv4(),
        artist: ["Julia Kent", "Rebecca Foon", "Sarah Pagé"],
        date: "2010-06-16",
        venue: "Casa Del Popolo",
        price: "$10 adv / $12 door",
      },
      {
        _id: uuidv4(),
        artist: ["The Vandermark 5"],
        date: "2010-06-16",
        venue: "La Sala Rossa",
        price: "$18 adv / $20 door",
      },
      {
        _id: uuidv4(),
        artist: ["DM Smith", "Silje Nes", "Inlets"],
        date: "2010-06-17",
        venue: "Casa Del Popolo",
        price: "$10 adv / $12 door",
      },
      {
        _id: uuidv4(),
        artist: ["Reigning Sound", "The A-Bones", "Bloodshot Bill"],
        date: "2010-06-17",
        venue: "La Sala Rossa",
        price: "$15 adv / $18 door",
      },
      {
        _id: uuidv4(),
        artist: ["Frog Eyes", "Pearly Gate Music"],
        date: "2010-06-17",
        venue: "Il Motore",
        price: "$15",
      },
      {
        _id: uuidv4(),
        artist: ["Pengo", "Disguises", "Bernardino Femminielli"],
        date: "2010-06-18",
        venue: "Casa Del Popolo",
        price: "$10 adv / $12 door",
      },
      {
        _id: uuidv4(),
        artist: [
          "HEALTH",
          "Quintron & Miss Pussycat",
          "Indian Jewelry",
          "Jeff the Brotherhood",
          "Gold Panda",
        ],
        date: "2010-06-18",
        venue: "La Sala Rossa",
        price: "$15 adv / $18 door",
      },
      {
        _id: uuidv4(),
        artist: [
          "Quartet Evan Parker, Gerd Dudek, Axel Dörner, & Christof Thewes",
          "Henrik Walsdorff, Johannes Bauer, Jean-Luc Cappozzo, & Paul Lovens",
        ],
        date: "2010-06-19",
        venue: "Casa Del Popolo",
        price: "$13 adv / $15 door",
      },
      {
        _id: uuidv4(),
        artist: ["Meow Mix featuring Benni E", "Clara Furey & Jackie Gallant"],
        date: "2010-06-19",
        venue: "La Sala Rossa",
        price: "$10 adv / $12 door",
      },
      {
        _id: uuidv4(),
        artist: ["Talibam!", "Tonstartssbandht", "Panopticon Eyelids"],
        date: "2010-06-20",
        venue: "Casa Del Popolo",
        price: "$10 adv / $12 door",
      },
      {
        _id: uuidv4(),
        artist: ["Globe Unity Orchestra"],
        date: "2010-06-20",
        venue: "La Sala Rossa",
        price: "$25 adv / $28 door",
      },
      {
        _id: uuidv4(),
        artist: ["Wavves", "Cloud Nothings"],
        date: "2010-06-20",
        venue: "Il Motore",
        price: "$13 adv / $15 door",
      },
      {
        _id: uuidv4(),
        artist: ["Alexander Von Schlippenbach Trio"],
        date: "2010-06-21",
        venue: "Casa Del Popolo",
        price: "$13 adv / $15 door",
      },
      {
        _id: uuidv4(),
        artist: ["Where the River Got the Water"],
        date: "2010-06-21",
        venue: "La Sala Rossa",
        price: "$15",
      },
      {
        _id: uuidv4(),
        artist: ["Aki Onda", "Nimalan Yoganathan", "Leon Lo"],
        date: "2010-06-22",
        venue: "Casa Del Popolo",
        price: "$10 adv / $12 door",
      },
      {
        _id: uuidv4(),
        artist: ["Variations: Quatuor Bozzini & Benoit Delbeq"],
        date: "2010-06-22",
        venue: "La Sala Rossa",
        price: "$15 adv / $17 door",
      },
      {
        _id: uuidv4(),
        artist: ["Ted Leo & The Pharmacists", "Screaming Females"],
        date: "2010-06-22",
        venue: "Il Motore",
        price: "$15",
      },
      {
        _id: uuidv4(),
        artist: ["Eric Boeren 4tet"],
        date: "2010-06-23",
        venue: "Casa Del Popolo",
        price: "$18 adv / $20 door",
      },
      {
        _id: uuidv4(),
        artist: [
          "Lopin' Around Thru the Cosmos: An Evening of Judee Sill's Music",
          "Kath Bloom",
        ],
        date: "2010-06-23",
        venue: "La Sala Rossa",
        price: "$13 adv / $15 door",
      },
      {
        _id: uuidv4(),
        artist: ["ISIS", "Cave In"],
        date: "2010-06-23",
        venue: "Club Soda",
        price: "$20 adv / $22 door",
      },
      {
        _id: uuidv4(),
        artist: ["Dom Servini"],
        date: "2010-06-26",
        venue: "La Sala Rossa",
        price: "$12",
      },
    ],
  },
];

module.exports = { events };
