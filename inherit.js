class User {
  static count = 0;
  constructor(username, password, email){
    this.username = username;
    this.password = password;
    this.email = email;
    User.count++;
  }
  registerdUser() {
    console.log("number of user registered = " + User.count);
  }
}

class Member extends User {
  constructor(username, password, email, mpackage) {
    super(username, password, email);
    this.mpackage = mpackage;
  }

  getpackage() {
    console.log(
      this.username + "is subscribed to " + this.mpackage + "package"
    );
  }

  renevmembership() {
    console.log();
  }
}

const sam = new Member("sam", 12345, "sam@gmail.com", "standard");

const sam1 = new Member("sam", 12345, "sam@gmail.com", "standard");

sam.getpackage();

sam.registerdUser();
