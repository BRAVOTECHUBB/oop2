// Base class for all animals
class Animal {
    constructor(name, hasBackbone, isColdBlooded, isWarmBlooded) {
      this.name = name;
      this.hasBackbone = hasBackbone;
      this.isColdBlooded = isColdBlooded;
      this.isWarmBlooded = isWarmBlooded;
    }
  
    // Abstraction: Display common information about the animal
    displayInfo() {
      console.log(Name: ${this.name});
      console.log(Has Backbone: ${this.hasBackbone});
      console.log(Cold Blooded: ${this.isColdBlooded});
      console.log(Warm Blooded: ${this.isWarmBlooded});
    }
  }
  
  // Derived class for animals without a backbone (e.g., Anthropoda)
  class Invertebrate extends Animal {
    constructor(name) {
      super(name, false, true, false);
    }
  }
  
  // Derived class for animals with a backbone (e.g., fish, amphibians, reptiles, birds, mammals)
  class Vertebrate extends Animal {
    constructor(name, isColdBlooded, isWarmBlooded) {
      super(name, true, isColdBlooded, isWarmBlooded);
    }
  }
  
  // Derived class for mammals
  class Mammal extends Vertebrate {
    constructor(name) {
      super(name, false, true);
    }
  }
  
  // Derived class for birds
  class Bird extends Vertebrate {
    constructor(name) {
      super(name, false, true);
    }
  }
  
  // Usage
  const spider = new Invertebrate('Spider');
  const salmon = new Vertebrate('Salmon', true, false);
  const frog = new Vertebrate('Frog', true, false);
  const snake = new Vertebrate('Snake', true, false);
  const eagle = new Bird('Eagle');
  const dog = new Mammal('Dog');
  
  // Polymorphism: Display information for each animal
  spider.displayInfo();
  salmon.displayInfo();
  frog.displayInfo();
  snake.displayInfo();
  eagle.displayInfo();
  dog.displayInfo();