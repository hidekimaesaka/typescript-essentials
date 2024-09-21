// type word alias the type you want to create
type AddFunc = (a: number, b: number) => number;

function receivesAFunction(aFunction: AddFunc):void {

}


// using for objects typing like:

type User = {
    name: string;
    password: string;
    age: number;
    isAdmin: boolean;
    description: null | string
}

let user: User;
