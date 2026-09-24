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
            const isWorked = true;

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
            const isPlay = false;
            if(isPlay){
                console.log("YOu play wht you like");
                resolve("You played wht you liked")
            } else {
                reject("Error executing play");
            }
        }, 3000);
    })
}


async function doAllTasks(){

    try {
        await takeShower();
        const result = await doHomeWork();
        console.log(`res : ${result}`);
        await play();
    } catch(err){
        console.log(err);
    }
}

doAllTasks();