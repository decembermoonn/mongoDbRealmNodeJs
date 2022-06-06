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
            dishes: "mixed[]",
        }
    };
    printDishes() {
        this.dishes.forEach((dish) => dish.printDetails())
    }
}

class Soup {
    static schema = {
        name: "Soup",
        properties: {
            name: "string",
            volumeInMililiters: "int",
            price: "double",
            ingredients: "Ingredient[]"
        }
    };
    printDetails() {
        console.log(`Soup;${this.name};${this.price};${this.volumeInMililiters};` +
        `${this.ingredients.map((ingredient) => ingredient.name)}`)
    }
}

class Main {
    static schema = {
        name: "Main",
        properties: {
            name: "string",
            weightInGrams: "int",
            price: "double",
            ingredients: "Ingredient[]"
        }
    };
    printDetails() {
        console.log(`Main;${this.name};${this.price};${this.weightInGrams};` +
            `${this.ingredients.map((ingredient) => ingredient.name)}`)
    }
}

class Ingredient {
    static schema = {
        name: "Ingredient",
        properties: {
            name: "string",
        }
    }
}

module.exports = {
    Restaurant, Menu, Soup, Main, Ingredient
};
