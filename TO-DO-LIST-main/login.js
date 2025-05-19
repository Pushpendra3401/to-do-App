document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;

  // Dummy user (for demo purposes)
  const validUser = 'admin';
  const validPass = '1234';

  if (username === validUser && password === validPass) {
    localStorage.setItem('username', username);
    localStorage.setItem('isLoggedIn', 'true');
    window.location.href = 'index.html';
  } else {
    alert('Invalid credentials!');
  }
});
