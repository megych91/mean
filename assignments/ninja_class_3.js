class Ninja {
    constructor(name, health, speed, strength) {
      this.name = name;
      this.health = 50;
      this.speed = new Closerure(10);
      this.strength = new Closerure(10);
      var speed = speed;
      var strength = strength;
      function Closerure(x) {
        return function(v) {
          if (v == undefined) {
            return x;
          } else {
            val = v;
          }
        };
        }
    }
    sayName() {
      console.log("My name is", this.name);
    }
    // showStats() {
    //   return "Name: "+ this.name + "| Health: "+ this.health + "| Speed: "+  this.speed() + "| Strength: "+ this.strength()
    // }
    showTwoStats(y) {
        return (
          this.name +
          " | Health: " +
          this.health +
          " | Speed: " +
          this.speed() +
          " | Strength: " +
          this.strength() +
          "\n" +
          y.name +
          " | Health: " +
          y.health +
          " | Speed: " +
          y.speed() +
          " | Strength: " +
          y.strength() 
        );
      }
    drinkSake() {
      this.health += 10;
    }
    kick(y) {
        y.health -= 15;
        return this.name + " kicked " + y.name + " and then he want to jail.";
      }
    punch(x) {
        x.health -= 10;
        return this.name + " punched " + x.name + " and then Marge called the cops.";
      }
  }
  class Sensei extends Ninja {
    constructor(name, health, speed, strength, wisdom) {
      super(name, health, speed, strength);
      this.wisdom = 100;
      this.health = 200;
    }
    sayHi() {
      console.log("你好, 我的名字是 " + this.name);
    }
    speakWisdom() {
     return "Buy the lipstick."
    }
    showStats() {
      return (
        this.name +
        " | Health: " +
        this.health +
        " | Speed: " +
        this.speed() +
        " | Strength: " +
        this.strength() +
        " | Wisdom: " +
        this.wisdom
      );
    }
  }
  let red = new Ninja("Mariah Carey");
  let blue = new Ninja("Cardi B");
  
//   console.log(red.showStats());
//   console.log(blue.showStats());
//   red.punch(blue);
//   console.log(red.showStats());
//   console.log(blue.showStats());
//   console.log(red.punch(blue));
//   console.log(red.kick(blue));
//   console.log(red.showStats());
//   console.log(blue.showStats());
console.log(red.showTwoStats(blue));
//   console.log(red.punch(blue) + "\n" + red.kick(blue) + "\n" + red.showStats() + "\n" + blue.showStats());
const Senpai = new Sensei("Coco Chanel");
console.log(Senpai.showStats());

Senpai.sayHi();
console.log(Senpai.speakWisdom());
