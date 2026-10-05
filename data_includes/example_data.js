// Latin squaring is setup using the native Ibex method

PennController.ResetPrefix(null);
//Header().log( "PROLIFIC_ID", GetURLParameter("id") );
DebugOff();

var shuffleSequence = seq("setcounter",
						//  "begin",
                          "startpractice",
                          sepWith("sep", seq("practice")),
                          "starter",
                          sepWith("sep", rshuffle(startsWith("exp"), startsWith("fill"))),
                    //      "further-information",
             			     "sendresults",
                      //    "completion",
                );

var showProgressBar =false;


var practiceItemTypes = ["practice"];

var manualSendResults = true;

var defaults = ["Maze", {redo: true, time:500}];

// following is from the A-maze site to make breaks every 12 maze sentences
// you have to set the write number of total items and number of blocks to start with, and the right condition names, etc.
// calculate the following numbers to fill in the values below (not including practice trials-
// for this experiment:
// total maze sentences a participant will be presented: 83
// sentences per block: 12
// number of blocks: 7 (last incomplete)

// The following example inserts a "pause" Message at every nth item (where i % n)
// The % operator returns the remainder of two numbers, so will be 0 when a multiple of n


var items = [

	["setcounter", "__SetCounter__", { }],

	["sendresults", "__SendResults__", { }],

	["sep", "MazeSeparator", {normalMessage: "Correct! Press any key to continue", errorMessage: "Incorrect! Press any key to continue."}],
//["begin", "Form", { html: { include: "consent.html" } } ],
//   ["begin", "Form", { html: { include: "intro.html" } } ],
//   ["begin", "Form", { html: { include: "welcome.html" } } ],
//   ["begin", "Form", { html: { include: "clarification-form.html" } } ],

["startpractice", Message, {consentRequired: false,
	html: ["div",
		   ["p", "First you can do two sentences to practice."]
		  ]}],

//
//  practice items
//
[["practice", 900], "Maze", {s:"The professor entered the wrong classroom.", a:"x-x-x elsewhere stylist pre remove interested."}],
[["practice", 902], "Maze", {s:"The opinion expressed by the coach helped the athlete.", a:"x-x-x exists boyfriend lord okay shown empire yeah hurting."}],

// message that the experiment is beginning

   ["starter", Message, {consentRequired: false,
	html: ["div",
		   ["p", "Time to start the main portion of the experiment!"]
		  ]}],

[["exp.a.1",1], "Maze", {s:"The registered nurse scolded the medic while the administrator came in.", a:"x-x-x although relax profane jack shone miles cent characterized yeah am."}],
[["exp.b.1",1], "Maze", {s:"The registered nurse who worked at the clinic scolded the medic while the administrator came in.", a:"x-x-x although relax mid stupid guy seen beaten profane jack shone miles cent characterized yeah am."}],
[["exp.c.1",1], "Maze", {s:"The illegal nurse scolded the medic while the administrator came in.", a:"x-x-x although relax profane jack shone miles cent characterized yeah am."}],
[["exp.d.1",1], "Maze", {s:"The illegal nurse who worked at the clinic scolded the medic while the administrator came in.", a:"x-x-x although relax mid stupid guy seen beaten profane jack shone miles cent characterized yeah am."}],
[["exp.a.2",2], "Maze", {s:"The jazz singer bothered a guest but the manager didn't fire him.", a:"x-x-x let deadly insanity cent foods anti app located global hour link."}],
[["exp.b.2",2], "Maze", {s:"The jazz singer who performed in the theater bothered a guest but the manager didn't fire him.", a:"x-x-x let deadly lord gathering miss rate awarded insanity cent foods anti app located global hour link."}],
[["exp.c.2",2], "Maze", {s:"The AI singer bothered a guest but the manager didn't fire him.", a:"x-x-x let deadly insanity cent foods anti app located global hour link."}],
[["exp.d.2",2], "Maze", {s:"The AI singer who performed in the theater bothered a guest but the manager didn't fire him.", a:"x-x-x let deadly lord gathering miss rate awarded insanity cent foods anti app located global hour link."}],
[["exp.a.3",3], "Maze", {s:"The talented athlete snubbed the teammates although this hurt his reputation.", a:"x-x-x because testify proverb pre discusses province cent cops join consisting."}],
[["exp.b.3",3], "Maze", {s:"The talented athlete who ran on the playground snubbed the teammates although this hurt his reputation.", a:"x-x-x because testify text jack hear lord appreciate proverb pre discusses province cent cops join consisting."}],
[["exp.c.3",3], "Maze", {s:"The feeble athlete snubbed the teammates although this hurt his reputation.", a:"x-x-x because testify proverb pre discusses province cent cops join consisting."}],
[["exp.d.3",3], "Maze", {s:"The feeble athlete who ran on the playground snubbed the teammates although this hurt his reputation.", a:"x-x-x because testify text jack hear lord appreciate proverb pre discusses province cent cops join consisting."}],
[["exp.a.4",4], "Maze", {s:"The enthusiastic fans injured a spectator because they had a disagreement.", a:"x-x-x sympathize inch organic trip reprinted reasons cent size nor optimization."}],
[["exp.b.4",4], "Maze", {s:"The enthusiastic fans who danced at the concert injured a spectator because they had a disagreement.", a:"x-x-x sympathize inch pre zodiac app guy regards organic trip reprinted reasons cent size nor optimization."}],
[["exp.c.4",4], "Maze", {s:"The indifferent fans injured a spectator because they had a disagreement.", a:"x-x-x sympathize inch organic trip reprinted reasons cent size nor optimization."}],
[["exp.d.4",4], "Maze", {s:"The indifferent fans who danced at the concert injured a spectator because they had a disagreement.", a:"x-x-x sympathize inch pre zodiac app guy regards organic trip reprinted reasons cent size nor optimization."}],
[["exp.a.5",5], "Maze", {s:"The defiant rebels confronted the villagers after they discovered a scandal.", a:"x-x-x anyway verify publishers ride integrate stuff jack restaurant add anybody."}],
[["exp.b.5",5], "Maze", {s:"The defiant rebels who protested on the plaza confronted the villagers after they discovered a scandal.", a:"x-x-x anyway verify lake promenade app guy repay publishers ride integrate stuff jack restaurant add anybody."}],
[["exp.c.5",5], "Maze", {s:"The submissive rebels confronted the villagers after they discovered a scandal.", a:"x-x-x anyway verify publishers ride integrate stuff jack restaurant add anybody."}],
[["exp.d.5",5], "Maze", {s:"The submissive rebels who protested on the plaza confronted the villagers after they discovered a scandal.", a:"x-x-x anyway verify lake promenade app guy repay publishers ride integrate stuff jack restaurant add anybody."}],
[["exp.a.6",6], "Maze", {s:"The skilled beautician greeted the doorman although they didn't know each other.", a:"x-x-x utilize unrecorded cancers cent collect clinical jack agency anti push costs."}],
[["exp.b.6",6], "Maze", {s:"The skilled beautician who walked across the yard greeted the doorman although they didn't know each other.", a:"x-x-x utilize unrecorded pre galaxy senate bag okay cancers cent collect clinical jack agency anti push costs."}],
[["exp.c.6",6], "Maze", {s:"The bankrupt beautician greeted the doorman although they didn't know each other.", a:"x-x-x utilize unrecorded cancers cent collect clinical jack agency anti push costs."}],
[["exp.d.6",6], "Maze", {s:"The bankrupt beautician who walked across the yard greeted the doorman although they didn't know each other.", a:"x-x-x utilize unrecorded pre galaxy senate bag okay cancers cent collect clinical jack agency anti push costs."}],
[["exp.a.7",7], "Maze", {s:"The young lady offended the butler and then left the mansion.", a:"x-x-x apart okay efficacy cent reside sale term guys vote guessed."}],
[["exp.b.7",7], "Maze", {s:"The young lady who strolled through the garden offended the butler and then left the mansion.", a:"x-x-x apart okay pre crayfish edition app anyway efficacy cent reside sale term guys vote guessed."}],
[["exp.c.7",7], "Maze", {s:"The brutal lady offended the butler and then left the mansion.", a:"x-x-x apart okay efficacy cent reside sale term guys vote guessed."}],
[["exp.d.7",7], "Maze", {s:"The brutal lady who strolled through the garden offended the butler and then left the mansion.", a:"x-x-x apart okay pre crayfish edition app anyway efficacy cent reside sale term guys vote guessed."}],
[["exp.a.8",8], "Maze", {s:"The observant detective questioned the coroner because the markings were unusual.", a:"x-x-x moreover correctly referendum cup compose smaller cent appoints hill servers."}],
[["exp.b.8",8], "Maze", {s:"The observant detective who focused on the body questioned the coroner because the markings were unusual.", a:"x-x-x moreover correctly okay tourism gift ago yeah referendum cup compose smaller cent appoints hill servers."}],
[["exp.c.8",8], "Maze", {s:"The gullible detective questioned the coroner because the markings were unusual.", a:"x-x-x moreover correctly referendum cup compose smaller cent appoints hill servers."}],
[["exp.d.8",8], "Maze", {s:"The gullible detective who focused on the body questioned the coroner because the markings were unusual.", a:"x-x-x moreover correctly okay tourism gift ago yeah referendum cup compose smaller cent appoints hill servers."}],
[["exp.a.9",9], "Maze", {s:"The evil monster approached the princess although it only wanted a friend.", a:"x-x-x rely compare likelihood vote diabetes download app cash global sir myself."}],
[["exp.b.9",9], "Maze", {s:"The evil monster who stayed in the tower approached the princess although it only wanted a friend.", a:"x-x-x rely compare pre extent jack cent begin likelihood vote diabetes download app cash global sir myself."}],
[["exp.c.9",9], "Maze", {s:"The cute monster approached the princess although it only wanted a friend.", a:"x-x-x rely compare likelihood vote diabetes download app cash global sir myself."}],
[["exp.d.9",9], "Maze", {s:"The cute monster who stayed in the tower approached the princess although it only wanted a friend.", a:"x-x-x rely compare pre extent jack cent begin likelihood vote diabetes download app cash global sir myself."}],
[["exp.a.10",10], "Maze", {s:"The brave fireman obtained a lawyer because he needed legal representation.", a:"x-x-x alike grossed republic yeah exists happens cent latest click simultaneously."}],
[["exp.b.10",10], "Maze", {s:"The brave fireman who arrived at the scene obtained a lawyer because he needed legal representation.", a:"x-x-x alike grossed sale digital al guy trans republic yeah exists happens cent latest click simultaneously."}],
[["exp.c.10",10], "Maze", {s:"The sensitive fireman obtained a lawyer because he needed legal representation.", a:"x-x-x alike grossed republic yeah exists happens cent latest click simultaneously."}],
[["exp.d.10",10], "Maze", {s:"The sensitive fireman who arrived at the scene obtained a lawyer because he needed legal representation.", a:"x-x-x alike grossed sale digital al guy trans republic yeah exists happens cent latest click simultaneously."}],
[["exp.a.11",11], "Maze", {s:"The legendary diva thanked the pianist after the club was closed.", a:"x-x-x afterward anew viruses app caramel apply cat ford eye method."}],
[["exp.b.11",11], "Maze", {s:"The legendary diva who sang at the club thanked the pianist after the club was closed.", a:"x-x-x afterward anew trip pine fund kid whom viruses app caramel apply cat ford eye method."}],
[["exp.c.11",11], "Maze", {s:"The silent diva thanked the pianist after the club was closed.", a:"x-x-x afterward anew viruses app caramel apply cat ford eye method."}],
[["exp.d.11",11], "Maze", {s:"The silent diva who sang at the club thanked the pianist after the club was closed.", a:"x-x-x afterward anew trip pine fund kid whom viruses app caramel apply cat ford eye method."}],
[["exp.a.12",12], "Maze", {s:"The artisan baker assisted the chef because they were short-staffed.", a:"x-x-x calculate fatal senators jack rely weekend vote east confederation."}],
[["exp.b.12",12], "Maze", {s:"The artisan baker who worked at the cafe assisted the chef because they were short-staffed.", a:"x-x-x calculate fatal holy senate bill hate null senators jack rely weekend vote east confederation."}],
[["exp.c.12",12], "Maze", {s:"The ambitious baker assisted the chef because they were short-staffed.", a:"x-x-x calculate fatal senators jack rely weekend vote east confederation."}],
[["exp.d.12",12], "Maze", {s:"The ambitious baker who worked at the cafe assisted the chef because they were short-staffed.", a:"x-x-x calculate fatal holy senate bill hate null senators jack rely weekend vote east confederation."}],
[["exp.a.13",13], "Maze", {s:"The greedy robber met the waitress before the police arrested him.", a:"x-x-x modify exited pre miss quantify cancer soul myself millions page."}],
[["exp.b.13",13], "Maze", {s:"The greedy robber who walked into the shop met the waitress before the police arrested him.", a:"x-x-x modify exited goal luxury cent app whom pre miss quantify cancer soul myself millions page."}],
[["exp.c.13",13], "Maze", {s:"The generous robber met the waitress before the police arrested him.", a:"x-x-x modify exited pre miss quantify cancer soul myself millions page."}],
[["exp.d.13",13], "Maze", {s:"The generous robber who walked into the shop met the waitress before the police arrested him.", a:"x-x-x modify exited goal luxury cent app whom pre miss quantify cancer soul myself millions page."}],
[["exp.a.14",14], "Maze", {s:"The intelligent lawyer blamed the secretary but nobody was listening.", a:"x-x-x remember waited cloudy tour depending mid flower wood signature."}],
[["exp.b.14",14], "Maze", {s:"The intelligent lawyer who stood by the elevator blamed the secretary but nobody was listening.", a:"x-x-x remember waited luck lions hear cent replaces cloudy tour depending mid flower wood signature."}],
[["exp.c.14",14], "Maze", {s:"The nervous lawyer blamed the secretary but nobody was listening.", a:"x-x-x remember waited cloudy tour depending mid flower wood signature."}],
[["exp.d.14",14], "Maze", {s:"The nervous lawyer who stood by the elevator blamed the secretary but nobody was listening.", a:"x-x-x remember waited luck lions hear cent replaces cloudy tour depending mid flower wood signature."}],
[["exp.a.15",15], "Maze", {s:"The medical intern observed the surgeon whenever there was an operation.", a:"x-x-x suggest endure patriots jack realise northern enjoy hair app continues."}],
[["exp.b.15",15], "Maze", {s:"The medical intern who entered into the program observed the surgeon whenever there was an operation.", a:"x-x-x suggest endure luck supreme guys yeah anymore patriots jack realise northern enjoy hair app continues."}],
[["exp.c.15",15], "Maze", {s:"The authoritative intern observed the surgeon whenever there was an operation.", a:"x-x-x suggest endure patriots jack realise northern enjoy hair app continues."}],
[["exp.d.15",15], "Maze", {s:"The authoritative intern who entered into the program observed the surgeon whenever there was an operation.", a:"x-x-x suggest endure luck supreme guys yeah anymore patriots jack realise northern enjoy hair app continues."}],
[["exp.a.16",16], "Maze", {s:"The school librarian consulted the colleague although she rarely needed help.", a:"x-x-x enough tampering superstar miss illustrate increase kill flower league yeah."}],
[["exp.b.16",16], "Maze", {s:"The school librarian who volunteered at the university consulted the colleague although she rarely needed help.", a:"x-x-x enough tampering jack demographic park guys definitely superstar miss illustrate increase kill flower league yeah."}],
[["exp.c.16",16], "Maze", {s:"The robotic librarian consulted the colleague although she rarely needed help.", a:"x-x-x enough tampering superstar miss illustrate increase kill flower league yeah."}],
[["exp.d.16",16], "Maze", {s:"The robotic librarian who volunteered at the university consulted the colleague although she rarely needed help.", a:"x-x-x enough tampering jack demographic park guys definitely superstar miss illustrate increase kill flower league yeah."}],
[["exp.a.17",17], "Maze", {s:"The beautiful actress met the audience after the performance was over.", a:"x-x-x whatever opposed cash hill download earth jack agriculture cat laws."}],
[["exp.b.17",17], "Maze", {s:"The beautiful actress who danced on the stage met the audience after the performance was over.", a:"x-x-x whatever opposed hate fixing app sir doubt cash hill download earth jack agriculture cat laws."}],
[["exp.c.17",17], "Maze", {s:"The ugly actress met the audience after the performance was over.", a:"x-x-x whatever opposed cash hill download earth jack agriculture cat laws."}],
[["exp.d.17",17], "Maze", {s:"The ugly actress who danced on the stage met the audience after the performance was over.", a:"x-x-x whatever opposed hate fixing app sir doubt cash hill download earth jack agriculture cat laws."}],
[["exp.a.18",18], "Maze", {s:"The erudite scholar explored the archives but nothing was found.", a:"x-x-x activate tolerate turbines dad prepare feet weekend hate super."}],
[["exp.b.18",18], "Maze", {s:"The erudite scholar who read in the library explored the archives but nothing was found.", a:"x-x-x activate tolerate fun loss kill pull herself turbines dad prepare feet weekend hate super."}],
[["exp.c.18",18], "Maze", {s:"The stupid scholar explored the archives but nothing was found.", a:"x-x-x activate tolerate turbines dad prepare feet weekend hate super."}],
[["exp.d.18",18], "Maze", {s:"The stupid scholar who read in the library explored the archives but nothing was found.", a:"x-x-x activate tolerate fun loss kill pull herself turbines dad prepare feet weekend hate super."}],
[["exp.a.19",19], "Maze", {s:"The graceful dancers greeted the officials while the last act was on.", a:"x-x-x evaluate sourced vitamin cent determine basis miss yeah shut dad fund."}],
[["exp.b.19",19], "Maze", {s:"The graceful dancers who partied near the stage greeted the officials while the last act was on.", a:"x-x-x evaluate sourced pre cassava loan app shall vitamin cent determine basis miss yeah shut dad fund."}],
[["exp.c.19",19], "Maze", {s:"The conservative dancers greeted the officials while the last act was on.", a:"x-x-x evaluate sourced vitamin cent determine basis miss yeah shut dad fund."}],
[["exp.d.19",19], "Maze", {s:"The conservative dancers who partied near the stage greeted the officials while the last act was on.", a:"x-x-x evaluate sourced pre cassava loan app shall vitamin cent determine basis miss yeah shut dad fund."}],
[["exp.a.20",20], "Maze", {s:"The naughty boys petted the dog while it was relaxing.", a:"x-x-x besides glad brevet anti nor doubt vs cent listings."}],
[["exp.b.20",20], "Maze", {s:"The naughty boys who skateboarded by the sidewalk petted the dog while it was relaxing.", a:"x-x-x besides glad yes minesweeping pre sir evaluate brevet anti nor doubt vs cent listings."}],
[["exp.c.20",20], "Maze", {s:"The realistic boys petted the dog while it was relaxing.", a:"x-x-x besides glad brevet anti nor doubt vs cent listings."}],
[["exp.d.20",20], "Maze", {s:"The realistic boys who skateboarded by the sidewalk petted the dog while it was relaxing.", a:"x-x-x besides glad yes minesweeping pre sir evaluate brevet anti nor doubt vs cent listings."}],
[["exp.a.21",21], "Maze", {s:"The abusive bully approached the kid after he finished class.", a:"x-x-x afford borne acceptance vote nor apply vs majority agree."}],
[["exp.b.21",21], "Maze", {s:"The abusive bully who lingered on the street approached the kid after he finished class.", a:"x-x-x afford borne pre denoting miss jack unless acceptance vote nor apply vs majority agree."}],
[["exp.c.21",21], "Maze", {s:"The lovely bully approached the kid after he finished class.", a:"x-x-x afford borne acceptance vote nor apply vs majority agree."}],
[["exp.d.21",21], "Maze", {s:"The lovely bully who lingered on the street approached the kid after he finished class.", a:"x-x-x afford borne pre denoting miss jack unless acceptance vote nor apply vs majority agree."}],
[["exp.a.22",22], "Maze", {s:"The fierce tiger noticed the zoologist while she gathered information.", a:"x-x-x expire handy actress app anticipate trump lie maturity anniversary."}],
[["exp.b.22",22], "Maze", {s:"The fierce tiger that prowled near the enclosure noticed the zoologist while she gathered information.", a:"x-x-x expire handy cash caesium fund pre consider actress app anticipate trump lie maturity anniversary."}],
[["exp.c.22",22], "Maze", {s:"The timid tiger noticed the zoologist while she gathered information.", a:"x-x-x expire handy actress app anticipate trump lie maturity anniversary."}],
[["exp.d.22",22], "Maze", {s:"The timid tiger that prowled near the enclosure noticed the zoologist while she gathered information.", a:"x-x-x expire handy cash caesium fund pre consider actress app anticipate trump lie maturity anniversary."}],
[["exp.a.23",23], "Maze", {s:"The social scientists studied the aliens after they got anesthetized.", a:"x-x-x happen separately lawsuit miss write trump jack gay urbanisation."}],
[["exp.b.23",23], "Maze", {s:"The social scientists who gathered around the table studied the aliens after they got anesthetized.", a:"x-x-x happen separately pre weekends please okay yours lawsuit miss write trump jack gay urbanisation."}],
[["exp.c.23",23], "Maze", {s:"The romantic scientists studied the aliens after they got anesthetized.", a:"x-x-x happen separately lawsuit miss write trump jack gay urbanisation."}],
[["exp.d.23",23], "Maze", {s:"The romantic scientists who gathered around the table studied the aliens after they got anesthetized.", a:"x-x-x happen separately pre weekends please okay yours lawsuit miss write trump jack gay urbanisation."}],
[["exp.a.24",24], "Maze", {s:"The courageous policeman stopped a biker since he seemed drunk.", a:"x-x-x whoever unnoticed passion app pesos shall vs senate camps."}],
[["exp.b.24",24], "Maze", {s:"The courageous policeman who patrolled along the highway stopped a biker since he seemed drunk.", a:"x-x-x whoever unnoticed date tunneling guess grow achieve passion app pesos shall vs senate camps."}],
[["exp.c.24",24], "Maze", {s:"The timid policeman stopped a biker since he seemed drunk.", a:"x-x-x whoever unnoticed passion app pesos shall vs senate camps."}],
[["exp.d.24",24], "Maze", {s:"The timid policeman who patrolled along the highway stopped a biker since he seemed drunk.", a:"x-x-x whoever unnoticed date tunneling guess grow achieve passion app pesos shall vs senate camps."}],
[["exp.a.25",25], "Maze", {s:"The powerful president left the conference early after the deal was off.", a:"x-x-x conclude recommend okay rate appreciate china reach app pray pop sex."}],
[["exp.b.25",25], "Maze", {s:"The powerful president who sat in the office left the conference early after the deal was off.", a:"x-x-x conclude recommend fun blog cent miss happen okay rate appreciate china reach app pray pop sex."}],
[["exp.c.25",25], "Maze", {s:"The childish president left the conference early after the deal was off.", a:"x-x-x conclude recommend okay rate appreciate china reach app pray pop sex."}],
[["exp.d.25",25], "Maze", {s:"The childish president who sat in the office left the conference early after the deal was off.", a:"x-x-x conclude recommend fun blog cent miss happen okay rate appreciate china reach app pray pop sex."}],
[["exp.a.26",26], "Maze", {s:"The curious journalist wrote an article after he interviewed the mayor.", a:"x-x-x enhance compatible multi jack protect avoid eat enterprises wish relax."}],
[["exp.b.26",26], "Maze", {s:"The curious journalist who delved into the controversy wrote an article after he interviewed the mayor.", a:"x-x-x enhance compatible sale hotbed yeah dad accordingly multi jack protect avoid eat enterprises wish relax."}],
[["exp.c.26",26], "Maze", {s:"The musical journalist wrote an article after he interviewed the mayor.", a:"x-x-x enhance compatible multi jack protect avoid eat enterprises wish relax."}],
[["exp.d.26",26], "Maze", {s:"The musical journalist who delved into the controversy wrote an article after he interviewed the mayor.", a:"x-x-x enhance compatible sale hotbed yeah dad accordingly multi jack protect avoid eat enterprises wish relax."}],
[["exp.a.27",27], "Maze", {s:"The sneaky thief mocked the police as he vanished into thin air.", a:"x-x-x inflate salty parity hour accept mid app wildfire wait hint whom."}],
[["exp.b.27",27], "Maze", {s:"The sneaky thief who escaped from the mall mocked the police as he vanished into thin air.", a:"x-x-x inflate salty pre physics jack than lend parity hour accept mid app wildfire wait hint whom."}],
[["exp.c.27",27], "Maze", {s:"The adorable thief mocked the police as he vanished into thin air.", a:"x-x-x inflate salty parity hour accept mid app wildfire wait hint whom."}],
[["exp.d.27",27], "Maze", {s:"The adorable thief who escaped from the mall mocked the police as he vanished into thin air.", a:"x-x-x inflate salty pre physics jack than lend parity hour accept mid app wildfire wait hint whom."}],
[["exp.a.28",28], "Maze", {s:"The skilled technician surveyed the audience while they were taking a break.", a:"x-x-x overcome negligible diarrhea eat somebody trump jack yeah option may shall."}],
[["exp.b.28",28], "Maze", {s:"The skilled technician who moved around the auditorium surveyed the audience while they were taking a break.", a:"x-x-x overcome negligible pre weird please god implicitly diarrhea eat somebody trump jack yeah option may shall."}],
[["exp.c.28",28], "Maze", {s:"The artistic technician surveyed the audience while they were taking a break.", a:"x-x-x overcome negligible diarrhea eat somebody trump jack yeah option may shall."}],
[["exp.d.28",28], "Maze", {s:"The artistic technician who moved around the auditorium surveyed the audience while they were taking a break.", a:"x-x-x overcome negligible pre weird please god implicitly diarrhea eat somebody trump jack yeah option may shall."}],
[["exp.a.29",29], "Maze", {s:"The store manager hired the plumber because the toilet was broken.", a:"x-x-x propose imagine indie hear opposes amazing anti define yes senate."}],
[["exp.b.29",29], "Maze", {s:"The store manager who stopped by the store hired the plumber because the toilet was broken.", a:"x-x-x propose imagine holy premier cent soul hence indie hear opposes amazing anti define yes senate."}],
[["exp.c.29",29], "Maze", {s:"The muscular manager hired the plumber because the toilet was broken.", a:"x-x-x propose imagine indie hear opposes amazing anti define yes senate."}],
[["exp.d.29",29], "Maze", {s:"The muscular manager who stopped by the store hired the plumber because the toilet was broken.", a:"x-x-x propose imagine holy premier cent soul hence indie hear opposes amazing anti define yes senate."}],
[["exp.a.30",30], "Maze", {s:"The knowledgeable historian offended the speaker before the talk was finished.", a:"x-x-x characterise transmit invasive cent connect happen mom yeah nice families."}],
[["exp.b.30",30], "Maze", {s:"The knowledgeable historian who stood by the podium offended the speaker before the talk was finished.", a:"x-x-x characterise transmit fun lions wear kid enroll invasive cent connect happen mom yeah nice families."}],
[["exp.c.30",30], "Maze", {s:"The playful historian offended the speaker before the talk was finished.", a:"x-x-x characterise transmit invasive cent connect happen mom yeah nice families."}],
[["exp.d.30",30], "Maze", {s:"The playful historian who stood by the podium offended the speaker before the talk was finished.", a:"x-x-x characterise transmit fun lions wear kid enroll invasive cent connect happen mom yeah nice families."}],
[["exp.a.31",31], "Maze", {s:"The eloquent politician proposed a policy but it faced strong opposition.", a:"x-x-x therefore translate wildlife jack except wild dad chest listen approached."}],
[["exp.b.31",31], "Maze", {s:"The eloquent politician who hesitated for a moment proposed a policy but it faced strong opposition.", a:"x-x-x therefore translate ice emphysema rate app videos wildlife jack except wild dad chest listen approached."}],
[["exp.c.31",31], "Maze", {s:"The altruistic politician proposed a policy but it faced strong opposition.", a:"x-x-x therefore translate wildlife jack except wild dad chest listen approached."}],
[["exp.d.31",31], "Maze", {s:"The altruistic politician who hesitated for a moment proposed a policy but it faced strong opposition.", a:"x-x-x therefore translate ice emphysema rate app videos wildlife jack except wild dad chest listen approached."}],
[["exp.a.32",32], "Maze", {s:"The strong boxer delivered a punch but his opponent dodged it.", a:"x-x-x anyway suing copyright yeah bells kids bed trillion citric lake."}],
[["exp.b.32",32], "Maze", {s:"The strong boxer who trained for two years delivered a punch but his opponent dodged it.", a:"x-x-x anyway suing pre context cent ago agree copyright yeah bells kids bed trillion citric lake."}],
[["exp.c.32",32], "Maze", {s:"The sluggish boxer delivered a punch but his opponent dodged it.", a:"x-x-x anyway suing copyright yeah bells kids bed trillion citric lake."}],
[["exp.d.32",32], "Maze", {s:"The sluggish boxer who trained for two years delivered a punch but his opponent dodged it.", a:"x-x-x anyway suing pre context cent ago agree copyright yeah bells kids bed trillion citric lake."}],
[["fill.filler.33",33], "Maze", {s:"The waves drummed on the shore like turbaned warriors in the middle of the night.", a:"x-x-x eaten earldom lord app hates cent divisors nickname yes dad choose sad glad knows."}],
[["fill.filler.34",34], "Maze", {s:"The researchers used blood pressure cuffs to measure blood pressure while the participants were at rest.", a:"x-x-x encountered holy trump greatest crore hour founded lived somebody hotel lord unbelievable lady am sold."}],
[["fill.filler.35",35], "Maze", {s:"The health plan was not enough for even the most basic health services.", a:"x-x-x happen tons dad hear wonder your seem app yeah click forget greatest."}],
[["fill.filler.36",36], "Maze", {s:"The stories form a naturalistic depiction of the middle class life in the city in the early years of the last century.", a:"x-x-x anymore luck dad malnutrition islanders ride sent except avoid miss pre sir pick yeah glad shall wrote stay vote done selling."}],
[["fill.filler.37",37], "Maze", {s:"The poll shows a dissatisfied public with half of voters saying the country is headed in the wrong direction.", a:"x-x-x unto sorry sir examinations videos till else eat assure couple lady located hill stairs born died learn materials."}],
[["fill.filler.38",38], "Maze", {s:"Experts say it is difficult to blame individual heart attacks on heat waves based on currently available data.", a:"x-x-x luck jack foot movements wear shots dedication trump illegal lots drew grove faith took secretary democrats lord."}],
[["fill.filler.39",39], "Maze", {s:"The art museum is currently undergoing a makeover and will reopen at the end of next year.", a:"x-x-x upon smooth dad contracts disruption cat trainees feet whom helium code win knew her took jack."}],
[["fill.filler.40",40], "Maze", {s:"All the undergraduate students of the department have to take a minimum of three courses in each semester.", a:"x-x-x mid alternatively somebody lady miss definitely anti jack yeah oh watched lord sorry forever gay glad calories."}],
[["fill.filler.41",41], "Maze", {s:"The human brain is composed of neurons that transmit signals throughout the brain and the nervous system.", a:"x-x-x apart worse pre uniforms wear proudly sell trophies listing foundation glad weird wild nice diamond expect."}],
[["fill.filler.42",42], "Maze", {s:"The French class was on a trip to Paris one summer to improve their language skills.", a:"x-x-x Anyway costs okay mom else cops hear Weird pre sounds oh enemies shall includes repeat."}],
[["fill.filler.43",43], "Maze", {s:"The company was founded by a group of passionate graduate students from a prestigious university.", a:"x-x-x anymore sir fingers sit send feels hair translates accuracy supposed nice cent sovereignty definitely."}],
[["fill.filler.44",44], "Maze", {s:"The tourists have to change their clocks because the time zone is two hours behind the city they come from.", a:"x-x-x evaluate anti dad unless shall greats disease app yeah sake sir mom queen doctor kid hate hurt lord fund."}],
[["fill.filler.45",45], "Maze", {s:"The man was arrested on suspicion of causing death in front of a high school by dangerous driving last night.", a:"x-x-x ago jack criteria eat cardinals oh regions guess wind apart your step guys thinks want recommend realize cent thank."}],
[["fill.filler.46",46], "Maze", {s:"The policemen were interrogating the boy who had been caught stealing the car in the neighorhood last night.", a:"x-x-x shortages luck observatories sale nor pre jack lake videos carnival miss yeah al sir behaviorism hear agree."}],
[["fill.filler.47",47], "Maze", {s:"The laptops were equipped with the latest version of Microsoft Office.", a:"x-x-x expands luck feelings felt yeah thinks imagine sir Recommend Decide."}],
[["fill.filler.48",48], "Maze", {s:"The engineers are almost finished with the construction of the new bridge that connects two towns.", a:"x-x-x preparing pre happen congress cent yeah commonwealth else bet sir surely tell founders guy bacon."}],
[["fill.filler.49",49], "Maze", {s:"The experiment unfortunately has never been successfully replicated by other scientists in the field.", a:"x-x-x accomplish uncomfortable eye drink pain surveillance nonfiction want march engagement move glad gotta."}],
[["fill.filler.50",50], "Maze", {s:"The picture frame that Benny bought for his mother's birthday was too small for the photograph.", a:"x-x-x anymore blame sick Suing finger anti ago diseases reducing sir rule guess kid cent infections."}],
[["fill.filler.51",51], "Maze", {s:"The tissue box was of high quality as most of the other accessories made by this brand.", a:"x-x-x invest cent yeah wish else herself mom kill why hear thank affiliation hate god glad miles."}],
[["fill.filler.52",52], "Maze", {s:"Nina leaned lightly on Charlie's arm as lightly as when she had danced with him a few hours before.", a:"x-x-x utmost firearm tax Crediting whom holy sectors app vote sale war runoff lord fund link till march impact."}],
[["fill.filler.53",53], "Maze", {s:"Symbolism offered a means for the poet to reveal the transcendent realities beyond the corporeal world.", a:"x-x-x colonel yeah tells fans ago blew mark smells jack doubleheader groceries flight mom westbound wrote."}],
[["fill.filler.54",54], "Maze", {s:"The light struck upon the trees in the garden making one leaf transparent and then another.", a:"x-x-x apart behalf glad bag helps mom knew salary accept sir caps achievement app guys account."}],
[["fill.filler.55",55], "Maze", {s:"The students was too nervous during the final exam of that challenging course that he didn't do well.", a:"x-x-x whatever cent jack whoever bottom lady trump owns god sell accountable mobile nice lord cities yeah lake."}],
[["fill.filler.56",56], "Maze", {s:"The blankets on the ground next to the door is from a well-known factory and is very expensive.", a:"x-x-x streamed oh glad starts lord guys ways whom son wish ago agreements damages sure yes cent programme."}],
[["fill.filler.57",57], "Maze", {s:"The storekeepers locked the doors because they were afraid that the rebels would steal their goods.", a:"x-x-x prolifically arctic cent hates nations fund jobs avenue gift ago namely paper trans feels opens."}],
[["fill.filler.58",58], "Maze", {s:"The bookstore used to have a small section of art books on the first floor before expanding it.", a:"x-x-x optimized yeah oh luck sir shall happens mom glad knows anti know worry trump myself spokesman lord."}],
[["fill.filler.59",59], "Maze", {s:"The man was starving and he was trying to decide whether to steal some food from the grocery store.", a:"x-x-x seen mid councils link app card option lord thinks article vs trans hear yeah jack rate formats weird."}],
[["fill.filler.60",60], "Maze", {s:"The patient has been feeling more stable although her current dose is not helping with her insomnia.", a:"x-x-x anymore pre hill dollars cent margin chairman sell tonight outs okay camp bedroom yeah gone summoned."}],
[["fill.filler.61",61], "Maze", {s:"The waiters cleared away the dishes leaving a small dish of mint chocolate in the middle of the table.", a:"x-x-x cheaply hurting wish god exists seconds vs comes lied guys alma democrats hear knew thinks nice miss shall."}],
[["fill.filler.62",62], "Maze", {s:"The university students were happy that they will move into the dormitories as early as August.", a:"x-x-x surrounded somebody luck truth miss cent card jack lord guy disapproved anti click baby Sounds."}],
[["fill.filler.63",63], "Maze", {s:"The old oak tree swayed gently in the breeze as the sun began to set.", a:"x-x-x else heal dear medics enable sell mom sucked sir app whom trump pre yes."}],
[["fill.filler.64",64], "Maze", {s:"The dog barked loudly at the passing car while its owner called it back to the porch.", a:"x-x-x suck liters liners dad cent depends ago peace app whose global grow fund pre sir acids."}],


//["further-information", "Form", { html: { include: "further-information.html" } } ],
//["completion", "Form", {continueMessage: null, html: { include: "completion.html" } } ]

// leave this bracket - it closes the items section
];


