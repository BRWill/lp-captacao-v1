/* ============================================================
   LP Valoreasy — Interações + RD Station
   ============================================================ */

/* --- Configuração --- */
const CONFIG = {
  whatsapp: '[INSERIR: NUMERO_WHATSAPP]', // ex: 5511999999999
  rdToken:  '[INSERIR: RD_TOKEN_PUBLICO]', // Marketing → Configurações → API → Token público
  rdConversionId: 'lp-departamento-financeiro',
  utmSource: 'lp',
  utmMedium: 'formulario',
  utmCampaign: 'departamento-financeiro',
};

/* --- Sticky CTA mobile --- */
(function stickyCtaMobile() {
  const bar = document.getElementById('mobile-cta-bar');
  if (!bar) return;
  const hero = document.getElementById('hero');

  const observer = new IntersectionObserver(([entry]) => {
    bar.classList.toggle('visible', !entry.isIntersecting);
  }, { threshold: 0.1 });

  if (hero) observer.observe(hero);
})();

/* --- Scroll suave para âncoras internas --- */
document.addEventListener('click', function (e) {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const target = document.querySelector(a.getAttribute('href'));
  if (!target) return;
  e.preventDefault();
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

/* --- FAQ accordion --- */
document.addEventListener('click', function (e) {
  const btn = e.target.closest('.faq-question');
  if (!btn) return;
  const item = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
});

/* --- WhatsApp com rastreamento --- */
function abrirWhatsApp(origem) {
  const numero = CONFIG.whatsapp.replace('[INSERIR: NUMERO_WHATSAPP]', '');
  if (!numero) { console.warn('WhatsApp não configurado.'); return; }

  const texto = encodeURIComponent('Olá! Vi a LP da Valoreasy e quero saber mais sobre o Departamento Financeiro.');
  const url = `https://wa.me/${numero}?text=${texto}`;

  // Dispara evento de conversão no RD Station antes de abrir WhatsApp
  dispararConversaoRD({
    conversion_identifier: 'whatsapp-' + CONFIG.rdConversionId,
    origem,
    utm_source: CONFIG.utmSource,
    utm_medium: 'whatsapp',
    utm_campaign: CONFIG.utmCampaign,
  });

  window.open(url, '_blank');
}

/* --- Formulário principal --- */
const form = document.getElementById('lp-form');
if (form) {
  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const btn = form.querySelector('button[type="submit"]');
    const msgSucesso = document.getElementById('form-sucesso');
    const msgErro = document.getElementById('form-erro');

    btn.disabled = true;
    btn.textContent = 'Enviando…';
    if (msgSucesso) msgSucesso.hidden = true;
    if (msgErro) msgErro.hidden = true;

    const dados = {
      name:         form.nome.value.trim(),
      email:        form.email.value.trim(),
      personal_phone: form.telefone.value.trim(),
      company_name: form.empresa?.value.trim() || '',
      cf_faturamento: form.faturamento?.value || '',
    };

    const ok = await dispararConversaoRD({
      conversion_identifier: CONFIG.rdConversionId,
      ...dados,
      utm_source:   CONFIG.utmSource,
      utm_medium:   CONFIG.utmMedium,
      utm_campaign: CONFIG.utmCampaign,
    });

    if (ok) {
      form.hidden = true;
      if (msgSucesso) msgSucesso.hidden = false;
    } else {
      btn.disabled = false;
      btn.textContent = 'Quero conhecer meu departamento →';
      if (msgErro) msgErro.hidden = false;
    }
  });
}

/* --- Envio para RD Station Events API --- */
async function dispararConversaoRD(payload) {
  const token = CONFIG.rdToken;
  if (token.startsWith('[INSERIR')) {
    console.warn('RD Station token não configurado. Dados que seriam enviados:', payload);
    return true; // Em dev, simula sucesso
  }

  try {
    const res = await fetch(`https://api.rd.services/platform/conversions?api_key=${token}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ event_type: 'CONVERSION', event_family: 'CDP', payload }),
    });
    return res.ok;
  } catch (err) {
    console.error('Erro ao enviar para RD Station:', err);
    return false;
  }
}

/* --- Expõe abrirWhatsApp globalmente (usado inline nos botões) --- */
window.abrirWhatsApp = abrirWhatsApp;
