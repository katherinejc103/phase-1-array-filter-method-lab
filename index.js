// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching (arr, str) {
    const result = arr.filter(function(name){
        return name.toUpperCase() === str.toUpperCase()
    });
    return result
}

function fuzzyMatch (arr, str){
    const result = arr.filter(function(name){
        return name.substring(0,2) === str.substring(0,2)
    });
    return result
}

function matchName(arr, str){
    const result = arr.filter(function(obj){
        return obj.name === str;
    });
    return result
}