const users:Array<IUser> = [
    {
        id:1,
        name:'sara',
        email:'sara@mail.com',
        password:'12345'
    }
]

interface IUser extends UserDTO{
    id:number;
}

interface UserDTO {
    name:string;
    email:string;
    password:string;
}

class User {
    findAll(){
        return users;
    }
    createUser(user:UserDTO){
        // console.log(user);
        const id= users.length+1;
        // const userDB = {}
        // const myUserDB:IUser =Object.assign(user,{id})
        // console.log(myUserDB);

        users.push(Object.assign({id},user));
        return {message:'ok user creado correctamente'}
    }
}

export default new User();

