var pessengers = [
    { name: "Jane Doloop", paid: true },
    { name: "Dr. Evel", paid: true },
    { name: "Sue Property", paid: false },
    { name: "John Funcall", paid: true } 
];
function processPessengers(pessengers, testFunction) {
    for (var i = 0; i < pessengers.length; i++) {
        if (testFunction(pessengers[i])) {
            return false;
        }
    }
    return true;
}

function checkNotFlyList(pessenger) {
    return (pessenger.name === "Dr. Evel");
}
function checkNotPaid(pessenger) {
    return (!pessenger.paid);
}
function printPassenger (passenger) {
     var name = passenger.name;
     if (passenger.paid == true) {
        name = name + "has paid";
     } else {
        name = name + "has not paid";
     }
     console.log(name);
}
var allCanFly = processPessengers(pessengers, checkNotFlyList);
if (!allCanFly) {
    console.log("The plane can't take off: we have a passenger on the no-fly-list.");
}
var allPaid = processPessengers(pessengers, checkNotPaid);
if (!allPaid) {
    console.log("The plane can't take off: not everyone has paid.");
}
processPessengers (pessengers, printPassenger);