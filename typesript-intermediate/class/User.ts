class User {
    private username : string; // private : visible only in this class
    public nickname: string; // public : visible in this class and in other classes
    protected email: string; // protected : visible in this class and in within subclasses
    private password : string;

    constructor(username: string, nickname: string, email: string , password: string= 'default_password_123') {
        this.username = username;
        this.nickname = nickname;
        this.email = email;
        this.password = password;
    }

    public getPersonalInfo() : string {
        return  `${this.username} has nickname ${this.nickname} and email ${this.email}`;
    }

    
    public isPasswordValid(password: string) : boolean {
        // just a dummy validation
        //return password.includes(this.username + this.nickname) || password.includes(this.nickname + this.username);
        return password.length > 8 && password.indexOf(this.username)===-1;
    }
}

let johnUser = new User('john', 'johnny','john@johnny.com', 'johnny_john');
let janeUser = new User('jane', 'janey','jane@jane.com');

console.log(johnUser.getPersonalInfo());
console.log(janeUser.getPersonalInfo());

console.log('Is password valid ? ' + johnUser.isPasswordValid('johnny_john'));
console.log('Is password valid ? ' + johnUser.isPasswordValid('randompwd'));


// johnUser.isPasswordValid(johnUser.email);// can't access protected property
// johnUser.nickname; // can access public property
