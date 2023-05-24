import { Card } from './card.js';
import { fetchData } from './Artichel.js';

document.addEventListener("DOMContentLoaded", function() {
  var a = '';
  const urlApi1 = `https://newsapi.org/v2/top-headlines?q=${a}&country=id&apiKey=8433effe354a4a12925b65155fa041be`;
  fetchData(urlApi1)
    .then(data => {
      if (data== []) {
        displayMessage("circular");
      } else {
        displayMessage("data", data);
      }
    })
    .catch(err => {
      console.error(err);
      displayMessage("kosong");
    });

  function displayMessage(type, data) {
    const app = document.getElementById("app");
    if (type === "circular") {
      app.innerHTML = '<div id="app"><div class="spinner"></div></div>';
    } else if (type === "data") {
      const table = new Card({ data: data });
      table.render(app);
    } else{
      app.innerHTML=`
      <div class="card border-danger text-white bg-transparent">
  <div class="card-body text-danger">
    No Content
  </div>
</div>
      `;
    }
  }

  const searchInput = document.getElementById('Search');
  searchInput.addEventListener('input', function() {
    a = this.value;
    const url = `https://newsapi.org/v2/top-headlines?q=${a}&country=id&apiKey=8433effe354a4a12925b65155fa041be`;
    fetchData(url)
      .then(data => {
        console.log(data);
        if (data.length <1) {
          displayMessage("");
        } else {
          displayMessage("data", data);
        }
      })
      .catch(err => {
        console.error(err);
        displayMessage("circular");
      });
  });
});