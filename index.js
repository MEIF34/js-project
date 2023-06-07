function sum () {
    const arrayArgs = Array.from(arguments);
    let sum = 0;

    for(let i = 0; i < arrayArgs.length; i++) {
        sum = sum + arrayArgs[i];
    }

    console.log(sum / arrayArgs.length);

    return sum;
}

sum(1, 2);

