function fetchAdditionalHTML() {
    fetch('additional-content.html')
      .then(function(response) {
        return response.text();
      })
      .then(function(htmlContent) {
        console.log('received data:', htmlContent);
        document.querySelector('#additional-content').innerHTML = htmlContent;
      });
  }
  
  setTimeout(fetchAdditionalHTML, 3000);