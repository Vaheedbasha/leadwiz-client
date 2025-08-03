document.getElementById('leadForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = {
    name: formData.get('name'),
    mobile: formData.get('mobile'),
    email: formData.get('email'),
    service: formData.get('service'),
    fromCity: formData.get('fromCity'),
    toCity: formData.get('toCity'),
    budget: formData.get('budget'),
    dateNeeded: formData.get('dateNeeded'),
    openMessage: formData.get('openMessage')
  };
  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbyWY0adGX7c7IfAmVxu9mxqG057l8OaI3zDl9LyOGqeTThuXHNjFOUOaRuOBzuDdMAv/exec', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    });
    const result = await response.json();
    document.getElementById('response').innerText = result.message;
  } catch (error) {
    document.getElementById('response').innerText = 'Error submitting form';
    console.error('Fetch error:', error);
  }
});
