const btn=document.querySelector('.menu-btn');
const links=document.querySelector('.nav-links');
if(btn&&links) btn.addEventListener('click',()=>links.classList.toggle('open'));

document.querySelectorAll('[data-contact-form]').forEach(form=>{
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const status=form.querySelector('[data-form-status]');
    if(status) status.textContent='Thanks — your request is ready to be connected to your email/API backend.';
    form.reset();
  });
});
