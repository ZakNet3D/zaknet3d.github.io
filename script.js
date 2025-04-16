// Контент для страниц
const pages = {
  home: `
    <h1>Добро пожаловать в STO PYRAMIDA</h1>
    <p>Мы чиним моторы, сцепление, колодки и многое другое.</p>
  `,
  gallery: `
    <h1>Галерея</h1>
    <p>Здесь скоро появятся фотографии наших работ.</p>
  `
};

// Загрузка начальной страницы
document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");
  content.innerHTML = pages.home;

  // Обработка кликов по меню
  document.querySelectorAll(".side-menu a").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const page = link.dataset.page;
      content.innerHTML = pages[page];
    });
  });
});
