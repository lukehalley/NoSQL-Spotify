db.spotify.find({
    userFName: {
        $gte: new userFName("Luke")
    }
}).count();