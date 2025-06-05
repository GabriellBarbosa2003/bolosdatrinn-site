window.addEventListener('scroll', function() {
  const footer = document.getElementById('footer');
  const scrollPosition = window.scrollY + window.innerHeight;
  const pageHeight = document.documentElement.scrollHeight;

  if (scrollPosition > pageHeight - 100) {
    footer.classList.add('visible');
  } else {
    footer.classList.remove('visible');
  }
});
const form = document.getElementById('contact-form');
const messageEl = document.getElementById('form-message');
const confettiContainer = document.getElementById('confetti-container');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(form);

  showMessage("Enviando...", "loading");

  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      form.reset();
      showConfetti();
      showMessage("Mensagem enviada com sucesso!", "success");
    } else {
      showMessage("Erro ao enviar a mensagem. Tente novamente.", "error");
    }
  })
  .catch(error => {
    showMessage("Erro no envio da mensagem. Por favor, tente mais tarde.", "error");
    console.error("Erro:", error);
  });
});

function showMessage(text, type) {
  messageEl.innerHTML = `<span>${text}</span>`;
  messageEl.className = "form-message";
  if (type) messageEl.classList.add(type);
  messageEl.classList.add("show");

  setTimeout(() => {
    messageEl.classList.remove("show", "success", "error", "loading");
    messageEl.textContent = "";
    hideConfetti();
  }, 8000);
}

function showConfetti() {
  confettiContainer.style.display = 'block';
  confettiContainer.innerHTML = ''; 

  const colors = ['#f2eddb', '#7b5e42', '#d7cfae', '#a58c5f'];
  const numConfetti = 100;

  for (let i = 0; i < numConfetti; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.backgroundColor = colors[i % colors.length];
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
    confetti.style.animationDelay = (Math.random() * 3) + 's';
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    confettiContainer.appendChild(confetti);
  }
}

function hideConfetti() {
  confettiContainer.style.display = 'none';
  confettiContainer.innerHTML = '';
}

const bolos = {
  1: {
    titulo: "Bolo de Chocolate",
    img: "Imagens/bolo1.jpg",
    descricao: "Bolo de chocolate com recheio de brigadeiro cremoso.",
    detalhes: "Textura macia, sabor intenso de cacau, cobertura brilhante de chocolate meio amargo."
  },
  2: {
    titulo: "Bolo de Morango",
    img: "Imagens/bolo2.jpg",
    descricao: "Bolo de morango com chantilly artesanal e geleia caseira.",
    detalhes: "Camadas frescas de morango, chantilly leve e geleia feita com frutas selecionadas."
  },
  3: {
    titulo: "Bolo Decorado de Aniversário",
    img: "Imagens/bolo3.jpg",
    descricao: "Bolo decorado com pasta americana para ocasiões especiais.",
    detalhes: "Recheio suave, acabamento impecável com pasta americana, perfeito para festas."
  },
  4: {
    titulo: "Bolo de Baunilha",
    img: "Imagens/bolo4.jpg",
    descricao: "Bolo de baunilha com cobertura de cream cheese.",
    detalhes: "Aroma delicado de baunilha, textura cremosa do cream cheese, acabamento elegante."
  },
  5: {
    titulo: "Bolo de Leite Condensado",
    img: "Imagens/bolo5.jpg",
    descricao: "Bolo úmido de leite condensado com toque de limão.",
    detalhes: "Umidade equilibrada, sabor adocicado com leve acidez do limão, cobertura macia."
  },
  6: {
    titulo: "Bolo de Coco",
    img: "Imagens/bolo6.jpg",
    descricao: "Bolo de coco com recheio cremoso e cobertura de leite condensado.",
    detalhes: "Sabor marcante do coco fresco, recheio denso, cobertura lisa e brilhante."
  },
  7: {
    titulo: "Bolo de Limão Siciliano",
    img: "Imagens/bolo7.jpg",
    descricao: "Bolo de limão siciliano com cobertura de merengue.",
    detalhes: "Acidez refrescante do limão siciliano, merengue aerado e textura leve."
  },
  8: {
    titulo: "Bolo de Chocolate Branco",
    img: "Imagens/bolo8.jpg",
    descricao: "Bolo de chocolate branco com recheio de frutas vermelhas.",
    detalhes: "Doçura suave do chocolate branco, recheio fresco de frutas vermelhas selecionadas."
  },
  9: {
    titulo: "Bolo de Frutas",
    img: "Imagens/bolo9.jpg",
    descricao: "Bolo de frutas frescas com chantilly e geleia artesanal.",
    detalhes: "Mistura colorida de frutas frescas, chantilly leve, geleia com toque artesanal."
  },
  10: {
    titulo: "Bolo Decorado Temático",
    img: "Imagens/bolo10.jpg",
    descricao: "Bolo decorado com tema personalizado para festas.",
    detalhes: "Acabamento detalhado, sabores personalizados conforme tema e ocasião."
  },
  11: {
    titulo: "Bolo de Amêndoas",
    img: "Imagens/bolo11.jpg",
    descricao: "Bolo de amêndoas com recheio de creme de baunilha.",
    detalhes: "Textura rica e amanteigada, sabor pronunciado de amêndoas e creme suave."
  },
  12: {
    titulo: "Bolo de Doce de Leite",
    img: "Imagens/bolo12.jpg",
    descricao: "Bolo recheado com doce de leite e cobertura de chantilly.",
    detalhes: "Doce de leite artesanal, chantilly fresco, massa macia e úmida."
  },
  13: {
    titulo: "Bolo de Coco Queimado",
    img: "Imagens/bolo13.jpg",
    descricao: "Bolo de coco queimado com cobertura crocante.",
    detalhes: "Sabor tostado do coco, textura crocante na cobertura, recheio cremoso."
  },
  14: {
    titulo: "Bolo Refrescante de Limão",
    img: "Imagens/bolo14.jpg",
    descricao: "Bolo refrescante de limão com cobertura azedinha.",
    detalhes: "Equilíbrio entre doce e azedo, massa leve e cobertura vibrante."
  },
  15: {
    titulo: "Bolo Trufado",
    img: "Imagens/bolo15.jpg",
    descricao: "Bolo trufado com ganache de chocolate meio amargo.",
    detalhes: "Ganache rica e intensa, textura cremosa e finalização sofisticada."
  },
  16: {
    titulo: "Bolo de Morango com Chantilly",
    img: "Imagens/bolo16.jpg",
    descricao: "Bolo de morango com cobertura leve de chantilly.",
    detalhes: "Morangos frescos, chantilly delicado e massa fofinha."
  },
  17: {
    titulo: "Bolo Clássico de Aniversário",
    img: "Imagens/bolo17.jpg",
    descricao: "Bolo clássico para aniversários com decoração especial.",
    detalhes: "Sabores tradicionais, decoração personalizada e acabamento profissional."
  },
  18: {
    titulo: "Bolo Especial com Creme e Frutas",
    img: "Imagens/bolo18.jpg",
    descricao: "Bolo especial com camadas de creme e frutas frescas.",
    detalhes: "Camadas generosas de creme, frutas selecionadas, massa leve e úmida."
  }
};

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalImg = document.getElementById("modal-img");
const modalDescription = document.getElementById("modal-description");
const modalDetails = document.getElementById("modal-details");
const whatsappBtn = document.getElementById("whatsapp-btn");
const closeButton = document.querySelector(".close-button");

document.querySelectorAll(".botao").forEach(button => {
  button.addEventListener("click", (e) => {
    const item = e.target.closest(".item");
    const id = item.getAttribute("data-id");
    const bolo = bolos[id];

    if (bolo) {
      modalTitle.textContent = bolo.titulo;
      modalImg.src = bolo.img;
      modalImg.alt = bolo.titulo;
      modalDescription.textContent = bolo.descricao;
      modalDetails.textContent = bolo.detalhes;

      const phone = "5511986661725";
      const text = encodeURIComponent(`Olá! Quero fazer um pedido do ${bolo.titulo}. Você pode me ajudar?`);
      whatsappBtn.href = `https://wa.me/${phone}?text=${text}`;

      modal.style.display = "block";
      document.body.style.overflow = "hidden";
    }
  });
});

closeButton.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

const botoes = document.querySelectorAll('.botao');

botoes.forEach(botao => {
  botao.addEventListener('click', event => {
    const modalId = botao.getAttribute('data-modal');
    const modal = document.getElementById(modalId);

    if (modal) {

      modal.style.display = 'block';

      const rect = botao.getBoundingClientRect();

      modal.style.top = window.scrollY + rect.bottom + 'px'; 
      modal.style.left = window.scrollX + rect.left + 'px';

      const maxLeft = window.innerWidth - modal.offsetWidth;
      if (parseInt(modal.style.left) > maxLeft) {
        modal.style.left = maxLeft + 'px';
      }
    }
  });
});

document.querySelectorAll('.close-button').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.modal').style.display = 'none';
  });
});

window.addEventListener('click', e => {
  document.querySelectorAll('.modal').forEach(modal => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});
