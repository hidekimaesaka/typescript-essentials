// using interfaces
interface Admin {
    permissions: string[];
}

interface AppUser {
    name: string;
}

interface AppAdmin extends Admin, AppUser {}

let appAdmin: AppAdmin;

appAdmin = {
    name: 'Lucas',
    permissions: ['a', 'b']
}

// using types
type AdminType = {
    permisions: string[]
};

type AppUserType = {
    name: string;
}

type AppAdminByType =  AdminType & AppUserType;

let appAdminByType: AppAdminByType;

appAdminByType  = {
    name: 'Lucas',
    permisions: ['c', 'd']
};
