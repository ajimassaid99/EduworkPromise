import { Table } from './table.js';
import { fetchData } from './users.js';

document.addEventListener("DOMContentLoaded", function() {

  fetchData((err, data) => {
    if (err) {
      console.error(err);
      displayMessage("circular");
      return;
    }
    if (data == null ) {
      displayMessage("circular");
    } else {
      displayMessage("data", data);
    }
  });

  function displayMessage(type, data) {
    const app = document.getElementById("app");
    if (type === "circular") {
      app.innerHTML = '<div id="app"><div class="spinner"></div></div>';
    } else if (type === "data") {
      const table = new Table({ data: data });
      table.render(app);
    }
  }
});