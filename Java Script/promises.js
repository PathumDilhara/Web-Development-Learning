function takeShower(){
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            console.log("You take shower");
            resolve("You took shower");
        }, 2000)
    })
}

function doHomeWork(){
    return new Promise((resolve, reject)=> {
         setTimeout(()=> {
            const isWorked = false;

            if (isWorked){
                console.log("You do your homework");
                resolve("You completed your homework");
            } else {
                console.log("Error executing doHomework");
                reject("(reject) Error executing doHomework");
            }
         }, 1000)
    })
}

function play(){
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            console.log("YOu play wht you like");
            resolve("You played wht you liked")
        }, 3000);
    })
}

takeShower().then((result) => { // catch the result return from takeShower
    console.log(result);
    return doHomeWork();
}).then((result) => { // catch the result return from doHomeWork
    console.log(result);
    return play();
}).then((result) => { // catch the result return from play
    console.log(result);
    console.log("All tasks completed");
}).catch((err)=> {
    console.log(err);
});