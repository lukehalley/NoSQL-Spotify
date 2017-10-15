// To display the document in a readable format the “pretty” command was used
pretty();

// Find the document with the userId: U001 
db.application.find({"userId":"U001"}).pretty();

// Find the documents with the email: cormacdunphy@gmail.com
db.application.find({"email":"cormacdunphy@gmail.com"}).pretty();

// Calculate the number of users that have premium plans:
db.application.find({"userPlan":"Premium"}).count();

// Calculate the number of users that have free plans:
db.application.find({"userPlan":"Free"}).count();

// Calculate the how many albums from the Artist “Lil Uzi Vert” are in the collection
var t = db.application.find({"userCollection.userAlbumCollection.artistTitle": "Lil Uzi Vert"}).count();
print (t);

// Show how many people signed up after the year 2000:
db.application.find({ "signupdate" : {"$gte": new Date("2000-01-01T00:00:00.000Z")} }).count();

// and before the year 2000:
db.application.find({ "signupdate" : {"$lte": new Date("2000-01-01T00:00:00.000Z")} }).count();