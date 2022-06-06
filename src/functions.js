function addOneObjectForEachClass(realm) {
    realm.write(() => {
        ingredient = realm.create("Ingredient", {
            name: "cheese"
        });
        soup = realm.create("Soup", {
            name: "Cheese Soup",
            price: 5.50,
            volumeInMililiters: 300,
            ingredients: [ingredient]
        });
        main = realm.create("Main", {
            name: "Cheese Burger",
            price: 12.80,
            weightInGrams: 500,
            ingredients: [ingredient]
        });
        menu = realm.create("Menu", {
            name: "OnlyCheeseMenu",
            dishes: [soup, main]
        });
        restaurant = realm.create("Restaurant", {
            name: "Cheese Restaurant",
            location: "Warsaw",
            menus: [menu]
        });
    });
}

function executeGetQueries(realm) {
    console.log("Print every main dish details (category; name; price; weight; ingredients):")
    const dishes = realm.objects("Main");
    dishes.forEach(dish => dish.printDetails());

    console.log("Print dishes from first menu (category; name; price; weight; ingredients):")
    const menu = realm.objects("Menu")[0];
    menu.printDishes();

    console.log("Print all dishes names which are cheaper than 10$ from restaurant menus:")
    const restaurant = realm.objects("Restaurant")[0];
    restaurant.menus.forEach(menu => menu.dishes.forEach(dish => {
        if(dish.price < 10) {
            console.log(dish.name);
        }
    }));
}

function executeDeleteQuery(realm) {
    try {
        const objectToDelete = realm.objects("Ingredient")[0];
        realm.write(() => {
            realm.delete(objectToDelete);
        });
    } catch {
        console.error("There are no ingredient objets left.")
    }
}

function executeUpdateQuery(realm) {
    const objectToUpdate = realm.objects("Restaurant")[0];
    realm.write(() => {
        objectToUpdate.name = "The best cheese restaurant";
    });
}

function deleteAll(realm) {
    realm.write(() => {
        realm.deleteAll()
    });
}

module.exports = {
    addOneObjectForEachClass, executeGetQueries, executeDeleteQuery, executeUpdateQuery, deleteAll
};