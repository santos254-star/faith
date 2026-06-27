const PHONE_NUMBER = '0740229030';

function getWhatsAppUrl(message){
  const digits = PHONE_NUMBER.replace(/\D/g, '');
  const normalized = digits.startsWith('0') ? `254${digits.slice(1)}` : digits;
  const text = encodeURIComponent(message || 'Hello, I would like to order Pishori rice');
  return `https://api.whatsapp.com/send?phone=${normalized}&text=${text}`;
}

document.addEventListener('DOMContentLoaded', ()=>{
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');
  navToggle && navToggle.addEventListener('click', ()=>{
    mainNav.classList.toggle('open');
  });
  document.querySelectorAll('#main-nav a').forEach(link=>{
    link.addEventListener('click', ()=>{
      mainNav.classList.remove('open');
    });
  });

  function openWhatsApp(message){
    const url = getWhatsAppUrl(message);
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if(!newWindow){
      window.location.href = url;
    }
  }

  document.querySelectorAll('.buy-now').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const product = btn.dataset.product || 'Pishori rice';
      openWhatsApp(`Hi, I would like to buy: ${product}`);
    });
  });

  document.querySelectorAll('.enquire-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      document.getElementById('enquire')?.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

  const form = document.getElementById('enquire-form');
  const status = document.getElementById('form-status');
  if(form){
    form.addEventListener('submit',(e)=>{
      e.preventDefault();
      const data = new FormData(form);
      const quantity = data.get('quantity') || '';
      const location = data.get('location') || '';
      const contact = data.get('contact') || '';
      const message = `Order request\nQuantity: ${quantity}kg\nLocation: ${location}\nContact: ${contact}`;
      if(status){ status.textContent = 'Opening WhatsApp now...'; }
      openWhatsApp(message);
    });
  }
});
