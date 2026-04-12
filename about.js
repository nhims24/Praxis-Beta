/*script files*/
  /* ── Page switching ── */
  function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const target = document.getElementById('page-' + id);
    if (target) {
      target.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    const menu = document.getElementById('mobile-menu');
    if (menu) menu.remove();
  }

  /* ── Nav close / open toggle ── */
  function toggleClose(btn) {
    const left = document.querySelector('.split-left');
    const isHidden = left && left.style.opacity === '0';
    if (left) {
      left.style.opacity       = isHidden ? '1' : '0';
      left.style.pointerEvents = isHidden ? 'auto' : 'none';
      left.style.transition    = 'opacity 0.3s';
    }
    btn.textContent = isHidden ? '✕' : '☰';
  }

  /* ── FAQ accordion ── */
  function toggleFaq(btn) {
    const item   = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  }

  /* ── Mobile menu ── */
  function toggleMenu(btn) {
    let menu = document.getElementById('mobile-menu');
    if (!menu) {
      menu = document.createElement('div');
      menu.id = 'mobile-menu';
      menu.style.cssText = 'position:fixed;top:64px;left:0;right:0;background:#fff;border-bottom:1px solid #e8e8e4;padding:12px 20px;z-index:99;display:flex;flex-direction:column;gap:4px;';
      [
        { label: 'Home',            page: 'home'     },
        { label: 'About Us',        page: 'about'    },
        { label: 'Learning Hub',    page: 'blog'     },
        { label: 'Services',        page: 'services' },
        { label: 'Community / FAQ', page: 'faq'      },
      ].forEach(({ label, page }) => {
        const b = document.createElement('button');
        b.textContent = label;
        b.style.cssText = 'text-align:left;padding:12px 16px;border-radius:8px;font-family:inherit;font-size:.9rem;color:#1a1a1a;cursor:pointer;border:none;background:none;';
        b.onmouseenter = () => b.style.background = '#e8f2ed';
        b.onmouseleave = () => b.style.background = 'none';
        b.onclick = () => { showPage(page); menu.remove(); };
        menu.appendChild(b);
      });
      document.body.appendChild(menu);
    } else {
      menu.remove();
    }
  }

  /* ── Avatar bubble parallax ── */
  document.addEventListener('DOMContentLoaded', () => {
    const bubble = document.querySelector('.avatar-bubble');
    const left   = document.querySelector('.split-left');
    if (!bubble || !left) return;
    left.addEventListener('mousemove', (e) => {
      const rect = left.getBoundingClientRect();
      const dx = ((e.clientX - rect.left)  / rect.width  - 0.5) * 14;
      const dy = ((e.clientY - rect.top)   / rect.height - 0.5) * 14;
      bubble.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
    });
    left.addEventListener('mouseleave', () => {
      bubble.style.transform = 'translate(-50%, -50%)';
    });
  });

  /* ── Open external links ── */
  function showLink(url) {
    window.open(url, '_blank');
  }
