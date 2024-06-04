const formEl = {
  input: document.querySelector('.co-work-user'),
  form: document.querySelector('.co-work-form'),
  textarea: document.querySelector('.co-work-message'),
  messageBtn: document.querySelector('.co-work-btn'),
  modalContainer: document.querySelector('.modal-container'),
};

const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

function isEmailValid(value) {
  const isValid = emailPattern.test(value);
  const container = formEl.input.parentNode;
  const errorMessage = container.querySelector('.error-message');

  if (!isValid) {
    formEl.input.classList.add('invalid');
    if (!errorMessage) {
      showError(container, 'Please enter a valid email address.');
    }
  } else {
    formEl.input.classList.remove('invalid');
    if (errorMessage) {
      errorMessage.remove();
    }
    // Показуємо модальне вікно, якщо email правильний
    const modalHTML = createModal({
      title: 'Thank you for your interest in cooperation!',
      message:
        'The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.',
    });
    formEl.modalContainer.insertAdjacentHTML('beforeend', modalHTML);
    document.querySelector('#myModal').classList.add('show');
    addModalCloseEventListener();
  }

  return;
}

formEl.form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const inputEmail = formEl.input.value;
  const inputMessage = formEl.textarea.value;

  if (!isEmailValid(inputEmail)) {
    formEl.input.classList.add('invalid');
    return;
  }

  const BASE_URL = 'https://portfolio-js.b.goit.study/api-docs/';

  fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: inputEmail,
      message: inputMessage,
    }),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      if (data.success) {
        formEl.form.reset();
        const modalHTML = createModal({
          title: 'Thank you for your interest in cooperation!',
          message:
            'The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.',
        });
        formEl.modalContainer.insertAdjacentHTML('beforeend', modalHTML);
        document.querySelector('#myModal').classList.add('show');
        addModalCloseEventListener();
      } else {
        const modalHTML = createModal({
          title: 'Submission Error',
          message: data.error || 'An error occurred. Please try again later.',
        });
        formEl.modalContainer.insertAdjacentHTML('beforeend', modalHTML);
        document.querySelector('#myModal').classList.add('show');
        addModalCloseEventListener();
      }
    })
    .catch(error => {
      const modalHTML = createModal({
        title: 'Submission Error',
        message: 'An error occurred. Please try again later.',
      });
      formEl.modalContainer.insertAdjacentHTML('beforeend', modalHTML);
      document.querySelector('#myModal').classList.add('show');
      addModalCloseEventListener();
    });
}

function createModal({ title, message }) {
  const iconRelativePath = './img/icon.svg#icon-close';
  const iconUrl = new URL(iconRelativePath, import.meta.url).href;
  return `
      <div id="myModal" class="modal">
        <div class="modal-content">
          <button class="modal-closeBtn"><svg class="modal-closeBtn-icon" width="24" height="24">
          <use href="${iconUrl}"></use>
          </svg></button>
          <h3 class="modal-title">${title}</h3>
          <p class="modal-message">${message}</p>
        </div>
      </div>
    `;
}

function addModalCloseEventListener() {
  const closeBtn = document.querySelector('.modal-closeBtn');
  closeBtn.addEventListener('click', closeModal);
}

function closeModal() {
  const modal = document.querySelector('#myModal');
  modal.classList.remove('show');
  modal.remove();
}

function showError(container, errorMessage) {
  const errorElem = container.querySelector('.error-message');
  const emailInputContainer = formEl.input;

  if (errorElem) {
    errorElem.textContent = errorMessage;
  } else {
    const msgElem = document.createElement('span');
    msgElem.className = 'error-message';
    msgElem.textContent = errorMessage;
    emailInputContainer.insertAdjacentElement('afterend', msgElem);
  }
}
