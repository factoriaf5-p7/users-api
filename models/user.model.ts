const users = [
    {
        id:1,
        name:'sara',
        email:'sara@mail.com',
        password:'12345'
    }
]

class User {
    findAll(){
        return users;
    }
}

export default new User();