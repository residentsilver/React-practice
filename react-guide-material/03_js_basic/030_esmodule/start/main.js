import functionB , { hello , User } from "./module.js";

hello();
functionB();

const user = new User('tom');
User.hello();