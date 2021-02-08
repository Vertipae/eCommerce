"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Category;
(function (Category) {
    Category["Fruit"] = "fruits";
    Category["Vegetable"] = "vegetables";
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
        name: "Milk",
        image: "http://localhost:5000/static/images/milk.jpeg",
        description: "Mooooo",
        category: "Dairy",
        price: 1.2,
        countInStock: 5,
    },
    {
        name: "Eggs",
        image: "http://localhost:5000/static/images/eggs.jpeg",
        description: "",
        category: "Eggs",
        price: 2.5,
        countInStock: 30,
    },
];
exports.default = products;
//# sourceMappingURL=products.js.map