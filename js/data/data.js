function makeUrl(text, url) {
  return "<a href=\"" + url + "\">" + text + "</a>";
}

//
// BASICS
//

basics = {
    name: "Joaquín Ruales",
    label: "Columbia University Computer Science M.S. student",
    picture: "img/me.png",
    email: "j.ruales [at] columbia.edu",
    summary: "I'm a software engineer and mathematician interested in web application development, machine learning, computer graphics, and applied math (in particular: calculus, linear algebra, Bayesian statistics, modeling/simulation).",
    phone: "",
    website: "",
    location: {
      address: "",
      postalCode: "",
      city: "Greater New York City Area",
      countryCode: "US",
      region: ""
    },
    profiles: []
}

//
// TIME EVENTS
//

timeEvents = [
  {
    timeframe: "Summer 2015",
    title: "Google Software Engineering Intern",
    description: null
  },
  {
    timeframe: "Fall 2014 - Fall 2015",
    title: "Columbia University Computer Science M.S.",
    description: "Computer Vision and Graphics Track."
  },
  {
    timeframe: "Summer 2014",
    title: "Google Software Engineering Intern",
    description: null
  },
  {
    timeframe: "Fall 2012 - Spring 2014",
    title: "Columbia University Computer Science B.S.",
    description: "Artificial Intelligence Track."
  },
  {
    timeframe: "Fall 2009 - Spring 2012",
    title: "Oberlin College Mathematics B.A.",
    description: "3-2 Engineering Program with Columbia University."
  }
]

//
// SELECTED COURSEWORK
//

selectedCoursework = [

];

//
// PREPRINTS
//

preprints = [
  {
    title: "On left-orderability and double branched covers of Kanenobu's knots",
    authors: "F. Doria Medina, M. Jackson, J. Ruales, and H. Zeilberger",
    image:"kanenobu.jpg",
    abstract: "We show that the fundamental group of the double branched cover of an infinite family of homologically thin, non-quasi-alternating knots is not left-orderable, giving further support for a conjecture of Boyer, Gordon, and Watson that an irreducible rational homology 3-sphere is an L-space if and only if its fundamental group is not left-orderable.",
    journal: "ArXiv",
    website: "http://arxiv.org/abs/1310.1877"
  }
];

petProjects = [
  {
    title: "EcuaCines",
    link: "http://ecuacines.com/",
    image: "ecuacines.png",
    description: "Displays showtimes for all major movie theaters in Quito, Ecuador. Showtime information collected automatically from each movie theater's website.",
    year: "2013",
    technologies: "HTML + CSS + JS + PHP + MySQL"
  },
  {
    title: "400pixels.net",
    link: "http://400pixels.net/",
    image: "400pixels.png",
    description: "Pixel art web app",
    year: "2010",
    technologies: "AS 3.0 + PHP + MySQL"
  }
]

//
// WORK
//

work: [
  {
    company: "Google",
    position: "Software Engineering Intern",
    website: "https://www.google.com/",
    startDate: "2015-06-01",
    endData: "2015-09-04"
  },
  {
    company: "Google",
    position: "Software Engineering Intern",
    website: "https://www.google.com/",
    startDate: "2014-06",
    endData: "2014-08"
  },
  {
    company: "Columbia University in the City of New York",
    position: "Research Assistant",
    website: "http://www.columbia.edu/",
    startDate: "2014-06",
    endData: "2014-08"
  },
  {
    company: "Columbia University in the City of New York",
    position: "Library Website Developer/Designer",
    website: "http://www.columbia.edu/",
    startDate: "2014-06",
    endData: "2014-08"
  }
]

websites = [];

//
// CONTESTS
//

contests = [
  {
    name: "ACM-ICPC Regional Programming Contest, Greater New York Region",
    venue: "St. Joseph's College",
    location: "Patchogue, NY",
    date: "",
    honor: "4th Place",
    image:"acm.png",
    link: "http://acmgnyr.org/year2014/standings.shtml",
    description: "Represented Columbia University on a team of three that solved 8 out of the 9 problems."
  },
  {
    name: "HackMIT Hackathon",
    venue: "Massachusetts Institute of Technology",
    location: "Cambridge, MA",
    honor: "1st Place",
    image:"hackmit.png",
    description: "Our team of four programmed a head-movement-controlled web-messaging interface. I implemented the head tracking (in Flash) and integrated the real-time head position data with the user interface and database (HTML, JS, PHP, MySQL) that my teammates created. The user interface is now being used and improved upon by the Speak Your Mind Foundation."
  },
  {
    name: "Denison Programming Contest",
    venue: "Denison University",
    location: "Granville, OH",
    honor: "2nd Place",
    link: "http://personal.denison.edu/~lalla/DSPC/results10.html",
    description: "Represented Oberlin College on a team of three that solved 4 out of 6 ACM-ICPC-style problems in Java."
  }
]

//
// PROGRAMMING EXPERIMENTS
//

programmingExperiments = [
    {
    name: "2P Flappy Bird",
    dateWhenMade: "2014",
    link:"http://400pixels.net/flappy2p/",
    image:"flappy2p.png",
    mobileFriendly: false,
    description: "I reverse-engineered Flappy Bird and made a 2 player web version in Flash."
  },
  {
    name: "Fractal Flame Generator",
    dateWhenMade: "2012",
    // TODO(jruales): Make an HTML container for each SWF file
    link:"http://400pixels.net/isometric/flame.swf",
    image:"sierpinski1.png",
    // TODO(jruales): Hide Flash experiments from mobile users
    mobileFriendly: false,
    description: "This program uses <a target=\"_blank\" href=\"http://flam3.com/flame_draves.pdf\">Iterated function systems</a> to create a variety of fractals ranging from Sierpinski triangles to flame-like paintings, depending on the selected settings. Fractals are generated directly in your web browser."
  },
  {
    name: "Maze",
    dateWhenMade: "2006",
    link:"http://joaqo182.50webs.com/maze.html",
    image:"maze.png",
    mobileFriendly: false,
    description: "Test your reflexes and hand steadiness as you guide your mouse pointer through 12 labirinthine levels and one final speed challenge. Includes a level where your mouse pointer will have to escape being eaten by Pac-Man and two levels where your mouse pointer is invisible and you will have to be guided by a multitude of watching eyes. This was the first web game I programmed.",
    notesToSelf: "This email shows that the game was in fact made in 2006: https://mail.google.com/mail/u/0/?pli=1#search/maze/10e1a1226cd87249"
  }
]


context = {
  basics: basics,
  timeEvents: timeEvents,
  petProjects: petProjects,
  preprints: preprints,
  contests: contests,
  programmingExperiments: programmingExperiments
};
