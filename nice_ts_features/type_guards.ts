type Role = 'admin' | 'user';


function performAction(action: string | number, role: Role){
    if (role === "admin" && typeof action === "string") {
        // ...
    }
}
