show dbs
use kart
show collections

db.items.find()
db.items.updateOne({name:vivo},{%set: {price:2}})
db.items.find()
db.items.updateMany({name:vivo},{%set: {price:2}})

