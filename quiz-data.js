// Daily Catholic Quiz — question bank.
// Each entry is one day's set of 5 questions. The site picks a set
// automatically based on today's date (see quiz.js), cycling through
// this list, so it "auto-updates" daily without needing a server.
//
// Add more sets any time — the more sets, the longer before it repeats.

const QUIZ_EPOCH = "2026-07-16"; // Day 0 of the rotation.

const QUIZ_SETS = [
  {
    theme: "Creation & the Fall",
    questions: [
      { q: "How many days did God take to create the world?", choices: ["Six", "Seven", "Three", "Forty"], answer: 0, note: "God created the world in six days and rested on the seventh (Genesis 1–2)." },
      { q: "What did Adam and Eve do that broke their friendship with God?", choices: ["They argued with each other", "They ate the forbidden fruit", "They ran away from Eden", "They stopped praying"], answer: 1, note: "Disobeying God's one rule — eating the forbidden fruit — is the Original Sin (Genesis 3)." },
      { q: "What is the first promise of a Savior called?", choices: ["The Beatitudes", "The Protoevangelium", "The Magnificat", "The Decalogue"], answer: 1, note: "Genesis 3:15 is called the Protoevangelium, or “First Gospel” — the first hint of Jesus." },
      { q: "Who is called the “New Eve” in Catholic teaching?", choices: ["Sarah", "Ruth", "Mary", "Esther"], answer: 2, note: "Just as Eve's disobedience brought sin, Mary's “yes” helped bring salvation." },
      { q: "In whose image and likeness did God make humans?", choices: ["The angels'", "His own", "Adam's", "No one's"], answer: 1, note: "Genesis 1:27 — God created mankind in His own image." }
    ]
  },
  {
    theme: "Noah & the Flood",
    questions: [
      { q: "Why did God send the flood?", choices: ["To water the crops", "Because the earth had grown very sinful", "To punish Noah", "To create the ocean"], answer: 1, note: "Genesis 6 says the earth was filled with wickedness, grieving God's heart." },
      { q: "How many of each kind of animal did Noah bring on the ark?", choices: ["One", "Ten", "Two", "A hundred"], answer: 2, note: "Genesis 6:19 — two of every kind, male and female." },
      { q: "What sign did God give as a promise never to flood the whole earth again?", choices: ["A dove", "A rainbow", "A star", "A candle"], answer: 1, note: "The rainbow is the sign of God's covenant with Noah (Genesis 9:13)." },
      { q: "What does the Catholic Church say the flood water prefigures?", choices: ["Confession", "Baptism", "Confirmation", "The Eucharist"], answer: 1, note: "Just as the flood washed away the old world, Baptism washes away sin to make us new (CCC 1219)." },
      { q: "Who did God save from the flood?", choices: ["Only Noah", "Noah and his family", "All of Noah's neighbors", "No one"], answer: 1, note: "Noah, his wife, his sons, and their wives were saved (Genesis 7:7)." }
    ]
  },
  {
    theme: "Abraham & the Patriarchs",
    questions: [
      { q: "What did God promise Abraham?", choices: ["Great riches only", "A huge family and a blessing for all nations", "A new house", "Fame in Egypt"], answer: 1, note: "God promised Abraham descendants as many as the stars, and a blessing for every family on earth (Genesis 12, 15)." },
      { q: "What is Abraham called in Catholic tradition?", choices: ["The Father in Faith", "The First King", "The Great Judge", "The Lawgiver"], answer: 0, note: "Abraham is honored as the Father in Faith, even named in the Roman Canon of the Mass." },
      { q: "What name did God give Jacob after he wrestled with an angel?", choices: ["Isaac", "Israel", "Judah", "Levi"], answer: 1, note: "Jacob was renamed Israel, meaning “one who wrestles with God” (Genesis 32:28)." },
      { q: "How many sons did Jacob have, who became the twelve tribes of Israel?", choices: ["Seven", "Ten", "Twelve", "Twenty"], answer: 2, note: "Jacob's twelve sons became the twelve tribes of Israel." },
      { q: "How was Joseph eventually able to save his family?", choices: ["He became Pharaoh", "He became a powerful leader in Egypt during a famine", "He returned to Canaan as a soldier", "He built the pyramids"], answer: 1, note: "God used Joseph's hardships to place him in power in Egypt, saving his family from famine (Genesis 41–47)." }
    ]
  },
  {
    theme: "Moses & the Exodus",
    questions: [
      { q: "Where did God first speak to Moses?", choices: ["On a mountain of stone", "From a burning bush", "In a dream", "At the Red Sea"], answer: 1, note: "God called Moses from a bush that burned but was not consumed (Exodus 3)." },
      { q: "What did God do to convince Pharaoh to free the Israelites?", choices: ["Sent an army", "Sent ten plagues", "Sent a flood", "Sent a famine"], answer: 1, note: "God sent ten plagues upon Egypt (Exodus 7–12)." },
      { q: "How did God part the sea for Israel to escape?", choices: ["With a strong east wind through Moses' staff", "With an earthquake", "With a bridge of stone", "With fire"], answer: 0, note: "Exodus 14:21 — God drove back the sea with a strong east wind all night." },
      { q: "Where did God give Moses the Ten Commandments?", choices: ["Mount Sinai", "Mount Carmel", "Mount of Olives", "Mount Ararat"], answer: 0, note: "God gave the Law to Moses on Mount Sinai (Exodus 19–20)." },
      { q: "What does St. Paul say the Israelites' Red Sea crossing points to?", choices: ["Confirmation", "Baptism", "Marriage", "Holy Orders"], answer: 1, note: "1 Corinthians 10:1-2 links the crossing to being “baptized into Moses.”" }
    ]
  },
  {
    theme: "The Ten Commandments",
    questions: [
      { q: "What is the first commandment about?", choices: ["Honoring your parents", "Worshipping God alone", "Not stealing", "Keeping the Sabbath"], answer: 1, note: "“I am the Lord your God... you shall have no other gods before me” (Exodus 20:2-3)." },
      { q: "Which commandment tells us to keep the Sabbath holy?", choices: ["The first", "The third", "The fifth", "The tenth"], answer: 1, note: "The third commandment calls us to rest and worship on the Lord's Day." },
      { q: "What does the fourth commandment ask of us?", choices: ["Honor your father and mother", "Do not kill", "Do not lie", "Do not covet"], answer: 0, note: "The fourth commandment calls us to honor our parents." },
      { q: "The Catechism calls the Ten Commandments the...", choices: ["Beatitudes", "Way of life", "Sacraments", "Creed"], answer: 1, note: "CCC 2057 calls the Decalogue “the way of life” God taught His people." },
      { q: "How did Jesus summarize the whole Law?", choices: ["Love God and love your neighbor", "Follow every rule perfectly", "Give away all riches", "Fast every day"], answer: 0, note: "Jesus summarized the Law as loving God and neighbor (Matthew 22:37-40)." }
    ]
  },
  {
    theme: "Judges & Kings",
    questions: [
      { q: "What was the job of a “judge” in the Book of Judges?", choices: ["A courtroom lawyer", "A God-sent hero who rescued Israel", "A tax collector", "A high priest"], answer: 1, note: "Judges were leaders God raised up to rescue Israel in times of trouble." },
      { q: "What weapon did young David use to defeat Goliath?", choices: ["A sword", "A sling and a stone", "A spear", "A bow and arrow"], answer: 1, note: "1 Samuel 17 — David defeated the giant with a sling and stone." },
      { q: "What promise did God make to King David?", choices: ["Endless riches", "That his throne/family would rule forever", "A long life", "Victory in every battle"], answer: 1, note: "2 Samuel 7 — God promised David's throne would be established forever, fulfilled in Jesus." },
      { q: "What did King Solomon ask God for?", choices: ["Wealth", "A long life", "Wisdom", "Many soldiers"], answer: 2, note: "1 Kings 3 — Solomon asked for wisdom, and God made him the wisest king." },
      { q: "What did Solomon famously build in Jerusalem?", choices: ["A palace only", "The First Temple", "A great wall", "A harbor"], answer: 1, note: "Solomon built the First Temple as God's dwelling among His people (1 Kings 6)." }
    ]
  },
  {
    theme: "Prophets & the Exile",
    questions: [
      { q: "Why is Jeremiah called the “weeping prophet”?", choices: ["He was always sad", "He cried for his people who wouldn't listen to God", "He lost his family", "He was blind"], answer: 1, note: "Jeremiah wept over Israel's refusal to turn back to God." },
      { q: "What happened to Daniel when he refused to stop praying?", choices: ["He was exiled", "He was thrown into a den of lions", "He was made king", "He was imprisoned alone"], answer: 1, note: "Daniel 6 — Daniel was thrown to the lions but God protected him." },
      { q: "Which Persian king let the Jewish exiles return home?", choices: ["Cyrus", "Nebuchadnezzar", "Herod", "Darius"], answer: 0, note: "Isaiah 45 and Ezra 1 — Cyrus is even called God's “anointed” for freeing the exiles." },
      { q: "Who rebuilt the broken walls of Jerusalem?", choices: ["Ezra", "Nehemiah", "Malachi", "Zechariah"], answer: 1, note: "Nehemiah led the people to rebuild Jerusalem's walls in just 52 days." },
      { q: "The Maccabean revolt is remembered by which Jewish feast?", choices: ["Passover", "Hanukkah", "Purim", "Yom Kippur"], answer: 1, note: "The Maccabees' victory and the Temple's rededication are remembered at Hanukkah." }
    ]
  },
  {
    theme: "The Life of Jesus I: Incarnation & Birth",
    questions: [
      { q: "Who told Mary she would be the mother of God's Son?", choices: ["The prophet Isaiah", "The angel Gabriel", "St. Joseph", "St. John the Baptist"], answer: 1, note: "Luke 1:26-38 — the Annunciation, when Gabriel visited Mary." },
      { q: "Where was Jesus born?", choices: ["Nazareth", "Jerusalem", "Bethlehem", "Bethany"], answer: 2, note: "Jesus was born in Bethlehem, fulfilling the prophecy in Micah 5:2." },
      { q: "What does “Incarnation” mean?", choices: ["Jesus rising from the dead", "God the Son becoming man", "Jesus ascending to heaven", "The Holy Spirit descending"], answer: 1, note: "The Incarnation is the central mystery: the Son of God became truly human." },
      { q: "Who is Jesus' foster father?", choices: ["St. Peter", "St. Joseph", "St. John", "Zechariah"], answer: 1, note: "St. Joseph, a carpenter, was Jesus' earthly, foster father." },
      { q: "St. Paul says Christ came “when...”", choices: ["Israel demanded it", "The fullness of time had come", "The Temple was finished", "David became king"], answer: 1, note: "Galatians 4:4 — Christ came in “the fullness of time.”" }
    ]
  },
  {
    theme: "The Life of Jesus II: Ministry & Miracles",
    questions: [
      { q: "How many Apostles did Jesus choose?", choices: ["Seven", "Ten", "Twelve", "Seventy"], answer: 2, note: "Jesus chose twelve Apostles, echoing the twelve tribes of Israel." },
      { q: "What was Peter's job before Jesus called him?", choices: ["A tax collector", "A fisherman", "A shepherd", "A carpenter"], answer: 1, note: "Peter and his brother Andrew were fishermen when Jesus called them." },
      { q: "What is the main theme of Jesus' preaching?", choices: ["The Kingdom of God", "The Roman Empire", "The Law of Moses only", "The Temple tax"], answer: 0, note: "Jesus announced that the Kingdom of God was breaking into the world through Him." },
      { q: "Why did Jesus perform miracles like healings?", choices: ["To become famous", "As signs pointing to His authority over sin and death", "To defeat the Romans", "To collect money"], answer: 1, note: "Jesus' miracles are “signs” revealing His deeper spiritual authority (cf. Mark 2:1-12)." },
      { q: "What form do Jesus' teaching stories usually take?", choices: ["Songs", "Letters", "Parables", "Riddles with no meaning"], answer: 2, note: "Jesus often taught using parables — simple stories with deep meaning." }
    ]
  },
  {
    theme: "The Passion, Death & Resurrection",
    questions: [
      { q: "What is the Catholic term for Jesus' suffering, death, and rising?", choices: ["The Beatitudes", "The Paschal Mystery", "The Magnificat", "The Ascension"], answer: 1, note: "CCC 571 calls the Paschal Mystery “the heart of the Christian faith.”" },
      { q: "On what day did Jesus rise from the dead?", choices: ["The next day", "The third day", "After forty days", "A week later"], answer: 1, note: "Jesus rose on the third day, as He had foretold." },
      { q: "What feast celebrates Jesus' resurrection?", choices: ["Christmas", "Easter", "Pentecost", "All Saints' Day"], answer: 1, note: "Easter is the greatest feast of the Church year, celebrating the Resurrection." },
      { q: "Who is called the true Passover Lamb?", choices: ["Moses", "John the Baptist", "Jesus", "Abraham"], answer: 2, note: "1 Corinthians 5:7 calls Jesus “our Passover lamb,” whose sacrifice saves us." },
      { q: "What did Jesus do 40 days after His Resurrection?", choices: ["He was baptized", "He ascended into heaven", "He was born", "He fed the 5,000"], answer: 1, note: "The Ascension, 40 days after Easter, is when Jesus returned to heaven." }
    ]
  },
  {
    theme: "The Sacraments",
    questions: [
      { q: "How many sacraments does the Catholic Church have?", choices: ["Five", "Seven", "Ten", "Three"], answer: 1, note: "There are seven sacraments: Baptism, Confirmation, Eucharist, Reconciliation, Anointing of the Sick, Holy Orders, and Matrimony." },
      { q: "Which sacrament washes away Original Sin and welcomes us into the Church?", choices: ["Confirmation", "Baptism", "Matrimony", "Holy Orders"], answer: 1, note: "Baptism is the first sacrament, freeing us from sin and making us children of God." },
      { q: "Which sacrament is also called Confession or Penance?", choices: ["Reconciliation", "Anointing of the Sick", "Confirmation", "Eucharist"], answer: 0, note: "Reconciliation (Confession) forgives sins committed after Baptism." },
      { q: "Which sacrament strengthens us with the Holy Spirit, like a spiritual “coming of age”?", choices: ["Baptism", "Confirmation", "Holy Orders", "Matrimony"], answer: 1, note: "Confirmation seals and strengthens the grace received at Baptism." },
      { q: "Which sacrament is sometimes called the “source and summit” of the Christian life?", choices: ["Matrimony", "The Eucharist", "Holy Orders", "Anointing of the Sick"], answer: 1, note: "CCC 1324 calls the Eucharist the “source and summit” of Christian life." }
    ]
  },
  {
    theme: "The Mass & the Eucharist",
    questions: [
      { q: "At which meal did Jesus institute the Eucharist?", choices: ["The wedding at Cana", "The Last Supper", "A meal with Zacchaeus", "The feeding of the 5,000"], answer: 1, note: "At the Last Supper, Jesus gave His Body and Blood under the appearance of bread and wine." },
      { q: "What do Catholics believe about the consecrated bread and wine?", choices: ["They are just symbols", "They truly become the Body and Blood of Christ", "They are blessed bread only", "They represent Israel"], answer: 1, note: "Catholics believe in the Real Presence — Jesus truly present, Body, Blood, Soul, and Divinity." },
      { q: "What Old Testament food is seen as foreshadowing the Eucharist?", choices: ["Honey", "Manna from heaven", "Fish", "Olives"], answer: 1, note: "The manna God gave in the desert prefigures the Bread of Life (John 6)." },
      { q: "What covenant did Jesus establish at the Last Supper?", choices: ["The Old Covenant", "The New Covenant", "The Noahic Covenant", "No covenant"], answer: 1, note: "Jesus' words “this is my blood” establish the New Covenant, foretold by Jeremiah." },
      { q: "Who continues to celebrate the Eucharist today at every Mass?", choices: ["Only the Pope", "Priests, through the ministerial priesthood Jesus instituted", "Anyone who wants to", "No one anymore"], answer: 1, note: "Jesus told the Apostles “do this in memory of me,” instituting the priesthood." }
    ]
  },
  {
    theme: "The Apostles & Early Church",
    questions: [
      { q: "What event is considered the birthday of the Church?", choices: ["The Last Supper", "Pentecost", "The Ascension", "The Crucifixion"], answer: 1, note: "At Pentecost, the Holy Spirit came upon Mary and the Apostles, giving birth to the Church." },
      { q: "Who was a persecutor of Christians before becoming a great missionary?", choices: ["Peter", "Paul", "Stephen", "Barnabas"], answer: 1, note: "Paul (formerly Saul) persecuted Christians until Jesus appeared to him on the road to Damascus (Acts 9)." },
      { q: "Who was the first Christian martyr?", choices: ["Peter", "James", "Stephen", "John"], answer: 2, note: "Stephen was stoned for his faith in Acts 7, the first Christian martyr." },
      { q: "Which Apostle did Jesus call “the Rock” and give the keys to?", choices: ["John", "Peter", "Andrew", "Thomas"], answer: 1, note: "Matthew 16:18-19 — Jesus named Peter as the Rock and gave him the keys of the Kingdom." },
      { q: "What book of the Bible tells the story of the early Church spreading?", choices: ["Acts of the Apostles", "Revelation", "Genesis", "Exodus"], answer: 0, note: "Acts of the Apostles tells how the Gospel spread after Pentecost." }
    ]
  },
  {
    theme: "Mary & the Saints",
    questions: [
      { q: "What does “Immaculate Conception” refer to?", choices: ["Jesus' birth", "Mary being conceived without Original Sin", "Mary's Assumption into heaven", "The birth of John the Baptist"], answer: 1, note: "The Immaculate Conception means Mary was preserved free from Original Sin from her conception." },
      { q: "What title do Catholics give Mary because she is Jesus' mother?", choices: ["Queen of Angels only", "Mother of God (Theotokos)", "First Apostle", "High Priestess"], answer: 1, note: "Because Jesus is God, Mary is honored as the Mother of God." },
      { q: "What does the Rosary help Catholics do?", choices: ["Memorize the Ten Commandments", "Meditate on the life of Jesus with Mary", "Learn Church history", "Study the Books of the Bible"], answer: 1, note: "The Rosary walks through the Joyful, Sorrowful, Glorious, and Luminous Mysteries of Jesus' life." },
      { q: "A “saint” is someone who...", choices: ["Never made a mistake", "Is now with God in heaven, a model of holiness", "Wrote a book of the Bible", "Was a priest"], answer: 1, note: "Saints are holy men and women now united with God, whom we ask to pray for us." },
      { q: "Which feast honors all the saints in heaven, known and unknown?", choices: ["Christmas", "All Saints' Day", "Easter", "Ash Wednesday"], answer: 1, note: "All Saints' Day (November 1) honors every saint in heaven." }
    ]
  },
  {
    theme: "Prayers & Catholic Basics",
    questions: [
      { q: "What prayer did Jesus Himself teach His disciples?", choices: ["The Hail Mary", "The Our Father", "The Glory Be", "The Apostles' Creed"], answer: 1, note: "Jesus taught the Our Father (Lord's Prayer) in Matthew 6:9-13." },
      { q: "The Apostles' Creed is a summary of...", choices: ["The Ten Commandments", "The core beliefs of the Christian faith", "The Books of the Bible", "The Sacraments"], answer: 1, note: "The Creed professes the Church's core beliefs about God, Jesus, and the Church." },
      { q: "The Sign of the Cross calls on which Persons of God?", choices: ["Just Jesus", "The Father, Son, and Holy Spirit", "Mary and the saints", "The angels"], answer: 1, note: "“In the name of the Father, and of the Son, and of the Holy Spirit” names the Holy Trinity." },
      { q: "What does the Church call the season of preparing for Christmas?", choices: ["Lent", "Advent", "Ordinary Time", "Easter"], answer: 1, note: "Advent is the season of hopeful waiting before Christmas." },
      { q: "What does the Church call the season of preparing for Easter?", choices: ["Advent", "Lent", "Pentecost", "Epiphany"], answer: 1, note: "Lent is the 40-day season of prayer, fasting, and almsgiving before Easter." }
    ]
  }
];
