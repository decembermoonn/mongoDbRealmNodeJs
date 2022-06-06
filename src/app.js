const Realm = require("realm");
const classes = require("./classes");

const realm = Realm.open({
    path: "myrealm",
    schema: [classes.Restaurant, classes.Menu, classes.Dish, classes.Ingredient],
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
