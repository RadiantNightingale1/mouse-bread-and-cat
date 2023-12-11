  const sidebarLinks = [
    { href: '#home', text: 'Home' },
    { href: '#Survey', text: 'Survey', class: 'active' },
    { href: '#Store', text: 'Store' },
    { href: '#custom', text: 'Custom' }
  ];

  const sidebar = document.getElementById('sidebar');

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

  const questions = [
    { type: 'text', label: 'Name', name: 'name' },
    { type: 'number', label: 'Age', name: 'age' },
    { type: 'radio', label: 'Gender', name: 'gender', options: ['Male', 'Female'] },
    { type: 'textarea', label: 'Feedback', name: 'feedback' }
  ];

  const form = document.getElementById('surveyForm');

  questions.forEach(question => {
    const { type, label, name, options } = question;
    const container = document.createElement('div');
    container.classList.add('question');

    const labelElement = document.createElement('label');
    labelElement.textContent = label + ': ';
    container.appendChild(labelElement);

    if (type === 'textarea') {
      const textarea = document.createElement('textarea');
      textarea.setAttribute('name', name);
      textarea.setAttribute('rows', '4');
      textarea.setAttribute('cols', '50');
      textarea.setAttribute('required', '');
      container.appendChild(textarea);
    } else if (type === 'radio') {
      options.forEach(option => {
        const radioLabel = document.createElement('label');
        radioLabel.textContent = option;

        const radioInput = document.createElement('input');
        radioInput.setAttribute('type', 'radio');
        radioInput.setAttribute('name', name);
        radioInput.setAttribute('value', option.toLowerCase());

        container.appendChild(radioInput);
        container.appendChild(radioLabel);
      });
    } else {
      const input = document.createElement('input');
      input.setAttribute('type', type);
      input.setAttribute('name', name);
      input.setAttribute('required', '');
      container.appendChild(input);
    }

    form.appendChild(container);
  });

  function submitForm() {
    const formData = new FormData(form);
    let data = {};
    for (let [name, value] of formData.entries()) {
      data[name] = value;
    }
    console.log(data);
    alert('Survey submitted! Check the console for the form data.');
  }