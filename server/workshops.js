const { v4: uuidv4 } = require("uuid");

const workshops = [
  {
    _id: 2006,
    year: 2006,
    events: [
      {
        _id: uuidv4(),
        name: "Sun Ra Arkestra",
        date: "2006-06-07",
        venue: "La Sala Rossa",
        description: "Bring your instruments / apportez vos instruments!",
      },
      {
        _id: uuidv4(),
        name: "Joe McPhee / Jon Heward",
        date: "2006-06-17",
        venue: "La Sala Rossa",
        description: "Bring your instruments / apportez vos instruments!",
      },
      {
        _id: uuidv4(),
        name: "Ken Vandermark / Paal Nilssen-Love",
        date: "2006-06-18",
        venue: "La Sala Rossa",
        description:
          "Ken & Paal will play, talk, and discuss. \n Ken & Paal vont jouer, parler et discuter.",
      },
    ],
  },
  {
    _id: 2010,
    year: 2010,
    events: [
      {
        _id: uuidv4(),
        name: "William Bansinski",
        date: "2010-06-14",
        venue: "La Sala Rossa",
        description:
          "A question and answer period will follow the screening of Elaine and Basinki's short film <i>Melancholia</i>.",
      },
      {
        _id: uuidv4(),
        name: "Matthew Shipp",
        date: "2010-06-15",
        venue: "La Sala Rossa",
        description:
          "This workshop will deal with the process of improvisation and the decisions, lifestyle and choices that go into preparing a musician for the adventure of trying to find something new from their instrument.",
      },
      {
        _id: uuidv4(),
        name: "Vandermark Five",
        date: "2010-06-16",
        venue: "La Sala Rossa",
        description:
          "A rare opportunity for listeners and musicians to attend an open workshop presenting the performance and improvising mehods of this long standing ensemble.",
      },
    ],
  },
];

module.exports = { workshops };
