// NUMBER ONE
console.log(hello);
var hello = 'world';
// ANSWER: undefined


// NUMBER TWO
var needle = "haystack";
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
console.log(needle);
// ANSWER: Magent
// ANSWER: Haystack


// NUMBER THREE
var brendan = 'super cool';
function print(){
    brendan = 'only okaty';
    console.log(brendan);
}
console.log(brendan);
// ANSWER: super cool


// NUMBER FOUR
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half chicken';
    console.log(food);
    var food = 'gone';
}
// ANSWER:  chicken
// ANSWER:  half chicken


// NUMBER FIVE
mean();
console.log(food);
var mean = function(){
    food = 'chicken';
    console.log(food);
    var food = 'fish';
    console.log(food);
}
console.log(food);
// ANSWER: error because mean is not a function

// NUMBER SIX
console.log(genre);
var genre = 'disco';
rewind();
function rewind(){
    genre = 'rock';
    console.log(genre);
    var genre = 'r&b';
    console.log(genre);
}
console.log(genre);
// ANSWER: undefined
// ANSWER: rock
// ANSWER: r&b
// ANSWER: disco


// NUMBER SEVEN
dojo = 'san jose';
console.log(dojo);
learn();
function learn(){
    dojo = 'seattle';
    console.log(dojo);
    var dojo = 'burbank';
    console.log(dojo);
}
console.log(dojo);
// ANSWER: san jose
// ANSWER: seattle
// ANSWER: burbank
// ANSWER: san jose

//NUMBER EIGHT
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkley", 0));
function makeDojo(name, students){
    const dojo = {}
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <=0){
        dojo = 'closed for now';
    }
    return dojo;
}
// ANSWER: {name: 'Chicago' , students: 65, hiring = true}
// ANSWER: error because there is no attribute to the object 'dojo'