export const data = [{
    question: "mongoose",
    responses: [{
        value: "Object Data Modeling (ODM) library for MongoDB and Node. js",
        image: '/connect.PNG',
    }]
},
{
    question: "schema",
    responses: [{
        style: {
            width: '800px'
        },
        value: "Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection",
        image: '/schema.PNG',
    }]
},
{
    question: "Operation Buffering",
    responses: [{
        value: "We can use mongoose model before connecting to mongoDB. its hangs",
    }]
},
{
    question: "useNewUrlParser",
    responses: [{
        value: "true. To use new collection string parser",

    }]
},
{
    question: "poolSize",
    responses: [{
        value: "The maximum number of sockets the MongoDB driver will keep open for this connection",
        desc: [
            ' default, poolSize is 5',
            ' one operation per socket at a time',
            ' use this if few slow queries that are blocking faster queries    ',

        ]

    }]
},
{
    question: "keepAlive",
    responses: [{
        value: "long running applications, enable keepAlive with a number of milliseconds  .",
        desc: [
            "There might be chance we see message like connection closed to fix this use keepAlive"
        ]

    }]
},
{
    question: "Multiple connections",
    responses: [{
        value: "mongoose.connect('mongodb://user:pw@host1.com:27017,host2.com:27017,host3.com:27017/testdb');                     ",
    }]
},
{
    question: "Model",
    responses: [{
        value: "compiled from Schema definitions",
        image: "/model.PNG",
    }]
},
{
    question: "Documents",
    responses: [{
        value: "instance of a model",
        desc: [
            'const doc = new MyModel();',
            'update using save',
            'user.name ="abhi";',
            'await user.save()',
            ' save() function right way to update a document.get full validation and middleware  ',
            ' update(), updateMany(), findOneAndUpdate() => not execute save() middleware',

        ]

    }]
},
{
    question: "Overwrite document",
    responses: [{
        value: "replacing all keys in the document",
        desc: [
            "// Sets `name` and unsets all other properties",
            "doc.overwrite({ name: 'abhi' });",
            "await doc.save();",
            "User.replaceOne({ _id }, { name: 'Jean-Luc Picard' });",
        ]

    }]
},
{
    question: "Subdocuments",
    responses: [{
        value: "documents embedded in other documents",
        desc: [
            '       nest schemas in other schemas   ',
            '       saved whenever their top-level parent document is saved',
            '       const childSchema = new Schema({ name: "string" });',
            '     const parentSchema = new Schema({children: [childSchema],lastName:String,  child: childSchema});     ',
            '     subdocuments have save and validate middleware just like top-level documents',

        ]

    }]
},
{
    question: "Subdocuments versus Nested Paths",
    responses: [{
        value: "nested paths are subtly different from subdocuments.   ",
        desc: [
            "   const subdocumentSchema = new mongoose.Schema({child: new mongoose.Schema({ name: String, age: Number })",
            "   subDoc === undefined",
            "   we can not access subdocumentSchema.child.name => gives error",
            "   subDoc.set({name:'abhi'}) => merge the object => {name:'abhi'}",
            "",
            "   const nestedSchema = new mongoose.Schema({child: { name: String, age: Number }});",
            "    nested !== undefined",
            "    we can access nest.child.name ",
            "    nested.set({name:'abhi'}) => merge the object => {name:'abhi',age:10}",

        ]

    }]
},
{
    question: "Finding a Subdocument",
    responses: [{
        value: "const doc = parent.children.id(_id)",
    }]
},
{
    question: "Adding Subdocs to Arrays",
    responses: [{
        value: "parent.children.push({ name: 'Liesl' });",
        desc: [

        ]

    }]
},
{
    question: "Removing Subdocs",
    responses: [{
        desc: [
            "   parent.children.id(_id).remove(); //Equivalent to `parent.children.pull(_id)`",
            "   parent.child.remove(); //Equivalent to `parent.child = null`",
        ]

    }]
},
{
    question: "Parents of Subdocs",
    responses: [{
        desc: [
            "doc.child.parent() ",
            "doc.children[0].parent()",
            "doc.level1.level2.ownerDocument() ",
        ]

    }]
},
{
    question: "Queries",
    responses: [{
        image: "/query.PNG",

    }]
},
{
    question: "Queries are Not Promises",
    responses: [{
        value: "We call then or exec it get called multiple time",
        desc: [
            "const q = MyModel.updateMany({}, { isDeleted: true }, function() {",
            "           console.log('Update 1');",
            "   });",
            "",
            "   q.then(() => console.log('Update 2'));",
            "   q.then(() => console.log('Update 3'));",
        ]

    }]
},
{
    question: "References to other documents",
    responses: [{
        value: "No join in mongoDB. we use population for this",
        desc: [
            "Document get loaded in other document based on path"
        ]

    }]
},
{
    question: "Aggregation",
    responses: [{
        value: "can do many of the same things that queries can",
        desc: [
            "   const docs = await Person.aggregate([{ $match: { 'name.last': 'Ghost' } }]);",
            "   try to avoid aggregate() use query",
            "   aggregate does not return document mean we can not doc.save it  .",
            "   aggregate does not cast its field we need to cast it   ",
        ]

    }]
},
{
    question: "Query Casting",
    responses: [{
        value: "query get casted like age:'100', ang age:'hundred' gives error",
        desc: [

        ]

    }]
},
{
    question: "The strictQuery Option ",
    responses: [{
        value: "Mongoose does not cast filter properties that aren't in your schema",
        desc: [
            "   const query = User.findOne({ notInSchema: { $lt: 'not a number' } });",
            " // No error because `notInSchema` is not defined in the schema",
            "    await query.exec();   ",
            "",
            "    Schema({ name: String, age: Number }, {strictQuery: true}); ",
            "    Now property that are not in schema get removed from filter and we get the result                             ",

        ]

    }]
},
{
    question: "Implicit $in",
    responses: [{
        value: " Character.findOne({ name: ['Abhi', 'abhi1'] });",
        desc: [
            '      it  work ',
            '      // `{ name: { $in: ["abhi", "abhi1"] } }`',
            '           query.getFilter();',
        ]

    }]
},

{
    question: "findOneAndUpdate()",
    responses: [{
        value: "try to use save() where ever possible.",
        image: '/findOneAndUpdate.PNG'
    }]
},

{
    question: "Atomic Updates",
    responses: [{
        desc: [
            '   save() work in 2 step 1. find and then save(). ',
            '   data might get changed in between them',
            '   to fix this use  findOneAndUpdate or use transaction ',
        ]

    }]
},

{
    question: "Lean",
    responses: [{
        value: "xxxxxxxxxxx",
        desc: [
            '   Model.find().lean() // its does not return mongoose object we can not doc.save() it',
            '   lean() bypasses all Mongoose features, including virtuals, getters/setters, and defaults ',
            '   if you want to use that you need to use plugins                                     ',

        ]

    }]
},

{
    question: "Middleware",
    responses: [{
        value: "called pre and post hooks",
        image: '/prePost.PNG'

    }]
},

{
    question: "Naming Conflicts",
    responses: [{
        value: "xxxxxxxxxxx",
        desc: [
            "// Only document middleware",
            "schema.pre('remove', { document: true, query: false }, function() {  });",
            "// Only query middleware. This will get called when you do `Model.remove()`",
            "// but not `doc.remove()`.",
            "schema.pre('remove', { query: true, document: false }, function() {});",
        ]

    }]
},

{
    question: "pre and post drawback",
    responses: [{
        value: "Pre and post save() hooks are not executed on update(), findOneAndUpdate() ",
    }]
},

{
    question: "Populate",
    responses: [{
        value: "reference documents in other collection. replace paths in the document with document(s) from other collection",
        image: '/populate.PNG'
    }]
},

{
    question: "Discriminators",
    responses: [{
        value: "inheritance mechanism",

    }]
},

{
    question: "Plugins",
    responses: [{
        value: " Want common functionality in all schema use plugins",
        desc: [
            'Like we want loadedAt property at our all schema then we can use plugin           '
        ]

    }]
},

{
    question: "Transactions",
    responses: [{
        value: "Perform multiple operation if one fail undo all of them",

    }]
},
{
    question: 'MongoDb query',
    responses: [
        {
            style: {
                width: '100%'
            },
            image: '/mongoDbQuery.png'
        }
    ]
},
{
    question: 'MongDb Cheat shit',
    responses: [
        {
            style: {
                width: '100%'
            },
            image: '/mongoDbCheatShit.png'
        }
    ]
}

]