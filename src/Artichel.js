function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const articles = data.articles.map(article => {
          return {
            source: {
              id: article.source.id,
              name: article.source.name
            },
            author: article.author,
            title: article.title,
            description: article.description,
            url: article.url,
            urlToImage: article.urlToImage,
            publishedAt: article.publishedAt,
            content: article.content
          };
        });
          resolve(articles);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        reject(error);
      });
  });
}

export { fetchData };