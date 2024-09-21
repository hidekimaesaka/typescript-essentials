// declaring the types of the params and the return
function myTsFuncion(value1: number, value2: string, value3: boolean, value4: { someAttr: string }): string {
    console.log(value1);
    console.log(value2);
    console.log(value3);
    console.log(value4);

    return 'Sring value'
}


// something cool is that when we receive this function as a param we can also type it
function receivesAboveFunction(aFunction: (value1: number, value2: string, value3: boolean, value4: { someAttr: string }) => string): void {
    console.log(aFunction)
}

// yeah that is really cool!
