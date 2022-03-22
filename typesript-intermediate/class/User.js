var User = /** @class */ (function () {
    function User(username, nickname, email, password) {
        if (password === void 0) { password = 'default_password_123'; }
        this.username = username;
        this.nickname = nickname;
        this.email = email;
        this.password = password;
    }
    User.prototype.getPersonalInfo = function () {
        return "".concat(this.username, " has nickname ").concat(this.nickname, " and email ").concat(this.email);
    };
    User.prototype.isPasswordValid = function (password) {
        // just a dummy validation
        //return password.includes(this.username + this.nickname) || password.includes(this.nickname + this.username);
        return password.length > 8 && password.indexOf(this.username) === -1;
    };
    return User;
}());
var johnUser = new User('john', 'johnny', 'john@johnny.com', 'johnny_john');
var janeUser = new User('jane', 'janey', 'jane@jane.com');
console.log(johnUser.getPersonalInfo());
console.log(janeUser.getPersonalInfo());
console.log('Is password valid ? ' + johnUser.isPasswordValid('johnny_john'));
console.log('Is password valid ? ' + johnUser.isPasswordValid('randompwd'));
// johnUser.isPasswordValid(johnUser.email);// can't access protected property
// johnUser.nickname; // can access public property
