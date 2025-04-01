import os
from pymongo import MongoClient
#from dotenv import load_dotenv

#connection_string = f"{os.getenv('MONGODB_URI')}"
#connection_string = "mongodb+srv://burakandic:76i8bewnz8fjUGnf@cluster0.rpnavzg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
connection_string = "mongodb://localhost:27017"
client = MongoClient(connection_string)
db_name = "kasper"
db = client[db_name]

stats = db.characterstats.find()
for stat in stats:
    print(stat)