"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Category;
(function (Category) {
    Category["Fruit"] = "Fruit";
})(Category || (Category = {}));
const products = [
    {
        name: "Red apple",
        image: "/images/apple.jpg",
        description: "Delicious",
        category: Category.Fruit,
        price: 0.5,
        countInStock: 30,
    },
    {
        name: "Mango",
        image: "/images/mango.jpg",
        description: "",
        category: "Fruit",
        price: 2.99,
        countInStock: 10,
    },
    {
        name: "Pineapple",
        image: "/images/pineapple.jpg",
        description: "",
        category: "Fruit",
        price: 5,
        countInStock: 5,
    },
    {
        name: "Dragonfruit",
        image: "/images/dragonfruit.jpg",
        description: "",
        category: "Fruit",
        price: 5,
        countInStock: 5,
    },
    {
        name: "Cucumber",
        image: "/images/cucumber.jpg",
        description: "",
        category: "Vegetable",
        price: 1.5,
        countInStock: 15,
    },
    {
        name: "Broccoli",
        image: "/images/broccoli.jpg",
        description: "",
        category: "Vegetable",
        price: 5,
        countInStock: 5,
    },
    {
        name: "Cauliflower",
        image: "/images/cauliflower.jpg",
        description: "",
        category: "Vegetable",
        price: 5,
        countInStock: 5,
    },
    {
        name: "Milk",
        image: "/images/milk.jpg",
        description: "Mooooo",
        category: "Dairy",
        price: 1.2,
        countInStock: 5,
    },
    {
        name: "Eggs",
        image: "/images/eggs.jpg",
        description: "",
        category: "Eggs",
        price: 2.5,
        countInStock: 30,
    },
];
exports.default = products;
//# sourceMappingURL=products.js.map