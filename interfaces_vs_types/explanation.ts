// type word allow you to create any kind of time

// interface basicly create object types. but an interface can be used as a contract


// contract example

interface CredentialsInterface {
    mail: string;
    passw: string;
}


class AuthCredentials implements CredentialsInterface {
    // elements from the contract with CredentialsInterface
    mail: string;
    passw: string;

    // custom elements of the class you are creating
    username: string;
}
