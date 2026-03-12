  /* ── Page switching ── */
  function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-links button').forEach(b => b.classList.remove('active'));

    document.getElementById('page-' + id).classList.add('active');
    const navBtn = document.getElementById('nav-' + id);
    if (navBtn) navBtn.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ── FAQ accordion ── */
  function toggleFaq(btn) {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  }

  /* ── Mobile menu (placeholder) ── */
  function toggleMenu(btn) {
    // On mobile, toggle a simple nav dropdown
    let menu = document.getElementById('mobile-menu');
    if (!menu) {
      menu = document.createElement('div');
      menu.id = 'mobile-menu';
      menu.style.cssText = 'position:fixed;top:68px;left:0;right:0;background:#fff;border-bottom:1px solid #e8e8e4;padding:12px 20px;z-index:99;display:flex;flex-direction:column;gap:4px;';
      ['home','about','blog','services','faq'].forEach(p => {
        const b = document.createElement('button');
        b.textContent = p.charAt(0).toUpperCase() + p.slice(1).replace('-',' ');
        b.style.cssText = 'text-align:left;padding:12px 16px;border-radius:8px;font-family:inherit;font-size:.9rem;color:#1a1a1a;cursor:pointer;border:none;background:none;';
        b.onmouseenter = () => b.style.background = '#e8f2ed';
        b.onmouseleave = () => b.style.background = 'none';
        b.onclick = () => { showPage(p); menu.remove(); };
        menu.appendChild(b);
      });
      document.body.appendChild(menu);
    } else {
      menu.remove();
    }
  }

function showLink(url){
  window.open(url, "_blank");
}