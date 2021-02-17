class UserService {

  static displayUserTable() {
    var columnNames = Object.keys(UserService.users[0]);
    // create table header
    for (const columnName of columnNames) {
      var userTableHeader = document.getElementById("tuser_head");
      // create a column for a single user's value (variable)
      var newHeaderColumn = document.createElement("th");
      newHeaderColumn.scope = "col";
      newHeaderColumn.innerHTML = columnName;
      // add this header column to the user tables head
      userTableHeader.appendChild(newHeaderColumn);
    }
    // create user rows
    for (const user of UserService.users) {
      UserService.displayUserRow(user);
    }
  }

  static displayUserRow(user) {
    var userValues = Object.values(user);
    var userTableBody = document.getElementById("tuser_body");
    // create user table row
    var userTableRow = document.createElement("tr");
    // create cell for users values
    for (const userValue of userValues) {
      var userTableCell = document.createElement("td");
      userTableCell.innerHTML = userValue;
      // append this cell to the user's row
      userTableRow.appendChild(userTableCell);
    }
    // append user's row to the table body, with all cells included
    userTableBody.appendChild(userTableRow);
  }

  static changePassword() {}

  static init() {
    // create some users
    UserService.createUser("Linus00", "trash@mail.com", "xxxxx");
    UserService.createUser("Grone", "info@grone.de", "xxxxx");
    UserService.createUser("Torge", "torge@russia.cia", "xxxxx");
    UserService.createUser("Michel", "michel.1@web.de", "xxxxx");
    // add them to the user table skeleton
    UserService.displayUserTable();
  }

  static createUser(name, email, password) {
    var newUser = new User(name, email, password);
    UserService.users.push(newUser)
  }
}
// instanciate user list
UserService.users = []
