db.createCollection("new entry", {
    validator: {
        $jsonSchema:{
            bsonType: "object",
            required: ["title", "author", "story"],
            properties: {
                title: {
                    basonType:"string",
                    description: "must be a string and is required"
                },
                author: {
                    basonType:"string",
                    description: "must be a string"
                },
                story: {
                    basonType:"string",
                    description: "must be a string and is required"
                },
            }
        }
    }
})