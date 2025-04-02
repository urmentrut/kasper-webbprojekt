import os
from pymongo import MongoClient
from dotenv import load_dotenv

# Ladda miljövariabler från .env-fil
load_dotenv()

# Hämta MongoDB URI från miljövariabeln
connection_string = os.getenv("MONGODB_URI", "mongodb://localhost:27017")

# Skapa MongoDB-klient
client = MongoClient(connection_string)

# Välj din databas
db_name = "kasper"  # Ändra till din databas namn om nödvändigt
db = client[db_name]

# Testa anslutning genom att skriva ut data från collection 'characterstats'
stats = db.characterstats.find()
for stat in stats:
    print(stat)
