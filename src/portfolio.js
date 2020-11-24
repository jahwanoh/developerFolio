/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Jahwan Oh",
  title: "Nice to meet you. I'm Jahwan",
  subTitle: emoji("A Creative Computer Vision Research Engineer 🚀🚀 Vision is one of the most useful human sensors that allow us to understand the world. my passion lies in Vision and Intelligent system. "),
  // like to realize an idea into real uses rather only to keep it as a concept. Having experiences of building image processing and computer vision based applications with C++ / Python / Processing on various platforms and environments such as Google Cloud Platform, Nvidia Jetson, Windows, Linuxs and etc. I like having a quick test of my ideas using cool open libraries and frameworks. as a self-motivated learner, I enjoy to reach to interesting fields that I'm not familiar with
  resumeLink: "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/jahwanoh",
  linkedin: "https://www.linkedin.com/in/jahwan-oh-5b21aa115/",
  gmail: "jahwanoh@gmail.com",
  // facebook: "https://www.facebook.com/Jahwan.Oh",
  instagram: "https://www.instagram.com/letterhwan/",
  soundcloud: "https://soundcloud.com/jahwan-oh/tom-misch-movie-jahwan",
  // youtube: "",
  // medium: "https://medium.com/@jahwanoh"
  
  // Instagram, Twitter or more social media are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "IMAGINE AND THEN MAKE IT HAPPEN",
  skills: [
    emoji("⚡ Develop image processing and computer vision applications"),
    emoji("⚡ Tools: opencv, cuda, ffmpeg, gstreamer, tensorflow, pytorch, darknet"),
    emoji("⚡ Hardware: Nvidia Jetson, V4L2 MIPI, Arduino")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "c++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "GCP",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "Nvidia Jetson",
      fontAwesomeClassname: "fas fa-cube"
    },
    {
      skillName: "openCV",
      fontAwesomeClassname: "fas fa-photo-video"
    },
    {
      skillName: "ML/DL",
      fontAwesomeClassname: "fas fa-layer-group"
    }
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    
    {
      schoolName: "Chung-Ang University, Seoul, Korea",
      logo: require("./assets/images/cau_old_cut.png"),
      subHeader: "Bachelor of Science in Digital Imaging",
      duration: "March 2011 - Faburary 2017",
      desc: "Specialized to image processing and computer vision. Participaed in the research program and published 9 papers",
      descBullets: [
        "'Real-Time Multiple Soccer Player Tracking Using Kalman Filter and K-Means in UAV Environment', Thesis(2017)",
        "'UAV Video Understanding and Tracking Method for Automatic Sports Broadcast Application', I410-ECN-0101-2017-004-002138571(2017)",
        "'Real-Time Multiple Object Tracking Using Gaussian Mixture Model and Kalman Filter in UAV Environment', I410-ECN-0101-2017-569-001938993(2016)",
        "'Content-Aware Rectification of Images Containing Artificial Structures', I410-ECN-0101-2017-569-000884054(2016)",
        "'Hand Gesture Recognition Using Multiple Cameras for Remote Control System (2012)'"
      ]
    },
    {
      schoolName: "Metropolia, Helsinki, Finland",
      logo: require("./assets/images/Metropolia_logo.png"),
      subHeader: "Student exchange internship at Electria",
      duration: "June 2015 - Sep 2015",
      desc: "3D printed robotic hand project",
      descBullets: [
        "A robotic hand control system based on a hand gesture recognition using LeapMotion sensor and Processing language",
      ]
    }
  ]
}
// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Research Engineer",
      company: "Bepro Europe GmbH",
      companylogo: require("./assets/images/bepro_logo.png"),
      date: "September 2018 – Present",
      desc: "AI Team",
      descBullets: [
        "Video quality enhancement",
        "Video stitching and its assessment logic",
        "Automatic virtual camera movement",
        "Sport event recognition"
      ]
    },
    {
      role: "Research Engineer",
      company: "Hyundai MOBIS",
      companylogo: require("./assets/images/hmobis_logo.png"),
      date: "January 2017 – September 2018",
      desc: "Research Dep.",
      descBullets: [
        "Vision based speaker grill opening rate calculation",
        "ANC(Active Noise Control)",
        "VESS(Virtual Engine Sound System)"
      ]
    },
    {
      role: "Research Intern",
      company: "IPIS",
      companylogo: require("./assets/images/ipis_logo_.png"),
      date: "Sep 2015 - January 2017",
      desc: "Image Processing & Intelligent Systems Lab",
      descBullets: [
        "Content-Aware Image Processing",
        "Computer Vision Technology in Various Conditions",
        "Participated in conferences and exhibitions publishing papers advised by Dr. Joonki Paik"
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "jahwanoh", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Projects 🔥",
  subtitle: "",  
  projects: [
    {
      image: require("./assets/images/loleu.png"),
      link: "https://loleu.github.io/"
    }
  ]
};


// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "",

  achievementsCards: [
    {
      title: "Best Paper",
      subtitle: "Hyundai Motor Group, 2018",
      image: require("./assets/images/paper.svg"),
      footerLink: [
        { name: "Confidencial", url: "-" }
      ]
    },
    {
      title: "Patent",
      subtitle: "Auto Fader Balance Control of Vehicle Audio System using Sound Recognition, Oct 2017.",
      image: require("./assets/images/patent.svg"),
      footerLink: [{ name: "Patent", url: "https://drive.google.com/file/d/18rrYcFaZwEJ5xmqj99us9X1mGruywWIw/view?usp=sharing" }]
    },

    {
      title: "Army Commandation Medel",
      subtitle: "LIEUTENANT GENERAL, USA. COMMANDING GENERAL",
      image: require("./assets/images/medal.svg"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/0B8naWt1Y1OUZRHdnWVlwWUtnMjA/view?usp=sharing" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "",

  blogs: [
    {
      url: "https://medium.com/@bepro11/new-interactive-video-features-powered-by-tracking-data-9a6e3d9d6fd5",
      title: "New Interactive Video Features Powered by Tracking Data",
      description: "... better understand and communicate what happened in a match. These features are available for any match where we have collected tracking data."
    },
    {
      url: "https://medium.com/@bepro11/what-is-the-bepro-scouting-feed-93bb52576464",
      title: "What is the Bepro Scouting Feed?",
      description: "... scouting feed captures all 22 players in one shot, giving viewers eyes to the whole show."
    },
    {
      url: "https://medium.com/@bepro11/behind-the-scenes-of-bepros-analysis-process-16eb669f924",
      title: "Behind the Scenes of Bepro’s Analysis Process",
      description: "... scouting feed captures all 22 players in one shot, giving viewers eyes to the whole show."
    },
    {
      url: "https://medium.com/@bepro11/big-important-video-quality-improvements-ready-for-footballs-return-4dc6a69f39cc",
      title: "Big Important Video Quality Improvements Ready For Football’s Return!",
      description: " It allows us to reduce workload and produce the best possible turnaround time ..."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/jahwanoh-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

// const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

//   // Please Provide with Your Podcast embeded Link
//   podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Jahwan-Oh-from-Karachi--Pakistan-e9givv/a-a15itvo"]
// };

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "",
  email_address: "jahwanoh@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
