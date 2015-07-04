function makeUrl(text, url) {
  return "<a href=\"" + url + "\">" + text + "</a>";
}

//
// BASICS
//

basics = {
    name: "Joaquín Ruales",
    label: "Columbia University Computer Science M.S. student",
    picture: "square_me3.jpg",
    email: "jar2262 [at] columbia [dot] edu",
    summary: "Hi, I'm a software engineer and mathematician interested in machine learning, computer vision, computer graphics, web application development, and applied math.",
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
// PREPRINTS
//

preprints = [
  {
    title: "On left-orderability and double branched covers of Kanenobu's knots",
    authors: "F. Doria Medina, M. Jackson, J. Ruales, and H. Zeilberger",
    image:"kanenobu.jpg",
    abstract: "We show that the fundamental group of the double branched cover of an infinite family of homologically thin, non-quasi-alternating knots is not left-orderable, giving further support for a conjecture of Boyer, Gordon, and Watson that an irreducible rational homology 3-sphere is an L-space if and only if its fundamental group is not left-orderable.",
    journal: "ArXiv",
    link: "http://arxiv.org/abs/1310.1877"
  }
];

//
// PET PROJECTS
//

petProjects = [
  {
    title: "EcuaCines",
    link: "http://ecuacines.com/",
    image: "ecuacines.png",
    mobileFriendly: true,
    mobileFirst: true,
    description: "Displays showtimes for all major movie theaters in Quito, Ecuador. Showtime information collected automatically from each movie theater's website.",
    year: 2013,
    technologies: "HTML + CSS + JS + PHP + MySQL"
  },
  {
    title: "400 pixels",
    link: "http://400pixels.net/",
    image: "400pixels.png",
    mobileFriendly: false,
    mobileFirst: false, 
    description: "Pixel art web app.",
    year: 2010,
    technologies: "AS 3.0 + PHP + MySQL"
  }
]

//
// BUILT WEBSITES
//

builtWebsites = [
  {
    title: "Hostal Vista Amazonas",
    link: "http://vistaamazonas.com/",
    image: null,
    mobileFriendly: true,
    mobileFirst: false,
    description: "Multilingual website for a hostal in Ecuador.",
    dateYear: 2012,
    technologies: "HTML + CSS + JS + PHP"
  },
  {
    title: "Andrew J. Churchill's Portfolio Website",
    link: "http://400pixels.net/churchill/",
    image: null,
    mobileFriendly: false,
    mobileFirst: false,
    description: "Website for a music composer.",
    dateYear: null,
    technologies: "AS 3.0"
  },
  {
    title: "Oberlin College Library Website",
    link: "http://www.oberlin.edu/library/",
    image: null,
    mobileFriendly: true,
    mobileFirst: false,
    description: "Rebuilt the library website's main pages as part of the library web team. Replaced outdated code libraries and coding standards and focused on making the site user-friendly and visually clean.",
    dateYear: 2009,
    technologies: null
  },
  {
    title: "Movimiento Verde Estudiantil",
    link: "http://movimiento-verde.50webs.com/",
    image: null,
    mobileFriendly: false,
    mobileFirst: false,
    description: "Website for a student recycling group organized by members of my high school.",
    dateYear: 2009,
    technologies: "AS 3.0 + PHP + MySQL"
  },
  {
    title: "Joaquín Ruales's Art Portfolio",
    link: "http://joaquin-ruales.50webs.com/",
    image: null,
    mobileFriendly: false,
    mobileFirst: false,
    description: "My art portfolio website up until 2008.",
    dateYear: 2008,
    technologies: "AS 3.0"
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
    dateMonth: 11,
    dateYear: 2014,
    honor: "4th Place",
    image:"acm.png",
    link: "http://acmgnyr.org/year2014/standings.shtml",
    description: "Represented Columbia University on a team of three that solved 8 out of the 9 problems."
  },
  {
    name: "HackMIT Hackathon",
    venue: "Massachusetts Institute of Technology",
    location: "Cambridge, MA",
    dateMonth: 2,
    dateYear: 2013,
    honor: "1st Place and \"Most likely to become a real product\"",
    image: "hackmit.png",
    link: "https://www.facebook.com/events/295683690535160/",
    link2: "https://twitter.com/dff/status/298218271117803520",
    description: "Our team of four programmed a head-movement-controlled web-messaging interface. I implemented the head tracking (in Flash) and integrated the real-time head position data with the user interface and database (HTML, JS, PHP, MySQL) that my teammates created. The user interface is now being used and improved upon by the Speak Your Mind Foundation."
  },
  {
    name: "Denison Programming Contest",
    venue: "Denison University",
    location: "Granville, OH",
    date: "Feb 2010",
    dateMonth: 2,
    dateYear: 2010,
    honor: "2nd Place",
    image: "denison.png",
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
    dateYear: "2014",
    link:"http://400pixels.net/flappy2p/",
    image:"flappy2p.png",
    mobileFriendly: false,
    mobileFirst: false,
    description: "A 2 player web version of the popular smartphone game."
  },
  {
    name: "Fractal Flame Generator",
    dateYear: "2012",
    // TODO(jruales): Make an HTML container for each SWF file
    link:"http://400pixels.net/isometric/flame.swf",
    image:"sierpinski1.png",
    // TODO(jruales): Hide Flash experiments from mobile users
    mobileFriendly: false,
    mobileFirst: false,
    description: "This program uses <a target=\"_blank\" href=\"http://flam3.com/flame_draves.pdf\">Iterated function systems</a> to create a variety of fractals ranging from Sierpinski triangles to flame-like paintings, depending on the selected settings. Fractals are generated directly by your web browser."
  },
  {
    name: "Maze",
    dateYear: "2006",
    link:"http://joaqo182.50webs.com/maze.html",
    image:"maze.png",
    mobileFriendly: false,
    mobileFirst: false,
    description: "Test your reflexes and hand steadiness as you guide your mouse pointer through 12 labirinthine levels and one final speed challenge. This was the first web game I ever programmed.",
    notesToSelf: "This email shows that the game was in fact made in 2006: https://mail.google.com/mail/u/0/?pli=1#search/maze/10e1a1226cd87249"
  }
]

//
// Degrees
//

columbiaMSRelevantCourses = [
  {
    name: "Fundamentals of Speech Recognition",
    departmentCode: "COMS",
    number: 6998.004
  },
  {
    name: "Advanced Computer Graphics",
    departmentCode: "COMS",
    number: 4162
  },
  {
    name: "Introduction to Computational Learning Theory",
    departmentCode: "COMS",
    number: 4162
  },
  {
    name: "Computer Networks",
    departmentCode: "COMS",
    number: 4119
  },
  {
    name: "Seminar in Animation and Geometry Processing",
    departmentCode: "COMS",
    number: 6998.002
  },
  {
    name: "Deep Learning for Computer Vision and Natural Language Processing",
    departmentCode: "EECS",
    number: 6894
  },
  {
    name: "Bayesian Statistics",
    departmentCode: "STAT",
    number: 4640
  }
];

columbiaMSOtherCourses = [];

columbiaBSRelevantCourses = [
  {
    name: "Probability and Statistics",
    departmentCode: "SIEO",
    number: 4150
  },
  {
    name: "Advanced Programming (C/C++)",
    departmentCode: "COMS",
    number: 3157
  },
  {
    name: "Parallel Programming",
    departmentCode: "COMS",
    number: 4130
  },
  {
    name: "Computer Graphics",
    departmentCode: "COMS",
    number: 4160
  },
  {
    name: "Computer Vision",
    departmentCode: "COMS",
    number: 4731
  },
  {
    name: "Machine Learning",
    departmentCode: "COMS",
    number: 4771
  },
  {
    name: "Operating Systems",
    departmentCode: "COMS",
    number: 4118
  },
  {
    name: "Quantum Computing",
    departmentCode: "COMS",
    number: 4281
  },
  {
    name: "Number Theory & Cryptography",
    departmentCode: "MATH",
    number: 3020
  },
  {
    name: "Programming Languages and Translators",
    departmentCode: "COMS",
    number: 4115
  },
  {
    name: "Computational Aspects of Robotics",
    departmentCode: "COMS",
    number: 4733
  },
  {
    name: "Natural Language Processing",
    departmentCode: "COMS",
    number: 4705
  },
  {
    name: "Partial Differential Equations",
    departmentCode: "MATH",
    number: 3028
  },
  {
    name: "Computer Animation",
    departmentCode: "COMS",
    number: 4167
  },
  {
    name: "Digital Geometry Processing with Discrete Differential Geometry",
    departmentCode: "COMS",
    number: 4995.001
  },
  {
    name: "GPU Computing",
    departmentCode: "COMS",
    number: 4995.004
  },
  {
    name: "Advanced Machine Learning",
    departmentCode: "COMS",
    number: 4772
  }
];

columbiaBSOtherCourses = [
  {
    name: "Translation Seminar",
    departmentCode: "WRIT",
    number: 3336
  }
];

stanfordSummerRelevantCourses = [
  {
    name: "Introduction to Artificial Intelligence",
    departmentCode: "CS",
    number: 121
  },
  {
    name: "Technology Entrepreneurship",
    departmentCode: "ENGR",
    number: 145
  }
];

stanfordSummerOtherCourses = [];

oberlinBARelevantCourses = [
  {
    name: "Principles of Computer Science I",
    departmentCode: "CSCI",
    number: 150
  },
  {
    name: "Principles of Computer Science II",
    departmentCode: "CSCI",
    number: 151
  },
  {
    name: "Computer Organization",
    departmentCode: "CSCI",
    number: 210
  },
  {
    name: "Programming Abstractions",
    departmentCode: "CSCI",
    number: 275
  },
  {
    name: "Introduction to Algorithms",
    departmentCode: "CSCI",
    number: 280
  },
  {
    name: "Theory of Computer Science",
    departmentCode: "CSCI",
    number: 383
  },
  {
    name: "Discrete Mathematics",
    departmentCode: "MATH",
    number: 220
  },
  {
    name: "Multivariable Calculus",
    departmentCode: "MATH",
    number: 231
  },
  {
    name: "Linear Algebra",
    departmentCode: "MATH",
    number: 232
  },
  {
    name: "Differential Equations",
    departmentCode: "MATH",
    number: 234
  },
  {
    name: "Foundations of Analysis",
    departmentCode: "MATH",
    number: 301
  },
  {
    name: "Group Theory",
    departmentCode: "MATH",
    number: 327
  },
  {
    name: "Information Theory",
    departmentCode: "MATH",
    number: 345
  },
  {
    name: "Seminar in Mathematical Modeling",
    departmentCode: "MATH",
    number: 397
  }
];

oberlinBAOtherCourses = [
  {
    name: "Principles of Economics",
    departmentCode: "ECON",
    number: 101
  },
  {
    name: "Information, Knowledge, and the Internet",
    departmentCode: "FYSP",
    number: 155
  },
  {
    name: "Technique and Form in Fiction",
    departmentCode: "CRWR",
    number: 120
  },
  {
    name: "Environment and Society",
    departmentCode: "ENVS",
    number: 101
  },
  {
    name: "Topics in General Chemistry",
    departmentCode: "CHEM",
    number: 103
  },
  {
    name: "Mechanics and Relativity",
    departmentCode: "PHYS",
    number: 110
  },
  {
    name: "The Study of Behavior",
    departmentCode: "PSYC",
    number: 100
  },
  {
    name: "Poetry/Prose Workshop",
    departmentCode: "CRWR",
    number: 201
  },
  {
    name: "Electricity/Magnetism/Thermodynamics",
    departmentCode: "PHYS",
    number: 111
  },
  {
    name: "Piano",
    departmentCode: "PVST",
    number: 51
  },
  {
    name: "Modern Physics",
    departmentCode: "PHYS",
    number: 212
  },
  {
    name: "Writing to Learn and Participate",
    departmentCode: "RHET",
    number: 105
  },
  {
    name: "Introduction to Cultural Anthropology",
    departmentCode: "ANTH",
    number: 101
  },
  {
    name: "Economic Development",
    departmentCode: "ECON",
    number: 209
  }
];

degrees = [
  {
    collegeName: "Columbia University",
    collegeNickname: "Columbia",
    collegeSubtitle: "School of Engineering and Applied Science",
    title: "M.S.",
    major: "Computer Science",
    track: "Vision and Graphics",
    gpa: null,
    relevantCourses: columbiaMSRelevantCourses,
    otherCourses: columbiaMSOtherCourses
  },
  {
    collegeName: "Columbia University",
    collegeNickname: "Columbia",
    collegeSubtitle: "School of Engineering and Applied Science",
    title: "B.S.",
    major: "Computer Science",
    track: "Artificial Intelligence",
    gpa: "3.91/4.33",
    relevantCourses: columbiaBSRelevantCourses,
    otherCourses: columbiaBSOtherCourses
  },
  {
    collegeName: "Stanford University",
    collegeNickname: "Stanford",
    collegeSubtitle: null,
    title: "Summer Session",
    major: null,
    track: null,
    gpa: null,
    relevantCourses: stanfordSummerRelevantCourses,
    otherCourses: stanfordSummerOtherCourses
  },
  {
    collegeName:"Oberlin College",
    collegeNickname: "Oberlin",
    collegeSubtitle: "College of Arts and Sciences",
    title: "B.A.",
    major: "Mathematics",
    track: null,
    gpa: "3.92/4.33",
    relevantCourses: oberlinBARelevantCourses,
    otherCourses: oberlinBAOtherCourses
  }
];


context = {
  basics: basics,
  timeEvents: timeEvents,
  petProjects: petProjects,
  builtWebsites: builtWebsites,
  preprints: preprints,
  contests: contests,
  programmingExperiments: programmingExperiments,
  degrees: degrees
};
