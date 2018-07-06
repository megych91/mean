function a(){
    return 35;
}
console.log(a())
// Answer: 35





function a(){
    return 4;
}
console.log(a()+a());
// Answer: 8





function a(b){
    return b;
}
console.log(a(2)+a(4));
// Answer: 6





function a(b){
    console.log(b);
    return b*3;
}
console.log(a(3));
// Answer: 3
// Answer: 9





function a(b){
   return b*4;
   console.log(b);
}
console.log(a(10));
// Answer: 40





function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));
// Answer: 4





function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );
// Answer: 10
// Answer: 3
// Answer: 30





function a(b){
    for(i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);
// Answer: 3
// Answer: 4





function a(){
    for(i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();
// Answer: 2
// Answer: 5
// Answer: 8






function a(b,c){
    for(i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10);
console.log(a(0,10));
// Answer: 0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0





function a(){
    for(i=0; i<10; i++){
       for(j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}
// Answer: undefined





function a(){
    for(i=0; i<10; i++){
        for(j=0; j<10; j++){
            console.log(i,j);
        }
    console.log(j,i);
}
// Answer: undefined





z = 10;
function a(){
    z = 15;
    console.log(z);
}
console.log(z);
// Answer: 10





z = 10;
function a(){
        z = 15;
        console.log(z);
}
a();
console.log(z);
// Answer: 15





z = 10;
function a(){
    z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);
// Answer: 15,15




