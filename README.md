# 🐙 OSRS Tracker
## 📌 Projektbeskrivning

Detta är ett fullstack-projekt för att analysera och visualisera data från Old School RuneScape (OSRS). Användare kan söka på spelarkonton, spåra boss kills, se questloggar, se achievements och använda en livetracker för att se nyligen sålda föremål. Både backend och frontend är uppbyggda för enkel utveckling, testning och utbyggnad.

# ⚙️ Installation och Start

### Backend (Python + Flask + MongoDB)
### 1. Kloning av projektet:
[git clone https://github.com/urmentrut/osrs-tracker](https://github.com/urmentrut/osrs-tracker.git)

cd osrs-tracker/backend

### 2. Skapa virtuell miljö & installera beroenden:

python -m venv venv

MacBook: source venv/bin/activate eller för Windows: venv\Scripts\activate

pip install -r requirements.txt

### 3. Starta Flask-servern:
python app.py
Flask körs på http://localhost:5000
Frontend (React + Vite)
### 4. Gå till frontend-mappen:
cd osrs-tracker/frontend
### 5. Installera Node-paket:
npm install
### 6. Starta frontend-servern:
npm run dev
### Frontend körs på http://localhost:5173

# 🎨 Grafisk Profil


Font RuneScape UF

Bakgrundsfärg Mörkbrun: rgb(60, 45, 30)

Elementfärg Ljusbrun: rgb(102, 85, 51)

Textfärg Guld: rgb(200, 170, 90)

Designen efterliknar klassiska RuneScape-gränssnitt med fokus på en nostalgisk och immersiv känsla.

# 🌿 Branchstruktur

* dev → Stabil kod, färdigtestad.
* ny branch → Aktiv utvecklingsbranch.

# 🔄 Branch Workflow

1. Skapa en ny feature/branch
2. Utveckla och testa lokalt
3. Skapa en Pull Request (PR) till ny branch
4. Granskning och testning av gruppmedlem
5. Merge till dev efter godkännande

# ✅ PR-regler

* PRs måste granskas av minst 1 gruppmedlem.
* Alla PRs ska ha en beskrivande titel och sammanfattning.
* Testa lokalt innan PR skapas.

# 📊 Databasstruktur (MongoDB)

players

bosslog

questlog

achievements

livetracker

## 🗄️ Databasanvändning lokalt

För att kunna se data i applikationen (t.ex. items i livetracker eller boss kills), behöver du skapa och fylla din databas lokalt i MongoDB. Inget innehåll genereras automatiskt.

## Så här gör du:



Öppna MongoDB Compass.

Gå till databasen osrs-tracker.

Skapa collections enligt tabellen ovan (players, bosslog, questlog, achievements, livetracker.).

Lägg till dokument manuellt i MongoDB Compass eller via Postman API.

För att garantera resultat i Postman, analysera kod per underrubrikernas routes.py och se vilka CRUD-operationer som är tillgängliga för just den underrubriken.

Exempel: Under livetracker_routes.py finns methods: "GET" och "POST"
