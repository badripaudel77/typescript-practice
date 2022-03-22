var UserModel = /** @class */ (function () {
    function UserModel(id, name) {
        this.id = id;
        this.name = name;
    }
    return UserModel;
}());
var UserServiceImpl = /** @class */ (function () {
    function UserServiceImpl() {
    }
    UserServiceImpl.prototype.getUser = function () {
        return new UserModel(1, "John");
    };
    return UserServiceImpl;
}());
var UserServiceImpl_ = new UserServiceImpl();
var user = UserServiceImpl_.getUser();
console.log(user.name + " " + user.id);
