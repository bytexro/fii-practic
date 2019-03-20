const person = {
  fullName: "Adam Savage",
  quote: "I reject your reality and substitute my own",
  speak: function() {
    console.log(`${this.fullName} says "${this.quote}"`)
  }
};

person.speak(); // Adam Savage says "I reject your reality and substitute my own"