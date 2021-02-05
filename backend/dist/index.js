"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
const port = 5000; // default port to listen
const products_1 = __importDefault(require("./routes/products"));
app.use(cors_1.default());
// define a route handler for the default home page
app.get("/", (req, res) => {
    res.send("Hello worlddddhhhhgggggg!");
});
app.use('/api/products', products_1.default);
// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map