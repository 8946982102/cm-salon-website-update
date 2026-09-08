window.addEventListener('load',function(){const preloader=document.getElementById('preloader');setTimeout(()=>{preloader.classList.add('hidden');},600);});window.addEventListener('scroll',function(){const scrollTop=window.scrollY;const docHeight=document.documentElement.scrollHeight - window.innerHeight;const progress=(scrollTop / docHeight)* 100;document.getElementById('scrollProgress').style.width=progress + '%';});const header=document.getElementById('header');window.addEventListener('scroll',function(){if(window.scrollY > 80){header.classList.add('scrolled');}else{header.classList.remove('scrolled');}updateActiveNav();});const hamburger=document.getElementById('hamburger');const mobileNav=document.getElementById('mobileNav');const mobileOverlay=document.getElementById('mobileOverlay');function toggleMobileNav(){hamburger.classList.toggle('active');mobileNav.classList.toggle('open');mobileOverlay.classList.toggle('active');document.body.style.overflow=mobileNav.classList.contains('open')? 'hidden':'';}function closeMobileNav(){hamburger.classList.remove('active');mobileNav.classList.remove('open');mobileOverlay.classList.remove('active');document.body.style.overflow='';}mobileOverlay.addEventListener('click',closeMobileNav);document.querySelectorAll('a[href^="#"]').forEach(anchor=>{anchor.addEventListener('click',function(e){e.preventDefault();const target=document.querySelector(this.getAttribute('href'));if(target){const headerOffset=80;const elementPosition=target.getBoundingClientRect().top;const offsetPosition=elementPosition + window.scrollY - headerOffset;window.scrollTo({top:offsetPosition,behavior:'smooth'});}});});function updateActiveNav(){const sections=document.querySelectorAll('section[id]');const navLinks=document.querySelectorAll('.nav a');let currentSection='';sections.forEach(section=>{const sectionTop=section.offsetTop - 100;if(window.scrollY >=sectionTop){currentSection=section.getAttribute('id');}});navLinks.forEach(link=>{link.classList.remove('active');if(link.getAttribute('href')==='#' + currentSection){link.classList.add('active');}});}document.documentElement.classList.add('js');const observerOptions={threshold:0.1,rootMargin:'0px 0px -50px 0px'};const observer=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.style.opacity='1';entry.target.style.transform='translateY(0)';}});},observerOptions);document.querySelectorAll('.service-card,.review-card,.gallery-item,.about-image,.about-content,.contact-info-card,.hours-card,.pricing-table').forEach(el=>{el.style.opacity='0';el.style.transform='translateY(30px)';el.style.transition='opacity 0.8s ease,transform 0.8s ease';observer.observe(el);});if(window.innerWidth > 768){window.addEventListener('scroll',function(){const heroContent=document.querySelector('.hero-content');if(heroContent && window.scrollY < window.innerHeight){const scrollPos=window.scrollY;heroContent.style.transform='translateY(' + scrollPos * 0.3 + 'px)';heroContent.style.opacity=1 -(scrollPos /(window.innerHeight * 0.8));}});}
const mobileNavClose=document.getElementById('mobileNavClose');if(mobileNavClose)mobileNavClose.addEventListener('click',closeMobileNav);document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMobileNav();});document.querySelectorAll('#mobileNav a[href^="#"]').forEach(a=>a.addEventListener('click',closeMobileNav));
const galleryViewAll=document.getElementById('galleryViewAll');
const galleryGrid=document.querySelector('.gallery-grid');
if(galleryViewAll&&galleryGrid){
 galleryViewAll.addEventListener('click',function(){
  const expanded=galleryGrid.classList.toggle('show-all');
  this.innerHTML=expanded?'Show Less <i aria-hidden="true" class="fa-solid fa-arrow-up"></i>':'View All Images <i aria-hidden="true" class="fa-solid fa-arrow-down"></i>';
  if(expanded){setTimeout(()=>document.querySelector('.gallery-extra')?.scrollIntoView({behavior:'smooth',block:'nearest'}),50);}
 });
}

// Appointment form: send booking details to WhatsApp instead of email.
const appointmentForm = document.getElementById('appointmentForm');
if (appointmentForm) {
  appointmentForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(appointmentForm);
    const name = (formData.get('Name') || '').toString().trim();
    const phone = (formData.get('Phone') || '').toString().trim();
    const service = (formData.get('Service') || '').toString().trim();
    const date = (formData.get('Date') || '').toString().trim();
    const time = (formData.get('Time') || '').toString().trim();
    const message = (formData.get('Message') || '').toString().trim();
    const text = `Hi CM Unisex Salon! I would like to book an appointment.\n\nName: ${name}\nPhone: ${phone}\nService: ${service}\nPreferred Date: ${date}\nPreferred Time: ${time}${message ? `\nMessage: ${message}` : ''}`;
    const url = `https://wa.me/917976240303?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener');
  });
}
