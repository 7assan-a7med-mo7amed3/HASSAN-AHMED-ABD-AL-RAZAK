const nav = document.querySelector(".nav");
function nav_btn() {
  nav.classList.toggle("active");
}

projects.forEach(function (project) {
  const container_project = document.querySelector(".container-project");

  container_project.innerHTML += `

   <div class="project-card" style="--i-:${project.id}">
  <div class="project-img">
    <a href="${project.link}" target="_blank">
      <img src="${project.img}" alt="">
    </a>
  </div>
  <div class="project-info">
    
    <a href="${project.link}" target="_blank" data-lang="hero" class="link-btn">see more</a>
  </div>
</div>
    `;
});
const skillsSection = document.querySelector(".skills-bar");
const upfooter = document.querySelector("footer");
const upfooterin = document.querySelector(".up-footer h2");
const midfooter = document.querySelector(".mid-footer");

const upfooteron = document.querySelector(".up-footer a");

const projects2 = document.querySelector(".projects");
const contact = document.querySelector(".contact");
const about = document.querySelector(".about");

const container = document.querySelector(".contact .container");

const project_card = document.querySelectorAll(".project-card");
const aboutimg = document.querySelector(".about .container");
const position = document.querySelector(".out-position");

const skillsSection2 = document.querySelector(".img-skill");
const skillimg = document.querySelector(".img-skill img");
const skillBars = document.querySelectorAll(".bar");
const titles = document.querySelectorAll(".title");

window.onscroll = function () {
  if (window.scrollY >= skillsSection.offsetTop - 300) {
    skillBars.forEach((bar) => {
      bar.classList.add("animate");
    });
    skillsSection.classList.add("side2");
  }
  if (window.scrollY >= skillsSection2.offsetTop - 300) {
    skillimg.classList.add("side");
  }
  if (window.scrollY >= upfooter.offsetTop - 300) {
    upfooteron.classList.add("side2");
    upfooterin.classList.add("side");
    midfooter.classList.add("side");
  }
  if (window.scrollY >= about.offsetTop - 300) {
    aboutimg.classList.add("side2");
  }
  if (window.scrollY >= contact.offsetTop - 300) {
    container.classList.add("side2");
    position.classList.add("side");
  }
  titles.forEach((title) => {
    const h2 = title.querySelector("h2"); // جيب h2 الخاص بالعنوان ده بس
    if (window.scrollY >= title.offsetTop - 400) {
      h2.classList.add("side");
    }
  });
  if (window.scrollY >= projects2.offsetTop - 300) {
    project_card.forEach((p) => {
      p.classList.add("side");
    });
  }
};
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // يمنع الريلود
  const formData = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: { Accept: "application/json" },
  })
    .then((response) => {
      if (response.ok) {
        alert("تم إرسال رسالتك بنجاح ✅");
        form.reset(); // دي اللي بتمسح البيانات
      } else {
        alert("حصل خطأ، حاول تاني ❌");
      }
    })
    .catch((error) => {
      alert("في مشكلة في الاتصال ❌");
    });
});

const translations = {
  en: {
    // navbar
    link_home: "Home",
    link_projects: "Projects",
    link_about: "About",
    link_skill: "Skills",
    link_contact: "Contact",

    // hero
    hero_hi: "Hi there, it's me",
    hero_name: "Hassan Abd Al Razak",
    hero_job: "I'm a frontend developer",
    hero_desc: "Let's work together, don't wait",
    hero_hire: "Hire me",

    // sections titles
    title_projects: "My Projects",
    title_about: "About Us",
    title_skills: "Our Skills",
    title_contact: "Get in Touch",

    // about
    about_fullname: "Hassan Ahmed Mohamed Abd Al Razak",
    about_text:
      "I'm a frontend developer, I'm from Egypt. I started learning frontend 5 years ago. I'm 16 years old. I'll try my best for you.",

    // skills (labels)
    skill_html: "HTML",
    skill_css: "CSS",
    skill_js: "JavaScript",

    // contact form
    form_name: "Name",
    form_email: "Email",
    form_message: "Tell us something",
    form_submit: "Submit",

    // contact info
    phone_title: "Phone number:",
    follow_us: "Follow us",

    // footer
    footer_cta: "Let's work together",
    footer_hire: "Hire me",
    footer_links: "Fast links",
    footer_rights: "© All rights reserved",
    footer_coded: "Designed & coded by Hassan Ahmed",

    hero: "see more",

    hero_name: "hassan abd al razak",
    hero_ork: "i`m frontend developer",
    hero_me: "hi there it`s me",
  },

  ar: {
    // navbar
    link_home: "الرئيسية",
    link_projects: "المشاريع",
    link_about: "من نحن",
    link_skill: "المهارات",
    link_contact: "تواصل",
    hero_hallo: "اهلا يا هذا انه انا",
    // hero
    hero: "معلومات اكتر",
    hero_me: "اهلا يا هذا انه انا",
    hero_name: "حسن عبدالرزاق",
    hero_ork: "انا مطور واجهة امامية",
    hero_desc: "لنبدأ العمل معاً، لا تنتظر",
    hero_hire: "وظفني",

    // sections titles
    title_projects: "مشاريعي",
    title_about: "معلومات عني",
    title_skills: "مهاراتنا",
    title_contact: "ابقى على تواصل",

    // about
    about_fullname: "حسن أحمد محمد عبد الرازق",
    about_text:
      "أنا مطور واجهات أمامية من مصر. بدأت تعلم البرمجة منذ 5 سنوات. عمري 16 عاماً. سأبذل قصارى جهدي من أجلك.",

    // skills (labels)
    skill_html: "إتش تي إم إل",
    skill_css: "سي إس إس",
    skill_js: "جافاسكريبت",

    // contact form
    form_name: "الاسم",
    form_email: "البريد الإلكتروني",
    form_message: "أخبرنا شيئاً",
    form_submit: "إرسال",

    // contact info
    phone_title: "رقم الهاتف:",
    follow_us: "تابعنا",

    // footer
    footer_cta: "لنبدأ العمل معاً",
    footer_hire: "وظفني",
    footer_links: "روابط سريعة",
    footer_rights: "© جميع الحقوق محفوظة",
    footer_coded: "تم التصميم والبرمجة بواسطة حسن أحمد",
  },
};
const language_selector = document.querySelector("select");

language_selector.addEventListener("change", (event) => {
  languageset(event.target.value);
  localStorage.setItem("langu", event.target.value);
});

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("langu") || "en"; // لو مفيش قيمة مخزنة يبدأ بـ English
  languageset(savedLang);
  language_selector.value = savedLang; // هنا بنرجع الـ select للغة المختارة
});

function languageset(lang) {
  const elements = document.querySelectorAll("[data-lang]");
  elements.forEach((element) => {
    const keylang = element.getAttribute("data-lang");
    if (translations[lang] && translations[lang][keylang]) {
      element.textContent = translations[lang][keylang];
    }
  });

  if (lang === "ar") {
    document.dir = "rtl";
  } else {
    document.dir = "ltr";
  }
}
