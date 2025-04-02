from database import mongo

class GEPriceTracker:
    @staticmethod
    def get_item_price(item_name):
        item = mongo.db.ge_prices.find_one({"item_name": item_name})
        return item