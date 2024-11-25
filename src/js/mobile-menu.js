(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-menu-open]'),
    closeModalBth: document.querySelector('[data-menu-close]'),
    modalBtns: document.querySelectorAll('.modal-nav-link'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBth.addEventListener('click', toggleModal);

  refs.modalBtns.forEach(btn => {
    btn.addEventListener('click', toggleModal);
  });

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
  }
})();

// SWITCH
document.addEventListener('DOMContentLoaded', () => {
  const themeToggles = [
    document.getElementById('theme-toggle'),
    document.getElementById('theme-toggle1'),
  ];
  const themeElements = document.querySelectorAll('[data-theme]');
  const currentTheme = localStorage.getItem('theme') || 'light';

  themeElements.forEach(element => {
    element.setAttribute('data-theme', currentTheme);
  });

  themeToggles.forEach(toggle => {
    toggle.checked = currentTheme === 'dark';
  });

  themeToggles.forEach(toggle => {
    toggle.addEventListener('change', () => {
      const newTheme = toggle.checked ? 'dark' : 'light';

      themeElements.forEach(element => {
        element.setAttribute('data-theme', newTheme);
      });

      themeToggles.forEach(otherToggle => {
        otherToggle.checked = toggle.checked;
      });

      localStorage.setItem('theme', newTheme);
    });
  });
});
