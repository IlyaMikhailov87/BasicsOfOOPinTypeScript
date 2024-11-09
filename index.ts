class User {
  private _name: string;
  private _login: string;
  private _password: string;
  static count: number = 0;

  constructor(name: string, login: string, password: string) {
    this._name = name;
    this._login = login;
    this._password = password;
    User.count++;
  }

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    this._name = newName;
  }

  get login(): string {
    return this._login;
  }

  get password(): string {   // геттер добавлен, чтобы результат был похож на пример - звездочки вместо undefinded
    return "********";
  }

  set password(newPassword: string) {
    this._password = newPassword;
  }

  showInfo(): void {
    console.log(`Name: ${this._name}, Login: ${this._login}`);
  }
}

class SuperUser extends User {
  private _role: string;
  static count: number = 0;

  constructor(name: string, login: string, password: string, role: string) {
    super(name, login, password); // Вызов конструктора родительского класса
    this._role = role;
    User.count--; // декрементирование счетчика родительского класса, который был инкрементирован при вызове функции super
    SuperUser.count++;
  }

  get role(): string {
    return this._role;
  }

  set role(newRole: string) {
    this._role = newRole;
  }

  showInfo(): void {
    console.log(`Name: ${this.name}, Login: ${this.login}, Role: ${this._role}`);
  }
}


const user1 = new User('Paul McCartney', 'paul', '1234');
const user2 = new User('George Harrison', 'george', '5678');
const user3 = new User('Richard Starkey', 'ringo', '8523');
const admin = new SuperUser('John Lennon', 'john', '0000', 'admin');

user1.showInfo();
admin.showInfo();

let users = User.count;
let admins = SuperUser.count;

console.log(`\nВсего обычных пользователей: ${users}`);
console.log(`Всего супер-пользователей: ${admins}`);

user3.name = '\nRingo Starr';
user1.password = 'Pa$$w0rd';

console.log(user3.name);
console.log(user2.password);
console.log(user2.login); 

user2.login = 'geo'; // Этот код вызывает ошибку, так как пытается изменить login, при том, что сеттер не задан
console.log(`\n${user2.login}`);