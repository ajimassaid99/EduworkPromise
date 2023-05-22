
function fetchData(callback) {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      const users = data.map(user => {
        return {
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
          address: {
            street: user.address.street,
            suite: user.address.suite,
            city: user.address.city,
            zipcode: user.address.zipcode,
            geo: {
              lat: user.address.geo.lat,
              lng: user.address.geo.lng
            }
          },
          phone: user.phone,
          website: user.website,
          company: {
            name: user.company.name,
            catchPhrase: user.company.catchPhrase,
            bs: user.company.bs
          }
        };
      });
      callback(null, users);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      callback(error, []);
    });
}

export {  fetchData };