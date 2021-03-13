"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Category;
(function (Category) {
    Category["Fruit"] = "fruits";
    Category["Vegetable"] = "vegetables";
    Category["Dairy"] = "dairy";
    Category["Eggs"] = "eggs";
    Category["Berries"] = "berries";
})(Category || (Category = {}));
const products = [
    {
        name: "Red apple",
        image: "http://localhost:5000/static/images/apple.jpeg",
        description: "Delicious",
        category: Category.Fruit,
        price: 0.5,
        countInStock: 30,
    },
    {
        name: "Mango",
        image: "http://localhost:5000/static/images/mango.jpeg",
        description: "",
        category: Category.Fruit,
        price: 2.99,
        countInStock: 10,
    },
    {
        name: "Pineapple",
        image: "http://localhost:5000/static/images/pineapple.jpeg",
        description: "",
        category: Category.Fruit,
        price: 5,
        countInStock: 5,
    },
    {
        name: "Dragonfruit",
        image: "http://localhost:5000/static/images/dragonfruit.jpeg",
        description: "",
        category: Category.Fruit,
        price: 5,
        countInStock: 5,
    },
    {
        name: "Cucumber",
        image: "http://localhost:5000/static/images/cucumber.jpeg",
        description: "",
        category: Category.Vegetable,
        price: 1.5,
        countInStock: 15,
    },
    {
        name: "Broccoli",
        image: "http://localhost:5000/static/images/broccoli.jpeg",
        description: "",
        category: Category.Vegetable,
        price: 5,
        countInStock: 5,
    },
    {
        name: "Cauliflower",
        image: "http://localhost:5000/static/images/cauliflower.jpeg",
        description: "",
        category: Category.Vegetable,
        price: 5,
        countInStock: 5,
    },
    {
        name: "Blueberry",
        image: "http://localhost:5000/static/images/blueberry.jpeg",
        description: "",
        category: Category.Berries,
        price: 2,
        countInStock: 20,
    },
    {
        name: "Strawberry",
        image: "http://localhost:5000/static/images/strawberry.jpeg",
        description: "",
        category: Category.Berries,
        price: 2,
        countInStock: 20,
    },
    {
        name: "Rasberry",
        image: "http://localhost:5000/static/images/rasberry.jpeg",
        description: "",
        category: Category.Berries,
        price: 2,
        countInStock: 20,
    },
    {
        name: "Milk",
        image: "http://localhost:5000/static/images/milk.jpeg",
        description: "Mooooo",
        category: Category.Dairy,
        price: 1.2,
        countInStock: 5,
    },
    {
        name: "Eggs",
        image: "http://localhost:5000/static/images/eggs.jpeg",
        description: "",
        category: Category.Eggs,
        price: 2.5,
        countInStock: 30,
    },
];
exports.default = products;
//# sourceMappingURL=products.js.map