const translations = {
  en: {
    brandTag: "Wholesale Distribution in Belize",
    navHome: "Home",
    navCatalog: "Catalog",
    navAbout: "About Us",
    navContact: "Contact",
    navCTA: "Request Info",
    heroEyebrow: "Wholesale supply solutions for Belize",
    heroTitle: "Reliable wholesale distribution of imported consumer products.",
    heroText: "Triple A Imports connects Mexican, Central American, Caribbean and selected international products with businesses across Belize.",
    heroBtnCatalog: "Explore Catalog",
    heroBtnContact: "Start a Wholesale Inquiry",
    trustOneTitle: "Wholesale-first",
    trustOneText: "Built for business buyers",
    trustTwoTitle: "Regional supply",
    trustTwoText: "Mexico, Central America & Caribbean",
    trustThreeTitle: "Belize market",
    trustThreeText: "Local commercial distribution",
    heroCardLabel: "Business supply partner",
    miniStatOne: "Belize contact",
    miniStatTwo: "Imported brands",
    heroCardText: "Supporting supermarkets, stores, restaurants and distributors with imported products for commercial supply.",
    benefit1: "Recognized brands",
    benefit2: "Wholesale focus",
    benefit3: "Reliable distribution",
    benefit4: "Commercial supply",
    catalogKicker: "Product Lines",
    catalogTitle: "Wholesale Catalog",
    catalogSubtitle: "Explore a professional sample of product categories and recognized brands for wholesale and commercial clients.",
    catalogButton: "Request wholesale info",
    wholesaleBadge: "Wholesale",
    aboutKicker: "About Triple A Imports",
    aboutTitle: "A Belize-based partner for imported consumer products.",
    aboutTextOne: "Triple A Imports is a Belize-based import and distribution company focused on bringing trusted consumer products to the local market. The company works with Mexican, Central American, Caribbean and selected international products, helping businesses access quality brands through reliable wholesale distribution.",
    aboutTextTwo: "With experience in regional import and distribution, Triple A Imports supports commercial clients with product sourcing, supply coordination and wholesale availability for the Belize market.",
    aboutFloatingLabel: "Supply reach",
    aboutFloatingTitle: "Mexico · Central America · Caribbean",
    leadershipTitle: "Leadership note",
    leadershipText: "The company has been publicly associated with Amir Carrillo, a business figure with experience in import and distribution across the region.",
    why1Title: "Regional sourcing network",
    why1Text: "Access to product lines from neighboring and selected international markets.",
    why2Title: "Wholesale-focused service",
    why2Text: "Designed for volume purchasing and business supply needs.",
    why3Title: "Recognized consumer brands",
    why3Text: "A catalog aligned with in-demand consumer categories.",
    why4Title: "Reliable business supply",
    why4Text: "A practical distribution partner for stores, retailers and food businesses.",
    contactKicker: "Contact",
    contactTitle: "Start a wholesale conversation.",
    contactSubtitle: "Contact us for wholesale inquiries, product sourcing and commercial distribution opportunities.",
    phoneLabel: "Phone",
    emailLabel: "Email",
    addressLabel: "Address",
    hoursLabel: "Business Hours",
    hoursText: "Monday to Friday, 8:00 AM – 5:00 PM",
    formName: "Name *",
    formCountry: "Country *",
    formCompany: "Company",
    formReason: "Reason for contact *",
    formMessage: "Message",
    emailBtn: "Send by Email",
    whatsappBtn: "Send by WhatsApp",
    formNote: "The WhatsApp button opens a pre-filled message using your form information.",
    footerTag: "Wholesale distribution solutions for Belize.",
    footerLinks: "Quick Links",
    footerSocial: "Social",
    footerContact: "Contact",
    copyright: "© 2026 Triple A Imports. All rights reserved.",
    validate: "Please complete your name, country and reason for contact before opening WhatsApp.",
    emailSubject: "Website Inquiry - Triple A Imports",
    placeholderName: "John Doe",
    placeholderCompany: "Company name",
    placeholderMessage: "Tell us what products or quantities you are looking for...",
    selectDefault: "Select an option",
    reasons: ["Wholesale inquiry", "Product availability", "Distribution partnership", "General business inquiry"],
    whatsappMessage: ({ name, country, reason, company, message }) =>
      `Hello, my name is ${name}.\nI am from ${country}.\nMy reason for contacting you is: ${reason}.\nCompany: ${company || "N/A"}.\nMessage: ${message || "N/A"}.`
  },
  es: {
    brandTag: "Distribución Mayorista en Belize",
    navHome: "Inicio",
    navCatalog: "Catálogo",
    navAbout: "Nosotros",
    navContact: "Contacto",
    navCTA: "Solicitar info",
    heroEyebrow: "Soluciones mayoristas para Belize",
    heroTitle: "Distribución mayorista confiable de productos importados.",
    heroText: "Triple A Imports conecta productos mexicanos, centroamericanos, caribeños e internacionales seleccionados con negocios en Belize.",
    heroBtnCatalog: "Ver catálogo",
    heroBtnContact: "Iniciar consulta mayorista",
    trustOneTitle: "Mayoreo primero",
    trustOneText: "Creado para compradores comerciales",
    trustTwoTitle: "Abastecimiento regional",
    trustTwoText: "México, Centroamérica y Caribe",
    trustThreeTitle: "Mercado de Belize",
    trustThreeText: "Distribución comercial local",
    heroCardLabel: "Aliado de abastecimiento",
    miniStatOne: "Contacto en Belize",
    miniStatTwo: "Marcas importadas",
    heroCardText: "Apoyando a supermercados, tiendas, restaurantes y distribuidores con productos importados para abastecimiento comercial.",
    benefit1: "Marcas reconocidas",
    benefit2: "Enfoque mayorista",
    benefit3: "Distribución confiable",
    benefit4: "Abastecimiento comercial",
    catalogKicker: "Líneas de producto",
    catalogTitle: "Catálogo Mayorista",
    catalogSubtitle: "Explora una muestra profesional de categorías y marcas para clientes mayoristas y comerciales.",
    catalogButton: "Solicitar por mayoreo",
    wholesaleBadge: "Mayoreo",
    aboutKicker: "Sobre Triple A Imports",
    aboutTitle: "Un aliado en Belize para productos de consumo importados.",
    aboutTextOne: "Triple A Imports es una empresa ubicada en Belize enfocada en la importación y distribución de productos de consumo. La empresa trabaja con productos mexicanos, centroamericanos, caribeños e internacionales seleccionados, ayudando a negocios a acceder a marcas de calidad mediante distribución mayorista confiable.",
    aboutTextTwo: "Con experiencia en importación y distribución regional, Triple A Imports apoya a clientes comerciales con abastecimiento, coordinación de suministro y disponibilidad mayorista para el mercado de Belize.",
    aboutFloatingLabel: "Alcance de suministro",
    aboutFloatingTitle: "México · Centroamérica · Caribe",
    leadershipTitle: "Nota de dirección",
    leadershipText: "La empresa ha sido asociada públicamente con Amir Carrillo, una figura empresarial con experiencia en importación y distribución en la región.",
    why1Title: "Red de abastecimiento regional",
    why1Text: "Acceso a líneas de productos de mercados cercanos e internacionales seleccionados.",
    why2Title: "Servicio enfocado en mayoreo",
    why2Text: "Diseñado para compras por volumen y necesidades de suministro empresarial.",
    why3Title: "Marcas de consumo reconocidas",
    why3Text: "Un catálogo alineado con categorías de alta demanda.",
    why4Title: "Abastecimiento confiable",
    why4Text: "Un aliado práctico para tiendas, comercios y negocios de alimentos.",
    contactKicker: "Contacto",
    contactTitle: "Inicia una conversación mayorista.",
    contactSubtitle: "Contáctanos para consultas mayoristas, abastecimiento de productos y oportunidades de distribución comercial.",
    phoneLabel: "Teléfono",
    emailLabel: "Correo",
    addressLabel: "Dirección",
    hoursLabel: "Horario",
    hoursText: "Lunes a viernes, 8:00 AM – 5:00 PM",
    formName: "Nombre *",
    formCountry: "País *",
    formCompany: "Empresa",
    formReason: "Razón de contacto *",
    formMessage: "Mensaje",
    emailBtn: "Enviar por correo",
    whatsappBtn: "Enviar por WhatsApp",
    formNote: "El botón de WhatsApp abre un mensaje prellenado usando la información del formulario.",
    footerTag: "Soluciones de distribución mayorista para Belize.",
    footerLinks: "Enlaces rápidos",
    footerSocial: "Redes",
    footerContact: "Contacto",
    copyright: "© 2026 Triple A Imports. Todos los derechos reservados.",
    validate: "Por favor completa tu nombre, país y razón de contacto antes de abrir WhatsApp.",
    emailSubject: "Consulta desde sitio web - Triple A Imports",
    placeholderName: "Juan Pérez",
    placeholderCompany: "Nombre de la empresa",
    placeholderMessage: "Cuéntanos qué productos o cantidades estás buscando...",
    selectDefault: "Selecciona una opción",
    reasons: ["Consulta mayorista", "Disponibilidad de productos", "Alianza de distribución", "Consulta general de negocios"],
    whatsappMessage: ({ name, country, reason, company, message }) =>
      `Hola, mi nombre es ${name}.\nSoy de ${country}.\nLa razón de mi contacto es: ${reason}.\nEmpresa: ${company || "N/A"}.\nMensaje: ${message || "N/A"}.`
  }
};

const catalogProducts = [
  {
    name: "Takis",
    desc: { en: "High-demand snack products for stores and wholesale buyers.", es: "Botanas de alta demanda para tiendas y compradores mayoristas." },
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Pronto",
    desc: { en: "Consumer products for everyday commercial supply.", es: "Productos de consumo para abastecimiento comercial diario." },
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Clemente Jacques",
    desc: { en: "Mexican pantry goods, sauces and canned products.", es: "Productos mexicanos de despensa, salsas y alimentos enlatados." },
    image: "https://images.unsplash.com/photo-1584278858536-52532423b9ea?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Bocadeli",
    desc: { en: "Snack products for supermarkets, stores and distributors.", es: "Snacks para supermercados, tiendas y distribuidores." },
    image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Boom Energy Drink",
    desc: { en: "Energy beverages for commercial distribution channels.", es: "Bebidas energéticas para canales de distribución comercial." },
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Tru Shake",
    desc: { en: "Ready-to-drink beverages for wholesale supply.", es: "Bebidas listas para tomar para suministro mayorista." },
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Tru Juice",
    desc: { en: "Juice products for retail and commercial buyers.", es: "Jugos para compradores comerciales y canales de venta." },
    image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: "Bigga",
    desc: { en: "Caribbean beverage products for the Belize market.", es: "Bebidas caribeñas para el mercado de Belize." },
    image: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: { en: "Preserved Meats", es: "Carnes Conservadas" },
    desc: { en: "Packaged and preserved meat products for commercial supply.", es: "Productos cárnicos empacados y conservados para suministro comercial." },
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: { en: "Pantry Goods", es: "Productos de Despensa" },
    desc: { en: "Everyday food essentials for supermarkets and convenience stores.", es: "Alimentos esenciales para supermercados y tiendas de conveniencia." },
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: { en: "Sauces & Condiments", es: "Salsas y Condimentos" },
    desc: { en: "Regional sauces, condiments and cooking products.", es: "Salsas, condimentos y productos regionales para cocina." },
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=85"
  },
  {
    name: { en: "Packaged Foods", es: "Alimentos Empacados" },
    desc: { en: "Imported packaged food products for wholesale buyers.", es: "Alimentos empacados importados para compradores mayoristas." },
    image: "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?auto=format&fit=crop&w=900&q=85"
  }
];

let currentLang = "en";

const header = document.getElementById("siteHeader");
const langEN = document.getElementById("langEN");
const langES = document.getElementById("langES");
const menuToggle = document.getElementById("menuToggle");
const mobilePanel = document.getElementById("mobilePanel");
const catalogGrid = document.getElementById("catalogGrid");
const reasonSelect = document.getElementById("reason");

function getText(value) {
  if (typeof value === "string") return value;
  return value[currentLang] || value.en;
}

function renderCatalog() {
  catalogGrid.innerHTML = catalogProducts.map((product, index) => `
    <article class="product-card reveal delay-${index % 4}">
      <img src="${product.image}" alt="${getText(product.name)}" loading="lazy" />
      <span class="product-badge">${translations[currentLang].wholesaleBadge}</span>
      <div class="product-content">
        <h3>${getText(product.name)}</h3>
        <p>${product.desc[currentLang]}</p>
        <a href="#contact" class="btn btn-light">${translations[currentLang].catalogButton}</a>
      </div>
    </article>
  `).join("");
  observeRevealElements();
}

function populateReasonOptions() {
  reasonSelect.innerHTML = `<option value="">${translations[currentLang].selectDefault}</option>` +
    translations[currentLang].reasons.map(reason => `<option value="${reason}">${reason}</option>`).join("");
}

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    if (translations[lang][key]) element.textContent = translations[lang][key];
  });

  document.getElementById("name").placeholder = translations[lang].placeholderName;
  document.getElementById("country").placeholder = "Belize";
  document.getElementById("company").placeholder = translations[lang].placeholderCompany;
  document.getElementById("message").placeholder = translations[lang].placeholderMessage;

  langEN.classList.toggle("active", lang === "en");
  langES.classList.toggle("active", lang === "es");

  populateReasonOptions();
  renderCatalog();
}

function updateHeader() {
  header.classList.toggle("scrolled", window.scrollY > 14);
}

function observeRevealElements() {
  const revealElements = document.querySelectorAll(".reveal:not(.observed)");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.13, rootMargin: "0px 0px -30px 0px" });

  revealElements.forEach(element => {
    element.classList.add("observed");
    observer.observe(element);
  });
}

function getFormData() {
  return {
    name: document.getElementById("name").value.trim(),
    country: document.getElementById("country").value.trim(),
    reason: document.getElementById("reason").value.trim(),
    company: document.getElementById("company").value.trim(),
    message: document.getElementById("message").value.trim()
  };
}

function validateForm(data) {
  return data.name && data.country && data.reason;
}

function openWhatsApp() {
  const data = getFormData();
  if (!validateForm(data)) {
    alert(translations[currentLang].validate);
    return;
  }

  const message = translations[currentLang].whatsappMessage(data);
  window.open(`https://wa.me/5013220520?text=${encodeURIComponent(message)}`, "_blank");
}

function openEmail() {
  const data = getFormData();
  const body = currentLang === "es"
    ? `Nombre: ${data.name}\nPaís: ${data.country}\nRazón de contacto: ${data.reason}\nEmpresa: ${data.company}\nMensaje: ${data.message}`
    : `Name: ${data.name}\nCountry: ${data.country}\nReason for contact: ${data.reason}\nCompany: ${data.company}\nMessage: ${data.message}`;

  window.location.href = `mailto:tripleaimports@yahoo.com?subject=${encodeURIComponent(translations[currentLang].emailSubject)}&body=${encodeURIComponent(body)}`;
}

langEN.addEventListener("click", () => setLanguage("en"));
langES.addEventListener("click", () => setLanguage("es"));
window.addEventListener("scroll", updateHeader);

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  mobilePanel.classList.toggle("open");
  document.body.classList.toggle("menu-open");
});

mobilePanel.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    mobilePanel.classList.remove("open");
    document.body.classList.remove("menu-open");
  });
});

document.getElementById("whatsappBtn").addEventListener("click", openWhatsApp);
document.getElementById("emailBtn").addEventListener("click", openEmail);

updateHeader();
setLanguage("en");
observeRevealElements();
