document.addEventListener('DOMContentLoaded', () => {

  // MENU SCROLL
  window.addEventListener('scroll', () => {
    const menu = document.querySelector('.menu');
    if (!menu) return;

    if (window.scrollY > 50) {
      menu.classList.add('menu-escondido');
    } else {
      menu.classList.remove('menu-escondido');
    }
  });

  // BOXES ANIMAÇÃO
  const boxes = document.querySelectorAll('.box');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      entry.target.classList.toggle('show', entry.isIntersecting);
    });
  }, { threshold: 0.1 });

  boxes.forEach(box => observer.observe(box));

  // ITENS ESQUERDA / IMAGEM
  const observarItens = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      entry.target.classList.toggle('show', entry.isIntersecting);
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.esquerda, .bottom-image')
    .forEach(item => observarItens.observe(item));

  // ===== MODAL LOGIN =====
  const modal = document.getElementById('loginModal');
  const closeModal = document.getElementById('closeModal');
  const boxesExp = document.querySelectorAll('.exp');

  if (modal && closeModal && boxesExp.length) {
    boxesExp.forEach(box => {
      box.addEventListener('click', () => {
        modal.style.display = 'flex';
      });
    });

    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
      vermelho.innerHTML = '';
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
        vermelho.innerHTML = '';
      }
    });
  }

  // ===== MODAL SENHA =====
  const modalSenha = document.querySelector('.modal-senha');
  const closeModalSenha = document.getElementById('closeModalSenha');
  const palavraSenha = document.querySelector('.word');

  if (modalSenha && closeModalSenha && palavraSenha) {
    palavraSenha.addEventListener('click', () => {
      modalSenha.style.display = 'flex';
            modal.style.display = 'none';

    });

    closeModalSenha.addEventListener('click', () => {
      modalSenha.style.display = 'none';
    });

    modalSenha.addEventListener('click', (e) => {
      if (e.target === modalSenha) {
        modalSenha.style.display = 'none';
      }
    });
  }
    const modalConta = document.querySelector('.modal-conta');
  const closeModalConta = document.getElementById('closeModalConta');
  const palavraConta = document.querySelector('.cont');

  if (modalConta && closeModalConta && palavraConta) {
    palavraConta.addEventListener('click', () => {
      modalConta.style.display = 'flex';
            modal.style.display = 'none';
            

    });

    closeModalConta.addEventListener('click', () => {
      modalConta.style.display = 'none';
    });

    modalConta.addEventListener('click', (e) => {
      if (e.target === modalConta) {
        modalConta.style.display = 'none';
      }
    });
  }

  // ===== CARROSSEL =====
  const track = document.querySelector('.track');
  const images = document.querySelectorAll('.track img');
  const nextButton = document.querySelector('#next');
  const prevButton = document.querySelector('#prev');

  let currentIndex = 0;

  function updateCarrosel() {
    const offset = -currentIndex * 100;
    track.style.transform = `translateX(${offset}%)`;
  }

  if (nextButton && prevButton) {
    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length;
      updateCarrosel();
    });

    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateCarrosel();
    });

    updateCarrosel();
  }

});

const button = document.querySelector('.but');
const vermelho = document.querySelector('.vermelho');

button.addEventListener('click', () => {
  vermelho.innerHTML = 'Email ou senha incorretos. Tente novamente.'
})

const passwordInput = document.getElementById('main-password');
const confirmInput = document.getElementById('confirm-password');


const reqs = {
    length: document.getElementById('req-length'),
    case: document.getElementById('req-case'),
    symbol: document.getElementById('req-symbol'),
    match: document.getElementById('req-match')
};

function validar() {
    const p1 = passwordInput.value;
    const p2 = confirmInput.value;

    // Regra 1: Tamanho
    p1.length >= 8 ? reqs.length.classList.add('valid') : reqs.length.classList.remove('valid');

    // Regra 2: Maiúsculas e Minúsculas
    (/[a-z]/.test(p1) && /[A-Z]/.test(p1)) ? reqs.case.classList.add('valid') : reqs.case.classList.remove('valid');

    // Regra 3: Símbolos
    (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(p1)) ? reqs.symbol.classList.add('valid') : reqs.symbol.classList.remove('valid');

    // Regra 4: Iguais (Só valida se p1 não estiver vazio)
    if (p1.length > 0 && p1 === p2) {
        reqs.match.classList.add('valid');
    } else {
        reqs.match.classList.remove('valid');
    }
}

// Adiciona os eventos
passwordInput.addEventListener('keyup', validar);
confirmInput.addEventListener('keyup', validar);

button.addEventListener('click', (e) => {
    InputDeviceInfo.innerHTML = '';
})