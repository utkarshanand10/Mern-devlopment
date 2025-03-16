show dbs 
use kart 
show collections

db.items.find({price: 35000})
db.items.deleteOne({price:30000})//deleteone will delete the matching entery and will delete the first entry in case multiple document match
