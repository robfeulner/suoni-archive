const { v4: uuidv4 } = require("uuid");

const testingEvents = [
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
    ],
  },
];

module.exports = { testingEvents };
