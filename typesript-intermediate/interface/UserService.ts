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

let UserServiceImpl_ = new UserServiceImpl();
let user = UserServiceImpl_.getUser();
console.log(user.name + " " + user.id);