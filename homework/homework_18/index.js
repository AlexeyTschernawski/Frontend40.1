const character = {
    introduce() {
      console.log(`Hello, my name is ${this.name}, I am at level ${this.level}, and I have ${this.health} health.`);
    }
  };
  
  // Создаем объект warrior с наследованием от character
  const warrior = Object.create(character);
  warrior.name = "Warrior";
  warrior.health = 100;
  warrior.level = 10;
  warrior.weapon = "Sword";
  
  // Добавляем метод attack для warrior
  warrior.attack = function() {
    console.log(`I am attacking with ${this.weapon}!`);
  };
  
  // Создаем объект wizard с наследованием от character
  const wizard = Object.create(character);
  wizard.name = "Wizard";
  wizard.health = 80;
  wizard.level = 8;
  wizard.spell = "Fireball";
  
  // Добавляем метод castSpell для wizard
  wizard.castSpell = function() {
    console.log(`I am casting ${this.spell}!`);
  };
  
  // Вызываем метод introduce для каждого объекта
  character.introduce();
  warrior.introduce();
  wizard.introduce();
  
  // Вызываем метод attack для объекта warrior
  warrior.attack();
  
  // Вызываем метод castSpell для объекта wizard
  wizard.castSpell();