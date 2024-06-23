function makeUrl(text, url) {
  return "<a href=\"" + url + "\">" + text + "</a>";
}

//
// BASICS
//

basics = {
    name: "Joaquín Ruales",
    label: "Microsoft Software Engineer",
    picture: "square_me6.jpg",
    email: "",
    summary: "<p>Hi, I'm a software engineer and mathematician interested in machine learning, computer graphics, web application development, and applied mathematics.</p>"
    + "<p>During my last university semester, I was a TA for <a target=\"_blank\" href=\"https://www1.cs.columbia.edu/~allen/F15/\">Computational Aspects of Robotics</a> and I did research on <a target='_blank' href='https://www.youtube.com/watch?v=Dxd0ItPhh7c'>Shape Completion Enabled Robotic Grasping</a> using convolutional neural networks, which was accepted into <a target=\"_blank\" href=\"https://www.ieee-ras.org/conferences-workshops/financially-co-sponsored/iros\">IROS</a>.</p>"
    + "<p>When not programming or playing with <a target='_blank' href='https://www.desmos.com/calculator/hqgi7zssfd\'>graphing calculators</a>, I am generally found taking <a target='_blank' href='https://www.flickr.com/photos/46440167@N02/'>photos</a>, hiking, or <a target='_blank' href='https://github.com/jruales/Reading-List/blob/master/README.md'>reading</a>.</p>",
    phone: "",
    website: "",
    location: {
      address: "",
      postalCode: "",
      city: "Greater Seattle Area",
      countryCode: "US",
      region: ""
    },
    profiles: [
      {
        name: "LinkedIn",
        iconClass: "linkedin",
        link: "https://www.linkedin.com/in/jruales"
      },
      {
        name: "Github",
        iconClass: "github",
        link: "https://github.com/jruales"
      },
      {
        name: "Twitter",
        iconClass: "twitter",
        link: "https://twitter.com/_jruales"
      },
      {
        name: "Flickr",
        iconClass: "flickr",
        link: "https://www.flickr.com/photos/46440167@N02"
      },
      {
        name: "YouTube",
        iconClass: "youtube",
        link: "https://www.youtube.com/channel/UCSejsjO0ark_Xy3UEh2dDCg"
      },
    ]
}

//
// TIME EVENTS
//

timeEvents = [
  {
    timeframe: "Spring 2016 – Present",
    title: "💼 Microsoft Software Engineer",
    description: null
  },
  {
    timeframe: "Summer 2015",
    title: "💼 Google Software Engineering Intern",
    description: null
  },
  {
    timeframe: "Fall 2014 - Winter 2016",
    title: "🎓 Columbia University Computer Science M.S.",
    description: "«Machine Learning» and «Vision and Graphics» Tracks. See <a target=\"_blank\" href=\"https://jruales.github.io/#coursework\">coursework</a>."
  },
  {
    timeframe: "Summer 2014",
    title: "💼 Google Software Engineering Intern",
    description: null
  },
  {
    timeframe: "Fall 2012 - Spring 2014",
    title: "🎓 Columbia University Computer Science B.S. (<em>magna cum laude</em>)",
    description: "«Artificial Intelligence» Track. See <a target=\"_blank\" href=\"https://jruales.github.io/#coursework\">coursework</a>."
  },
  {
    timeframe: "Summer 2010",
    title: "🎓 Stanford University Summer Session",
    description: "See <a target=\"_blank\" href=\"https://jruales.github.io/#coursework\">coursework</a>."
  },
  {
    timeframe: "Fall 2009 - Spring 2012",
    title: "🎓 Oberlin College Mathematics B.A. (Phi Beta Kappa)",
    description: "3-2 Engineering Combined Program with Columbia University. See <a target=\"_blank\" href=\"https://jruales.github.io/#coursework\">coursework</a>."
  }
]

//
// publicationS
//

publications = [
  {
    title: "Shape Completion Enabled Robotic Grasping",
    notes:"Based on a single frontal depth image of an object, the algorithm uses a 3D ConvNet to infer what the whole object looks like, including the unseen portions. This allows it to plan more stable robotic grasps on it.</p><p><p>This work started as a class project for our <i>\"Deep Learning for Computer Vision and Natural Language Processing\"</i> class.</p>",
    authors: "J. Varley, C. DeChant, A. Richardson, J. Ruales, and P. Allen",
    image:"shape_completion_grasping.png",
    abstract: "This work provides an architecture to enable robotic grasp planning via shape completion. Shape completion is accomplished through the use of a 3D convolutional neural network (CNN). The network is trained on our own new open source dataset of over 440,000 3D exemplars captured from varying viewpoints. At runtime, a 2.5D pointcloud captured from a single point of view is fed into the CNN, which fills in the occluded regions of the scene, allowing grasps to be planned and executed on the completed object. Runtime shape completion is very rapid because most of the computational costs of shape completion are borne during offline training. We explore how the quality of completions vary based on several factors. These include whether or not the object being completed existed in the training data and how many object models were used to train the network. We also look at the ability of the network to generalize to novel objects allowing the system to complete previously unseen objects at runtime. Finally, experimentation is done both in simulation and on actual robotic hardware to explore the relationship between completion quality and the utility of the completed mesh model for grasping.",
    conference: "IROS 2017",
    links: [
      {
        name: "Video",
        url: "https://www.youtube.com/watch?v=Dxd0ItPhh7c"
      },
      {
        name: "Project Website",
        url: "https://shapecompletiongrasping.cs.columbia.edu/"
      },
      {
        name: "ArXiv Abstract Page",
        url: "https://arxiv.org/abs/1609.08546"
      },
      {
        name: "Code",
        url: "https://github.com/CRLab/shape_completion_experiments"
      }
    ]
  },
  {
    title: "On left-orderability and double branched covers of Kanenobu's knots",
    notes:"<p>Most of the proofs in this paper were produced by a theorem-proving program I made and optimized during the 2013 Columbia Math Undergraduate Summer Research Program.</p>", //"<p>For this paper, I created and optimized a Theorem-proving program that used facts we derived by hand about an infinite mathematical group to derive properties of other elements in the group and eventually reach a contradiction, this way proving our main theorem.</p><p>Even though it was not clear that it would work (since the program had an infinite search space, and no one had proven before that a contradiction would ever be reached), deciding to create such a program allowed us to find the contradiction, prove our main theorem, and write the paper on time before the end of the REU.</p>",
    authors: "F. Doria Medina, M. Jackson, J. Ruales, and H. Zeilberger",
    image:"kanenobu.jpg",
    abstract: "We show that the fundamental group of the double branched cover of an infinite family of homologically thin, non-quasi-alternating knots is not left-orderable, giving further support for a conjecture of Boyer, Gordon, and Watson that an irreducible rational homology 3-sphere is an L-space if and only if its fundamental group is not left-orderable.",
    journal: "Journal of Knot Theory and its Ramifications (JKTR)",
    //link: "https://arxiv.org/abs/1310.1877",
    links: [
      {
        name: "Video",
        url: "https://youtu.be/R5EC1s-YqYE?t=31m59s"
      },
      {
        name: "Journal Abstract Page",
        url: "https://www.worldscientific.com/doi/abs/10.1142/S0218216515500716"
      },
      {
        name: "ArXiv Abstract Page",
        url: "https://arxiv.org/abs/1310.1877"
      },
      {
        name: "Code",
        url: "https://github.com/jruales/On-left-orderability-and-double-branched-covers-of-Kanenobu-s-knots"
      }
    ]
  }
];

//
// PET PROJECTS
//

webApps = [
  {
    title: "EcuaCines",
    link: null, // "http://ecuacines.com/",
    image: "ecuacines.png",
    mobileFriendly: true,
    mobileFirst: true,
    description: "Displays showtimes for all major movie theaters in Quito, Ecuador. Showtime information collected automatically from each movie theater's website.",
    dateYear: 2012,
    technologies: "HTML + CSS + JS + PHP (Laravel) + MySQL",
    links: [
      /*
      {
        name: "Project",
        url: "http://ecuacines.com/"
      },
      */
      {
        name: "Project Overview",
        url: "https://blog.400pixels.net/?p=210"
      },
      {
        name: "Website (Archive)",
        url: "https://web.archive.org/web/20130831161557/http://ecuacines.com:80/"
      },
    ]
  },
  {
    title: "400 pixels",
    link: null, // "http://400pixels.net/",
    image: "400pixels.png",
    mobileFriendly: false,
    mobileFirst: false, 
    description: "A web app for making and sharing pixel art online. As a challenge, I avoided using any third-party libraries for the front-end, so I implemented my own color picker, undo-redo feature, Breshenham's line and ellipse drawing algorithms, flood fill, and isometric cube tool.",
    dateYear: 2010,
    technologies: "PHP + MySQL + ActionScript 3.0",
    links: [
      {
        name: "Video Demo",
        url: "https://youtu.be/HElPy2vxQN4"
      },
    ]
  }
]

//
// BUILT WEBSITES
//

builtWebsites = [
  {
    title: "Personal Website",
    link: "#",
    image: "this_website.png",
    mobileFriendly: true,
    mobileFirst: true,
    description: "This website. I used Handlebars templating to make it simple to modify and add information to the page.",
    dateYear: 2015,
    technologies: "HTML + CSS + JS (w/ Handlebars)"
  },
  {
    title: "Oberlin College Library Website",
    link: "https://web.archive.org/web/20120902155124/https://www.oberlin.edu/library/",
    image: "oberlin_library.png",
    mobileFriendly: true,
    mobileFirst: false,
    description: "Rebuilt the library website's main pages as part of the library's web team. Replaced outdated code libraries and coding standards and focused on making the site user-friendly and visually clean.", //A snapshot of the old website before the remake is available on the <a target=\"_blank\" href=\"https://web.archive.org/web/20110519182042/https://www.oberlin.edu/library/\">Internet Archive</a>.
    dateYear: 2011,
    technologies: null
  },
  {
    title: "Hostal Vista Amazonas",
    link: "https://web.archive.org/web/20180829171436/https://vistaamazonas.com/",
    image: "vista_amazonas.png",
    mobileFriendly: true,
    mobileFirst: false,
    description: "Website for a hostal in Ecuador.",
    dateYear: 2012,
    technologies: "HTML + CSS + JS + PHP"
  },
  {
    title: "Andrew J. Churchill's Portfolio Website",
    link: "https://www.youtube.com/watch?v=7_qnYaxnreA",
    // link: "http://400pixels.net/churchill/",
    image: "churchill.png",
    mobileFriendly: false,
    mobileFirst: false,
    description: "Website for a music composer.",
    dateYear: 2010,
    technologies: "PHP + ActionScript 3.0"
  },
  {
    title: "Movimiento Verde Estudiantil",
    link: "https://www.youtube.com/watch?v=frWodscsScg",
    // link: "http://movimiento-verde.50webs.com/",
    image: "movimiento_verde.png",
    mobileFriendly: false,
    mobileFirst: false,
    description: "Website for a student recycling group organized by members of my high school.<br/>I used the Five3D 3D engine to program the carousel transition. Since that library could not handle 3d transformations of text, I converted the heading text into spline curves so that they could be rotated, and I hid the body text before each transition. I also designed the logo for the student group.",
    dateYear: 2009,
    technologies: "ActionScript 3.0"
  },
  {
    title: "Joaquín Ruales's Art Portfolio",
    link: "https://www.youtube.com/watch?v=7kCzTTaU6Vw",
    // link: "http://joaquin-ruales.50webs.com/",
    image: "art_portfolio.png",
    mobileFriendly: false,
    mobileFirst: false,
    description: "My photography and design portfolio up until 2008.<br/>I programmed a simple parallax effect on the front page, and used a 3rd party image viewer for the other pages.",
    dateYear: 2008,
    technologies: "ActionScript 3.0"
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
    website: "https://www.columbia.edu/",
    startDate: "2014-06",
    endData: "2014-08"
  },
  {
    company: "Columbia University in the City of New York",
    position: "Library Website Developer/Designer",
    website: "https://www.columbia.edu/",
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
    name: "HackMIT Hackathon",
    venue: "Massachusetts Institute of Technology",
    location: "Cambridge, MA",
    dateMonth: 2,
    dateYear: 2013,
    honor: "1st Place", // "and \"Most likely to become a real product\" prize",
    image: "hackmit.png",
    //link: "https://www.facebook.com/events/295683690535160/",
    //link2: "https://twitter.com/dff/status/298218271117803520",
    description: "Our team of four programmed a head-movement-controlled web-messaging interface. I implemented the head tracking and integrated the real-time head position data with the UI and back-end that my teammates created.",
    links: [
      {
        name: "Contest Information",
        url: "https://web.archive.org/web/20130126114515/http://hackmit.eventbrite.com/"
      },
      {
        name: "Contest Homepage",
        url: "https://web.archive.org/web/20130530001913/http://techfair.mit.edu:80/events/hackathon"
      },
    ]
  },
  {
    name: "ACM-ICPC Regional Programming Contest, Greater New York Region",
    venue: "St. Joseph's College",
    location: "Patchogue, NY",
    dateMonth: 11,
    dateYear: 2014,
    honor: "4th Place",
    image:"acm.png",
    //link: "http://acmgnyr.org/year2014/standings.shtml",
    description: "Represented Columbia University on a team of three that solved 8 out of the 9 problems.",
    links: [
      {
        name: "Contest Information",
        url: "http://acmgnyr.org/year2014/"
      },
      {
        name: "Problems",
        url: "http://acmgnyr.org/year2014/problems.shtml"
      },
      {
        name: "Standings",
        url: "http://acmgnyr.org/year2014/standings.shtml"
      },
    ]
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
    //link: "https://personal.denison.edu/~lalla/DSPC/results10.html",
    description: "Represented Oberlin College on a team of three that solved 4 out of 6 ACM-ICPC-style algorithmic problems in Java.",
    links: [
      {
        name: "Contest Information",
        url: "https://personal.denison.edu/~lalla/DSPC/results10.html"
      },
      {
        name: "Problems",
        url: "https://personal.denison.edu/~lalla/DSPC/pastproblems/probs10.pdf"
      },
      {
        name: "Standings",
        url: "https://personal.denison.edu/~lalla/DSPC/scoreboard_2010.html"
      },
    ]
  },
  {
    name: "Deis3D 3D Printathon",
    venue: "Brandeis University",
    location: "Waltham, MA",
    dateMonth: 3,
    dateYear: 2015,
    honor: "2nd Place",
    image:"deis3d.png",
    //link: "http://printathon.org/",
    description: "Our team of two built a prototype for a bluetooth braille keyboard in the form of a phone case. I soldered and programmed the Arduino electronics, while my teammate designed and 3D-printed the casing and keycaps to fit the phone and electronics.",
    links: [
      {
        name: "Contest Information",
        url: "https://kb.brandeis.edu/pages/viewpage.action?pageId=9044848"
      },
    ]
  },
  {
    name: "\"Just Another Kusto Hacker\" Contest",
    venue: "Microsoft-internal",
    location: "Redmond, WA",
    dateMonth: 5,
    dateYear: 2017,
    honor: "3rd Place",
    image:"azure_data_explorer.png",
    description: "The contest consisted of writing a query in the Kusto Query Language (KQL), which would output the words \"Just another Kusto hacker\" in a creative way. My query represented the message using steganography on the base64 encoding of emoji characters.",
    links: [
      {
        name: "Contest Information",
        url: "https://y0nil.github.io/kusto.blog/blog-posts/jakh.html"
      },
    ]
  }
]

//
// PROGRAMMING EXPERIMENTS
//

// TODO(jruales): add the following projects
// - Flora Quitensis (http://400pixels.net/floranativa/) -- Doesn't work anymore due to PHP version...
// - Graphcut Textures
// - SVM CVN professor autozoom
// - 3D Renders from Graphics (raytra) and Adv. Computer Graphics (Kajiya)
// - Blog post about Animation and Geometry Processing Seminar hacker demos
// - BounceLoader with manual (see 'flashden' Dropbox folder)
programmingExperiments = [
  {
    name: "Recurrent Neural Networks for Sentiment Analysis",
    dateYear: "2015",
    dateMonth: "05",
    link:"assets/pdfs/rnn_class_project.pdf",
    image:"rnn_class_project.png",
    mobileFriendly: true,
    mobileFirst: false,
    description: "Individual class project for Advanced Machine Learning. I ran some experiments using recurrent neural networks for binary classification of movie review sentiment using Theano. I then used a t-SNE embedding to visualize the word vectors that one of these classifiers learned during training."
  },
  {
    name: "Vocal Extraction From Monaural Music Using RPCA Decomposition",
    dateYear: "2014",
    dateMonth: "05",
    link:"assets/pdfs/rpca_class_project.pdf",
    image:"rpca_class_project.png",
    mobileFriendly: true,
    mobileFirst: false,
    description: "Group project for our Convex Optimization class. We used Robust Principal Component Analysis (RPCA) to separate a single-channel music audio file into instrumental and vocal audio components. This was possible because instrumentals tend to be low-rank and vocals tend to be sparse in the frequency domain."
  },
  /*
  {
    name: "2 Player Flappy Bird",
    dateYear: "2014",
    dateMonth: "02",
    link:"http://400pixels.net/flappy2p/",
    image:"flappy2p.png",
    mobileFriendly: false,
    mobileFirst: false,
    description: "A 2 player collaborative web version of the popular smartphone game."
  },
  */
  {
    name: "PLATO Programming Language",
    dateYear: "2013",
    dateMonth: "12",
    link:"assets/pdfs/plato.pdf",
    image:"plato.jpg",
    mobileFriendly: true,
    mobileFirst: false,
    description: "Group project for Programming Languages and Translators. PLATO (Programing Language for Abstract Transformation Operators) is a programming language inspired by MATLAB, Python, Prolog, Java, and Ocaml, and designed for the direct manipulation of abstract mathematical expressions. In addition to being able to express basic number­-theoretical algorithms, it can also also handle finite sets, groups, rings, and fields."
  },
  {
    name: "Tutorial: Curve Bounce in HTML5",
    dateYear: "2013",
    link:"https://blog.400pixels.net/?p=7",
    image:"curve_bounce.png",
    mobileFriendly: true,
    mobileFirst: true,
    description: "A tutorial on how to program a circle bouncing on a mathematically-defined curve. Uses the numerical derivative of the curve to calculate the bounce angle."
  },
  {
    name: "Fractal Flame Generator",
    dateYear: "2012",
    // TODO(jruales): Make a video demo of this one
    link: null, // "https://400pixels.net/isometric/flame.swf",
    image:"sierpinski1.png",
    // TODO(jruales): Hide Flash experiments from mobile users
    mobileFriendly: false,
    mobileFirst: false,
    description: "Individual project for Seminar in Mathematical Modeling. This program uses <a target=\"_blank\" href=\"https://flam3.com/flame_draves.pdf\">Iterated function systems</a> to create a variety of fractals ranging from Sierpinski triangles to flame-like paintings, depending on the selected settings. Fractals are generated directly by your web browser."
  },
  {
    name: "Oberlin Class of 2015 T-shirt Design",
    dateYear: "2011",
    dateMonth: "12",
    dateDay: "2",
    // TODO(jruales): Make an HTML container for each SWF file
    link:"assets/graphics/oberlin2015.png",
    image:"oberlin2015.jpg",
    // TODO(jruales): Hide Flash experiments from mobile users
    mobileFriendly: true,
    mobileFirst: false,
    description: "My design won Oberlin's annual t-shirt design contest, so it was printed on the t-shirts that were sent out to every incoming first-year student of the class of 2015. The design features an albino squirrel in a ball chair atop a tree in Tappan Square. Next to the tree is a painted rock with the words \"Oberlin Class of 2015.\" I wrote Euler's Formula in a tiny font on one of the branches as an 'Easter egg'."
  },
  {
    name: "AP Spanish Literature Magazine Layout Design",
    dateYear: "2009",
    dateMonth: "04",
    link: null,
    image:"bifurcaciones2009_4.jpg",
    // TODO(jruales): Hide Flash experiments from mobile users
    mobileFriendly: true,
    mobileFirst: false,
    description: "I designed the layout for the 2009 edition of <em>Bifurcaciones de mentes</em> (\"Mind Bifurcations\"), the yearly literary magazine published by my school's AP Spanish Literature class. The first sentences of the books we read throughout the school year frame the pages. I also wrote a few of the stories inside the magazine."
  },
  {
    name: "3D Fractal Tree",
    dateYear: "2009",
    link: "https://www.youtube.com/watch?v=MTUHRrbjivs",
    // TODO(jruales): Make an HTML container for each SWF file
    // link:"http://joaqo182.50webs.com/fullPageFlash.html?swf=3DFractalTree&title=3D%20Fractal%20Tree",
    image:"fractal_tree.png",
    // TODO(jruales): Hide Flash experiments from mobile users
    mobileFriendly: false,
    mobileFirst: false,
    description: "This program uses spherical coordinates to generate a different 3D fractal tree each time you reload the page."
  },
  {
    name: "3D Space Invader Ball Bounce",
    dateYear: "2008",
    link: "https://www.youtube.com/watch?v=8KamjZC-jww",
    // link: "http://joaqo182.50webs.com/fullPageFlash.html?swf=3D_y_Fisica&title=3D%20y%20Fisica",
    image:"space_invader.png",
    // TODO(jruales): Hide Flash experiments from mobile users
    mobileFriendly: false,
    mobileFirst: false,
    description: "A bouncy ball inside a Space-Invader-shaped container. This was originally meant to work with WiiFlash so that the tilt of the Space Invader was controlled with a Wii remote, back when cell phones didn't commonly have acceleromenters."
  },
  {
    name: "Vector Hollow Prism",
    dateYear: "2008",
    link: "https://www.youtube.com/watch?v=YfIUSW3hFy0",
    // link:"http://joaqo182.50webs.com/fullPageFlash.html?swf=VectorHollowPrism",
    image:"vector_hollow_prism.png",
    // TODO(jruales): Hide Flash experiments from mobile users
    mobileFriendly: false,
    mobileFirst: false,
    description: "Having no easy way of making a variety of geometric shapes using the Five3d ActionScript 3D library, I created my own function to do it. It can make regular prisms, pyramids, and truncated pyramids, with the possibility of hollowing out the 3D shapes with an inner radius. I also made a tool for playing with this new code with immediate feedback, so that it would be easy to find the parameters needed to make a certain shape."
  },
  {
    name: "Maze",
    dateYear: "2006",
    link: "https://www.youtube.com/watch?v=mUCyqCwNBY4",
    // link: "http://joaqo182.50webs.com/maze.html",
    image:"maze.png",
    // TODO(jruales): Hide Flash experiments from mobile users
    mobileFriendly: false,
    mobileFirst: false,
    description: "My first web game. Test your reflexes and hand steadiness as you guide your mouse pointer through twelve labyrinthine levels and one final speed challenge. Stop/play music with the left/right arrows. You can skip up to three levels by using the spacebar. Cheat codes are shift + number keys on an English keyboard.",
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
    name: "Bayesian Models for Machine Learning",
    departmentCode: "EECS",
    number: 6892
  },
  {
    name: "Advanced Database Systems",
    departmentCode: "COMS",
    number: 6111
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
  },
  {
    name: "Advanced Machine Learning — Misc. Topics",
    departmentCode: "COMS",
    number: 4772
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
    name: "Number Theory and Cryptography",
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
    name: "Physically Based Computer Animation",
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
    name: "Advanced Machine Learning — Convex Optimization",
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
    name: "Poetry and Prose Workshop",
    departmentCode: "CRWR",
    number: 201
  },
  {
    name: "Electricity, Magnetism, and Thermodynamics",
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
    track: "Machine Learning, and Vision and Graphics",
    // gpa: "4.08/4.33",
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
    // gpa: "3.91/4.33",
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
    // gpa: "3.96/4.3",
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
    // gpa: "3.92/4.33",
    relevantCourses: oberlinBARelevantCourses,
    otherCourses: oberlinBAOtherCourses
  }
];


context = {
  basics: basics,
  timeEvents: timeEvents,
  webApps: webApps,
  builtWebsites: builtWebsites,
  publications: publications,
  contests: contests,
  programmingExperiments: programmingExperiments,
  degrees: degrees
};
