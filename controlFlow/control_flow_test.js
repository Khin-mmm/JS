let role = prompt("Choose your role(Employee, Enrolled_Member, Subscriber, Non-subscriber)");
let accessLevel;
switch(role){
    case "Employee":
        accessLevel = "Dietary Services";
        break;
    case "Enrolled_Member":
        accessLevel = "Dietary Services and one-on-one interaction with a dietician";
        break;
    case "Non-subscriber":
        accessLevel = "Enroll or subscribe to avail this facility";
        break;
    case "Subscriber":
        accessLevel = "partial access to facilitate Dietary Services";
        break;
}
console.log("Access Level:", accessLevel);