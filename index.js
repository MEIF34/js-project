function washingFace() {
    console.log('Washing the face');
}

function breakfast() {
    console.log('Breakfast');
} 

function shower() {
    console.log('Shower');
}

function brushingTeeth() {
    console.log('Brushing teeth');
}

function goToWork() {
    console.log('Go to work');
}

function lunch() {
    console.log('Lunch');
}

function goToGym() {
    console.log('Go to gym');
}

function goToHome() {
    console.log('Go home');
}

function dinner() {
    console.log('Dinner');
}

function educationJS() {
    console.log('Education JS');
}

function sleep() {
    console.log('Sleep');
}
  
function todo(timeOfDay) { // Higher-order function
    switch(timeOfDay) {
        case 'morning': {
            washingFace();
            breakfast();
            shower();
            brushingTeeth();
            goToWork();
            break;
        }
        case 'lunch': {
            lunch();
            goToGym();
            goToHome();
            break;
        }
        case 'evening': { 
            dinner();
            educationJS();
            sleep();
            break;
        }
        default: {
            console.log('Error! Enter a valid time of day!');
        } 
    }
}
  
todo('morning');
todo('lunch');
todo('evening');