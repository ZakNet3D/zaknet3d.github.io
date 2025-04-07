const worksLink = document.getElementById('worksLink');
const mainContent = document.getElementById('mainContent');
const schedule = document.getElementById('schedule');
const homeLink = document.getElementById('homeLink');

// Загрузка главной страницы
homeLink.addEventListener('click', () => {
  mainContent.innerHTML = `
    <center><h1>Добро пожаловать на главную страницу!</h1>
        <p>На нашем СТО мы предоставляем следующие услуги:</p>
        <ul>
          <li><strong>Ремонт моторов</strong></li>
          <li><strong>Сцепление</strong></li>
          <li><strong>Замена колодок</strong></li>
        </ul></center>
  `;
  schedule.style.display = 'block';
  closeSidebar(); // Закрыть меню после клика
});

// Загрузка страницы "Работы"
worksLink.addEventListener('click', (event) => {
  event.preventDefault();
  schedule.style.display = 'none';
  mainContent.innerHTML = `
    <h1>Мои работы</h1>
    <img src="your-image.jpg" class="work-image" alt="" />
    <img src="Image/motors.jpg" class="work-image" alt="Чиним моторы" />
    <img src="Image/LMAAAgMo4OA-960.jpg" class="work-image" alt="Чиним сцепление" />
    <img src="Image/si8egCdbWLr6P7_HNnuFpQ=s800.jpg" class="work-image" alt="меняем колодки" />
  `;
  closeSidebar(); // Закрыть меню после клика
});

// Открытие/закрытие меню
const menuToggle = document.getElementById('menuToggle');
const closeMenu = document.getElementById('closeMenu');
const sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', () => {
  sidebar.classList.add('open');
});

closeMenu.addEventListener('click', () => {
  sidebar.classList.remove('open');
});

function closeSidebar() {
  sidebar.classList.remove('open');
}
