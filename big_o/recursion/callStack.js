function takeShower(){
    return "showering"
}

function eatBreakfast(){
    let meal = cookFood()
    return `Eating ${meal}`
}

function cookFood(){
    let items = ["oatmeal","eggs","shake"]
    return items[Math.floor(Math.random()*items.length)];
}

function wakeUp(){
    takeShower();
    eatBreakfast();
    cookFood();
}