// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-attending-dagstuhl-seminar-on-rethinking-the-role-of-bayesianism-in-the-age-of-modern-ai-in-germany",
          title: 'Attending Dagstuhl Seminar on “Rethinking the Role of Bayesianism in the Age of...',
          description: "",
          section: "News",},{id: "news-lightning-talk-at-neurips-2024-bayesian-decision-making-and-uncertainty-workshop-on-adaptive-model-size-for-continual-gaussian-processes",
          title: 'Lightning talk at NeurIPS 2024 Bayesian Decision-making and Uncertainty Workshop on adaptive model...',
          description: "",
          section: "News",},{id: "news-started-phd-espresso-a-peer-support-and-learning-network-for-phd-students-check-it-out-️",
          title: 'Started PhD Espresso, a peer-support and learning network for PhD students. Check it...',
          description: "",
          section: "News",},{id: "news-began-my-academic-placement-at-riken-center-for-advanced-intelligence-project-in-tokyo-japan-working-with-dr-emtiyaz-khan-s-adaptive-bayesian-intelligence-team",
          title: 'Began my academic placement at RIKEN Center for Advanced Intelligence Project in Tokyo,...',
          description: "",
          section: "News",},{id: "news-excited-to-announce-that-our-paper-on-adaptive-model-size-for-continual-gaussian-processes-has-been-accepted-as-a-spotlight-at-icml-2025-also-received-the-g-research-early-career-research-grant-to-attend-the-conference-in-vancouver-canada",
          title: 'Excited to announce that our paper on adaptive model size for continual Gaussian...',
          description: "",
          section: "News",},{id: "news-attending-the-3rd-edition-of-the-bayes-duality-workshop",
          title: 'Attending the 3rd Edition of the Bayes Duality Workshop.',
          description: "",
          section: "News",},{id: "news-i-ll-be-presenting-at-breaking-topics-in-ai-conference-2025-in-london",
          title: 'I’ll be presenting at Breaking Topics in AI Conference 2025 in London.',
          description: "",
          section: "News",},{id: "news-attending-eurips-2025-in-copenhagen",
          title: 'Attending EurIPS 2025 in Copenhagen 🇩🇰',
          description: "",
          section: "News",},{id: "news-invited-speaker-in-the-session-calibrated-bayes-approximate-inference-misspecified-models-and-their-interaction-at-the-2026-isba-world-meeting",
          title: 'Invited speaker in the session “Calibrated Bayes: approximate inference, misspecified models, and their...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%67%6C%70%32%32@%69%63.%61%63.%75%6B", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/guiomarpescador", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/guiomar-pescador-barrios", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=8FkXIxgAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
