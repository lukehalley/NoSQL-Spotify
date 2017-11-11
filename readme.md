
![](https://raw.githubusercontent.com/lukehalley/NoSQL-Spotify/master/Data/Spotify-NOSql-Logo.png)


## Table	of	Contents

- Introduction 	
- Documents 	
- Database	Design 	
- Setup	Process 	
- Trying	Out	Some	Commands 	
- Cloud	MongoDB	service 	
- Creating	Documents 	
- CRUD	– Create	(Inserts) 	
- CRUD – Read	(Queries) 	
- CRUD	– Update	(Updates) 	
- CRUD	– Delete	(Remove) 	


## Introduction 	

This	report	shows	the	process	of	my	creation	of	a NoSQL database	based	on	the	music	streaming	platform	
“Spotify”.	Spotify	is	a	music	podcast	and	video	streaming	service	that	was	officially	launched	on	7	October 2008	

It	is	developed	by	startup	Spotify	AB	in	Stockholm	Sweden.	Music	can	be	browsed	through	or	
searched	for	by	parameters	such	as	artist	album	genre	playlist	or	record	label

A	music	streaming	service’s	database similar	to	Spotify	&	Apple’s	database.	The	database would	have	to	
store	millions	of	songs	across	different	genres	and	styles as	well	as	user	data.	The	database	allows	the	
service	to	offer	category’s	for	users	to	find	the	music	they	want	to	listen	to.	These	category’s	would	be	
Artists	Releases	Tracks	Albums	Playlist	Labels. Users	would	navigate	through	the	database	using	the	an	
Graphical	User	Interface	(GUI)	(E.g.	Desktop	App	Mobile	App).	When	a	user	would	select	a	category	to	
explore	it	would	show	a	list	unique	to	then	based	on	their	profile.	For	example	when	navigating	the	Artists	
section	the	user	would	be	shown	his/her	artist	that	they	are	following.

## What	Is	NoSQL?

A	NoSQL	database doesn't	essentially	follow	the	strict	rules	that	govern	transactions	in	relative	databases.	
These	desecrated	rules	area	unit	renowned	by	the	signifier	ACID	(Atomicity,	Consistency,	Integrity,	Durability).	as	an	example,	NoSQL	databases	don't	use	fastened	schema	structures	and	SQL	joins.

Limitations	of	SQL	databases	haven't	been	a	significant	drawback	within	the	past.	However,	with	the	ap-
pearance	of	social	networking	and	large	information,	variety	of	huge	databases	that	emerged	were	forced	
to	serve	the	tens,	or	perhaps	a	whole	lot,	of	scores	of	shoppers	throughout	the	planet	with	many	thousand	
reads	and	writes	each	minute.	ancient	RDBMSs	merely	don't	meet	this	would	like	as	a	result	of	they	will	
solely	"scale	up,"	or	increase	the	resources	on	a	central	server.	A	NoSQL	implementation,	on	the	opposite	
hand,	will	"scale	out,"	or	distribute	the	info	load	across	additional	servers.

NoSQL	databases area	unit	centred	on	specific	categories	of	issues	- from	being	additional	versatile	con-
cerning	hold	on	data	(document	stores),	to	targeting	use	cases,	like	relationships	(graph	databases)	and	
aggregating	data	(column	info’s)	or	simply	simplifying	the	thought	of	a	database	all	the	way	down	to	one	
thing	that	stores	a	worth	(key/value	stores).

NoSQL	databases	supply	the benefits	of	fast	quantifiably,	far	better	performance,	and	a	less	complicated	
structure	compared	to	RDBMSs.	However,	they	additionally	suffer	from	being	a	comparatively	new	and	
unproved	technology,	and	that	they	cannot	give	RDBMS'	made	coverage	and	analytical	practicality.


## Documents 	

Documents:	Users, Playlists, Tracks, Artists, Album

### Each	User Profile has:

- An	ID	
- A	First	And	Second	Name
- An	Address	(Street	City,	State,	
    Country)
- A	Plan
- An	Email
- A	Phone	Number
- A	Signup Date

### Each	User	Collection	(Each	Album	&	Track) has:

- The	Album’s	ID
- The	Album’s	Genre
- The	Album’s	Title
- The	Album’s	Artist	ID
- The	Album’s	Artist	Title	(Name)
- The	Track’s	ID
- The	Track’s	Genre
- The	Track’s	Title	
- The	Track’s	Artist	ID	
- The	Track’s	Artist	Title	(Name)


### Each	Collection	Of	Artists	A	User	Is	Following	(Artist	Following)	 has:

- The	Artists	ID
- The	Artists	Name
- The	Artists	Description


### Every	Playlist A	User	Is	Following	(Following	Playlist)	 has:

- An	ID	
- Its	Owners	ID
- Its	Title	
- Its	Description
- Each	Of	Its	Tracks	ID
- Each	Of	Its	Tracks	Title
- Each	Of	Its	Tracks	Genre
- Each	Of	Its	Tracks	Length
- Each	Of	Its	Tracks	Artist	ID
- Each	Of	Its	Tracks	Artist	Title


### Every	User	Playlist has:

- An	ID	
- Its	Owners	ID
- Its	Title
- Its	Description
- Each	Of	Its	Tracks ID
- Each Of	Its	Tracks Title
- Each	Of	Its	Tracks	Genre
- Each	Of	Its	Tracks	Length
- Each	Of	Its	Tracks	Artist	ID
- Each	Of	Its	Tracks	Artist	Title


## Designing	The	Database

When	designing	my	NoSQL	database	I	used	a	previous	design	which	was	used	for	a	relational	database.	
This	was	implanted	using	Oracle	SQL. Oracle	Database	(commonly	referred	to	as	Oracle	RDBMS	or	simply	
as	Oracle)	is	an	object-relational	database	management	system	produced	and	marketed	by	Oracle	
Corporation.	(https://en.wikipedia.org/wiki/Oracle_Database).

Database	design	is	the	process	of	producing	a	detailed	data	model	of	database.	This	data	model	contains	
all	the	needed	logical	and	physical	design	choices	and	physical	storage	parameters	needed	to	generate	a	
design	in	a	data	definition	language,	which	can	then	be	used	to	create	a	database.	A	fully	attributed	data	
model	contains	detailed	attributes	for	each	entity.

Principally,	and	most	correctly,	it	can	be	thought	of	as	the	logical	design	of	the	base	data	structures	used	
to	store	the	data.	In	the	relational	model	these	are	the	tables	and	views.	In	an	object	database	the	entities	
and	relationships	map	directly	to	object	classes	and	named	relationships.

The	process	of	doing	database	design	generally	consists	of	a	number	of	steps	which	will	be	carried	out	by	
the	database	designer.	Usually,	the	designer	must:

- Determine	the	data	to	be	stored	in	the database.
- Determine	the	relationships	between	the	different	data	elements.
- Superimpose	a	logical	structure	upon	the	data	on	the	basis	of	these	relationships.


To	design	my	database	I	used	the	online	diagram	tool,	Creately	(https://creately.com).	


## The	Setup Process

YouTube

The	installation	process	was	done	by	following	a	YouTube tutorial	from	the	user	“Derek	Banas”.	In	this	tu-
torial, the	installation	of	MongoDB	for	both	Windows	systems	and	Mac	OSX	systems	was	shown	(In	my	
case	I	used	the	Mac	segment	due	to	me	running	a	Macintosh	machine).


The	first	step	of	this	process	was	installing	 Homebrew.	 Homebrew	is	a	free	and	open-source	software	
package	management	system	that	simplifies	the	installation	of	software	on Apple's	macOS	operating.

This	was	done	at	the	command	line.	After	this	an	update	command	was	used	to	make	sure	all	software	
was	up	to	date.

The	next	step	was	to	issue	the	command	to	install	MongoDB	itself	which	was	a	simple	one	line	command	
due	to	the	Homebrew	software.	Before	using	homebrew, I	attempted	to	install	MongoDB	via	a	binary	file	
which	is	available	to	download	on	the	website.	During	this	process, I	ran	into	multiple	problems	when	try-
ing	to	get	it	to	work.

After	installing	mongodb	a	directory	had	to	be	made	in	order	for	MongoDB	to	function	correctly.	After	the	
directory	was	made	I	changed	the	read	and	write	permissions	of	the	folder	so	the	program	would	have	ac-
cess	for	its	operation.	 _Note:	Commands	below	are	separated	by	[]._

After	all	of	this	was	done	MongoDB	was	ready	to	run.	When	the	commands	below	were issued	the	soft-
ware	began	to	run	and	did	its	necessary	start-up	processes.	After	the	database said	it	was	waiting	for	its	
command	on	the	given	port	I	proceeded	to	open	a	new	terminal	window	to	issue	commands	to	the	data-
base. After	switching	to	a	new	window, I	started the	shell	process	which	is used to	access	the	database.	
This	is	accomplished	by	opening	another	command	line	and	moving	to	\mongo\bin.
At	this	point	the	database	is	now	fully	installed.


## Trying	Out	Some	Commands 	

Now	that	the	database	is	installed	I	tried	some	simple	commands	which	were	given	to	me	in	the	first	lab	of	
the	NoSQL	module.	During	this	process, I	learned	all	these	commands	below	are	case	sensitive	at	the	start	
I	attempted	to	use	these	commands	with	an uppercase	letter	at	the	start	which	gave	me	an	error.


`show dbs - Shows the existing DBs.`

`use	<db	name> - Turns	the	focus	to	the	database
named.`

`db - Shows the name	of the	database	
which has	the	current focus.
help Gives help with commands.
show collections Shows the	collections which exist in the current DB.`

`show dbs - show database names`

`use	<db	name - set current database`

`help - shows commands available`

`show collections - show	 all collections available`



## Using	mLab	as	a	cloud	service	for	Mongodb

The	MongoDB	cloud	service	I	used	was	mLab.	mLab	is	a	fully	managed	cloud	database	service	featuring	
automated	provisioning	and	scaling	of	MongoDB	databases	backup	and	recovery	24/7	monitoring	and	
alerting	web-based	management	tools	and	expert	support.	mLab's	Database-as-a-Service	platform	powers	
hundreds	of	thousands	of	databases	across	AWS	Azure	and	Google	and	allows	developers	to	focus	their	
attention	on	product	development	instead	of	operations.	Since	its	inception	six	years	ago	mLab	has	grown	
like	wildfire	and	now	manages	over	half	a	million	databases	across	three	major	cloud	providers	in	36	data-
centres	worldwide.

After	creating	an	account	with	mLab	I proceeded	to	create	a	database	named	 _Spotify-nosql_
I	then	added	myself	as	a	user	to	the	database
Connecting	via	the	mongo	shell (note:	I	changed	my	credentials	between	these	screenshots)

## Creating	the	documents

There are	two	methods of adding	Documents	to	mLab:

1. Using	the	command	line
2. Using the	mLab	GUI


Since	this	was	my	first	time	using	JSON (the	language NOSQL	databases uses	to	store	its	document	infor-
mation	in, I	had	to	learn	the	basics	first	before	I	could	start	implementing	my	database.	When	writing	my	
code, I	use	the	text	editor	“Sublime	Text”	to	write	out	the	code	and	copied	it	over	to	the	mLab	GUI	to	write	
it	to	my	database.

I	also	used	JSONLint (https://jsonlint.com) to	compile	my	JSON	code	and	find	any	errors	in	it.	


I	decided	to	name	the	collection	“application”	as	the	database	is	modelled	off	the	Spotify	platform.	mLab	
allows	you	to	view	all	your	documents	in	two	views;

- List:	shows	each	document	in	a	list	form	with	the	JSON	code.
- Table:	allows	you	to	display all	documents	in	an easily	viewed	table,	its	formatted	using	the	
    _edit	table	view	_ formatted	in	JSON.

_Note: $date	cannot	be	used	in	the	shell,	only	in	the	REST	interface	and	in	the	tools	like	the	mLab	GUI.	This	is	
also	one	of	the	reasons	why	I	used	the	mLab	GUI:_


## CRUD	– Create	(Inserts) 	

[View User 01 Json Data](https://raw.githubusercontent.com/lukehalley/NoSQL-Spotify/master/Inserts/user01-lukehalley.json)

[View User 02 Json Data](https://raw.githubusercontent.com/lukehalley/NoSQL-Spotify/master/Inserts/user02-cmac.json)

## CRUD – Read	(Queries) 	


### Find	the document	with	the	userId:	 U001

```db.application.find({"userId":"U001"}).pretty();```

### Find	the documents with	the	email:	 cormacdunphy@gmail.com

```db.application.find({"email":"cormacdunphy@gmail.com"}).pretty();```

### Calculate	the	number	of	users	that	have	premium	plans:

`db.application.find({"userPlan":"Premium"}).count();`

### Calculate	the	number	of	users	that	have	free	plans:

`db.application.find({"userPlan":"Free"}).count();`

### Calculate	the	how	many	albums	from	the	Artist	“Lil	Uzi	Vert”	are	in	the	collection

`var t = db.application.find({"userCollection.userAlbumCollection.artistTitle": "Lil Uzi
 Vert"}).count();`
 
 `print (t);`
 


### Show	how	many	people	signed	up	after	the	year	2000:

`db.application.find({ "signupdate" : {"$gte": new Date("2000- 01 - 01T00:00:00.000Z")}}).count();`


## CRUD	– Update	(Updates) 

### Update	the	street	address	and	town/city	of	user	001	(Luke	Halley)

` db.application.update(
{ userId: "U001" },
{$set: {"streetAddress": "Ballyduff Lower","townCity": "Kilmeaden",}})`

### Update	the	plan of	user	002	(Cormac	Dunphy)

`db.application.update( { userId: "U002" }, {$set: {"userPlan": "Premium"}} )`

### Update	the	playlist	description	of	the	first	playlist	user	001	(Luke	Halley)	is	following

` db.application.update(
{userId: "U001"},
{$set:
 {"followingPlaylists.0.playlist-one.0.playlistDescription": "Only the top
 notch tech house!!!",
 "followingPlaylists.0.playlist-one.1.playlistDescription": "Only the top
 notch tech house!!!",
 "followingPlaylists.0.playlist-one.2.playlistDescription": "Only the top
 notch tech house!!!"}
 });`

### Change	the title	of	U002’s	first	playlist	he	is	following

` db.application.update(
 {userId: "U002"},
 {$set:
 {"followingPlaylists.0.playlist-one.0.playlistTitle": "Rough House",
 "followingPlaylists.0.playlist-one.1.playlistTitle": "Rough House",
 "followingPlaylists.0.playlist-one.2.playlistTitle": "Rough House"}
 });`


## CRUD	– Delete	(Remove) 	

### Unfollow	the	artist	with	the	id	 _AR571_ for	all	users

` db.application.update(
 { },
 { $pull: { followingArtists: { artistId: "AR571"} } },
 { multi: true }
 )`

### Unfollow	the	artist	with	the	name	 _Shadow	Child_ for	the	user002	(Cormac	Dunphy)

` db.application.update(
 {userId: "U002"},
 { $pull: { followingArtists: { artistName: "Shadow Child"} } },
 { multi: true }
 )`

### Delete	user	U002	(Cormac	Dunphy)	from	the	database

` try {
 db.application.deleteOne( { "userId" : "U002" } );
 } catch (e) {
 print(e);
 }`

### Delete	all	documents	in	the	application	collection

`db.application.deleteMany({});`


## Conclusion

Having	studied	Oracle	SQL	database	last	year,	understanding	NoSQL was	quite	difficult	but	after	attend-
ing	a	small	number of	lectures	and	watching	some	videos	explaining	the	theory	behind	it	I	had	a	good	
grasp	on	the	fundamentals	which	enabled	me	to	develop	my	own	database.

The	advantages	of	NoSQL	became	apparent	soon	after	I	began	to	use	it,	the	flexibility	and	loose	rules	
made	it	very	easy	to	get	a	database	up	and	running	quickly	while	still	having	a	easy	to	read	and	re-usable	
code.

I	already	had	experience	with	Mongodb	due	to	the	use	of	it	in	other	modules	such	as	Web	App	Develop-
ment	and	project. Mongodb	itself	is	extremely	easy	to	use	and	the	documentation	as	well	as	its	online	
presence	across	the	internet	on	websites	such	as	Stack	Overflow	are	huge	which	meant	any	problems	I	
ran	into	where	quickly	resolved	with	a	quick	google	search	or	a	brief	read	of	the	documentation.

mLab	as	a	database	platform	was	also	extremely	enjoyable	to	use	due	to	its	user	friendliness	with	various	
tips	and	commands	ready	to	copy	and	paste	into	my	terminal	to	connect	to	my	database	in	a	matter	of	
minutes.

One	large	problem	I	ran	into	was	the	formatting	of	JSON	data	which	MongoDB	uses	to	store	its	data.	Af-
ter	various	attempts	to	get	my	JSON	data	to	be	accepted	as	valid	data	when	inputting	it	into	mLab’s	GUI	
interface	for	adding/editing	documents	I	researched	ways	to	debug	JSON	code.	Sure,	enough	I	found	the	
following	website:	https://jsonlint.com/.	This	pointed	out	syntax	and	format	errors	within	my	JSON	code	
which	made	it	extremely	easy	to	fix	the	code	and	move	forward. Most	of	the	time	I	was	missing	curly	
brackets	or	missing	double	quotes.

Another	learning	experience	occurred	when	I	began	to	write	the	queries	for	my	database.	As	they	are	
written	in	JavaScript	(a	language	I	am	relatively	new	to,	this	year	is	my	first	time	learning	and	using	it)	a	
lot	of	help	is	online	but	the	logic	itself	such	as	traversing	through	arrays	and	picking	out	elements	which	
are	nested	was	quite	a	difficult	task.	It	was	in	fact	just	a	matter	of	practice	and	eventually	I	became	expe-
rienced	at	writing	the	queries	for	whatever	function	I	wished.

Throughout	creating	my	database,	I	used	Git	for	version	control	to	ensure	I	don’t	lose	data,	the	ability	to	
revert	back	to	previous	versions	and	finally	to	allow	other	people	to	use	what	I	have	created	for	their	
own	projects.

I	feel	this	project	has given	me	a	huge	advantage	going	forward	as	a	programmer.	The	Internet	of	things	
(the	level	eight	course	which	I	am	currently	sitting)	very	much	involves	viewing	large	amounts	of	data	as	
well	as collecting	it.	This	data	must	be	stored	in	a	database	as	well as	sorted.	In	my	future	ventures	and	
projects,	I	will	now	have	the	skills	to	do	this	quickly	and	to	a	high	standard	without	much	efforts	as	I	can	
use	this	theoretical	implantation	and	adapt	it	to	whatever	I	need	in	that	situation.

I	thoroughly	enjoyed	creating	my	NoSQL	database	based	on	the	music	platform	spotify.


## References	

**Documentation:** [https://docs.mongodb.com/]()

**Error Checking:** [https://jsonlint.com/]()

**Relationship Diagram:** [https://creately.com/]()

**MongoDB	Host:** [https://mlab.com/
]()

