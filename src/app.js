const Realm = require("realm");

class Restaurant {
    static schema = {
        name: "Restaurant",
        properties: {
            name: "string",
            location: "string",
            menus: "Menu[]"
        }
    };
}

class Menu {
    static schema = {
        name: "Menu",
        properties: {
            name: "string",
            dishes: "Dish[]"
        }
    };

    printDishes() {
        console.log(this.dishes.forEach((dish, index) => `Dish ${index + 1}: {dish}`))
    }
}

class Dish {
    static schema = {
        name: "Dish",
        properties: {
            price: "double",
            ingredients: "Ingredient[]"
        }
    };

    printDetails() {
        console.log(`Dish price: ${this.price}. Its ingredients: ${this.ingredients.map((ingredient) => ingredient.name)}`)
    }
}

// class Soup {
//     static schema = {
//         name: "Soup",
//         properties: {
//             price: "double",
//             ingredients: "Ingredient[]"
//         }
//     };
// }
//
// class Main {
//     static schema = {
//         name: "Main",
//         properties: {
//             price: "double",
//             ingredients: "Ingredient[]"
//         }
//     };
// }

class Ingredient {
    static schema = {
        name: "Ingredient",
        properties: {
            name: "string",
        }
    }
}

const realm = Realm.open({
    path: "myrealm",
    schema: [Restaurant, Menu, Dish, Ingredient],
    schemaVersion: 2
});

realm.then((realm) => {
    // realm.write(() => {
    //     ingredient = realm.create("Ingredient", {
    //         name: "cheese"
    //     });
    //     dish = realm.create("Dish", {
    //         price: 5.50,
    //         ingredients: [ingredient]
    //     });
    //     menu = realm.create("Menu", {
    //         name: "OnlyCheeseMenu",
    //         dishes: [dish]
    //     });
    //     restaurant = realm.create("Restaurant", {
    //         name: "Cheese Restaurant",
    //         location: "Warsaw",
    //         menus: [menu]
    //     });
    //     console.log(`created objects`);
    // });

    const dishes = realm.objects("Dish");
    dishes.forEach(dish => dish.printDetails());


})
