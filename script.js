const stickyHeader = document.getElementById("stickyHeader");
    let lastScrollTop = 0;
    window.addEventListener("scroll", function () {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > 300) { 
            if (scrollTop > lastScrollTop) {
                stickyHeader.classList.remove("visible");
            } else {
                stickyHeader.classList.add("visible");
            }
        } else {
            stickyHeader.classList.remove("visible");
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
        const images = [
            "./assets/c1.png",
            "./assets/c2.png",
            "./assets/c3.png",
            "./assets/c1.png",
            "./assets/c2.png"
        ];
        let currentIndex = 0;
        function setImage(index) {
            currentIndex = index;
            document.getElementById("mainImage").src = images[currentIndex];
        }
        function prevImage() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            setImage(currentIndex);
        }
        function nextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            setImage(currentIndex);
        }
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
    const answer = question.nextElementSibling;
    const arrow = question.querySelector('.arrow');
    let isClicked = false;
    question.addEventListener('mouseenter', () => {
        if (!question.classList.contains('active')) {
            answer.classList.add('hover-show');
        }
    });
    question.addEventListener('mouseleave', () => {
        if (!question.classList.contains('active')) {
            answer.classList.remove('hover-show');
        }
    });
    question.addEventListener('click', () => {
        faqQuestions.forEach(item => {
            if (item !== question) {
                item.classList.remove('active');
                item.nextElementSibling.classList.remove('show', 'hover-show');
            }
        });
        question.classList.toggle('active');
        answer.classList.remove('hover-show'); 
        if (question.classList.contains('active')) {
            answer.classList.add('show');
        } else {
            answer.classList.remove('show');
        }
    });
});
        function toggleFAQ(element) {
            const answer = element.nextElementSibling;
            const icon = element.querySelector('span:last-child');
            if (answer.classList.contains('show')) {
                answer.classList.remove('show');
                icon.textContent = '+';
            } else {
                document.querySelectorAll('.faq-answer.show').forEach(item => {
                    item.classList.remove('show');
                    item.previousElementSibling.querySelector('span:last-child').textContent = '+';
                });
                answer.classList.add('show');
                icon.textContent = '−';
            }
        }
        let currentSlide = 0;
        const carousel = document.getElementById('applicationsCarousel');
        const cards = carousel.children;
        const cardWidth = 320; 
        function moveCarousel(direction) {
            const maxSlides = cards.length - Math.floor(carousel.parentElement.offsetWidth / cardWidth);
            currentSlide += direction;
            if (currentSlide < 0) currentSlide = 0;
            if (currentSlide > maxSlides) currentSlide = maxSlides;
            carousel.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
        }
        document.getElementById('scrollLeft').addEventListener('click', () => moveCarousel(-1));
document.getElementById('scrollRight').addEventListener('click', () => moveCarousel(1));
const steps = [
    {
      title: "High-Grade Raw Material Selection",
      text: "Vacuum sizing baths ensure precise outer diameter while internal pressure maintains perfect roundness and wall thickness uniformity.",
      points: ["PE100 grade material", "Optimal molecular weight distribution"],
      image: "./assets/app2.png"
    },
    {
      title: "Precision Extrusion Process",
      text: "Extruders apply heat and pressure to shape the raw material into durable, high-strength pipes.",
      points: ["Uniform melt temperature", "High extrusion speed"],
      image: "./assets/app3.png"
    },
    {
      title: "Efficient Cooling System",
      text: "The pipes are rapidly cooled to retain shape and strength using vacuum calibration and water spray tanks.",
      points: ["Quick solidification", "Prevents deformation"],
      image: "./assets/app3.png"
    },
    {
      title: "Accurate Sizing",
      text: "Pipes pass through precise sizing sleeves ensuring dimensional accuracy and consistency.",
      points: ["Exact diameter control", "Smooth pipe surface"],
      image: "./assets/app3.png"
    },
    {
      title: "Stringent Quality Control",
      text: "Every batch undergoes rigorous testing to ensure compliance with international standards.",
      points: ["Hydrostatic pressure test", "Dimensional checks"],
      image: "./assets/app4.png"
    },
    {
      title: "Advanced Welding Integration",
      text: "Pipes are fused using high-frequency welding for strong and leak-proof joints.",
      points: ["Leak-proof joints", "Fast welding process"],
      image: "./assets/app2.png"
    },
    {
      title: "Packaging & Dispatch",
      text: "Pipes are bundled and wrapped securely for safe transportation.",
      points: ["Eco-friendly packaging", "Efficient loading process"],
      image: "./assets/app1.png"
    }
  ];
  const tabContainer = document.getElementById("tabContainer");
  const processContent = document.getElementById("processContent");
  let activeIndex = 0;
  function renderTabs() {
    tabContainer.innerHTML = "";
    steps.forEach((step, i) => {
      const btn = document.createElement("button");
      btn.className = "tab-btn" + (i === activeIndex ? " active" : "");
      if (window.innerWidth > 768 || i === activeIndex) {
        btn.classList.add("visible");
      }
      btn.innerText = step.title.split(" ")[0];
      btn.onclick = () => {
        activeIndex = i;
        renderTabs();
        renderContent();
      };
      tabContainer.appendChild(btn);
    });
  }
  function renderContent() {
    const step = steps[activeIndex];
    processContent.innerHTML = `
      <div>
        <h3 class="process-head">${step.title}</h3>
        <p class="process-text">${step.text}</p>
        <ul class="process-points">
          ${step.points.map(p => `<li>${p}</li>`).join("")}
        </ul>
      </div>
      <div class="process-image">
        <img src="${step.image}" alt="${step.title}">
      </div>
    `;
  }
  function showPrevTab() {
    if (activeIndex > 0) {
      activeIndex--;
      renderTabs();
      renderContent();
    }
  }
  function showNextTab() {
    if (activeIndex < steps.length - 1) {
      activeIndex++;
      renderTabs();
      renderContent();
    }
  }
  window.addEventListener("resize", renderTabs);
  renderTabs();
  renderContent();
function setLineSpan() {
  const container = document.querySelector('.process-tabs');
  const tabs = container.querySelectorAll('.tab-btn');
  if (tabs.length >= 2) {
    const first = tabs[0].offsetLeft + tabs[0].offsetWidth / 2;
    const last = tabs[tabs.length - 1].offsetLeft + tabs[tabs.length - 1].offsetWidth / 2;
    container.style.setProperty('--line-start', `${container.offsetWidth - last}px`);
    container.style.setProperty('--line-end', `${first}px`);
  }
}
window.addEventListener('resize', setLineSpan);
window.addEventListener('load', setLineSpan);
  const grid = document.getElementById('testimonialsGrid');
  let isPaused = false;
  grid.addEventListener('click', () => {
    isPaused = !isPaused;
    grid.style.animationPlayState = isPaused ? 'paused' : 'running';
  });
const mainImg = document.getElementById("mainImage");
const zoomLens = document.getElementById("zoomLens");
const zoomPreview = document.getElementById("zoomPreview");
mainImg.addEventListener("mouseenter", () => {
  zoomLens.style.display = "block";
  zoomPreview.style.display = "block";
  zoomPreview.style.backgroundImage = `url('${mainImg.src}')`;
});
mainImg.addEventListener("mouseleave", () => {
  zoomLens.style.display = "none";
  zoomPreview.style.display = "none";
});
mainImg.addEventListener("mousemove", function (e) {
  const bounds = mainImg.getBoundingClientRect();
  const lensWidth = zoomLens.offsetWidth;
  const lensHeight = zoomLens.offsetHeight;
  const previewSize = zoomPreview.offsetWidth;
  const cursorX = e.clientX - bounds.left;
  const cursorY = e.clientY - bounds.top;
  let lensX = cursorX - lensWidth / 2;
  let lensY = cursorY - lensHeight / 2;
  lensX = Math.max(0, Math.min(lensX, bounds.width - lensWidth));
  lensY = Math.max(0, Math.min(lensY, bounds.height - lensHeight));
  zoomLens.style.left = `${lensX}px`;
  zoomLens.style.top = `${lensY}px`;
  const percentX = lensX / bounds.width;
  const percentY = lensY / bounds.height;
  let previewX = cursorX - previewSize / 2 ;
  let previewY = cursorY - previewSize / 2 - 100;
  previewX = Math.max(0, Math.min(previewX, bounds.width - previewSize));
  previewY = Math.max(0, Math.min(previewY, bounds.height - previewSize));
  zoomPreview.style.left = `${previewX}px`;
  zoomPreview.style.top = `${previewY}px`;
  zoomPreview.style.backgroundPosition = `${percentX * 100}% ${percentY * 100}%`;
});
document.querySelectorAll('.submit-btn').forEach(btn => {
  btn.addEventListener('click', function (e) {
    if (btn.closest('.email-signup')) {
      document.getElementById('catalogueModal').classList.add('active');
      document.body.style.overflow = 'hidden'; 
    }
  });
});
function closeModal() {
  document.getElementById('catalogueModal').classList.remove('active');
  document.body.style.overflow = '';
}
document.getElementById('catalogueModal').addEventListener('click', function(e){
  if (e.target === this) closeModal();
});
document.addEventListener('keydown', function(e){
  if (e.key === 'Escape') closeModal();
});
const modalForm = document.querySelector('.modal-form');
modalForm.addEventListener('submit', function(event) {
  event.preventDefault(); 
  closeModal(); 
  alert('Brochure will be sent to your email.'); 
  modalForm.reset(); 
});
function showModal() {
  document.getElementById('catalogueModal').classList.add('active');
  document.body.style.overflow = 'hidden'; 
}
function closeModal() {
  document.getElementById('catalogueModal').classList.remove('active');
  document.body.style.overflow = '';
}
document.querySelectorAll('.email-signup .submit-btn').forEach(btn => {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    showModal();
  });
});
document.querySelectorAll('button, a, .quote-btn').forEach(el => {
  if (el.textContent && el.textContent.trim().toLowerCase() === 'request a quote') {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      showModal();
    });
  }
});
document.querySelectorAll('.email-signup .submit-btn').forEach(btn => {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    showModal();
  });
});
document.querySelectorAll('button, a, .quote-btn').forEach(el => {
  if (el.textContent && el.textContent.trim().toLowerCase() === 'request a quote') {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      showModal();
    });
  }
});
function showModal() {
  document.getElementById('catalogueModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  document.getElementById('catalogueModal').classList.remove('active');
  document.body.style.overflow = '';
}
document.getElementById('catalogueModal').addEventListener('click', function(e){
  if (e.target === this) closeModal();
});
document.addEventListener('keydown', function(e){
  if (e.key === 'Escape') closeModal();
});
document.getElementById('catalogueModalForm').addEventListener('submit', function(event) {
  event.preventDefault();
  closeModal();
  alert('Brochure will be sent to your email.');
  this.reset();
});
const SCROLL_AMOUNT = 320;
scrollLeftBtn.addEventListener('click', function(e) {
  e.preventDefault();
  carouselTrack.scrollBy({ left: -SCROLL_AMOUNT, behavior: 'smooth' });
});
scrollRightBtn.addEventListener('click', function(e) {
  e.preventDefault();
  carouselTrack.scrollBy({ left: SCROLL_AMOUNT, behavior: 'smooth' });
});
const carouselTrack = document.getElementById('applicationsCarousel');
const scrollLeftBtn = document.getElementById('scrollLeft');
const scrollRightBtn = document.getElementById('scrollRight');
function getScrollAmount() {
  const firstCard = carouselTrack.querySelector('.application-card');
  if (!firstCard) return 300; 
  const style = window.getComputedStyle(firstCard);
  const width = firstCard.offsetWidth;
  const gap = parseInt(style.marginRight) || 20; 
  return width + gap;
}
scrollLeftBtn.addEventListener('click', function(e) {
  e.preventDefault();
  const scrollAmount = getScrollAmount();
  carouselTrack.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});
scrollRightBtn.addEventListener('click', function(e) {
  e.preventDefault();
  const scrollAmount = getScrollAmount();
  carouselTrack.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});