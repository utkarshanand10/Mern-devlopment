
db.items.find({rating:4})
db.items.find({rating:{$gte:4}})
db.items.find({rating:{$gte:4},price:{$gt:40000}})
db.items.find({$or:[{rating:{$gte:4}},{price:{$gt:40000}}]})