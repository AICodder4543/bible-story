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
          story: "Adam and Eve were the very first people God made. They lived in a beautiful garden called Eden and talked with God every day! One day they disobeyed God's one rule and had to leave the garden — but God still loved them and promised a Savior would come one day.",
          fullBio: "Adam and Eve stand at the very beginning of the human story. Genesis tells us that God formed the man from the dust of the ground and breathed into him the breath of life (Genesis 2:7), then formed the woman from his rib to be “a helper fit for him” (Genesis 2:18-22). The Catechism teaches that Adam and Eve were constituted in an original state of holiness and justice, living in intimate communion with God, free from suffering and death (CCC 375-376). This first harmony was shattered by the Fall: tempted by the serpent, they disobeyed God's single command not to eat from the tree of the knowledge of good and evil (Genesis 3:1-7). Their sin — Original Sin — is not merely a private failing but a wound passed to the whole human family, darkening human nature and introducing suffering and death into the world (CCC 396-409). Yet even in judgment, God does not abandon them: He clothes them (Genesis 3:21) and speaks a mysterious promise over the serpent, “I will put enmity between you and the woman... he will crush your head” (Genesis 3:15) — the Protoevangelium, or “First Gospel,” the earliest hint of a coming Redeemer. Catholic tradition sees Jesus as the New Adam, undoing the first Adam's disobedience through perfect obedience (Romans 5:12-19), and Mary as the New Eve, whose “yes” reverses Eve's fall. Their story is therefore not only about loss, but about hope woven into humanity's very first chapter.",
          references: "Genesis 2–3; Romans 5:12-19; CCC 375-379, 396-409, 410-411."
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
          story: "Noah was the one good man God could find on the whole earth. God asked him to build a giant boat — even though it had never rained before! Noah trusted God, built the ark, and saved his family and the animals from the flood.",
          fullBio: "Noah appears in Genesis as “a righteous man, blameless in his generation” who “walked with God” (Genesis 6:9) at a time when “the earth was corrupt in God's sight and filled with violence” (Genesis 6:11). God resolves to cleanse the earth through a flood but chooses to save Noah, his wife, his three sons, and their wives — eight persons in all — commanding Noah to build a massive ark and bring aboard two of every kind of animal (Genesis 6:14-21). Noah's obedience is total: “Noah did all that God commanded him” (Genesis 6:22), even though rain had never been seen before. After forty days and nights of rain and more than a year afloat, the waters recede and Noah's family steps onto dry land to begin the world anew. God then establishes a covenant with Noah and “every living creature,” promising never again to destroy the earth by flood, with the rainbow set in the clouds as its everlasting sign (Genesis 9:8-17). The Catechism and the Church Fathers have long read the Flood typologically: the waters that destroy the old, sinful world and deliver Noah's family safely through become a figure of Baptism, which “saves you now... an appeal to God for a clear conscience” (1 Peter 3:20-21; CCC 845, 1094, 1219). Noah is remembered not simply as a survivor of catastrophe but as a model of righteous obedience — the first person in Scripture explicitly called “righteous,” whose faithfulness becomes the hinge on which humanity's second beginning turns.",
          references: "Genesis 6–9; 1 Peter 3:20-21; 2 Peter 2:5; CCC 845, 1094, 1219."
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
          story: "Abraham left his home country because God told him to, trusting God even though he didn't know where he was going! God promised him a son, even though he and his wife Sarah were very old. That son, Isaac, began God's chosen family.",
          fullBio: "Abraham (originally Abram) is called by God out of Ur of the Chaldeans with a promise that would shape the rest of salvation history: “I will make of you a great nation... and in you all the families of the earth shall be blessed” (Genesis 12:1-3). At God's word, Abraham leaves his homeland for an unknown destination, and Scripture credits this trust as the very definition of faith: “he believed the Lord, and he counted it to him as righteousness” (Genesis 15:6) — a verse St. Paul later uses to show that righteousness comes through faith, not merely the Law (Romans 4:1-3; Galatians 3:6-9). God seals His promise in the covenant of circumcision (Genesis 17) and gives Abram and Sarai new names. Though elderly and childless, God grants Abraham and Sarah a son, Isaac, the child of promise. Abraham's faith is tested most severely when God asks him to sacrifice Isaac on Mount Moriah; his willingness to obey, and God's provision of a ram in the boy's place, has long been read by the Church as a foreshadowing of God the Father offering His own Son (Genesis 22; CCC 2572). For this reason, the Catechism calls Abraham “our father in faith” (CCC 59, 2570-2573), a title so central he is named in the Roman Canon at every Mass that uses it. St. Paul teaches that all who have faith — Jew and Gentile alike — are truly Abraham's spiritual children and heirs of the promise (Galatians 3:7-9, 29).",
          references: "Genesis 12, 15, 17, 22; Romans 4; Galatians 3; CCC 59, 145-146, 2570-2573."
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
          story: "Jacob had twelve sons, and their families grew into the twelve tribes of Israel. God gave Jacob a new name, Israel, which means 'one who wrestles with God' — showing that God can use anyone, even someone who makes mistakes!",
          fullBio: "Jacob, the younger twin son of Isaac and Rebekah, receives through cunning — and ultimately through God's own providence — the blessing and birthright that belonged to his brother Esau (Genesis 25, 27). Fleeing his brother's anger, Jacob dreams at Bethel of a ladder reaching to heaven, and God renews to him the covenant promise first given to Abraham (Genesis 28:10-15). Years later, returning home, Jacob wrestles through the night with a mysterious figure — traditionally understood as an angel or a theophany of God Himself — and refuses to let go until he receives a blessing. He is given a new name, Israel, meaning “he who strives with God,” a sign that “you have striven with God and with men, and have prevailed” (Genesis 32:22-30). This marks Jacob's transformation from a man who once grasped for blessing by deceit into one who wrestles honestly with God and is changed by the encounter. Jacob fathers twelve sons who become the twelve tribes of Israel, the foundational structure of God's Chosen People (Genesis 35:22-26; 49). In Catholic reading, the twelve tribes descending from Jacob prefigure the twelve Apostles whom Jesus chooses to found the New Israel, the Church (CCC 765). Jacob's life — marked by flaws, family conflict, exile, and reconciliation — shows that God's covenant does not depend on human perfection; He patiently works through imperfect people across generations (CCC 60-64).",
          references: "Genesis 25–35, 49; CCC 60-64, 765."
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
          story: "Joseph's brothers were jealous of him and sold him as a slave in Egypt. But God was with Joseph, and he became a powerful leader there! When famine came, Joseph forgave his brothers and saved his whole family.",
          fullBio: "Joseph, the eleventh of Jacob's twelve sons, is favored openly by his father — a favoritism, symbolized by his “coat of many colors,” that provokes his brothers' jealousy (Genesis 37:3-4). After Joseph shares dreams suggesting he will one day rule over his family, his brothers sell him into slavery in Egypt rather than kill him outright. Through years of unjust suffering — false accusation, imprisonment — Joseph's God-given gift for interpreting dreams eventually brings him before Pharaoh, who elevates him to be second-in-command over all of Egypt to prepare the nation for a coming famine (Genesis 39–41). When famine strikes, Joseph's own brothers travel to Egypt for grain and unknowingly stand before the brother they betrayed. Rather than take revenge, Joseph weeps, forgives them, and speaks one of Scripture's clearest statements of divine providence: “You meant evil against me, but God meant it for good, to bring it about that many people should be kept alive” (Genesis 50:20). Joseph moves his family to Egypt, setting the stage for the nation of Israel's growth — and eventual enslavement — leading into the Exodus. The Church Fathers have long read Joseph as a striking “type” of Jesus Christ: the beloved son, rejected and sold by his own, unjustly condemned, yet exalted to save the very people who wronged him, extending forgiveness rather than vengeance — a testimony to Divine Providence (CCC 312-314).",
          references: "Genesis 37, 39–50; CCC 312-314."
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
    chronology: [
      { date: "17th–13th centuries BC", text: "The Hebrews become slaves in Egypt" },
      { date: "17th–13th centuries BC", text: "Moses is born" },
      { date: "17th–13th centuries BC", text: "God appears to Moses" },
      { date: "17th–13th centuries BC", text: "The Exodus" },
      { date: "17th–13th centuries BC", text: "The Law is given to Moses on Mt. Sinai" }
    ],
    events: [
      {
        icon: "🕊️",
        title: "Moses & the Exodus",
        text: "God sent ten amazing signs to convince Pharaoh to let His people go. Then He parted the Red Sea so Israel could walk across on dry ground — with Pharaoh's army chasing right behind!",
        character: {
          name: "Moses",
          icon: "🔥",
          story: "Moses grew up in Pharaoh's palace, then ran away to the desert. God spoke to him from a burning bush and sent him back to free His people! Moses led millions of Israelites out of Egypt and through the desert for 40 years.",
          fullBio: "Moses is the towering figure through whom God delivers Israel from slavery and establishes His covenant Law. Born to Hebrew parents under Pharaoh's decree that all Israelite baby boys be killed, Moses is hidden in a basket on the Nile and providentially raised in Pharaoh's own household (Exodus 2:1-10). After fleeing to Midian, Moses encounters God in a bush that burns without being consumed, where God reveals His sacred name — “I AM WHO I AM” (Exodus 3:14) — and commissions him to demand Pharaoh let His people go. Through ten plagues culminating in the Passover, God breaks Pharaoh's resistance; Israel escapes through the miraculously parted Red Sea (Exodus 5–14). At Mount Sinai, God establishes His covenant with Israel through Moses, giving the Ten Commandments and the Law (Exodus 19–20). For forty years, Moses leads — and often intercedes for — a stubborn people through the wilderness. Though barred from entering the Promised Land after a moment of disobedience (Numbers 20:1-13), he views it from Mount Nebo before he dies; “there has not arisen a prophet since in Israel like Moses, whom the Lord knew face to face” (Deuteronomy 34:10). Catholic tradition sees Moses as a preeminent type of Christ: both mediate a covenant, and Jesus is transfigured in glory alongside Moses (Matthew 17:1-3; CCC 62). St. Paul teaches the Israelites crossing the sea were “baptized into Moses” (1 Corinthians 10:1-2), a foundational image for Christian Baptism.",
          references: "Exodus 2–20; Numbers 20; Deuteronomy 34; 1 Corinthians 10:1-2; CCC 62, 2084."
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
          story: "Aaron was Moses' older brother and became Israel's very first high priest. He wore special robes and offered sacrifices to God for the people — pointing forward to Jesus, our forever high priest.",
          fullBio: "Aaron, Moses' older brother, serves as his spokesman before Pharaoh, since Moses considered himself “slow of speech” (Exodus 4:10-16), and performs several signs before Pharaoh, including several of the plagues (Exodus 7-10). At Mount Sinai, God consecrates Aaron and his sons as Israel's first priests, establishing the Levitical priesthood that will offer sacrifice on behalf of the people for centuries (Exodus 28–29; Leviticus 8). Aaron's role is not without failure — in Moses' absence on the mountain, Aaron yields to the people's demand and fashions the Golden Calf, a grave act of idolatry (Exodus 32). Yet God does not revoke the priesthood entrusted to Aaron's line; the episode underscores that the priesthood's holiness rests on God's calling, not human perfection. Aaron's staff later miraculously buds and blossoms, confirming God's choice of the Levites for priestly service (Numbers 17). The Letter to the Hebrews contrasts the Aaronic priesthood — repeated, imperfect, needing constant renewal — with the eternal, perfect priesthood of Jesus Christ, “a high priest after the order of Melchizedek” (Hebrews 5:1-10). In Catholic theology, the Old Testament priesthood of Aaron prefigures and is fulfilled in Christ's own priesthood and in the ministerial priesthood of the Church (CCC 1539-1547).",
          references: "Exodus 4, 28–29, 32; Numbers 17; Hebrews 5, 7; CCC 1539-1547."
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
          story: "Bezalel was a craftsman God filled with special artistic skill to build the Tabernacle and all its beautiful furnishings. He shows that God loves creativity and gives everyone talents to serve Him!",
          fullBio: "Bezalel, of the tribe of Judah, is named in Exodus as the chief craftsman whom God personally chose and equipped to construct the Tabernacle and its sacred furnishings — the Ark of the Covenant, the lampstand, the altar, and the priestly vestments. Scripture describes his gift in strikingly theological terms: “I have filled him with the Spirit of God, with ability and intelligence, with knowledge and all craftsmanship” (Exodus 31:2-5; 35:30-35). This is among the earliest explicit references in the Bible to a person being filled with the Holy Spirit for a specific vocation, establishing artistic skill itself as a genuine gift of God. Bezalel worked alongside Oholiab and a team of skilled workers, translating Moses' instructions — themselves revealed by God “according to the pattern” shown him (Exodus 25:9, 40) — into the tangible, beautiful dwelling place for God's presence among His people. The Catholic Church has long pointed to Bezalel as a model for sacred art and architecture: because God cared enough about the beauty of worship to specially anoint a craftsman for the task, the Church holds that art in service of the liturgy is a genuine vocation (CCC 2501-2503). Bezalel's example reminds believers that skill and creativity can be placed fully at the service of God and the worshipping community.",
          references: "Exodus 31:1-11, 35:30–36:1; CCC 2501-2503."
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
          story: "Joshua and Caleb were the only two scouts who trusted God completely, even when the Promised Land looked scary. Because of their faith, they were the only grown-ups from that generation who got to enter it!",
          fullBio: "Joshua and Caleb are two of the twelve scouts Moses sends to explore Canaan before Israel's planned entry into the Promised Land (Numbers 13). Ten of the twelve return with a frightening report, stirring the people into panic and rebellion. Only Joshua (of Ephraim) and Caleb (of Judah) urge the people to trust God's promise: “If the Lord delights in us, he will bring us into this land... Only do not rebel against the Lord” (Numbers 14:6-9). For their unbelief, God decrees the current generation will wander and die in the wilderness over forty years — except Joshua and Caleb, whose faith God explicitly rewards (Numbers 14:22-24, 30). Caleb, at eighty-five decades later, still remembers God's promise and requests the hill country of Hebron as his inheritance, testifying “I wholly followed the Lord my God” (Joshua 14:6-14). Joshua is commissioned by Moses as his successor to lead the next generation into Canaan (Deuteronomy 31:7-8). Their story is held up throughout Scripture, especially in Hebrews, as both a warning about unbelief and a model of courageous trust: “we see that they were unable to enter because of unbelief” (Hebrews 3:16-19) — a caution the Church applies to every generation's need for persevering faith.",
          references: "Numbers 13–14, 27:18-23; Joshua 14:6-14; Hebrews 3:16-4:11."
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
    chronology: [
      { date: "12th–13th centuries BC", text: "Israel begins the conquest of Canaan" },
      { date: "12th–13th centuries BC", text: "Joshua dies" },
      { date: "12th–13th centuries BC", text: "The judges of Israel" },
      { date: "12th–13th centuries BC", text: "The story of Ruth" },
      { date: "ca. 1100 BC", text: "The activity of Samuel" },
      { date: "ca. 1050 BC", text: "Saul anointed the first King of Israel" },
      { date: "ca. 1010 BC", text: "David becomes the King of Israel" },
      { date: "ca. 1000 BC", text: "Jerusalem becomes the capital of Israel" },
      { date: "ca. 970 BC", text: "Solomon becomes King of Israel" },
      { date: "ca. 930 BC", text: "Solomon dies" },
      { date: "931 BC", text: "The kingdom is divided: Rehoboam becomes king of Judah (931–911 BC); Jeroboam becomes king of Israel (931–910 BC)" }
    ],
    events: [
      {
        icon: "🏞️",
        title: "Conquest of Canaan",
        text: "Joshua led Israel across the Jordan River. The walls of the city of Jericho fell flat after the Israelites marched around it and blew their trumpets, just like God said!",
        character: {
          name: "Joshua",
          icon: "⚔️",
          story: "Joshua took over after Moses died. God told him to 'be strong and courageous,' and Joshua trusted God to help Israel conquer the Promised Land, starting with the amazing victory at Jericho!",
          fullBio: "Joshua son of Nun, Moses' longtime aide, is commissioned to lead Israel into the Promised Land after Moses' death: “Be strong and courageous... for the Lord your God is with you wherever you go” (Joshua 1:6-9). Under his leadership, Israel crosses the Jordan River on dry ground — echoing the Red Sea crossing — and the priests carrying the Ark lead the people into the land (Joshua 3-4). At Jericho, Joshua's forces conquer not by siege but by liturgical procession: for six days the Israelites march silently around the city walls, and on the seventh, after the trumpets sound, the walls collapse (Joshua 6). Joshua leads Israel through campaigns to take possession of Canaan, then divides the land among the twelve tribes. Before his death, he renews the covenant at Shechem: “choose this day whom you will serve... but as for me and my house, we will serve the Lord” (Joshua 24:15). Catholic tradition draws a striking connection between Joshua and Jesus: in Hebrew, “Joshua” and “Jesus” are the same name, meaning “the Lord saves.” Just as Joshua led God's people into the earthly land of rest, Jesus leads believers into the eternal rest of Heaven (Hebrews 4:8-11). Rahab, the Canaanite woman whose faith saves her at Jericho, is later named among the ancestors of Jesus (Matthew 1:5).",
          references: "Joshua 1, 3-6, 24; Hebrews 4:8-11; Matthew 1:5."
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
          story: "Samson was given amazing super-strength by God to fight Israel's enemies! But he made some risky choices and lost his strength when his hair was cut. God still used him for one final, powerful victory.",
          fullBio: "Samson, from the tribe of Dan, is set apart from birth as a Nazirite — one consecrated to God, forbidden to cut his hair, drink wine, or touch anything unclean (Judges 13:1-5). His extraordinary strength, a gift from God tied to this vow, allows him to fight Israel's oppressors, the Philistines, single-handedly — tearing apart a lion barehanded, defeating a thousand men with a donkey's jawbone, and carrying off the gates of Gaza (Judges 14–16). Yet his story is also a caution about disordered desire and compromised commitments. Drawn toward Philistine women against his people's wishes, Samson eventually reveals the secret of his strength to Delilah, who betrays him; his hair is cut, his strength departs, and he is captured, blinded, and enslaved (Judges 16:4-21). In his final act, imprisoned and humiliated, Samson prays for restored strength one last time and pulls down the pillars of the Philistine temple, defeating more of Israel's enemies in his death than in his life (Judges 16:23-30). The Book of Judges presents Samson as one of the divinely-raised deliverers during a chaotic period when “everyone did what was right in his own eyes” (Judges 21:25). Hebrews includes Samson among the heroes commended for their faith (Hebrews 11:32), even as his downfall serves as a sober warning about vows and self-control.",
          references: "Judges 13–16; Hebrews 11:32."
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
          story: "David was just a young shepherd who played the harp and wrote songs — we call them Psalms! He bravely defeated the giant Goliath and later became Israel's most beloved king. God promised David his family would rule forever, a promise fulfilled by Jesus!",
          fullBio: "David, the youngest son of Jesse of Bethlehem, is anointed king by the prophet Samuel while still a shepherd boy, long before King Saul is removed from power — “the Lord looks on the heart” (1 Samuel 16:1-13). David's fame begins when he defeats the Philistine champion Goliath with only a sling and a stone, trusting “the battle is the Lord's” (1 Samuel 17). Despite years of unjust persecution by the jealous Saul, David repeatedly refuses to take the king's life, modeling respect for legitimate authority. After Saul's death, David is anointed king over all Israel, establishes Jerusalem as his capital, and brings the Ark of the Covenant into the city (2 Samuel 5-6). God makes a covenant with David promising his throne will endure forever — fulfilled in Jesus Christ, “Son of David” (2 Samuel 7:12-16; Luke 1:32-33). David's reign includes grave sin: his adultery with Bathsheba and the engineered death of her husband Uriah (2 Samuel 11). Yet his genuine repentance when confronted by the prophet Nathan, expressed in Psalm 51 (“Have mercy on me, O God”), establishes him as a lasting model of contrition central to the Catholic understanding of Reconciliation (CCC 1502). Traditionally the primary author of the Psalms, David gave the Church its enduring language of prayer and praise.",
          references: "1 Samuel 16-17; 2 Samuel 5-7, 11-12; Psalm 51; Luke 1:32-33; CCC 709, 2579."
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
          story: "Solomon asked God for wisdom instead of riches, and God made him the wisest king ever! He built the beautiful First Temple in Jerusalem. But later in life he made poor choices that led to the kingdom splitting after he died.",
          fullBio: "Solomon, David's son by Bathsheba, succeeds his father as king and is famously granted extraordinary wisdom after asking God, in a dream at Gibeon, for “an understanding mind to govern your people” rather than riches or long life (1 Kings 3:5-14). His wisdom becomes legendary — displayed in his judgment between two women claiming the same infant (1 Kings 3:16-28), his traditional authorship of Proverbs, Ecclesiastes, and the Song of Songs, and the visit of the Queen of Sheba (1 Kings 10:1-13). Solomon's greatest achievement is constructing the First Temple in Jerusalem, fulfilling David's desire to build a permanent house for the Ark (1 Kings 5-8); at its dedication he prays the Temple would be a house of prayer “for all the peoples of the earth” (1 Kings 8:41-43). Despite this glorious beginning, Solomon's later life declines: he takes many foreign wives who “turn away his heart after other gods,” leading him into idolatry (1 Kings 11:1-8). As punishment, God declares the kingdom will be torn from his son, and after Solomon's death the united monarchy splits permanently into Israel and Judah (1 Kings 11-12). Solomon's story stands as a sobering lesson: even the wisest and most blessed of leaders can fall through compromise and divided loyalty.",
          references: "1 Kings 3, 5-11; 2 Chronicles 1-9; CCC 2579."
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
    chronology: [
      { date: "870–780 BC", text: "The prophetic ministry of Elijah and Elisha" },
      { date: "770–596 BC", text: "Prophets before the deportation: Amos, Hosea, Isaiah, Micah, etc." },
      { date: "722 BC", text: "The Assyrians conquer Israel and take ten tribes into captivity" },
      { date: "597–596 BC", text: "The first deportation to Babylon; Ezekiel predicts the destruction of Jerusalem" },
      { date: "587–586 BC", text: "The second deportation to Babylon; the destruction of Jerusalem" },
      { date: "538 BC", text: "The decree of Cyrus allows the Jews to return to Jerusalem" },
      { date: "536–515 BC", text: "The construction of the second Temple in Jerusalem" },
      { date: "326 BC", text: "Alexander the Great begins his conquests" },
      { date: "175 BC", text: "Antiochus Epiphanes becomes king" },
      { date: "167 BC", text: "Persecution of the Jews; the revolt begins" },
      { date: "164 BC", text: "The Temple rededication" },
      { date: "134 BC", text: "John Hyrcanus becomes high priest" }
    ],
    events: [
      {
        icon: "🏛️",
        title: "The Assyrian & Babylonian Captivity",
        text: "Because the people wouldn't listen to the prophets, powerful armies destroyed both kingdoms and even burned down God's Temple. It was Israel's saddest chapter.",
        character: {
          name: "Jeremiah",
          icon: "😢",
          story: "Jeremiah is called the 'weeping prophet' because he cried for his people, warning them again and again to turn back to God before it was too late. Even when no one listened, he never stopped trusting God.",
          fullBio: "Jeremiah, called by God as a prophet while still young (“I do not know how to speak, for I am only a youth” — Jeremiah 1:6), ministers in the final, turbulent decades of the Kingdom of Judah, watching as its leaders ignore his repeated warnings to repent before disaster strikes. For over forty years, Jeremiah proclaims that Judah's unfaithfulness will bring conquest by Babylon as divine judgment — a message so unwelcome he is mocked, beaten, thrown into a muddy cistern, and imprisoned by his own people (Jeremiah 20, 37-38). His anguish earns him the traditional title “the weeping prophet”; the Book of Lamentations, traditionally attributed to him, mourns the destruction of Jerusalem and the Temple in 587 BC. Yet Jeremiah is also given one of the Old Testament's most important promises of hope: God declares through him a coming “new covenant,” in which God's law will be written not on tablets of stone but on the human heart, and sins remembered no more (Jeremiah 31:31-34). The Church understands this as fulfilled in Jesus Christ, whose words at the Last Supper — “this cup is the new covenant in my blood” (Luke 22:20) — deliberately echo Jeremiah's promise (CCC 1965). Jeremiah's costly faithfulness even amid total unpopularity makes him one of the most theologically significant voices pointing toward Christ.",
          references: "Jeremiah 1, 20, 31, 37-38; Lamentations; Luke 22:20; CCC 64, 1965."
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
          story: "Daniel refused to stop praying to God, even when a jealous king made it illegal! He was thrown into a den of hungry lions — but God sent an angel to shut their mouths, and Daniel walked out without a scratch!",
          fullBio: "Daniel is a young Jewish nobleman deported to Babylon after Nebuchadnezzar's conquest of Jerusalem, where he and three companions resolve to remain faithful to Jewish law even under pressure to assimilate (Daniel 1). Daniel's God-given ability to interpret dreams brings him to prominence: he interprets Nebuchadnezzar's dream of a great statue representing successive world empires (Daniel 2), and later reads the mysterious handwriting on the wall at King Belshazzar's feast, foretelling Babylon's fall that very night (Daniel 5). His most celebrated episode comes under King Darius, when jealous officials manipulate the king into forbidding prayer to anyone but himself for thirty days — a law aimed at Daniel, who continues praying openly toward Jerusalem exactly as before. Cast into a den of lions, Daniel is miraculously protected: “my God sent his angel and shut the lions' mouths” (Daniel 6:22), emerging unharmed. Daniel also receives extraordinary visions, including “one like a son of man” coming with the clouds of heaven to receive an everlasting kingdom (Daniel 7:13-14) — a title Jesus applies directly to Himself in the Gospels (Mark 14:61-62). Daniel's unwavering faithfulness under pressure makes him a perennial model for believers facing pressure to abandon their faith.",
          references: "Daniel 1-2, 5-7; Mark 14:61-62."
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
          story: "Nehemiah worked as a cupbearer for the Persian king, but his heart broke when he heard Jerusalem's walls were in ruins. He got permission to go rebuild them — and led the people to finish the huge job in just 52 days!",
          fullBio: "Nehemiah serves as cupbearer to the Persian king Artaxerxes — a position of real trust — when he receives devastating news that Jerusalem's walls lie in ruins nearly a century after the Babylonian exile, leaving the resettled Jewish community exposed (Nehemiah 1). His grief moves him to fasting and prayer, and eventually to boldly request the king's permission to travel to Jerusalem and rebuild the city's defenses himself (Nehemiah 2:1-8). Once there, Nehemiah organizes the discouraged community, assigning families to rebuild specific sections of wall simultaneously, and has workers labor with a tool in one hand and a weapon in the other to defend against hostile neighbors who mock and threaten the project (Nehemiah 4). Through remarkable administrative skill and determination, the wall — a task many considered impossible — is completed in just fifty-two days (Nehemiah 6:15). Nehemiah's leadership extends beyond construction: he works alongside the priest-scribe Ezra to restore proper worship and leads a public reading and recommitment to the Law of Moses, sparking spiritual renewal (Nehemiah 8-10). His account is notable for how often he turns directly to God in brief, urgent prayers (“Remember me, O my God, for good,” Nehemiah 13:31), modeling a practical faith that combines prayer with disciplined, well-organized effort.",
          references: "Nehemiah 1-2, 4, 6, 8-10, 13."
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
          story: "Judas Maccabeus led a small, brave army against a huge empire to defend his people's right to worship God. Against all odds, they won and cleaned the Temple — and a jar of oil miraculously burned for eight days!",
          fullBio: "Judas Maccabeus leads the Jewish resistance in the second century BC against the Seleucid Greek king Antiochus IV Epiphanes, who outlawed Jewish religious practice and desecrated the Jerusalem Temple by erecting a pagan altar upon it (1 Maccabees 1). After his father Mattathias sparks the revolt, Judas — nicknamed “Maccabeus,” likely meaning “the hammer” — takes command of the growing rebel army (1 Maccabees 2-3). Despite being vastly outnumbered, Judas wins a remarkable series of victories, trusting that “it is not on the size of the army that victory in battle depends, but strength comes from Heaven” (1 Maccabees 3:19). In 164 BC, Judas recaptures Jerusalem and cleanses and rededicates the defiled Temple, relighting its lamp in a ceremony that becomes the origin of Hanukkah (1 Maccabees 4:36-59; John 10:22). The books of 1 and 2 Maccabees, which the Catholic Church includes in the Deuterocanon, also record one of the Old Testament's clearest expressions of belief in bodily resurrection, voiced by Jewish martyrs (2 Maccabees 7). Notably, 2 Maccabees 12:38-46 describes Judas offering sacrifice for fallen soldiers “that they might be delivered from their sin” — a passage the Catholic Church cites as scriptural support for prayer for the dead and Purgatory (CCC 1032).",
          references: "1 Maccabees 1-4; 2 Maccabees 7, 12:38-46; John 10:22; CCC 1032."
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
    chronology: [
      { date: "ca. 6–4 BC", text: "The announcement of the birth of John the Baptist; the Annunciation to the Virgin Mary; the Birth of Jesus Christ in Bethlehem; his circumcision, the Presentation in the Temple, the Adoration of the Magi, the Flight to Egypt, and the martyrdom of the Holy Innocents; the Holy Family returns to Nazareth" },
      { date: "AD 6–8", text: "The Finding of Christ in the Temple" },
      { date: "Public Ministry", text: "The preaching of John the Baptist; the Baptism of Christ in the Jordan; the Temptation of Christ in the desert; the first disciples: John, Andrew, Peter, James, Philip, and Nathaniel; Christ preaches in the synagogues of Galilee, heals the sick, and casts out demons; the Sermon on the Mount" },
      { date: "Until the Third Passover", text: "The second Passover; the healing of the paralytic at Bethesda; Christ debates the Pharisees; Christ chooses the Twelve Apostles; the multiplication of the loaves and fishes; the woman at the well; Simon's name changed to Peter; Christ announces his Death and Resurrection; the Transfiguration; the woman caught in adultery; the curing of the blind man at Siloam; the Parable of the Good Shepherd" },
      { date: "Journey to Jerusalem", text: "Christ is rejected by the Samaritans; the mission of the seventy-two disciples; the Greatest Commandment; the Lord's Prayer; the parables of the Good Samaritan, the Prodigal Son, and the Rich Man and Lazarus; the resurrection of Lazarus; teaching on marriage and following Christ" },
      { date: "Sunday", text: "The Passion, Death, Resurrection & Ascension begin: the Entrance into Jerusalem" },
      { date: "Monday", text: "Christ curses the barren fig tree" },
      { date: "Tuesday", text: "Christ debates the Pharisees; the widow's mite; the Parables of the Two Sons, the Wicked Husbandmen, the Wise and Foolish Virgins, and the Talents" },
      { date: "Wednesday", text: "The Sanhedrin conspires against Christ; the anointing in Bethany; the betrayal by Judas" },
      { date: "Thursday", text: "The Last Supper; the institution of the Eucharist; the New Commandment; prayer in the Garden of Gethsemane; the arrest of Christ" },
      { date: "Friday", text: "The Passion, Death, and entombment in the sepulcher" },
      { date: "Sunday", text: "The Resurrection; Christ's appearance to the women and the Apostles" },
      { date: "40 days later", text: "Christ's Ascension into Heaven" }
    ],
    events: [
      {
        icon: "⭐",
        title: "The Incarnation",
        text: "An angel told a young girl named Mary she would become the mother of God's Son! Jesus, God become man, was born in a humble stable in Bethlehem.",
        character: {
          name: "Mary",
          icon: "🕊️",
          story: "Mary was a young girl from Nazareth who said 'yes' to God's amazing plan, even though it wasn't easy. She became the mother of Jesus and shows us what it looks like to trust God completely.",
          fullBio: "Mary of Nazareth, a young Jewish woman betrothed to Joseph, is greeted by the angel Gabriel with the words “full of grace, the Lord is with you” and told she will conceive and bear a son by the power of the Holy Spirit, “the Son of the Most High” (Luke 1:26-35). Despite the enormity of what is asked, Mary responds with complete trust: “Behold, I am the handmaid of the Lord; let it be to me according to your word” (Luke 1:38) — the fiat Catholic tradition regards as the pivotal human “yes” that makes the Incarnation possible. The Church teaches Mary was conceived without Original Sin, the Immaculate Conception, uniquely preparing her to be the worthy mother of God's Son (CCC 490-493), and honors her with the ancient title Theotokos, “Mother of God,” affirmed at the Council of Ephesus in 431 AD (CCC 495). Her song of praise, the Magnificat, echoes the Old Testament's hope for God's justice toward the lowly (Luke 1:46-55). Mary is present throughout Jesus' life — at Cana, where she intercedes for the wedding couple (“Do whatever he tells you,” John 2:5), and at the foot of the Cross, where Jesus entrusts her to the Beloved Disciple (John 19:25-27). She is present with the Apostles at Pentecost (Acts 1:14). Catholic doctrine holds that at the end of her earthly life, Mary was assumed body and soul into heaven, the Assumption (CCC 966).",
          references: "Luke 1-2, 11:28; John 2, 19:25-27; Acts 1:14; CCC 490-495, 966."
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
          story: "Peter was a fisherman when Jesus called him to 'follow Me.' He wasn't perfect — he even said he didn't know Jesus once! But Jesus forgave him and made him the leader of the Apostles.",
          fullBio: "Simon Peter, a fisherman from Capernaum, is among the first disciples Jesus calls, immediately renaming him “Cephas” or “Peter,” meaning “rock” (John 1:42). At Caesarea Philippi, when Peter confesses “You are the Christ, the Son of the living God,” Jesus responds: “You are Peter, and on this rock I will build my church... I will give you the keys of the kingdom of heaven” (Matthew 16:16-19) — a moment the Catholic Church understands as the foundation of the papacy (CCC 552, 881-882). Yet the Gospels do not idealize Peter — he is impulsive and famously denies knowing Jesus three times during the Passion, exactly as predicted (Matthew 26:69-75). After the Resurrection, the risen Jesus asks Peter three times, “Do you love me?” — mirroring and healing the three denials — and commissions him: “Feed my sheep” (John 21:15-19). At Pentecost, Peter preaches boldly to the crowds in Jerusalem, and three thousand are baptized that day (Acts 2:14-41) — the man who once denied Christ out of fear now proclaims Him fearlessly. Peter continues to lead the early Church, presides at the Council of Jerusalem (Acts 15), and, according to strong ancient tradition, is martyred in Rome under Nero, crucified upside down at his own request, considering himself unworthy to die as his Lord did.",
          references: "Matthew 16:13-19, 26:69-75; John 21:15-19; Acts 2, 15; CCC 552, 881-882."
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
          story: "Jesus is God's own Son, who became human to save us. He loved us so much that He suffered and died on the cross — and then rose from the dead! His resurrection is the reason Christians celebrate Easter.",
          fullBio: "Jesus Christ is, in Catholic faith, the eternal Son of God who “became flesh and dwelt among us” (John 1:14) — fully divine and fully human, one Divine Person in two natures, as defined by the Council of Chalcedon in 451 AD (CCC 464-469). Conceived by the Holy Spirit and born of the Virgin Mary in Bethlehem, Jesus begins a public ministry around age thirty, proclaiming “the kingdom of God is at hand” (Mark 1:15). He teaches with striking authority, heals the sick, and performs miracles that reveal His identity as God's own Son and His authority over sin and death (CCC 547-550). Jesus gathers twelve Apostles, mirroring the twelve tribes of Israel, to found a renewed people of God, the Church (CCC 551, 765). His growing following provokes fierce opposition, and He is arrested, unjustly tried, and crucified under Pontius Pilate. Catholic theology calls His suffering, death, and Resurrection the Paschal Mystery, “the heart of the Christian faith” (CCC 571): on the Cross, Jesus offers Himself as the perfect sacrifice for humanity's sins, the true Passover Lamb (1 Corinthians 5:7), and three days later rises bodily, conquering death. Before His Ascension, Jesus commissions the Apostles to “make disciples of all nations” (Matthew 28:19-20) and institutes the Eucharist at the Last Supper, commanding “do this in memory of me” (Luke 22:19).",
          references: "John 1:14; Mark 1:15; Matthew 16, 28:19-20; Luke 22:19; 1 Corinthians 5:7; Hebrews 10, 13:8; CCC 456-470, 571, 599-618."
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
          story: "John was the youngest Apostle and Jesus' close friend — the Gospels call him 'the one Jesus loved.' He sat right next to Jesus at the Last Supper and later wrote a Gospel and the book of Revelation.",
          fullBio: "John, son of Zebedee and younger brother of James, is a fisherman called by Jesus, and becomes part of Jesus' innermost circle together with Peter and James — present at the Transfiguration, in Gethsemane, and at other especially significant moments (Mark 5:37, 9:2, 14:33). The Gospel that bears his name refers to him, with evident affection, as “the disciple whom Jesus loved,” and describes him reclining close to Jesus at the Last Supper (John 13:23), the very meal at which Jesus institutes the Eucharist and gives the New Commandment to love one another as He has loved us (John 13:34). Of the Twelve, John alone is recorded standing at the foot of the Cross, where the dying Jesus entrusts His mother Mary into John's care — “Behold, your mother” (John 19:26-27) — a moment the Church reads as entrusting Mary to the whole Church. John is traditionally credited with writing the Fourth Gospel, three New Testament epistles, and Revelation, making him the most prolific New Testament author among the Twelve. His Gospel opens with a majestic prologue proclaiming Christ as the eternal Word made flesh (John 1:1-14). Ancient tradition holds that John, unlike the other Apostles, was not martyred but died of old age in Ephesus, the last living link to Jesus' earthly ministry.",
          references: "John 1:1-14, 13:23, 19:26-27; Mark 5:37, 9:2; CCC 331, 517."
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
          story: "The Apostles were Jesus' twelve closest friends. After Pentecost, they became bold preachers who carried the Good News across the whole world, even when it was dangerous to do so.",
          fullBio: "The Apostles — the Twelve whom Jesus personally chose, trained, and commissioned during His earthly ministry — gather in Jerusalem following Jesus' Ascension, devoting themselves to prayer together with Mary and other disciples, awaiting the promised gift of the Holy Spirit (Acts 1:12-14). On the Jewish feast of Pentecost, fifty days after Easter, the Holy Spirit descends upon them dramatically, “as of a rushing mighty wind,” with tongues as of fire resting on each of them, and they begin proclaiming the mighty works of God to crowds gathered in Jerusalem from across the known world (Acts 2:1-11). The Catechism identifies Pentecost as the founding, revealing moment of the Church: the Spirit transforms the once-fearful Apostles — who had scattered at Jesus' arrest — into bold public witnesses (CCC 731-732, 767). Peter's Pentecost sermon alone brings about three thousand converts and baptisms in a single day (Acts 2:14-41). Catholic tradition also reads Pentecost as a deliberate reversal of the Tower of Babel, where humanity's pride caused languages to divide and scatter the human family (Genesis 11): at Pentecost, the Gospel is understood across every language, symbolizing the Church's mission to gather every nation into one family in Christ (CCC 1076). From this moment, the Apostles go out to preach the Gospel, establish local churches, and — according to strong tradition — nearly all are eventually martyred for their testimony.",
          references: "Acts 1-2; Genesis 11; CCC 731-732, 767, 1076."
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
          story: "Paul used to arrest Christians until Jesus appeared to him on the road to Damascus and changed his whole life! He traveled thousands of miles by land and sea, starting churches and writing letters that are now part of the Bible.",
          fullBio: "Saul of Tarsus, a zealous Pharisee trained under the eminent rabbi Gamaliel, begins as a fierce persecutor of the early Church, present at and approving of the stoning of the first Christian martyr, Stephen, and actively hunting down Christians for arrest (Acts 7:58-8:3). While traveling to Damascus to arrest believers there, Saul is confronted by a blinding light and the voice of the risen Jesus — “Saul, Saul, why do you persecute me?” — leaving him blind for three days until a disciple named Ananias, at God's direction, restores his sight and baptizes him (Acts 9:1-19). From this point, Saul — known by his Roman name, Paul — becomes the most tireless missionary of the early Church, undertaking extensive journeys across the Mediterranean to found and strengthen Christian communities, always insisting salvation in Christ is offered freely to Gentiles as well as Jews (Acts 13-28; Galatians 2:7-9). Paul's courage comes at great cost — he catalogs beatings, shipwrecks, and imprisonments in his own letters (2 Corinthians 11:23-28) — yet presses on: “I have been crucified with Christ; it is no longer I who live, but Christ who lives in me” (Galatians 2:20). Thirteen New Testament letters bear Paul's name, forming the backbone of Christian theology on grace and the Church as the Body of Christ. Tradition holds Paul was martyred by beheading in Rome under Nero.",
          references: "Acts 7-9, 13-28; Galatians 2; 2 Corinthians 11; CCC 76."
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
          story: "James was a leader of the early Church in Jerusalem. His letter teaches that real faith shows up in kind actions — 'faith without works is dead,' he wrote!",
          fullBio: "James, traditionally called “James the Just” or “the brother of the Lord” (a term the Church understands as referring to a close relative, given Mary's perpetual virginity — CCC 500), emerges as the leading figure and first bishop of the Jerusalem church, distinct from the Apostle James son of Zebedee who was martyred earlier under Herod Agrippa (Acts 12:2). At the pivotal Council of Jerusalem around 49 AD, when the early Church debated whether Gentile converts needed to follow Jewish ceremonial law, it is James who proposes the council's resolution, welcoming Gentiles while asking them to observe a few practical requirements — a decision that proved decisive for the young Church's growth beyond Judaism (Acts 15:13-21). The New Testament Letter of James is one of the most practical, down-to-earth books in the Bible, insisting that authentic faith must produce visible good works: “faith apart from works is dead” (James 2:14-26) — a teaching the Catholic Church holds in careful balance with Paul's teaching on grace, seeing the two as complementary (CCC 1815, 2001). The letter also addresses the anointing of the sick by the elders of the Church (James 5:14-15), a passage cited among the scriptural foundations for the Sacrament of Anointing of the Sick (CCC 1510). Tradition holds James was martyred in Jerusalem around 62 AD.",
          references: "Acts 12:2, 15:13-21; James 2, 5:14-15; CCC 500, 1510, 1815, 2001."
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
          story: "When John was old, Roman rulers exiled him to a lonely island called Patmos. There, God gave him incredible visions of heaven, which he wrote down as the book of Revelation — showing that no matter how bad things look, God wins in the end!",
          fullBio: "Toward the end of his long life, the Apostle John — by this time the last surviving member of the original Twelve — is exiled by Roman authorities to the small island of Patmos in the Aegean Sea “on account of the word of God and the testimony of Jesus,” suffering for his continued faithful witness even in old age (Revelation 1:9). It is on Patmos, “in the Spirit on the Lord's day,” that John receives the visions recorded in the Book of Revelation. Revelation opens with a vision of the glorified, risen Christ walking among seven lampstands representing seven churches of Asia Minor, followed by specific messages to each community (Revelation 1-3). The bulk of the book unfolds in dense, symbolic imagery — much of which Catholic scholarship reads not as a literal timetable of future events but as a theologically rich portrait of the ongoing spiritual struggle between the Church and evil, culminating in Christ's certain victory. The heavenly worship John describes — an altar, incense, robed elders, and the Lamb who was slain now enthroned in glory (Revelation 4-5) — has long shaped Catholic understanding of the Mass as a real participation in the eternal liturgy of heaven (CCC 1137-1139). The book closes with a vision of “a new heaven and a new earth,” where God “will wipe away every tear” (Revelation 21:1-4) — the hope-filled conclusion of the entire biblical story that began in a garden in Genesis.",
          references: "Revelation 1, 4-5, 21; CCC 1137-1139."
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
