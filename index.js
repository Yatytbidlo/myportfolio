let shareBtn = document.getElementById("shareBtn");

shareBtn.addEventListener("click", () => {
  shareBtn.classList.toggle("open");
});

function openLink(url) {
  window.open(url, "_blank");
}

// Получаем элементы
const parallaxContainer = document.querySelector(".parallax-container");
const parallaxImg = document.getElementById("parallax-img");

// Обработчик события для отслеживания положения курсора
parallaxContainer.addEventListener("mousemove", (e) => {
  // Получаем ширину контейнера
  const containerWidth = parallaxContainer.offsetWidth;

  // Получаем положение курсора в контейнере
  const cursorX = e.clientX - parallaxContainer.getBoundingClientRect().left;

  // Вычисляем процентное смещение по оси Z
  const percentOffsetZ = (cursorX / containerWidth - 0.5) * 100;

  // Применяем смещение по оси Z к изображению
  parallaxImg.style.transform = `translateZ(${percentOffsetZ}px)`;
});

document.addEventListener("DOMContentLoaded", function () {
  const texts = [
    "console.log('Hello World!')",
    "Bonjour to my portfolio!",
    "How are you? :)",
  ];
  let textIndex = 0;
  const typetextElement = document.querySelector(".typetext");

  function typeText() {
    const currentText = texts[textIndex];
    let charIndex = 0;
    typetextElement.textContent = "";
    const typingInterval = setInterval(function () {
      typetextElement.textContent += currentText[charIndex];
      charIndex++;
      if (charIndex === currentText.length) {
        clearInterval(typingInterval);
        setTimeout(deleteText, 700); // Задержка перед удалением текста
      }
    }, 100); // Скорость набора текста
  }

  function deleteText() {
    const currentText = typetextElement.textContent;
    let charIndex = currentText.length - 1;
    const deletingInterval = setInterval(function () {
      typetextElement.textContent = currentText.substring(0, charIndex);
      charIndex--;
      if (charIndex === -1) {
        clearInterval(deletingInterval);
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeText, 1000); // Задержка перед набором нового текста
      }
    }, 50); // Скорость удаления текста
  }

  typeText();
});

let button1 = document.getElementById("radio-1");
let button2 = document.getElementById("radio-2");
let button3 = document.getElementById("radio-3");
let button4 = document.getElementById("radio-4");
let button5 = document.getElementById("tocontact");

let scroll1 = document.getElementById("aboutme");
let scroll2 = document.getElementById("projects");
let scroll3 = document.getElementById("skills");
let scroll4 = document.getElementById("contact");

button1.addEventListener("click", smoothscroll1);
button2.addEventListener("click", smoothscroll2);
button3.addEventListener("click", smoothscroll3);
button4.addEventListener("click", smoothscroll4);
button5.addEventListener("click", smoothscroll5);

function smoothscroll1() {
  scroll1.scrollIntoView({ behavior: "smooth" });
}

function smoothscroll2() {
  scroll2.scrollIntoView({ behavior: "smooth" });
}

function smoothscroll3() {
  scroll3.scrollIntoView({ behavior: "smooth" });
}

function smoothscroll4() {
  scroll4.scrollIntoView({ behavior: "smooth" });
}

function smoothscroll5() {
  scroll4.scrollIntoView({ behavior: "smooth" });
}

// Получаем кнопку и добавляем обработчик клика
const scrollToTopButton = document.getElementById("scroll-to-top-button");

scrollToTopButton.addEventListener("click", () => {
  // Прокручиваем страницу вверх плавно
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Отслеживаем скролл страницы
window.addEventListener("scroll", () => {
  // Если пользователь прокрутил страницу вниз на некоторое расстояние, показываем кнопку, иначе скрываем
  if (window.scrollY > 100) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

const form = document.getElementById("form")

form.addEventListener("submit", function (e) {
  e.preventDefault()

  alert('Ваша заявка отправлена!')

  form.reset()
})
