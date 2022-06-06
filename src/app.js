const Realm = require("realm");
const classes = require("./classes");
const funcs = require("./functions")

const realm = Realm.open({
    path: "myrealm",
    schema: [classes.Restaurant, classes.Menu, classes.Soup, classes.Main, classes.Ingredient],
    schemaVersion: 8
});

realm.then((realm) => {
    funcs.executeGetQueries(realm);
    realm.close();
})
