export {}
class UserModel {
    constructor(public id: number, public name: string) {}

}
interface UserService {
    getUser(): UserModel;
}

class UserServiceImpl implements UserService {
    getUser(): UserModel {
        return new UserModel(1, "John");
    }
}

let UserServiceImpl_:UserService = new UserServiceImpl(); // Just like in java, it could be of type Parent or child class
let user = UserServiceImpl_.getUser();
console.log(user.name + " " + user.id);