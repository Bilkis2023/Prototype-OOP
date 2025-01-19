//  1.
myArray = [2, 4, 5, 6, 7];
console.log(myArray);
myArray.forEach((num) => console.log(num));
myArray.map((x) => console.log(x*2));

//2.
myObject = {
    name: "Samantha",
    age: 25,
    occupation: "Curriculum Dev"
};

console.log(myObject);

console.log("Hello");
console.log("Hello".toLowerCase());
console.log(546234);
console.log((546234).toString());


function Movie( title, releasedYear){
this.title = title;
this.releasedYear = releasedYear;
}

//We must use 'function' when assign to prototype
//Other wise 'this' will be a global object
//Window in the browser, undefined in node.
Movie.prototype.logInfo = function() {
console.log(`${this.title} was released in ${this.releasedYear} `);
};

const theLionKing = new Movie("The Lion King", 1982)
theLionKing.logInfo();
