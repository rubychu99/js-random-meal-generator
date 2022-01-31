const menu = {
  // contain a mapping between each courses and the dishes available
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],
    get appetizers() {
      return this._appetizers;
    },
    set appetizers(appetizersIn) {
      return (this._appetizers = appetizersIn);
    },
    get mains() {
      return this._mains;
    },
    set mains(mainsIn) {
      return (this._mains = mainsIn);
    },
    get desserts() {
      return this._desserts;
    },
    set desserts(dessertsIn) {
      return (this._desserts = dessertsIn);
    },
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },

  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    let dishes = this._courses[courseName];
    let randomNum = Math.floor(Math.random() * dishes.length);
    return dishes[randomNum];
  },
  generateRandomMeal() {
    let appetizer = this.getRandomDishFromCourse("appetizers");
    let main = this.getRandomDishFromCourse("mains");
    let dessert = this.getRandomDishFromCourse("desserts");
    let totalPrice = appetizer.price + main.price + dessert.price;

    return `Appetizer: ${appetizer.name}, 
    Main: ${main.name}, 
    Dessert: ${dessert.name}, 
    Total Price: ${totalPrice}`;
  },
};

// Add in Dishes to Menu
menu.addDishToCourse("appetizers", "Caesar Salad", 4.25);
menu.addDishToCourse("appetizers", "Orange-Glazed Meatballs", 5.25);
menu.addDishToCourse("mains", "Roasted Chicken", 4.0);
menu.addDishToCourse("mains", "Lasagna", 3.5);
menu.addDishToCourse("desserts", "Pudding", 5.55);
menu.addDishToCourse("desserts", "Cheesecake", 6.2);

// Generate Random Meal
let meal = menu.generateRandomMeal();
console.log(meal);
