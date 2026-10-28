document.getElementById('feedbackForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const feedbackData = {
    rating: document.getElementById('rating').value,
    foodQuality: document.getElementById('foodQuality').value,
    serviceSpeed: document.getElementById('serviceSpeed').value,
    comments: document.getElementById('comments').value,
    timestamp: new Date().toISOString()
  };

  console.log("Feedback submitted:", feedbackData);

  document.getElementById('statusMessage').style.display = 'block';
  
  setTimeout(() => {
    document.getElementById('feedbackForm').reset();
    document.getElementById('statusMessage').style.display = 'none';
  }, 2000);
});