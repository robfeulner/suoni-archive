const { LongWithoutOverridesClass } = require("bson");
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
    _id: 2007,
    year: 2007,
    events: [
      {
        _id: uuidv4(),
        name: "William Parker & Hamid Drake",
        date: "2007-06-06",
        venue: "La Sala Rossa",
      },
      {
        _id: uuidv4(),
        name: "Akron/Family",
        date: "2007-06-09",
        venue: "La Sala Rossa",
      },
      {
        _id: uuidv4(),
        name: "Halim El-Dabh",
        date: "2007-06-16",
        venue: "La Sala Rossa",
      },
      {
        _id: uuidv4(),
        name: "Felix Kubin",
        date: "2007-06-25",
        venue: "La Sala Rossa",
      },
    ],
  },
  {
    _id: 2008,
    year: 2008,
    events: [
      {
        _id: uuidv4(),
        name: "Colloquium on Improvisation",
        date: ["2008-06-21", "2007-08-22"],
        venue: "La Sala Rossa",
        description:
          "A McGill University and Suoni Per Il Popolo co-presentation. This year's theme: 'Text, Media, and Improvisation'. Featured speakers include: Roscoe Mitchell, George Lewis (AACM), Georgina Born (Henry Cow & founding member of F.I.G.), and Charity Chan.",
      },
      {
        _id: uuidv4(),
        name: "Popolo dans le parc: Fete Foraine",
        date: "2008-06-21",
        venue: "Lahaie Park",
        description:
          '"Saying Who We Are / Playing Who We Are": Young musicians from NDG play under the directive of Matana Roberts and Kalmunity Vibe Collective! DJs presented by The Goods (Jah Mikes, DJ Lexis, Tashish, DJ Huggs, and more).',
      },
    ],
  },
  {
    _id: 2009,
    year: 2009,
    events: [
      {
        _id: uuidv4(),
        name: "Improvising on the 12 Bar Blues Form with Dave Burrell",
        date: "2009-06-06",
        venue: "La Sala Rossa",
        description:
          "BYOI (Bring Your Own Instruments). The blues is at the heart of so much progressive libratory music, yet it is an often misunderstood genre. David Burrell will introduce students to the basic blues chord structure and how the supporting chords of a more sophisticated progress fit the overall theme. They will be taught how to voice chords and which notes are favourable or wrong, and why. David will discuss and construct good melody lines and how they work within the blues harmonic strain. Participants will have the opportunity to play examples on their instruments and/or the piano. This workshop will culiminate with a jam on some of the blues progressions discussed. This workshop will be lead by jazz piano legend Dave Burrell (who has played with Archie Shepp, Pharoah Sanders, Marion Brown, and David Murray.)",
      },
      {
        _id: uuidv4(),
        name: "Creative Improvising with Nicole Mitchell",
        date: "2009-06-20",
        venue: "Casa Del Popolo",
        description: `BYOI (Bring Your Own Instruments). Nicole Mitchell has been noted as "a compelling improviser of wit, determination, positivity, and tremendous talent... on her way to becoming one of the greatest living fluitists in jazz." Mitchell's compositions reach across sound worlds, integrating new ideas with moments in the legacy of jazz, gospel, pop, and African percussion to create a fascinating synthesis of postmodern jazz.`,
      },
      {
        _id: uuidv4(),
        name: "Deep Listening Workshop with Pauline Oliveros",
        date: "2009-06-23",
        venue: "La Sala Rossa",
        description: `Deep Listening, her lifetime practice is fundamental to her performing, composing, and teaching. It is a process that is informed by techniques that expand the range of audible forms avilable to one. Pauline serves as Distinguished Research Professor of Music at Rensselaer Polytechnic Institute (Troy, NY), Darius Milhaud artist-in-residence at Mills College (Oakland, CA), and president of Deep Listening Institute in Kingston, NY. This workshop is open to all, just bring your ears, mind, and spirit.`,
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
        description: `A question and answer period will follow the screening of Elaine and Basinki's short film "Melancholia".`,
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
