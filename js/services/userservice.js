class UserService {

  static displayUserTable() {
    var columnNames = Object.keys(UserService.users[0]);
    // create table header
    for (const columnName of columnNames) {
      var userTableHeader = document.getElementById("tuser_head");
      var newHeaderColumn = document.createElement("th");
      newHeaderColumn.scope = "col";
      newHeaderColumn.innerHTML = columnName;
      userTableHeader.appendChild(newHeaderColumn);
      console.log(columnName);
    }
    // create user rows
    for (const user of UserService.users) {
      UserService.displayUserRow(user);
    }
  }

  static displayUserRow(user) {
    var userValues = Object.values(user);
    var userTableBody = document.getElementById("tuser_body");
      var userTableRow = document.createElement("tr");
    for (const userValue of userValues) {
      var userTableCell = document.createElement("td");
      userTableCell.innerHTML = userValue;
      userTableRow.appendChild(userTableCell);
    }
    userTableBody.appendChild(userTableRow);
  }

  static changePassword() {}

  static init() {
    UserService.createUser("Linus00", "trash@mail.com", "xxxxx");
    UserService.createUser("Grone", "info@grone.de", "xxxxx");
    UserService.displayUserTable();
    console.log("UserService inited");
  }

  static createUser(name, email, password) {
    var newUser = new User(name, email, password);
    UserService.users.push(newUser)
    console.log("User added; User list is now " + UserService.users)
  }
}
// instanciate user list
UserService.users = []
