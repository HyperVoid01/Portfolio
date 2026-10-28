/* Sierra Game Studio: all site content lives here.
   To add a game, copy one entry in GAMES, change its fields, and add its images to the assets folder. */
window.SIERRA = {
  "site": {
    "email": "sgramani1@gmail.com",
    "itch": "https://hypervoid01.itch.io/",
    "linkedin": "https://www.linkedin.com/in/sooriyan-gramani-740196435/",
    "github": "https://github.com/HyperVoid01",
    "url": "https://hypervoid01.github.io/Portfolio/",
    "cv": "Sooriyan_Gramani_CV.pdf",
    "portraitAlt": "",
    "portraitLines": [
      "Howzit! I program every Sierra game.",
      "Yes, I wrote the rat AI.",
      "Achievement unlocked: met the founder.",
      "Press ` to open the inspector.",
      "Try Ctrl + K. You'll find everything.",
      "Okay, okay. Go play Redline."
    ]
  },
  "home": {
    "strip": [
      "Unity", "C#", "Blender", "Campus Game Jam", "SAGJ2024", "Procedural generation",
      "Gameplay AI", "itch.io", "GitHub", "Game jams"
    ],
    "recognition": [
      {
        "kind": "Game jam",
        "event": "Campus Game Jam",
        "date": "March 2026",
        "game": "flow-state",
        "detail": "Made solo in 3 days. Theme: “Switch”.",
        "result": ""
      },
      {
        "kind": "Game jam",
        "event": "Campus Game Jam by YellowDot",
        "date": "",
        "game": "mzansi-rush",
        "detail": "Team of 3, 3 days. Theme: original games about African culture.",
        "result": ""
      },
      {
        "kind": "Game jam",
        "event": "SAGJ2024",
        "date": "2024",
        "game": "wild-focus",
        "detail": "Team of 5, 2 days. Theme: “Depth”.",
        "result": ""
      },
      {
        "kind": "Teaching",
        "event": "Game Development Tutor",
        "date": "2025",
        "game": "",
        "detail": "Tutored game development students at Emeris Umhlanga.",
        "result": ""
      }
    ],
    "stats": [],
    "pillars": [
      {
        "num": "01",
        "title": "Humour",
        "text": "Local jokes, absurd situations and a straight face. Mzansi Rush turns the daily taxi hustle into arcade comedy."
      },
      {
        "num": "02",
        "title": "Creativity",
        "text": "No two runs the same. Every Scuba Defense game digs a different seabed, and every game has its own look."
      },
      {
        "num": "03",
        "title": "Innovation",
        "text": "Small scopes, new ideas. Redline reworked a whole city chase into a procedural forest road in two weeks."
      }
    ],
    "timeline": [
      {
        "years": "2024–2026",
        "title": "BSc Computer Science, Game Design",
        "place": "Emeris Umhlanga (Vega School Durban)"
      },
      {
        "years": "2025",
        "title": "Game Development Tutor",
        "place": "Emeris Umhlanga (Vega School Durban)"
      },
      {
        "years": "2019–2023",
        "title": "National Senior Certificate",
        "place": "Greenbury Secondary School"
      }
    ],
    "tools": [
      "Unity",
      "C#",
      "Blender",
      "Rider",
      "Visual Studio",
      "GitHub",
      "Krita",
      "Photoshop",
      "Unreal",
      "Android Studio",
      "Firebase",
      "HTML"
    ]
  },
  "games": [
    {
      "slug": "scuba-defense",
      "title": "Scuba Defense",
      "genre": "First-person tower defense",
      "tagline": "Dig. Build. Survive the deep.",
      "blurb": "Mine a procedurally generated seabed, turn ore into towers and hold off waves of sea creatures.",
      "cardTags": [
        "Procedural",
        "Tower defense",
        "First person"
      ],
      "poster": "assets/posters/scuba-defense.jpg",
      "posterAlt": "Scuba Defense: a tower and a glowing jellyfish on the seabed",
      "role": "Designer and programmer",
      "roleNote": "I was the programmer and co-designer, working with Kairav.",
      "team": "Team of 2",
      "specs": [
        [
          "My role",
          "Designer and programmer"
        ],
        [
          "Genre",
          "First-person tower defense"
        ],
        [
          "Engine",
          "Unity"
        ],
        [
          "Team",
          "Team of 2"
        ],
        [
          "Duration",
          "About 4 months"
        ],
        [
          "Platform",
          "PC"
        ]
      ],
      "credits": [
        [
          "Sooriyan Gramani",
          "Programmer and designer"
        ],
        [
          "Kairav",
          "Designer, Audio Designer"
        ]
      ],
      "synopsis": "Deep beneath the ocean, a lone scuba diver guards a vital central base from waves of hostile sea creatures emerging from caves and swarming along winding paths. Armed with a pickaxe, the diver digs into the seabed to harvest ore, then converts it into towers. Every wave is tougher, and every dig reshapes the terrain, forcing players to balance mining, building and survival.",
      "brief": "Scuba Defense is an entertainment game focused on player experience and procedural generation. Every playthrough features a unique seabed, built with 3D noise and Marching Cubes, with spline-generated enemy paths and randomly placed ore. It targets casual to mid-core strategy and tower defense players who enjoy replayability and tactical planning.",
      "contribution": [
        "Designed the core loop of digging, mining, building and defending, and the way each wave escalates.",
        "Programmed the procedural seabed with 3D noise and Marching Cubes, including digging into the terrain.",
        "Built the spline-generated enemy paths, the random ore placement, tower placement and wave spawning.",
        "Implemented the first-person controls, pickaxe mining and the ore-to-tower economy."
      ],
      "tech": [
        [
          "Engine",
          [
            "Unity"
          ]
        ],
        [
          "Language",
          [
            "C#"
          ]
        ],
        [
          "Techniques",
          [
            "3D noise",
            "Marching Cubes",
            "Splines",
            "Procedural generation"
          ]
        ],
        [
          "Software",
          [
            "Git and GitHub"
          ]
        ]
      ],
      "core": "A single-player, first-person tower defense game. Players mine resources from procedurally generated seabed terrain, spend them on towers, and place them along winding enemy paths to survive escalating waves.",
      "loop": [
        [
          "Dig",
          "Swing the pickaxe to carve into the seabed. Every dig reshapes the terrain."
        ],
        [
          "Mine",
          "Harvest randomly placed ore from the ground."
        ],
        [
          "Build",
          "Spend ore on towers and place them along the winding enemy paths."
        ],
        [
          "Survive",
          "Hold the base against each tougher wave of sea creatures."
        ]
      ],
      "features": [
        "A unique seabed on every playthrough",
        "Enemy paths generated from splines",
        "Five resources to find and mine: iron, copper, pearls, wood and gold",
        "Dig with the pickaxe (left mouse button) to mine and reshape the terrain",
        "A tower shop with the Bubble Gun, Harpoon and Lazer Gun, each with its own resource cost",
        "Escalating waves of creatures from the caves, with a countdown to the next wave"
      ],
      "systems": [
        [
          "Procedural seabed",
          "3D noise · Marching Cubes",
          "Terrain built from 3D noise and the Marching Cubes algorithm, so every game has a different seabed you can dig into."
        ],
        [
          "Enemy paths",
          "Splines",
          "Winding paths generated from splines that creatures follow from the caves to your base."
        ],
        [
          "Resources and towers",
          "Mining · Economy",
          "Iron, copper, pearls, wood and gold pay for the Bubble Gun, Harpoon and Lazer Gun in the tower shop, so digging and defending compete for your time."
        ],
        [
          "Wave system",
          "Spawning · Difficulty",
          "Waves spawn from the caves and grow tougher each round."
        ]
      ],
      "shots": [
        {
          "src": "assets/shots/scuba-defense-3.jpg",
          "alt": "Scuba Defense: the main menu over an underwater shipwreck scene"
        },
        {
          "src": "assets/shots/scuba-defense-2.jpg",
          "alt": "Scuba Defense: first-person view of a shipwreck with a pickaxe and a countdown to the next wave"
        },
        {
          "src": "assets/shots/scuba-defense-1.jpg",
          "alt": "Scuba Defense: the tower shop with five resources and the Bubble Gun, Harpoon and Lazer Gun"
        }
      ],
      "itch": "https://hypervoid01.itch.io/scuba-defense",
      "itchQr": "assets/qr/scuba-defense-itch.png",
      "demo": "https://youtu.be/IxUBI6fm_gI",
      "demoQr": "assets/qr/scuba-defense-demo.png",
      "repo": "https://github.com/HyperVoid01/GADE7322"
    },
    {
      "slug": "redline",
      "title": "Redline",
      "genre": "Arcade racing · Survival driving",
      "tagline": "Midnight. One road. Something is chasing you.",
      "blurb": "Drift a night-time forest road for points while a gun-armed car hunts you to the finish.",
      "cardTags": [
        "Racing",
        "Procedural",
        "Two-week project"
      ],
      "poster": "assets/posters/redline.jpg",
      "posterAlt": "Redline: an AE86 drifting on a night-time forest road",
      "role": "Solo developer: everything",
      "roleNote": "I made Redline on my own, from design to the finished build.",
      "team": "Solo",
      "specs": [
        [
          "My role",
          "Solo developer: everything"
        ],
        [
          "Genre",
          "Arcade racing · Survival driving"
        ],
        [
          "Engine",
          "Unity"
        ],
        [
          "Team",
          "Solo"
        ],
        [
          "Duration",
          "2 weeks"
        ],
        [
          "Platform",
          "Windows"
        ]
      ],
      "credits": [
        [
          "Sooriyan Gramani",
          "Everything: design, programming and every other discipline"
        ]
      ],
      "synopsis": "Midnight. A forest road twists into the dark, lit only by your headlights, the odd street lamp and the glare of a pursuer closing in behind. An enemy car armed with guns hunts you for the entire run, and you can't fight back. Hold your nerve, drift through the bends, rack up points and reach the end alive.",
      "brief": "Redline is a two-week Unity project focused on player experience: speed, tension and atmosphere. Built as a scoped-down rework of an earlier city chase game, it uses a procedural track, minimal assets and tight car handling. It is aimed at casual and arcade racing fans who enjoy quick, replayable, high-score-driven runs.",
      "contribution": [
        "Designed the whole experience: speed, tension and atmosphere, in a deliberately small scope.",
        "Reworked an earlier city chase game into a procedural forest road, with minimal assets.",
        "Programmed the car handling and the drift scoring.",
        "Built the enemy car that chases the player for the entire run, and the lighting that sets the night-time mood."
      ],
      "tech": [
        [
          "Engine",
          [
            "Unity"
          ]
        ],
        [
          "Language",
          [
            "C#"
          ]
        ],
        [
          "Techniques",
          [
            "Procedural generation",
            "NavMesh pathfinding",
            "Vehicle handling",
            "Lighting"
          ]
        ],
        [
          "Software",
          [
            "Git and GitHub"
          ]
        ]
      ],
      "core": "A single-player arcade racing and survival driving game. Players speed down a procedurally generated night-time forest road in an AE86, drifting for points while outrunning a gun-armed enemy car chasing them to the finish.",
      "loop": [
        [
          "Drive",
          "Race down a winding, procedurally generated forest road at night."
        ],
        [
          "Drift",
          "Slide through the bends to rack up points."
        ],
        [
          "Evade",
          "Stay ahead of the gun-armed car that chases you the whole way."
        ],
        [
          "Finish",
          "Reach the end alive and chase a higher score."
        ]
      ],
      "features": [
        "A procedurally generated night-time forest road",
        "Tight, drift-friendly handling in an AE86, with a handbrake",
        "Points for drifting, shown in a live score with a speedometer",
        "A gun-armed enemy that shoots at you for the entire run: reach the end with your car intact",
        "Switchable camera, including a cockpit view with working gauges and a rear-view mirror",
        "Settings for audio, mouse and stick sensitivity, steering assist and traction control",
        "Keyboard and controller support",
        "Moody lighting: headlights, street lamps and a pursuer's glare"
      ],
      "systems": [
        [
          "Procedural track",
          "Generation",
          "A twisting forest road generated for every run, built from a minimal set of assets."
        ],
        [
          "Car handling",
          "Drift · Scoring",
          "Handling tuned for tension and drift control, with points awarded for sliding through bends."
        ],
        [
          "Enemy chase AI",
          "Pursuit · NavMesh",
          "A gun-armed car that follows the road and pursues the player for the whole run."
        ],
        [
          "Atmosphere",
          "Lighting · Mood",
          "Headlights, street lamps and the glare of the pursuer build the tension of the chase."
        ]
      ],
      "shots": [
        {
          "src": "assets/shots/redline-1.jpg",
          "alt": "Redline: the AE86 drifting at night while a red beam from the enemy sweeps the road, with score and speedometer"
        },
        {
          "src": "assets/shots/redline-2.jpg",
          "alt": "Redline: the cockpit view with dashboard gauges and a rear-view mirror"
        },
        {
          "src": "assets/shots/redline-3.jpg",
          "alt": "Redline: the settings menu with audio, sensitivity, steering and traction control options"
        }
      ],
      "itch": "https://hypervoid01.itch.io/redline",
      "itchQr": "assets/qr/redline-itch.png",
      "demo": "https://youtu.be/owozCRsJJdQ",
      "demoQr": "assets/qr/redline-demo.png",
      "repo": "https://github.com/HyperVoid01/Redline"
    },
    {
      "slug": "rat-attack",
      "title": "Rat Attack",
      "genre": "Cooking · Restaurant management",
      "tagline": "Clean kitchen, happy customers. Dirty kitchen, rats.",
      "blurb": "Cook, clean and fight off rats to rebuild a neglected neighbourhood pizzeria.",
      "cardTags": [
        "First person",
        "Management",
        "Hygiene"
      ],
      "poster": "assets/posters/rat-attack.jpg",
      "posterAlt": "Rat Attack: a chef runs through a pizzeria kitchen while rats steal pizza",
      "role": "Designer and programmer",
      "roleNote": "I was the programmer and co-designer on a team of five.",
      "team": "Team of 5",
      "specs": [
        [
          "My role",
          "Designer and programmer"
        ],
        [
          "Genre",
          "First-person cooking · Restaurant management"
        ],
        [
          "Engine",
          "Unity"
        ],
        [
          "Team",
          "Team of 5"
        ],
        [
          "Duration",
          "About 6 months"
        ],
        [
          "Platform",
          "PC"
        ]
      ],
      "credits": [
        [
          "Sooriyan Gramani",
          "Programmer and designer"
        ],
        [
          "Kairav",
          "Designer, Audio Designer"
        ],
        [
          "Ethan",
          "3D Artist"
        ],
        [
          "Ceili",
          "3D Artist, 3D Animator"
        ],
        [
          "Louise",
          "2D Artist"
        ]
      ],
      "synopsis": "When Armaan, a newly graduated chef, inherits a neglected neighbourhood pizzeria, he must rebuild the business from the ground up. With advice from the previous manager, players balance cooking orders and satisfying customers with cleaning the premises, eliminating rat infestations and preparing for surprise hygiene inspections. The goal: turn a rundown restaurant into a clean, efficient and highly rated pizzeria.",
      "brief": "The project raises awareness of food hygiene and the consequences of inadequate sanitation in food-service establishments. Designed for players aged 13 to 18, Rat Attack presents these real-world concerns through engaging gameplay rather than a traditional educational format. Players discover how unsanitary conditions, contamination and uncontrolled pests can damage a restaurant's reputation and put customers at risk.",
      "contribution": [
        "Designed a hygiene-awareness loop for players aged 13 to 18: cook, serve, clean and keep the rats out.",
        "Programmed the rat AI: detection, stealing and eating pizzas, and fleeing from the player.",
        "Built the order station where customers queue and the player serves whoever is at the front.",
        "Implemented the star-rating reputation system, the grab-and-rotate item pickup, the camera that pans to stations and the player animation."
      ],
      "tech": [
        [
          "Engine",
          [
            "Unity"
          ]
        ],
        [
          "Language",
          [
            "C#"
          ]
        ],
        [
          "Techniques",
          [
            "NavMesh agents",
            "Sphere-cast detection",
            "AI state logic",
            "Interaction systems"
          ]
        ],
        [
          "Software",
          [
            "Git and GitHub"
          ]
        ]
      ],
      "core": "A PC single-player game that merges first-person cooking action with restaurant management and pest control. Players prepare meals, fulfil customer orders, keep the kitchen clean and deal with rats that threaten the restaurant.",
      "loop": [
        [
          "Serve",
          "Take orders from the customers queuing at the counter."
        ],
        [
          "Cook",
          "Make pizzas and get them out of the oven and onto the counter."
        ],
        [
          "Clean and defend",
          "Clear the mess and stop the rats stealing and contaminating food."
        ],
        [
          "Upgrade",
          "Spend your earnings on better equipment, cleaning supplies and pest control."
        ]
      ],
      "features": [
        "First-person cooking with grab, move and rotate item handling",
        "Customers who queue and wait for their orders",
        "Rats that steal and eat food unless you scare them away",
        "Dead rats and mess to clean up, so hygiene affects your reputation",
        "Surprise hygiene inspections",
        "Pest control bought online at RatAway.com: rat spray, mouse traps, poison and a shotgun with ammo",
        "A five-star rating and a cash balance in rand to show how well you are doing"
      ],
      "systems": [
        [
          "Rat AI",
          "NavMeshAgent · Detection",
          "Rats spot pizzas with a sphere cast, path to them, steal and eat them, and flee when the player gets close."
        ],
        [
          "Order station",
          "Customer queue",
          "Customers line up using NavMeshAgents and the player takes the order of whoever is at the front."
        ],
        [
          "Reputation",
          "Star rating",
          "A star rating fed by customer outcomes, with thresholds that decide how much each customer moves your score."
        ],
        [
          "Item pickup",
          "Aim and grab",
          "Aim at an object and hold the mouse button to grab it, then move and rotate it before letting go."
        ],
        [
          "Pest-control shop",
          "In-game computer",
          "The kitchen computer opens RatAway.com, where earnings buy rat spray, traps, poison, a shotgun and ammo."
        ]
      ],
      "shots": [
        {
          "src": "assets/shots/rat-attack-1.jpg",
          "alt": "Rat Attack: customers queue in the dim pizzeria, with the orders notepad and a two-star rating"
        },
        {
          "src": "assets/shots/rat-attack-2.jpg",
          "alt": "Rat Attack: a customer eats at a checkered table while dead rats lie on the floor"
        },
        {
          "src": "assets/shots/rat-attack-3.jpg",
          "alt": "Rat Attack: the player is prompted to press E to clean up a dead rat"
        },
        {
          "src": "assets/shots/rat-attack-4.jpg",
          "alt": "Rat Attack: the player holds a shotgun as rats scurry along the wall"
        },
        {
          "src": "assets/shots/rat-attack-5.jpg",
          "alt": "Rat Attack: the RatAway.com shop selling rat spray, a mouse trap, poison, a shotgun and ammo"
        }
      ],
      "itch": "https://hypervoid01.itch.io/rat-attack",
      "itchQr": "assets/qr/rat-attack-itch.png",
      "demo": "https://youtu.be/ZgdPMjUzDBs",
      "demoQr": "assets/qr/rat-attack-demo.png",
      "repo": "https://github.com/HyperVoid01/RatAttack"
    },
    {
      "slug": "mzansi-rush",
      "title": "Mzansi Rush",
      "genre": "Arcade driving · Endless runner",
      "tagline": "The daily taxi hustle, at full speed.",
      "blurb": "Drive a South African minibus taxi, pick up passengers and dodge potholes before the clock runs out.",
      "cardTags": [
        "Game jam",
        "Arcade",
        "South African"
      ],
      "poster": "assets/posters/mzansi-rush.jpg",
      "posterAlt": "Mzansi Rush: a white minibus taxi on a city road",
      "role": "Programmer",
      "roleNote": "I was the programmer on a three-day game jam team.",
      "team": "Team of 3",
      "specs": [
        [
          "My role",
          "Programmer"
        ],
        [
          "Genre",
          "Arcade driving · Endless runner"
        ],
        [
          "Engine",
          "Unity"
        ],
        [
          "Team",
          "Team of 3"
        ],
        [
          "Duration",
          "3 days (Campus Game Jam)"
        ],
        [
          "Platform",
          "PC"
        ]
      ],
      "credits": [
        [
          "Sooriyan Gramani",
          "Programmer"
        ],
        [
          "Kairav",
          "Designer, Audio Designer"
        ],
        [
          "Ethan",
          "3D Artist"
        ]
      ],
      "synopsis": "Take on the daily hustle of a South African taxi driver, where busy roads, impatient passengers and unexpected hazards keep every journey challenging. Navigate traffic, steer clear of potholes, and deliver passengers to their destinations before the countdown reaches zero. Each successful trip earns money to improve the taxi and unlock music inspired by South African culture.",
      "brief": "Created for the Campus Game Jam, a three-day game jam organised by YellowDot, Mzansi Rush explored the theme of developing original games that represent African culture and experiences. The project turns the fast-moving world of South African taxi transport into an arcade experience with quick decision-making, passenger management and vehicle progression. Its local identity appeals to South African players while offering international players a fresh take on arcade driving.",
      "contribution": [
        "Programmed the minibus taxi driving and the endless road.",
        "Built the obstacles and potholes, the passenger pickup and delivery, and the countdown timer.",
        "Implemented the earnings and the cab upgrades (engine, rims and radio) with their Top Speed, Braking and Handling stats, plus unlockable South African music.",
        "Solved problems fast under jam pressure: problems always arise, and you have to adapt."
      ],
      "tech": [
        [
          "Engine",
          [
            "Unity"
          ]
        ],
        [
          "Language",
          [
            "C#"
          ]
        ],
        [
          "Techniques",
          [
            "Endless runner systems",
            "Vehicle controller",
            "Timers and scoring",
            "Progression and upgrades"
          ]
        ],
        [
          "Software",
          [
            "Git and GitHub"
          ]
        ]
      ],
      "core": "A PC single-player arcade driving game that combines high-speed navigation with endless-runner mechanics. Players control a minibus taxi, avoid obstacles, collect passengers and complete journeys before time runs out.",
      "loop": [
        [
          "Drive",
          "Weave through unpredictable roads and traffic at speed."
        ],
        [
          "Collect",
          "Pick up passengers along the way."
        ],
        [
          "Deliver",
          "Get everyone to their destination before the countdown hits zero."
        ],
        [
          "Upgrade",
          "Spend your earnings on taxi performance and new music."
        ]
      ],
      "features": [
        "Minibus taxi driving with a strong South African identity",
        "Passengers to collect and deliver",
        "Potholes and other road hazards to avoid",
        "A countdown timer on every journey",
        "Money earned from trips to buy Engine, Rims and Radio upgrades",
        "Unlockable music inspired by South African culture",
        "Colourful visuals and local humour"
      ],
      "systems": [
        [
          "Road and hazards",
          "Endless runner",
          "An endless road filled with unpredictable obstacles such as potholes."
        ],
        [
          "Passengers and fares",
          "Collect · Deliver",
          "Passengers are picked up and delivered, and each successful trip pays out."
        ],
        [
          "Timer",
          "Countdown",
          "Every journey runs against a countdown that keeps the pressure on."
        ],
        [
          "Upgrades and music",
          "Progression",
          "Earnings buy better taxi performance and unlock South African music."
        ]
      ],
      "shots": [
        {
          "src": "assets/shots/mzansi-rush-1.jpg",
          "alt": "Mzansi Rush: the cab upgrades screen with a white minibus taxi, Engine, Rims and Radio upgrades, and Top Speed, Braking and Handling bars"
        },
        {
          "src": "assets/shots/mzansi-rush-2.jpg",
          "alt": "Mzansi Rush: driving the taxi down a city street toward a bus stop with waiting passengers, with passengers, score and speed on screen"
        },
        {
          "src": "assets/shots/mzansi-rush-3.jpg",
          "alt": "Mzansi Rush: the game over screen with the crashed taxi and Try Again and Main Menu buttons"
        }
      ],
      "itch": "https://hypervoid01.itch.io/mzansi-rush",
      "itchQr": "assets/qr/mzansi-rush-itch.png",
      "demo": "https://youtu.be/VuqAFrd9l0c",
      "demoQr": "assets/qr/mzansi-rush-demo.png",
      "repo": "https://github.com/HyperVoid01/Racer"
    },
    {
      "slug": "flow-state",
      "title": "Flow State",
      "genre": "Action · First-person maze runner",
      "tagline": "Enter the maze. Shift your reality. Stay in the flow.",
      "blurb": "Run a procedurally generated labyrinth that exists in two dimensions at once, and shift reality to find the exit.",
      "cardTags": [
        "Procedural",
        "Action",
        "Game jam"
      ],
      "poster": "assets/posters/flow-state.png",
      "posterAlt": "Flow State: a maze split between a blue dimension and a red dimension",
      "role": "Solo developer: everything",
      "roleNote": "I made Flow State on my own for a game jam.",
      "team": "Solo",
      "specs": [
        [
          "My role",
          "Solo developer: everything"
        ],
        [
          "Genre",
          "Action · Maze runner"
        ],
        [
          "Engine",
          "Unity"
        ],
        [
          "Team",
          "Solo"
        ],
        [
          "Duration",
          "3 days (Campus Game Jam)"
        ],
        [
          "Platform",
          "Windows"
        ]
      ],
      "credits": [
        [
          "Sooriyan Gramani",
          "Everything: design, programming and every other discipline"
        ]
      ],
      "synopsis": "Explore a newly generated maze, find a hidden key and reach the single exit, avoiding or fighting the enemy robots on the way. The twist: reality is not fixed, and you can switch between two overlapping states of the maze to reveal different paths, walls and enemies.",
      "brief": "Flow State was built in three days for the Campus Game Jam in March 2026, where the theme was “Switch”. The game answers it with a dual-state maze: the player switches between two overlapping dimensions, and each one changes the walls, paths and enemies.",
      "contribution": [
        "Designed the two-state mechanic and how switching costs resources.",
        "Programmed the procedural maze generation, including the hidden key and single exit.",
        "Built the state-switching system, where walls, paths and enemies change between dimensions.",
        "Implemented the enemy robots, the combat and the player controls, then published the build on itch.io."
      ],
      "tech": [
        [
          "Engine",
          [
            "Unity"
          ]
        ],
        [
          "Language",
          [
            "C#"
          ]
        ],
        [
          "Techniques",
          [
            "Procedural maze generation",
            "Enemy AI",
            "State switching",
            "First-person controller"
          ]
        ],
        [
          "Software",
          [
            "Git and GitHub"
          ]
        ]
      ],
      "core": "A fast-paced first-person maze runner set in a procedurally generated labyrinth that spans two overlapping dimensions. Switching between them changes what is solid and who is hunting you, but every switch costs resources.",
      "loop": [
        [
          "Explore",
          "Move through a freshly generated maze looking for the hidden key."
        ],
        [
          "Shift",
          "Switch state to reveal new paths, walls and enemies."
        ],
        [
          "Fight or flee",
          "Attack the enemy robots or slip past them. Kills let you shift."
        ],
        [
          "Escape",
          "Reach the single exit. If you die, the maze resets."
        ]
      ],
      "features": [
        "A two-layer world where geometry, collisions and enemies change between states",
        "Procedurally generated mazes, so every run is different",
        "Resource-based state switching",
        "Enemy robots to avoid or fight",
        "A hidden key to find before the exit opens",
        "Simple controls: WASD to move, mouse to look, left click to attack, E to switch state"
      ],
      "systems": [
        [
          "Procedural mazes",
          "Generation",
          "A new labyrinth is generated every run, including a hidden key and a single exit."
        ],
        [
          "State switching",
          "Two dimensions",
          "Switching swaps which walls, paths and enemies exist, so one maze plays like two."
        ],
        [
          "Enemy robots",
          "AI",
          "Enemies that patrol the maze and change with the active state."
        ],
        [
          "Resources",
          "Switch cost",
          "Switching costs resources, and killing enemies lets you shift again."
        ]
      ],
      "shots": [
        {
          "src": "assets/shots/flow-state-1.jpg",
          "alt": "Flow State: first-person view of a teal maze with a sword, a stamina bar and a health bar"
        },
        {
          "src": "assets/shots/flow-state-2.jpg",
          "alt": "Flow State: a robot enemy up close in the red state of the maze, with an exit sign behind it"
        },
        {
          "src": "assets/shots/flow-state-3.jpg",
          "alt": "Flow State: a tank-tracked robot with a 100/100 health label in the red maze"
        }
      ],
      "itch": "https://hypervoid01.itch.io/flow-state",
      "itchQr": "assets/qr/flow-state-itch.png",
      "demo": "https://youtu.be/4fJT717dlJA",
      "demoQr": "assets/qr/flow-state-demo.png",
      "repo": "https://github.com/HyperVoid01/FlowState"
    },
    {
      "slug": "gridlock",
      "title": "Gridlock",
      "genre": "Tower defense · Strategy",
      "tagline": "Power your defences with the right energy.",
      "blurb": "A futuristic tower defense game where every tower needs energy, and the energy you choose is part of the strategy.",
      "cardTags": [
        "Tower defense",
        "Educational",
        "Strategy"
      ],
      "poster": "assets/posters/gridlock.png",
      "posterAlt": "Gridlock: the main menu in front of towers and robots",
      "role": "Designer and programmer",
      "roleNote": "I was the programmer and co-designer, working with Kairav and Ethan.",
      "team": "Team of 3",
      "specs": [
        [
          "My role",
          "Designer and programmer"
        ],
        [
          "Genre",
          "Tower defense · Strategy"
        ],
        [
          "Engine",
          "Unity"
        ],
        [
          "Team",
          "Team of 3"
        ],
        [
          "Duration",
          "About 4 months"
        ],
        [
          "Platform",
          "PC"
        ]
      ],
      "credits": [
        [
          "Sooriyan Gramani",
          "Programmer and designer"
        ],
        [
          "Kairav",
          "Designer, Audio Designer"
        ],
        [
          "Ethan",
          "3D Artist"
        ]
      ],
      "synopsis": "A futuristic city has built robots through failed experiments, and now they are hungry for power. They are coming for the city's power supply, and you are its defender. Build generators and towers, balance the energy you make against the energy you spend, and hold off every wave before the robots drain the city dry.",
      "brief": "Gridlock is a futuristic, minimalist tower defense game designed around the UN Sustainable Development Goal of affordable and clean energy. Every tower has to be powered, so choosing between clean and harmful energy becomes part of the strategy, and players learn the risks of dangerous energy by playing.",
      "contribution": [
        "Designed towers that depend on specific energy sources, so the game teaches sustainable energy through play.",
        "Programmed tower placement and the energy sources that power each tower: solar, hydro, wind and combustion.",
        "Built the wave-based enemy spawning.",
        "Managed my time across design and code to deliver the game on schedule."
      ],
      "tech": [
        [
          "Engine",
          [
            "Unity"
          ]
        ],
        [
          "Language",
          [
            "C#"
          ]
        ],
        [
          "Techniques",
          [
            "Tower systems",
            "Wave spawning",
            "Energy and resource logic"
          ]
        ],
        [
          "Software",
          [
            "Git and GitHub"
          ]
        ]
      ],
      "core": "A futuristic tower defense game with wave-based enemies. Towers consume energy from solar, hydro, wind and combustion sources, so players plan their power supply as carefully as their defences.",
      "loop": [
        [
          "Plan power",
          "Choose which energy sources to build."
        ],
        [
          "Place towers",
          "Put towers where they can use that energy."
        ],
        [
          "Survive waves",
          "Hold off each wave of enemies."
        ],
        [
          "Adapt",
          "Rebalance your energy mix as the waves get harder."
        ]
      ],
      "features": [
        "Towers that need energy, so power production and consumption must balance",
        "Four energy sources: solar, hydro, wind and combustion",
        "A build stage before every round, then a timed wave of tank and walker robots",
        "Energy income each round, shown beside the power supply's health",
        "A futuristic, minimal look with blue and green for clean energy and red for dangerous energy",
        "Teaches clean energy through play"
      ],
      "systems": [
        [
          "Energy sources",
          "Solar · Hydro · Wind · Combustion",
          "Towers consume energy, so what you generate and what you spend decide how long you survive. Dangerous energy is strong but costly."
        ],
        [
          "Wave spawning",
          "Enemies",
          "Enemies arrive in waves that test your defences and your power supply."
        ],
        [
          "Tower placement",
          "Strategy",
          "Where you place towers and what powers them decide how well you hold the line."
        ]
      ],
      "shots": [
        {
          "src": "assets/shots/gridlock-1.jpg",
          "alt": "Gridlock: the build stage, with a Towers and Generators tutorial and a tray of towers and energy generators"
        },
        {
          "src": "assets/shots/gridlock-2.jpg",
          "alt": "Gridlock: round 1, with towers and a solar panel firing at red tank and walker robots"
        },
        {
          "src": "assets/shots/gridlock-3.jpg",
          "alt": "Gridlock: round 4, with a wind turbine, solar panels and many towers holding off a larger wave"
        }
      ],
      "itch": "https://hypervoid01.itch.io/gridlock",
      "itchQr": "assets/qr/gridlock-itch.png",
      "demo": "https://youtu.be/eJdNGiqs3Mg",
      "demoQr": "assets/qr/gridlock-demo.png",
      "repo": "https://github.com/HyperVoid01/Gridlock"
    },
    {
      "slug": "surge",
      "title": "Surge",
      "genre": "3D platformer · Endless runner",
      "tagline": "Rooftop to rooftop, never slowing down.",
      "blurb": "Hop from rooftop to rooftop in a 3D endless runner, grabbing power-ups and dodging obstacles for as long as you can survive.",
      "cardTags": [
        "Endless runner",
        "3D platformer",
        "Parkour"
      ],
      "poster": "assets/posters/surge.png",
      "posterAlt": "Surge: the game title in glowing blue letters",
      "role": "Solo developer: everything",
      "roleNote": "I made Surge on my own over about four months.",
      "team": "Solo",
      "specs": [
        [
          "My role",
          "Solo developer: everything"
        ],
        [
          "Genre",
          "3D platformer · Endless runner"
        ],
        [
          "Engine",
          "Unity"
        ],
        [
          "Team",
          "Solo"
        ],
        [
          "Duration",
          "About 4 months"
        ],
        [
          "Platform",
          "Windows"
        ]
      ],
      "credits": [
        [
          "Sooriyan Gramani",
          "Everything: design, programming and every other discipline"
        ]
      ],
      "synopsis": "Run across the tops of buildings, leaping from one rooftop to the next and parkouring around everything in your way. Pickups spawn randomly on every rooftop and give you buffs such as speed boosts, double jumps and phasing, so you can keep going faster or more easily. Hit an obstacle or fall off a platform and it is over, so survive for as long as you can.",
      "brief": "Surge was built solo over about four months, in 2024. The goal was an endless runner with a clear skill ceiling: parkour across rooftops, where randomly generated obstacles and pickups keep every run different. The biggest lesson was to focus on the main aspects first, before working on smaller details.",
      "contribution": [
        "Designed a rooftop endless runner built around parkour, randomly generated obstacles and power-up pickups.",
        "Programmed the run, the strafing and jumping controls, and the collision and fall-off game over.",
        "Built the pickup system: speed boosts, double jumps, phasing and more, spawned randomly on each rooftop.",
        "Built the random obstacle and pickup spawning at each rooftop's spawn points, plus the score, completed-levels counter and leaderboard.",
        "Learned to focus on the main aspects first, before working on the smaller details."
      ],
      "tech": [
        [
          "Engine",
          [
            "Unity"
          ]
        ],
        [
          "Language",
          [
            "C#"
          ]
        ],
        [
          "Techniques",
          [
            "Endless runner systems",
            "Random obstacle and pickup spawning",
            "Power-up and buff logic",
            "Leaderboard and score tracking"
          ]
        ],
        [
          "Software",
          [
            "Git and GitHub"
          ]
        ]
      ],
      "core": "A 3D endless runner where you traverse from building top to building top, using parkour to get around randomly generated obstacles. Power-ups found along the way help you progress, and the aim is to survive as long as possible.",
      "loop": [
        [
          "Run",
          "Keep moving and leap from rooftop to rooftop."
        ],
        [
          "Dodge",
          "Parkour around obstacles that are generated differently every run."
        ],
        [
          "Power up",
          "Grab random pickups for speed boosts, double jumps, phasing and more."
        ],
        [
          "Survive",
          "One collision or fall ends the run, so survive as long as you can."
        ]
      ],
      "features": [
        "3D rooftop parkour endless runner",
        "Randomly generated obstacles and pickups at each rooftop's spawn points",
        "Pickups with buffs: speed boosts, double jumps, phasing and more",
        "A run that ends if you hit an obstacle or fall off a platform",
        "A live score, a completed-levels counter and a compass",
        "A leaderboard of players, levels completed and score",
        "Simple controls: A and D to strafe, P to use a pickup"
      ],
      "systems": [
        [
          "Rooftop run",
          "Endless runner",
          "A continuous run across rooftops that keeps the player moving."
        ],
        [
          "Random spawning",
          "Procedural",
          "Obstacles and pickups appear at spawn points on each rooftop, so no two runs match."
        ],
        [
          "Pickups",
          "Power-ups",
          "Speed boosts, double jumps, phasing and more, to progress faster or more easily."
        ],
        [
          "Game over",
          "Survival",
          "Colliding with an obstacle or falling off a platform ends the run."
        ]
      ],
      "shots": [
        {
          "src": "assets/shots/surge-1.jpg",
          "alt": "Surge: the leaderboard screen with Player, Levels Completed and Score columns"
        },
        {
          "src": "assets/shots/surge-2.jpg",
          "alt": "Surge: running along a rooftop toward chevron markers, with score, completed levels and a compass"
        },
        {
          "src": "assets/shots/surge-3.jpg",
          "alt": "Surge: a helicopter hovering over the rooftops, with a power-up icon showing three charges"
        }
      ],
      "itch": "https://hypervoid01.itch.io/surge",
      "itchQr": "assets/qr/surge-itch.png",
      "demo": "https://youtu.be/9wdBxtuezbE",
      "demoQr": "assets/qr/surge-demo.png",
      "repo": "https://github.com/HyperVoid01/Surge"
    },
    {
      "slug": "wild-focus",
      "title": "Wild Focus",
      "genre": "Puzzle · Photography",
      "tagline": "Steady hands. Perfect shot.",
      "blurb": "Play a struggling photographer with shaky hands who has 15 shots to build a wildlife portfolio.",
      "cardTags": [
        "Puzzle",
        "Photography",
        "Timing"
      ],
      "poster": "assets/posters/wild-focus.png",
      "posterAlt": "Wild Focus: the title with illustrated animals in camera viewfinder corners",
      "role": "Designer and programmer",
      "roleNote": "I was the programmer and co-designer on a team of five.",
      "team": "Team of 5",
      "specs": [
        [
          "My role",
          "Designer and programmer"
        ],
        [
          "Genre",
          "Puzzle · Photography"
        ],
        [
          "Engine",
          "Unity"
        ],
        [
          "Team",
          "Team of 5"
        ],
        [
          "Duration",
          "2 days (SAGJ2024)"
        ],
        [
          "Platform",
          "PC"
        ]
      ],
      "credits": [
        [
          "Sooriyan Gramani",
          "Programmer and designer"
        ],
        [
          "Kairav",
          "Designer, Audio Designer"
        ],
        [
          "Ethan",
          "User Interface"
        ],
        [
          "Ceili",
          "2D Artist"
        ],
        [
          "Louise",
          "2D Artist"
        ]
      ],
      "synopsis": "A desperate photographer needs to take stellar photos of animals around the world to support himself. If his portfolio is good enough, he could earn a place at the top photography academy.",
      "brief": "Wild Focus was made in two days for SAGJ2024, a game jam whose theme was “Depth”.",
      "contribution": [
        "Designed the 15-photo limit, the shaky-hand timing and the animal to-do list.",
        "Programmed the free-moving camera and the scroll zoom.",
        "Built the hand-shake and the photo capture, so every shot depends on timing.",
        "Implemented the shot list that tracks which animals are in the portfolio."
      ],
      "tech": [
        [
          "Engine",
          [
            "Unity"
          ]
        ],
        [
          "Language",
          [
            "C#"
          ]
        ],
        [
          "Techniques",
          [
            "Camera control",
            "Timing mechanics",
            "Objective tracking"
          ]
        ],
        [
          "Software",
          [
            "Git and GitHub"
          ]
        ]
      ],
      "core": "You play a struggling photographer who must shoot animals in their natural habitats to build a portfolio. Aim the camera and zoom in, then time each shot around his shaky hands, with only 15 photos to spend.",
      "loop": [
        [
          "Scout",
          "Move the camera around the habitat to find your subject."
        ],
        [
          "Zoom",
          "Zoom in and out to frame the perfect shot."
        ],
        [
          "Time it",
          "Wait for the shaky hands to settle, then take the photo."
        ],
        [
          "Build the portfolio",
          "Tick animals off the to-do list before the 15 photos run out."
        ]
      ],
      "features": [
        "A 15-photo limit for the whole portfolio",
        "Shaky hands that make timing matter",
        "A to-do list of specific animals to photograph",
        "A world map of habitats to travel between",
        "A camera viewfinder view and a portfolio book that collects your photos",
        "Hand-drawn 2D animal art",
        "Zoom in and out to frame each shot",
        "Simple controls: WASD to move the camera, space to shoot, scroll to zoom"
      ],
      "systems": [
        [
          "Camera and zoom",
          "Controls",
          "A free-moving camera with scroll zoom for framing shots."
        ],
        [
          "Hand shake",
          "Timing",
          "The photographer's shaky hands make every shot a timing puzzle."
        ],
        [
          "Shot list",
          "Objectives",
          "A to-do list of animals the portfolio must include."
        ],
        [
          "Photo budget",
          "Limits",
          "Only 15 photos, so every shot has to count."
        ]
      ],
      "shots": [
        {
          "src": "assets/shots/wild-focus-1.jpg",
          "alt": "Wild Focus: the title screen with illustrated animals and camera viewfinder corners"
        },
        {
          "src": "assets/shots/wild-focus-2.jpg",
          "alt": "Wild Focus: the home page, a world map with routes between continents and a portfolio, a camera and a magnifying glass on the desk"
        },
        {
          "src": "assets/shots/wild-focus-3.jpg",
          "alt": "Wild Focus: framing a lion in the camera viewfinder"
        },
        {
          "src": "assets/shots/wild-focus-4.jpg",
          "alt": "Wild Focus: the portfolio book showing the photos taken so far"
        }
      ],
      "itch": "https://hypervoid01.itch.io/wild-focus",
      "itchQr": "assets/qr/wild-focus-itch.png",
      "demo": "https://youtu.be/Y0RU9pzeKQ4",
      "demoQr": "assets/qr/wild-focus-demo.png",
      "repo": ""
    }
  ]
};
