use("crudDB")
db.createCollection("courses")
db.courses.insertOne({
    name: "hi i am utkarsh",
    price:0,
    assignments: 12,
    projects: 45
})
db.courses.insertMany([{
    "name": "Introduction to JavaScript",
    "price": 0,
    "assignments": 8,
    "projects": 5
},
{
    "name": "Advanced Python Programming",
    "price": 49.99,
    "assignments": 15,
    "projects": 20
},
{
    "name": "Web Development Bootcamp",
    "price": 199.99,
    "assignments": 25,
    "projects": 30
},
{
    "name": "Data Science with R",
    "price": 99.99,
    "assignments": 10,
    "projects": 15
},
{
    "name": "Machine Learning Basics",
    "price": 79.99,
    "assignments": 12,
    "projects": 18
}
])

//read
// let a =db.courses.find({price:0})
// console.log(a.count())

// update
// db.courses.updateOne({price:0}, {$set:{price:100}})


//delete
db.courses.deleteOne({price: 100})