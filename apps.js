const pages = document.querySelectorAll('.page');
const navBtns = document.querySelectorAll('.nav-btn');
function goTo(pageId){
  pages.forEach(p => p.classList.toggle('active', p.id === pageId));
  navBtns.forEach(b => b.classList.toggle('active', b.dataset.page === pageId));
}
navBtns.forEach(btn => {
  btn.addEventListener('click', () => goTo(btn.dataset.page));
});
document.querySelectorAll('[data-goto]').forEach(btn => {
  btn.addEventListener('click', () => goTo(btn.dataset.goto));
});
document.getElementById('contactForm').addEventListener('submit', async function(e){
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    });
    if (response.ok) {
      document.getElementById('formStatus').textContent = 'Message sent! Goods nayan!';
      form.reset();
    } else {
      document.getElementById('formStatus').textContent = 'Wild ka ha!';
    }
  } catch (error) {
    document.getElementById('formStatus').textContent = 'Message problem, try again.';
  }
});
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');
document.querySelectorAll('.gallery-item img').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxCaption.textContent = img.nextElementSibling ? img.nextElementSibling.textContent : '';
    lightbox.classList.add('active');
  });
});
lightboxClose.addEventListener('click', () => {
  lightbox.classList.remove('active');
});
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove('active');
  }
});
