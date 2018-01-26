const scheduleData = [
  {
    date: "1/9/18",
    title: "Introduction & Overview",
    slides: "slides/slides_Jan9.pdf",
    readings: [],
    assignment: [],
    notes: []
  },
  {
    date: "1/11/18",
    title: "Case Study: Therac-25",
    slides: "slides/slides_Jan11.pdf",
    readings: [
      {
        text: "Medical Devices: The Therac-25",
        href: "http://sunnyday.mit.edu/papers/therac.pdf"
      },
      {
        text: "Quinn 8.5",
        href: null
      },
      {
        text: "Radiation Offers New Cures, New Ways to Do Harm",
        href: "http://www.nytimes.com/2010/01/24/health/24radiation.html"
      }
    ],
    assignment: [],
    notes: []
  },
  {
    date: "1/16/18",
    title: "Reading Arguments",
    readings: [
      {
        text: "Writing Arguments (WA) 1 & 2",
        href: null
      }
    ],
    assignment: [],
    notes: [ "Guest Lecturer: Julia Deeb-Swihart" ]
  },
  {
    date: "1/18/18",
    title: "Utilitarianism",
    slides: "slides/slides_Jan18.pdf",
    readings: [
      {
        text: "Quinn 2.1-2.3, 2.7-2.8",
        href: null
      }
    ],
    assignment: [],
    notes: []
  },
  {
    date: "1/23/18",
    title: "Deontology & Social Contract Theory",
    slides: "slides/slides_Jan23.pdf",
    readings: [
      {
        text: "Quinn 2.6, 2.9",
        href: null
      }
    ],
    assignment: [
      {
        text: "Reading the Argument of a Current Article",
        href: "/hw-analyzing-article"
      }
    ],
    notes: []
  },
  {
    date: "1/25/18",
    title: "Core & Logical Structure of Arguments",
    slides: "slides/slides_Jan25.pdf",
    readings: [
      {
        text: "WA 3 & 4",
        href: null
      }
    ],
    assignment: [],
    notes: []
  },
  {
    date: "1/30/18",
    title: "Stakeholder Analysis & Virtue Ethics",
    readings: [
      {
        text: "In a Different Voice, pp. 25-39",
        href: "http://sfonline.barnard.edu/sfxxx/documents/gilligan.pdf"
      },
      {
        text: "Virtue Ethics",
        href: "http://plato.stanford.edu/entries/ethics-virtue/"
      },
      {
        text: "Quinn 2.10-2.11",
        href: null
      },
    ],
    assignment: [],
    notes: []
  },
  {
    date: "2/1/18",
    title: "Evidence",
    readings: [
      {
        text: "WA 5",
        href: null
      },
      {
        text: "Academic Urban Legends",
        href: "http://journals.sagepub.com/doi/full/10.1177/0306312714535679"
      },
    ],
    assignment: [
      {
        text: "Applying Ethical Frameworks to a Dilemma",
        href: "/hw-dilemma"
      }
    ],
    notes: []
  },
  {
    date: "2/6/18",
    title: "Professional Ethics",
    readings: [
      {
        text: "Quinn Chapter 9",
        href: null
      },
      {
        text: "ACM Code of Ethics, Draft 3",
        href: "https://ethics.acm.org/2018-code-draft-3/"
      }
    ],
    assignment: [],
    notes: []
  },
  {
    date: "2/8/18",
    title: "Freedom of Speech & Networked Communications",
    readings: [
      {
        text: "Quinn 3.2, 3.5-3.8, skim rest of chapter",
        href: null
      }
    ],
    assignment: [
      {
        text: "Analysis of New ACM Code",
        href: "hw-acm-code"
      }
    ],
    notes: []
  },
  {
    date: "2/13/18",
    title: "Privacy",
    readings: [
      {
        text: "Quinn Chapter 5, 6-6.5, 6.7",
        href: null
      }
    ],
    assignment: [],
    notes: []
  },
  {
    date: "2/15/18",
    title: "Privacy and the Government",
    readings: [
      {
        text: "Quinn Chapter 6.8-end",
        href: null
      },
      {
        text: "EU-US Airline Passenger Data Disclosure",
        href: "http://www.epic.org/privacy/intl/passenger_data.html"
      },
      {
        text: "EU-US Privacy Shield",
        href: "http://www.alstonprivacy.com/faqs-privacy-shield/"
      }
    ],
    assignment: [
      {
        text: "Term Paper Proposal",
        href: "hw-term-paper-proposal"
      }
    ],
    notes: []
  },
  {
    date: "2/20/18",
    title: "Discussion of Term Paper Proposals & Midterm Review",
    readings: [],
    assignment: [],
    notes: [ "Come to class prepared to tell everyone about your term paper topic."]
  },
  {
    date: "2/22/18",
    title: "Responding to Alternative Views & Argument Structures",
    readings: [
      {
        text: "WA 6 & 7",
        href: null
      }
    ],
    assignment: [],
    notes: []
  },
  {
    date: "2/27/18",
    title: "Midterm (in class)",
    readings: [],
    assignment: [],
    notes: []
  },
  {
    date: "3/1/18",
    title: "Intellectual Property",
    readings: [
      {
        text: "Quinn 4-4.6",
        href: null
      }
    ],
    assignment: [],
    notes: []
  },
  {
    date: "3/6/18",
    title: "Software as Intellectual Property",
    readings: [
      {
        text: "Quinn 4.7-end",
        href: null
      }
    ],
    assignment: [],
    notes: []
  },
  {
    date: "3/8/18",
    title: "Computer Reliability & Software Warranties",
    readings: [
      {
        text: "Quinn 8.1-8.4, 8.7-8.8",
        href: null
      }
    ],
    assignment: [
      {
        text: "Term Paper Outline",
        href: "hw-term-paper-outline"
      }
    ],
    notes: []
  },
  {
    date: "3/13/18",
    title: "The Patriot Act",
    readings: [
      {
        text: "Quinn 6.6",
        href: null
      },
      {
        text: "The Foreign Intelligence Surveillance Act (FISA) [skim]",
        href: "http://en.wikipedia.org/wiki/Foreign_Intelligence_Act"
      },
      {
        text: "The USA Patriot Act [skim]",
        href: "http://en.wikipedia.org/wiki/USA_PATRIOT_Act"
      },
      {
        text: "National Security Letters [skim]",
        href: "http://en.wikipedia.org/wiki/National_security_letter"
      },
      {
        text: "Brandon Mayfield [read more carefully]",
        href: "http://en.wikipedia.org/wiki/Brandon_Mayfield"
      },
      {
        text: "Start watching United Stated of Secrets, Part One",
        href: "http://www.pbs.org/wgbh/pages/frontline/united-states-of-secrets/#united-states-of-secrets-(part-one)"
      }
    ],
    assignment: [],
    notes: []
  },
  {
    date: "3/15/18",
    title: "The NSA and Edward Snowden",
    readings: [
      {
        text: "Finish watching United States of Secrets, Part One",
        href: "http://www.pbs.org/wgbh/pages/frontline/united-states-of-secrets/#united-states-of-secrets-(part-one)"
      },
      {
        text: "Watch United States of Secrets, Part Two",
        href: "http://www.pbs.org/wgbh/pages/frontline/united-states-of-secrets/#part-two---privacy-lost"
      }
    ],
    assignment: [],
    notes: []
  },
  {
    date: "3/20/18",
    title: "Spring Break (no class)",
    readings: [],
    assignment: [],
    notes: []
  },
  {
    date: "3/22/18",
    title: "Spring Break (no class)",
    readings: [],
    assignment: [],
    notes: []
  },
  {
    date: "3/27/18",
    title: "Do Artifacts Have Politics?",
    readings: [
      {
        text: "Do Artifacts Have Politics?",
        href: "https://www.cc.gatech.edu/~beki/cs4001/Winner.pdf"
      }
    ],
    assignment: [],
    notes: []
  },
  {
    date: "3/29/18",
    title: "Work and Wealth",
    readings: [
      {
        text: "Quinn 10.1-10.4, 10.6",
        href: null
      },
      {
        text: "The Planet Money T-Shirt Project (podcast; listen to all parts)",
        href: "http://www.npr.org/series/248799434/planet-moneys-t-shirt-project"
      }
    ],
    assignment: [],
    notes: [ "Guest Lecturer: Julia Deeb-Swihart" ]
  },
  {
    date: "4/3/18",
    title: "Visual Argument",
    readings: [
      {
        text: "Visual & Statistical Thinking: Displays of Evidence for Decision Making by Tufte",
        href: null
      }
    ],
    assignment: [],
    notes: []
  },
  {
    date: "4/5/18",
    title: "Special topic: TBD",
    readings: [],
    assignment: [],
    notes: []
  },
  {
    date: "4/10/18",
    title: "Term Paper Presentations (Part I)",
    readings: [],
    assignment: [],
    notes: []
  },
  {
    date: "4/12/18",
    title: "Term Paper Presentations (Part II)",
    readings: [],
    assignment: [
      {
        text: "Full Term Papers",
        href: "/term-paper"
      }
    ],
    notes: []
  },
  {
    date: "4/17/18",
    title: "Special topic: TBD",
    readings: [],
    assignment: [],
    notes: []
  },
  {
    date: "4/19/18",
    title: "Final exam review",
    readings: [],
    assignment: [],
    notes: []
  },
  {
    date: "4/30/18",
    title: "Final Exam",
    readings: [],
    assignment: [],
    notes: [
      "2:50pm - 5:40pm"
    ]
  },
];

export default scheduleData;