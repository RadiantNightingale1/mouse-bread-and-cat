 document.addEventListener("DOMContentLoaded", function() {
      const sidebarLinks = [
        { href: '#home', text: 'Home' },
        { href: '#news', text: 'Log In', class: 'active' },
        { href: '#contact', text: 'Store' },
        { href: '#about', text: 'Custom' }
      ];

      const sidebar = document.querySelector('.sidebar');

      sidebarLinks.forEach(linkInfo => {
        const link = document.createElement('a');
        link.href = linkInfo.href;
        link.textContent = linkInfo.text;
        if (linkInfo.class) {
          link.classList.add(linkInfo.class);
        }
        link.addEventListener('click', function(event) {
          const activeLink = document.querySelector('.sidebar a.active');
          if (activeLink) {
            activeLink.classList.remove('active');
          }
          this.classList.add('active');
        });
        sidebar.appendChild(link);
      });

      let loggedIn = false;

      const loginForm = document.getElementById('loginForm');
      const content = document.getElementById('content');
      const logoutBtn = document.getElementById('logoutBtn');

      const usernameInput = document.createElement('input');
      usernameInput.setAttribute('type', 'text');
      usernameInput.setAttribute('id', 'username');
      usernameInput.setAttribute('placeholder', 'Username');

      const passwordInput = document.createElement('input');
      passwordInput.setAttribute('type', 'password');
      passwordInput.setAttribute('id', 'password');
      passwordInput.setAttribute('placeholder', 'Password');

      const loginBtn = document.createElement('button');
      loginBtn.setAttribute('id', 'loginBtn');
      loginBtn.textContent = 'Login';

      loginForm.appendChild(usernameInput);
      loginForm.appendChild(document.createElement('br'));
      loginForm.appendChild(passwordInput);
      loginForm.appendChild(document.createElement('br'));
      loginForm.appendChild(loginBtn);

      loginBtn.addEventListener('click', function() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'user' && password === 'password') {
          loggedIn = true;
          loginForm.style.display = 'none';
          content.style.display = 'block';
        } else {
          alert('Invalid credentials');
        }
      });

      logoutBtn.addEventListener('click', function() {
        loggedIn = false;
        loginForm.style.display = 'block';
        content.style.display = 'none';
      });
    });