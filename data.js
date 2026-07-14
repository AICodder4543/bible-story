// Content for the Bible History timeline — written simply for kids.
// Edit this file to change eras, events, characters, colors or icons —
// the website (app.js) reads this array and builds everything automatically.

// Maps an emoji (used as an era/character "icon") to a glossy 3D-style image.
// Source: Microsoft's fluentui-emoji project (MIT license), served via jsDelivr.
// If an emoji has no entry here, the plain flat emoji is used instead — see app.js.
const ICONS_3D = {
  "🌍": "https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/Globe%20showing%20europe-africa/3D/globe_showing_europe-africa_3d.png",
  "🌊": "https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/Water%20wave/3D/water_wave_3d.png",
  "👑": "https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/Crown/3D/crown_3d.png",
  "⛓️": "https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/Chains/3D/chains_3d.png",
  "✝️": "https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/Latin%20cross/3D/latin_cross_3d.png",
  "🔥": "https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/Fire/3D/fire_3d.png",
  "🍎": "https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/Red%20apple/3D/red_apple_3d.png",
  "🚢": "https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/Ship/3D/ship_3d.png",
  "⭐": "https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/Star/3D/star_3d.png",
  "🐑": "https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/Ewe/3D/ewe_3d.png",
  "🌾": "https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/Sheaf%20of%20rice/3D/sheaf_of_rice_3d.png",
  "🕯️": "https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/Candle/3D/candle_3d.png",
  "🎨": "https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/Artist%20palette/3D/artist_palette_3d.png",
  "🦁": "https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/Lion/3D/lion_3d.png",
  "⚔️": "https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/Crossed%20swords/3D/crossed_swords_3d.png",
  "🎵": "https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/Musical%20note/3D/musical_note_3d.png",
  "🏛️": "https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/Classical%20building/3D/classical_building_3d.png",
  "😢": "https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/Loudly%20crying%20face/3D/loudly_crying_face_3d.png",
  "🧱": "https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/Brick/3D/brick_3d.png",
  "🕊️": "https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/Dove/3D/dove_3d.png",
  "🔑": "https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/Key/3D/key_3d.png",
  "📖": "https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/Open%20book/3D/open_book_3d.png",
  "✉️": "https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/Envelope/3D/envelope_3d.png",
  "🤝": "https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/Handshake/3D/handshake_3d.png",
  "🏝️": "https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/Desert%20island/3D/desert_island_3d.png"
};

const ERAS = [
  {
    id: "early-world",
    icon: "🌍",
    title: "Early World & Patriarchs",
    dates: "Undated Creation → c. 1700 BC",
    color: "#3fa15e",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Creation_of_Adam_by_Michelangelo.JPG?width=600",
    imageCredit: "The Creation of Adam — Michelangelo, c. 1512",
    summary: "God made a beautiful world and loved the very first people. When they made a big mistake, God didn't give up on them — He kept promising to fix everything!",
    events: [
      {
        icon: "🌱",
        title: "Creation & the Fall",
        text: "God made the whole world in six days — plants, animals, and finally the first man and woman, Adam and Eve! But they disobeyed God's one rule, and that let sin into the world.",
        character: {
          name: "Adam & Eve",
          icon: "🍎",
          story: "Adam and Eve were the very first people God made. They lived in a beautiful garden called Eden and talked with God every day! One day they disobeyed God's one rule and had to leave the garden — but God still loved them and promised a Savior would come one day."
        },
        catholicTeaching: [
          { heading: "The Catholic View", text: "God created everything out of nothing (ex nihilo) and called it “very good.” Creation is a visible sign of God's love." },
          { heading: "The First Covenant", text: "Adam and Eve were created in a state of Original Holiness and justice. They were meant to live in perfect harmony with God." },
          { heading: "The Fall", text: "By disobeying God, they committed the first sin (Original Sin). This wounded human nature, introducing death, suffering, and a tendency to sin (concupiscence) into the world." },
          { heading: "The Spark of Hope", text: "Right after the Fall, God delivers the Protoevangelium or “First Gospel” (Genesis 3:15). He promises that the offspring of the woman will crush the serpent. Catholics see this as the first announcement of Jesus (the New Adam) and the Virgin Mary (the New Eve)." }
        ]
      },
      {
        icon: "🌈",
        title: "The Noahic Covenant",
        text: "People became so unkind and sinful that God sent a great flood to start fresh. He saved Noah, his family, and two of every animal in a giant boat! Afterward, God put a rainbow in the sky as a promise.",
        character: {
          name: "Noah",
          icon: "🚢",
          story: "Noah was the one good man God could find on the whole earth. God asked him to build a giant boat — even though it had never rained before! Noah trusted God, built the ark, and saved his family and the animals from the flood."
        },
        catholicTeaching: [
          { heading: "The Context", text: "As humanity grew, sin spread like a disease, damaging God's creation. The Flood was a radical cleansing of that sin." },
          { heading: "Sacramental Symbolism", text: "The Catholic Church views Noah's Ark and the Flood as a “type” or prefiguration of Baptism. Just as the floodwaters washed away the wickedness of the old world to bring about a new creation, the water of Baptism washes away Original Sin to make us a new creation in Christ." },
          { heading: "The Sign", text: "The rainbow is a sign of a universal covenant. God promises never to destroy the earth by water again, showing His enduring mercy and desire to sustain human life." }
        ]
      },
      {
        icon: "⭐",
        title: "The Abrahamic Covenant",
        text: "God chose a man named Abram and made him an amazing promise: his family would grow as many as the stars, and through him, God would bless every family on earth!",
        character: {
          name: "Abraham",
          icon: "⭐",
          story: "Abraham left his home country because God told him to, trusting God even though he didn't know where he was going! God promised him a son, even though he and his wife Sarah were very old. That son, Isaac, began God's chosen family."
        },
        catholicTeaching: [
          { heading: "The Call of Faith", text: "Abraham is called the “Father in Faith” by Catholics (and is explicitly mentioned in the Roman Canon of the Mass). God asks him to leave everything behind, demanding total trust." },
          { heading: "The Three Promises", text: "God promises Abraham land/a great nation, a royal name/dynasty, and a worldwide blessing." },
          { heading: "The Fulfillment", text: "Catholics believe these promises are fully realized through Jesus. The “worldwide blessing” happens because Jesus, a descendant of Abraham, opens the doors of salvation to all nations through the Church." }
        ]
      },
      {
        icon: "👨‍👩‍👧‍👦",
        title: "The Patriarchs",
        text: "Abraham's promise passed to his son Isaac, then to Isaac's son Jacob. God gave Jacob a new name, Israel, and his twelve sons became the twelve tribes of Israel!",
        character: {
          name: "Jacob (Israel)",
          icon: "🐑",
          story: "Jacob had twelve sons, and their families grew into the twelve tribes of Israel. God gave Jacob a new name, Israel, which means 'one who wrestles with God' — showing that God can use anyone, even someone who makes mistakes!"
        },
        catholicTeaching: [
          { heading: "The Line of Promise", text: "God's covenant promises do not go to everyone, but flow through a specific chosen line: Abraham to Isaac, then to Jacob." },
          { heading: "The Church as Israel", text: "Jacob's name is changed to Israel, and his 12 sons become the 12 Tribes of Israel. In Catholic theology, this points directly to the New Testament, where Jesus chooses 12 Apostles to establish the Church — which the Catechism refers to as the “New Israel” or the new people of God." }
        ]
      },
      {
        icon: "🐫",
        title: "Descent into Egypt",
        text: "Jacob's son Joseph was sold into slavery by his own jealous brothers! But God used Joseph's hard journey to save his whole family from a terrible famine.",
        character: {
          name: "Joseph",
          icon: "🌾",
          story: "Joseph's brothers were jealous of him and sold him as a slave in Egypt. But God was with Joseph, and he became a powerful leader there! When famine came, Joseph forgave his brothers and saved his whole family."
        },
        catholicTeaching: [
          { heading: "Joseph as a Type of Christ", text: "Joseph's life beautifully mirrors Jesus. Joseph was the beloved son, betrayed by his brothers for pieces of silver, and unjustly imprisoned. Yet, God used his suffering to save his family and the known world from starvation." },
          { heading: "The Spiritual Lesson", text: "For Catholics, Joseph is a powerful example of Divine Providence — the truth that God can bring a greater good out of human evil and suffering. His story sets the stage for the Exodus, which is the central saving event of the Old Testament." }
        ]
      }
    ]
  },
  {
    id: "exodus",
    icon: "🌊",
    title: "Egypt, Exodus & Desert Wanderings",
    dates: "c. 1250 BC",
    color: "#d3a021",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Crossing_of_The_Red_Sea.jpg?width=600",
    imageCredit: "The Crossing of the Red Sea — Nicolas Poussin, 1634",
    summary: "God heard His people crying out in slavery and sent a hero named Moses to set them free! He led them out of Egypt, through the sea, and gave them His law at a mountain.",
    events: [
      {
        icon: "🕊️",
        title: "Moses & the Exodus",
        text: "God sent ten amazing signs to convince Pharaoh to let His people go. Then He parted the Red Sea so Israel could walk across on dry ground — with Pharaoh's army chasing right behind!",
        character: {
          name: "Moses",
          icon: "🔥",
          story: "Moses grew up in Pharaoh's palace, then ran away to the desert. God spoke to him from a burning bush and sent him back to free His people! Moses led millions of Israelites out of Egypt and through the desert for 40 years."
        },
        catholicTeaching: [
          { heading: "God Hears His People", text: "Around 1250 BC, God responds to the suffering of the Israelites in Egypt and calls Moses at the burning bush, revealing His sacred name, YHWH (Exodus 3:14 — “God said to Moses, 'I AM WHO I AM.'”)." },
          { heading: "The Paschal Mystery Foreshadowed", text: "God sends ten plagues to defeat Egypt's false gods. The final plague — the Passover — requires sacrificing an unblemished lamb and painting its blood on the doorposts (Exodus 12:13 — “The blood shall be a sign for you... and when I see the blood, I will pass over you”). Catholics see this as a direct foreshadowing of Jesus, the true Lamb of God." },
          { heading: "The Red Sea", text: "God parts the waters to rescue Israel and destroy the Egyptian army (Exodus 14:21-22). In Catholic theology, this miraculous crossing is the ultimate Old Testament symbol of Holy Baptism, where we pass through water to be freed from original sin." }
        ]
      },
      {
        icon: "📜",
        title: "The Mosaic Covenant",
        text: "At Mount Sinai, God gave Moses Ten Commandments carved in stone — simple rules to help His people love God and love each other.",
        character: {
          name: "Aaron",
          icon: "🕯️",
          story: "Aaron was Moses' older brother and became Israel's very first high priest. He wore special robes and offered sacrifices to God for the people — pointing forward to Jesus, our forever high priest."
        },
        catholicTeaching: [
          { heading: "Mount Sinai", text: "God forms a sacred, marriage-like covenant with Israel. He gives Moses the Ten Commandments (the Decalogue) written on stone tablets (Exodus 20:1-17)." },
          { heading: "The Moral Law", text: "In the Catholic tradition, the Ten Commandments are not temporary rules but timeless expressions of the natural law, later perfected by Jesus in the Beatitudes. God promises intimacy if they obey: “You shall be my treasured possession among all peoples” (Exodus 19:5)." }
        ]
      },
      {
        icon: "⛺",
        title: "The Tabernacle",
        text: "The people built a beautiful tent for God to live among them, filled with gold and colorful cloth. Inside sat the Ark of the Covenant, a special box holding the Ten Commandments.",
        character: {
          name: "Bezalel",
          icon: "🎨",
          story: "Bezalel was a craftsman God filled with special artistic skill to build the Tabernacle and all its beautiful furnishings. He shows that God loves creativity and gives everyone talents to serve Him!"
        },
        catholicTeaching: [
          { heading: "God Dwells with His People", text: "God instructs Israel to build a portable sanctuary called the Tabernacle (Exodus 25:8 — “And let them make me a sanctuary, that I may dwell in their midst”)." },
          { heading: "The Ark of the Covenant", text: "Inside the Holy of Holies sits the Ark, holding the stone tablets, a jar of manna, and Aaron's staff (Hebrews 9:4). It is the earthly throne of God's presence." },
          { heading: "Catholic Connection", text: "The Tabernacle foreshadows the parish church tabernacle where the Eucharist is kept. The Catholic Church also honors the Virgin Mary as the “Ark of the New Covenant,” because God's glory overshadowed her (Luke 1:35), just as it overshadowed the ancient Tabernacle (Exodus 40:34)." }
        ]
      },
      {
        icon: "🏜️",
        title: "The 40 Years of Wandering",
        text: "Twelve scouts explored the Promised Land, but ten were too scared to trust God. Because the people listened to fear instead of faith, they wandered the desert for 40 whole years.",
        character: {
          name: "Joshua & Caleb",
          icon: "🦁",
          story: "Joshua and Caleb were the only two scouts who trusted God completely, even when the Promised Land looked scary. Because of their faith, they were the only grown-ups from that generation who got to enter it!"
        },
        catholicTeaching: [
          { heading: "A Journey of Faith", text: "Because the people lack trust in God's power to conquer the Promised Land, they are sentenced to wander the desert for 40 years until a new, faithful generation grows up (Numbers 14:34 — “According to the number of the days in which you spied out the land, forty days, for every day a year, you shall bear your iniquity, forty years”)." },
          { heading: "Sacramental Shadows", text: "During this time, God feeds them with Manna from heaven (Exodus 16:4, foreshadowing the Eucharist) and gives them water from a struck rock (Numbers 20:11). St. Paul confirms this Catholic reading in 1 Corinthians 10:4, stating, “And the Rock was Christ.”" },
          { heading: "The Final Books", text: "During this long journey, God refines the people through the laws of Leviticus (priestly worship), Numbers (the desert journey), and Deuteronomy (Moses' final sermons). Before his death, Moses leaves them with the core commandment of love: “You shall love the Lord your God with all your heart, and with all your soul, and with all your might” (Deuteronomy 6:5)." }
        ]
      }
    ]
  },
  {
    id: "kingdom",
    icon: "👑",
    title: "Conquest, Judges & The Kingdom",
    dates: "c. 1210 BC → 930 BC",
    color: "#7a4fbf",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Felix-Joseph_Barrias_-_Anointing_of_David_by_Samuel.jpg?width=600",
    imageCredit: "The Anointing of David by Samuel — Félix-Joseph Barrias, 1842",
    summary: "Israel finally entered the Promised Land! But without a king, they kept forgetting God — until God gave them David, a shepherd boy who became their greatest king.",
    events: [
      {
        icon: "🏞️",
        title: "Conquest of Canaan",
        text: "Joshua led Israel across the Jordan River. The walls of the city of Jericho fell flat after the Israelites marched around it and blew their trumpets, just like God said!",
        character: {
          name: "Joshua",
          icon: "⚔️",
          story: "Joshua took over after Moses died. God told him to 'be strong and courageous,' and Joshua trusted God to help Israel conquer the Promised Land, starting with the amazing victory at Jericho!"
        },
        catholicTeaching: [
          { heading: "Joshua as a Type of Christ", text: "“Joshua” and “Jesus” are the same name in Hebrew, Yeshua, meaning “God saves.” Just as Joshua led God's people into the earthly Promised Land, Jesus leads believers into the heavenly one." },
          { heading: "Worship Over Might", text: "At Jericho, the seven-day procession, the trumpets, and the Ark of the Covenant leading the way show that victory belongs to God, not to human military strength." },
          { heading: "Rahab's Faith", text: "The Canaanite Rahab is saved through her faith and later named in the genealogy of Jesus (Matthew 1:5) — a sign that salvation was always meant to extend beyond Israel to every nation." }
        ]
      },
      {
        icon: "⚔️",
        title: "Period of the Judges",
        text: "For 200 years Israel kept repeating the same pattern: forget God, get in trouble, cry for help — and God would send a judge, a hero, to rescue them!",
        character: {
          name: "Samson",
          icon: "💪",
          story: "Samson was given amazing super-strength by God to fight Israel's enemies! But he made some risky choices and lost his strength when his hair was cut. God still used him for one final, powerful victory."
        },
        catholicTeaching: [
          { heading: "The Cycle of Sin", text: "The recurring pattern of sin, oppression, repentance, and deliverance shows that humanity cannot save itself and constantly needs a savior, since even God's chosen judges are flawed and temporary." },
          { heading: "Preparing for a King", text: "The refrain “everyone did what was right in his own eyes” reveals the danger of a people without unified, godly leadership — setting the stage for Israel's request for a king." },
          { heading: "A Flawed but Chosen Instrument", text: "Samson's Nazarite strength shows God can work through imperfect people, but his story is also a caution about the destructive power of disordered desire, even in someone specially chosen by God." }
        ]
      },
      {
        icon: "🎺",
        title: "The United Monarchy",
        text: "A shepherd boy named David defeated a giant named Goliath with just a sling and a stone! David became Israel's greatest king, and his son Solomon built a magnificent Temple for God.",
        character: {
          name: "David",
          icon: "🎵",
          story: "David was just a young shepherd who played the harp and wrote songs — we call them Psalms! He bravely defeated the giant Goliath and later became Israel's most beloved king. God promised David his family would rule forever, a promise fulfilled by Jesus!"
        },
        catholicTeaching: [
          { heading: "Davidic Kingship", text: "God's covenant with David — that his throne would be established forever (2 Samuel 7) — is a direct messianic prophecy the Church believes is ultimately fulfilled in Jesus, “Son of David,” whose kingdom will have no end (Luke 1:32-33)." },
          { heading: "The Temple Foreshadowed", text: "Solomon's Temple, God's dwelling place among His people, prefigures both the Body of Christ (John 2:19-21) and the Church, the new “Temple” built of living stones (1 Peter 2:5)." },
          { heading: "A Man After God's Heart", text: "Despite his serious sins, David's genuine repentance (Psalm 51) models the Catholic understanding of contrition and mercy — sin does not have the final word for those who turn back to God." }
        ]
      },
      {
        icon: "💔",
        title: "The Divided Kingdom",
        text: "After wise King Solomon died, his son made poor choices and the kingdom split in two. From then on, prophets kept warning the people to turn back to God.",
        character: {
          name: "Solomon",
          icon: "🏛️",
          story: "Solomon asked God for wisdom instead of riches, and God made him the wisest king ever! He built the beautiful First Temple in Jerusalem. But later in life he made poor choices that led to the kingdom splitting after he died."
        },
        catholicTeaching: [
          { heading: "The Cost of Idolatry", text: "The kingdom's split and long slide into idolatry show that unfaithfulness to the covenant has real historical and communal consequences, not only personal ones." },
          { heading: "The Prophetic Voice", text: "The prophets who arise in this period — Elijah, Elisha, Amos, Hosea — act as Israel's conscience, continually calling the people back to covenant fidelity, a role the Church continues today through her teaching office (the Magisterium)." },
          { heading: "A Promise Not Revoked", text: "Even as the kingdom fractures, God's promise to David is never taken back — its eventual restoration in Christ shows that human failure cannot cancel divine faithfulness." }
        ]
      }
    ]
  },
  {
    id: "exile",
    icon: "⛓️",
    title: "Exile & Return",
    dates: "722 BC → 160 BC",
    color: "#5b7a99",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Rembrandt_-_Jeremiah_lamenting.jpg?width=600",
    imageCredit: "Jeremiah Lamenting the Destruction of Jerusalem — Rembrandt, 1630",
    summary: "Israel and Judah kept ignoring God's warnings, so they were conquered and taken far from home. But God never forgot His people — He brought them back and kept every promise.",
    events: [
      {
        icon: "🏛️",
        title: "The Assyrian & Babylonian Captivity",
        text: "Because the people wouldn't listen to the prophets, powerful armies destroyed both kingdoms and even burned down God's Temple. It was Israel's saddest chapter.",
        character: {
          name: "Jeremiah",
          icon: "😢",
          story: "Jeremiah is called the 'weeping prophet' because he cried for his people, warning them again and again to turn back to God before it was too late. Even when no one listened, he never stopped trusting God."
        },
        catholicTeaching: [
          { heading: "Justice and Mercy", text: "The destruction of both kingdoms is presented as a just consequence of persistent covenant infidelity, yet God still preserves a faithful “remnant” — showing His mercy never fully abandons His people." },
          { heading: "Purification Through Suffering", text: "The Exile is often understood by the Church Fathers as a painful but necessary purification, much like how suffering can refine faith rather than destroy it (cf. Job; 1 Peter 1:6-7)." },
          { heading: "The Suffering Servant", text: "It is during and after this period that Isaiah's prophecies of the Suffering Servant (Isaiah 53) emerge — one of the clearest Old Testament foreshadowings of Christ's redemptive suffering." }
        ]
      },
      {
        icon: "📖",
        title: "The Deuterocanonical Witness",
        text: "Even far from home, God's people stayed brave and faithful. Amazing stories like Daniel surviving a den of lions show that God protects those who trust Him, no matter what.",
        character: {
          name: "Daniel",
          icon: "🦁",
          story: "Daniel refused to stop praying to God, even when a jealous king made it illegal! He was thrown into a den of hungry lions — but God sent an angel to shut their mouths, and Daniel walked out without a scratch!"
        },
        catholicTeaching: [
          { heading: "Faith Under Persecution", text: "Stories like Daniel in the lion's den, or the three young men in the fiery furnace, teach unwavering fidelity to God even when it is politically dangerous — a theme deeply relevant to the Church's own long history of martyrdom." },
          { heading: "Canonical Authority", text: "Catholics recognize books like Tobit, Judith, Wisdom, Sirach, Baruch, and 1-2 Maccabees as inspired Scripture — the Deuterocanon — preserved in the ancient Greek Septuagint used by the early Church and the Apostles themselves." },
          { heading: "Providence in Exile", text: "These books collectively show that God's providence is at work even in foreign lands and difficult circumstances — holiness is possible anywhere." }
        ]
      },
      {
        icon: "🚪",
        title: "The Return from Exile",
        text: "After 70 long years, a kind Persian king named Cyrus let God's people go home! They rebuilt the walls of Jerusalem and a new, smaller Temple.",
        character: {
          name: "Nehemiah",
          icon: "🧱",
          story: "Nehemiah worked as a cupbearer for the Persian king, but his heart broke when he heard Jerusalem's walls were in ruins. He got permission to go rebuild them — and led the people to finish the huge job in just 52 days!"
        },
        catholicTeaching: [
          { heading: "A New Exodus", text: "The prophets describe the return from Babylon in language that deliberately echoes the Exodus from Egypt — a “new Exodus” anticipating the ultimate liberation from sin accomplished by Christ." },
          { heading: "Rebuilding as Renewal", text: "The humbler Second Temple becomes the very place where Jesus Himself will worship and teach — the physical rebuilding mirrors the spiritual renewal God desires in every heart." },
          { heading: "Providence Through Pagan Rulers", text: "That a pagan king, Cyrus, is called God's “anointed” (Isaiah 45:1) to free the Jews shows that God's providence extends over, and can use, even those outside the covenant to accomplish His will." }
        ]
      },
      {
        icon: "🕎",
        title: "The Maccabean Revolt",
        text: "When a foreign king tried to force the Jews to abandon God, a brave family called the Maccabees fought back and won! They celebrated by relighting the Temple lamp — the first Hanukkah.",
        character: {
          name: "Judas Maccabeus",
          icon: "🔥",
          story: "Judas Maccabeus led a small, brave army against a huge empire to defend his people's right to worship God. Against all odds, they won and cleaned the Temple — and a jar of oil miraculously burned for eight days!"
        },
        catholicTeaching: [
          { heading: "Fidelity Unto Death", text: "The martyrdom of the seven brothers and their mother (2 Maccabees 7) is one of Scripture's clearest early witnesses to belief in the resurrection of the body, and a model for the Christian martyrs who would come after them." },
          { heading: "Prayer for the Dead", text: "Judas Maccabeus's practice of offering sacrifice for deceased soldiers (2 Maccabees 12:46) is cited by the Catholic Church as scriptural support for praying for the dead and the doctrine of Purgatory." },
          { heading: "Zeal for God's House", text: "The Maccabees' zeal for the purity of the Temple prefigures Jesus' own zeal when He cleanses the Temple, showing a continuity of care for the sanctity of God's dwelling among His people." }
        ]
      }
    ]
  },
  {
    id: "jesus",
    icon: "✝️",
    title: "The Messianic Fulfillment — Life of Jesus",
    dates: "c. 6 BC → 33 AD",
    color: "#c0392b",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Last_Supper_by_Leonardo_da_Vinci.jpg?width=600",
    imageCredit: "The Last Supper — Leonardo da Vinci, c. 1498",
    bgScene: "https://commons.wikimedia.org/wiki/Special:FilePath/Ghirlandaio,_Domenico_-_Calling_of_the_Apostles_-_1481.jpg?width=600",
    summary: "God kept His biggest promise of all — He sent His own Son, Jesus, to live among us, teach us how to love, and save the whole world!",
    events: [
      {
        icon: "⭐",
        title: "The Incarnation",
        text: "An angel told a young girl named Mary she would become the mother of God's Son! Jesus, God become man, was born in a humble stable in Bethlehem.",
        character: {
          name: "Mary",
          icon: "🕊️",
          story: "Mary was a young girl from Nazareth who said 'yes' to God's amazing plan, even though it wasn't easy. She became the mother of Jesus and shows us what it looks like to trust God completely."
        },
        catholicTeaching: [
          { heading: "The New Eve", text: "Catholic tradition, going back to the early Church Fathers, calls Mary the “New Eve” — where Eve's disobedience brought death, Mary's obedient “yes” (her fiat) at the Annunciation opens the door to life." },
          { heading: "True God and True Man", text: "The Incarnation is the central mystery of the Christian faith — the Church affirms Jesus as fully God and fully man, two natures in one Divine Person, so God could truly unite Himself to humanity to redeem it from within." },
          { heading: "The Fullness of Time", text: "St. Paul writes that Christ came “when the fullness of time had come” (Galatians 4:4) — the Incarnation is the definitive answer to every promise and covenant that came before it in salvation history." }
        ]
      },
      {
        icon: "🗣️",
        title: "The Public Ministry",
        text: "Jesus traveled from town to town teaching about God's love, healing the sick, and even calming storms! He picked twelve close friends, called Apostles, to learn from Him.",
        character: {
          name: "Peter",
          icon: "🔑",
          story: "Peter was a fisherman when Jesus called him to 'follow Me.' He wasn't perfect — he even said he didn't know Jesus once! But Jesus forgave him and made him the leader of the Apostles."
        },
        catholicTeaching: [
          { heading: "The Kingdom of God", text: "Jesus' central preaching theme announces that God's reign of justice, mercy, and healing is breaking into the world through His own person and actions — not merely a future hope, but a present reality." },
          { heading: "The Twelve and the New Israel", text: "Jesus' deliberate choice of twelve Apostles mirrors the twelve tribes of Israel, signaling that He is forming a renewed people of God — the seed of the Church, fulfilling Israel's vocation." },
          { heading: "Miracles as Signs", text: "Jesus' healings are not mere displays of power but “signs” pointing to deeper spiritual realities — He heals bodies to reveal His authority to heal souls (cf. Mark 2:1-12)." }
        ]
      },
      {
        icon: "✝️",
        title: "The Paschal Mystery",
        text: "Jesus was arrested, though He never did anything wrong, and gave up His life on the cross out of love for us. But three days later, He rose from the dead, beating sin and death forever!",
        character: {
          name: "Jesus",
          icon: "✝️",
          story: "Jesus is God's own Son, who became human to save us. He loved us so much that He suffered and died on the cross — and then rose from the dead! His resurrection is the reason Christians celebrate Easter."
        },
        catholicTeaching: [
          { heading: "The Heart of the Faith", text: "The Catechism calls the Paschal Mystery — Christ's Passion, Death, Resurrection, and Ascension — “the heart of the Christian faith” (CCC 571), the definitive victory of God's love over sin and death." },
          { heading: "Sacrificial Fulfillment", text: "Jesus is the true Passover Lamb (1 Corinthians 5:7) and the true sacrifice every Old Testament sacrifice anticipated but could never fully accomplish (Hebrews 10:1-14)." },
          { heading: "Victory, Not Defeat", text: "The Cross, which seems like total failure, is understood by Catholics as the moment of greatest triumph — Christ transforms the instrument of death into the very means of salvation." }
        ]
      },
      {
        icon: "🍞",
        title: "The New Covenant",
        text: "At His last meal with His friends, Jesus took bread and wine and said 'this is my body... this is my blood.' This became the Eucharist, a gift so we could stay close to Him forever.",
        character: {
          name: "John",
          icon: "📖",
          story: "John was the youngest Apostle and Jesus' close friend — the Gospels call him 'the one Jesus loved.' He sat right next to Jesus at the Last Supper and later wrote a Gospel and the book of Revelation."
        },
        catholicTeaching: [
          { heading: "The Eucharist as Covenant Meal", text: "At the Last Supper, Jesus institutes the Eucharist as the sign and reality of the New Covenant prophesied by Jeremiah (31:31-34) — a covenant written not on stone tablets but on human hearts." },
          { heading: "The Real Presence", text: "Catholics believe Jesus is truly, substantially present — Body, Blood, Soul, and Divinity — in the consecrated bread and wine, fulfilling every Old Testament “type” of bread from heaven and covenant blood." },
          { heading: "The Priesthood Instituted", text: "In commanding the Apostles to “do this in memory of me,” Jesus institutes the ministerial priesthood, entrusting the Church with celebrating this same sacrifice at every Mass until He comes again." }
        ]
      }
    ]
  },
  {
    id: "church",
    icon: "🔥",
    title: "The Church & The End of Time",
    dates: "33 AD → 100 AD",
    color: "#e08a1e",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Pentecostés_(El_Greco,_1597).jpg?width=500",
    imageCredit: "Pentecost — El Greco, c. 1600",
    summary: "Jesus sent the Holy Spirit to fill His followers with courage and power. The Church was born, and the Good News spread from a small room in Jerusalem to the whole world!",
    events: [
      {
        icon: "🔥",
        title: "Pentecost",
        text: "Fifty days after Easter, the Holy Spirit came down like fire and wind on Mary and the Apostles! Suddenly they were bursting with courage to tell everyone about Jesus — this was the Church's birthday!",
        character: {
          name: "The Apostles",
          icon: "🕊️",
          story: "The Apostles were Jesus' twelve closest friends. After Pentecost, they became bold preachers who carried the Good News across the whole world, even when it was dangerous to do so."
        },
        catholicTeaching: [
          { heading: "The Church's Birthday", text: "Pentecost is the founding moment of the Church, when the Holy Spirit gives the Apostles the courage, unity, and divine life needed to carry out Christ's mission to the whole world." },
          { heading: "Reversal of Babel", text: "Where humanity's pride at Babel caused languages to divide and scatter people (Genesis 11), Pentecost reunites humanity — everyone hears the Gospel in their own tongue, showing the Church's call to gather every nation into one family." },
          { heading: "Mary's Presence", text: "Mary's presence in the Upper Room with the Apostles matters deeply to Catholics — as she carried Christ physically at the Incarnation, she is present in prayer as the Church, His Body, comes to birth." }
        ]
      },
      {
        icon: "🚢",
        title: "The Pauline Missions",
        text: "A man named Paul used to hurt Christians — until Jesus appeared to him in a blinding light! Paul completely changed and became one of history's greatest missionaries.",
        character: {
          name: "Paul",
          icon: "✉️",
          story: "Paul used to arrest Christians until Jesus appeared to him on the road to Damascus and changed his whole life! He traveled thousands of miles by land and sea, starting churches and writing letters that are now part of the Bible."
        },
        catholicTeaching: [
          { heading: "Radical Conversion", text: "Paul's transformation from a persecutor of Christians to history's greatest missionary shows that no one is beyond the reach of God's grace, and that even great human zeal can be radically redirected toward God's purposes." },
          { heading: "Apostle to the Gentiles", text: "Paul's mission fulfills the Abrahamic promise that “all nations” would be blessed through Abraham's offspring — his Gospel breaks down the wall between Jew and Gentile (Ephesians 2:14)." },
          { heading: "Scripture Through the Church", text: "Paul's letters, written to guide the specific churches he founded, become part of the New Testament — a reminder that Scripture arose from within the life and preaching mission of the Church." }
        ]
      },
      {
        icon: "✉️",
        title: "The Catholic Epistles",
        text: "Leaders like Peter, John, James, and Jude wrote letters encouraging Christians to keep loving each other, stay strong in hard times, and live like Jesus taught.",
        character: {
          name: "James",
          icon: "🤝",
          story: "James was a leader of the early Church in Jerusalem. His letter teaches that real faith shows up in kind actions — 'faith without works is dead,' he wrote!"
        },
        catholicTeaching: [
          { heading: "Living the Faith", text: "These letters address practical Christian living — enduring suffering (1 Peter), showing faith through works (James), and standing firm against false teaching (1-2 John, Jude) — doctrine and daily life are inseparable in Catholic teaching." },
          { heading: "Apostolic Authority", text: "Written by or attributed to Peter, John, James, and Jude — men who knew Jesus personally or were close to the apostolic circle — these letters carry an apostolic authority the Church recognizes as normative for faith and morals." },
          { heading: "Guarding Unity", text: "Many of these letters directly confront early heresies and divisions, foreshadowing the Church's ongoing role, through her Magisterium, of guarding the deposit of faith from distortion." }
        ]
      },
      {
        icon: "🌅",
        title: "The Apocalypse (Revelation)",
        text: "Near the end of his life, John had an amazing vision of heaven and wrote it all down. It's full of symbols, but the ending is simple: Jesus wins, and God makes everything new!",
        character: {
          name: "John, on Patmos",
          icon: "🏝️",
          story: "When John was old, Roman rulers exiled him to a lonely island called Patmos. There, God gave him incredible visions of heaven, which he wrote down as the book of Revelation — showing that no matter how bad things look, God wins in the end!"
        },
        catholicTeaching: [
          { heading: "A Liturgical Vision", text: "Revelation's heavenly worship — with an altar, incense, a Lamb who was slain, and songs of praise — mirrors and illuminates the Mass, showing the Eucharistic liturgy as a real participation in heaven's eternal worship." },
          { heading: "The Woman Clothed with the Sun", text: "Many Catholic scholars see the “woman clothed with the sun” (Revelation 12) as representing both Mary and the Church, under attack by the dragon yet ultimately triumphant through the Lamb." },
          { heading: "Hope, Not Fear", text: "Though full of dramatic imagery, Revelation's purpose is to console persecuted Christians with the assurance that Christ has already won the definitive victory, and God will one day wipe away every tear (Revelation 21:4)." }
        ]
      }
    ]
  }
];
