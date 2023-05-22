class Table {
    constructor(init) {
      this.init = init;
    }
  
    createTable(data) {
      let table = `
        <table class="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Addres</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
      `;
      data.forEach((d) => {
        table += `
          <tr>
            <td>${d.id}</td>
            <td>${d.name}</td>
            <td>${d.username}</td>
            <td>${d.email}</td>
            <td>${d.address.street}, ${d.address.suite}, ${d.address.city}</td>
            <td>${d.company.name}</td>
          </tr>
        `;
      });
      table += `
          </tbody>
        </table>
      `;
  
      return table;
    }
  
    render(element) {
      let table = this.createTable(this.init.data);
      element.innerHTML = table;
    }
  }
  
  export { Table };