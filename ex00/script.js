// Current language
let currentLanguage = "en";

// Theme switcher
const themeButton = document.getElementById("theme-toggle");

function updateThemeButton() {
    if (document.body.classList.contains("dark-theme")) {
        themeButton.textContent =
            currentLanguage === "en"
                ? "Switch to Light Mode"
                : "تفعيل الوضع الفاتح";
    } else {
        themeButton.textContent =
            currentLanguage === "en"
                ? "Switch to Dark Mode"
                : "تفعيل الوضع الداكن";
    }
}

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
    updateThemeButton();
});

// Profile photo switcher
const profilePhoto = document.getElementById("profile-photo");
const previousPhotoButton = document.getElementById("previous-photo");
const nextPhotoButton = document.getElementById("next-photo");
const photoIndicator1 = document.getElementById("photo-indicator-1");
const photoIndicator2 = document.getElementById("photo-indicator-2");

const profilePhotos = [
    {
        src: "assets/IMG_8052.jpeg",
        altEn: "Dana Rababah's profile photo",
        altAr: "الصورة الشخصية لدانا ربابعة"
    },
    {
        src: "assets/IMG_4743.jpeg",
        altEn: "Dana Rababah's second profile photo",
        altAr: "الصورة الشخصية الثانية لدانا ربابعة"
    }
];

let currentPhotoIndex = 0;

function showPhoto(index) {
    currentPhotoIndex = index;
    profilePhoto.style.opacity = "0";

    setTimeout(function () {
        profilePhoto.src = profilePhotos[currentPhotoIndex].src;

        profilePhoto.alt =
            currentLanguage === "en"
                ? profilePhotos[currentPhotoIndex].altEn
                : profilePhotos[currentPhotoIndex].altAr;

        // Keep the same circle and raise the second photo a little more.
        profilePhoto.style.objectFit = "cover";
        profilePhoto.style.objectPosition =
            currentPhotoIndex === 0 ? "center center" : "center 30%";

        profilePhoto.style.opacity = "1";

        photoIndicator1.classList.toggle("active", currentPhotoIndex === 0);
        photoIndicator2.classList.toggle("active", currentPhotoIndex === 1);
    }, 200);
}

previousPhotoButton.addEventListener("click", function () {
    const previousIndex =
        (currentPhotoIndex - 1 + profilePhotos.length) % profilePhotos.length;
    showPhoto(previousIndex);
});

nextPhotoButton.addEventListener("click", function () {
    const nextIndex = (currentPhotoIndex + 1) % profilePhotos.length;
    showPhoto(nextIndex);
});

// Language translations
const translations = {
    en: {
        navAbout: "About",
        navSkills: "Skills",
        navProjects: "Projects",
        navHobbies: "Hobbies",
        navContact: "Contact",
        name: "Dana Rababah",
        aboutText: "I am a Software Engineering graduate from Jordan University of Science and Technology. I am interested in software development, web technologies, database management, and problem-solving. I enjoy learning new technologies and applying my knowledge through practical projects.",
        skillsTitle: "My Skills",
        skillDatabase: "Database Management",
        skillTesting: "Software Testing",
        skillMobile: "Mobile App Development",
        skillUIUX: "UI/UX Principles",
        skillGit: "Git and GitHub",
        projectsTitle: "My Projects",
        project00: "Introduction to web development and website structure using HTML.",
        project01: "HTML exercises focused on creating and organizing web pages.",
        project02: "CSS layouts, Flexbox, positioning, shapes, colors, animations, and transitions.",
        project03: "JavaScript variables, functions, conditions, and DOM manipulation.",
        busProjectTitle: "University Bus Application",
        busProject: "My Software Engineering graduation project, developed using Flutter. The application includes university bus location tracking, arrival notifications, working-hours logging, and student feedback.",
        hobbiesTitle: "My Hobbies",
        hobbyShooting: "Target Shooting",
        hobbySwimming: "Swimming",
        hobbyBowling: "Bowling",
        contactTitle: "Contact Me",
        nameLabel: "Name:",
        emailLabel: "Email:",
        messageLabel: "Message:",
        sendMessage: "Send Message",
        footerText: "© 2026 Dana Rababah. All rights reserved.",
        formSuccess: "Thank you! Your message has been received."
    },
    ar: {
        navAbout: "نبذة عني",
        navSkills: "المهارات",
        navProjects: "مشاريعي",
        navHobbies: "هواياتي",
        navContact: "تواصل معي",
        name: "دانا ربابعة",
        aboutText: "أنا خريجة هندسة البرمجيات من جامعة العلوم والتكنولوجيا الأردنية. أهتم بتطوير البرمجيات وتقنيات الويب وإدارة قواعد البيانات وحل المشكلات. أستمتع بتعلّم التقنيات الجديدة وتطبيق معرفتي من خلال المشاريع العملية.",
        skillsTitle: "مهاراتي",
        skillDatabase: "إدارة قواعد البيانات",
        skillTesting: "اختبار البرمجيات",
        skillMobile: "تطوير تطبيقات الهاتف",
        skillUIUX: "مبادئ تجربة المستخدم وواجهات المستخدم",
        skillGit: "Git وGitHub",
        projectsTitle: "مشاريعي",
        project00: "مقدمة في تطوير الويب وبنية المواقع باستخدام HTML.",
        project01: "تمارين HTML تركز على إنشاء صفحات الويب وتنظيمها.",
        project02: "تنسيقات CSS وFlexbox والتموضع والأشكال والألوان والحركات والانتقالات.",
        project03: "متغيرات JavaScript والدوال والشروط والتعامل مع عناصر الصفحة.",
        busProjectTitle: "تطبيق حافلات الجامعة",
        busProject: "مشروع تخرجي في هندسة البرمجيات، طورته باستخدام Flutter. يتضمن التطبيق تتبع مواقع حافلات الجامعة وإشعارات الوصول وتسجيل ساعات العمل وملاحظات الطلاب.",
        hobbiesTitle: "هواياتي",
        hobbyShooting: "الرماية على الأهداف",
        hobbySwimming: "السباحة",
        hobbyBowling: "البولينغ",
        contactTitle: "تواصل معي",
        nameLabel: "الاسم:",
        emailLabel: "البريد الإلكتروني:",
        messageLabel: "الرسالة:",
        sendMessage: "إرسال الرسالة",
        footerText: "© 2026 دانا ربابعة. جميع الحقوق محفوظة.",
        formSuccess: "شكرًا لك! تم استلام رسالتك."
    }
};

// Language switcher
const englishButton = document.getElementById("english-button");
const arabicButton = document.getElementById("arabic-button");

function setLanguage(language) {
    currentLanguage = language;
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach(function (element) {
        const key = element.dataset.i18n;
        const translatedText = translations[language][key];

        if (translatedText !== undefined) {
            element.textContent = translatedText;
        }
    });

    profilePhoto.alt =
        currentLanguage === "en"
            ? profilePhotos[currentPhotoIndex].altEn
            : profilePhotos[currentPhotoIndex].altAr;

    updateThemeButton();
}

englishButton.addEventListener("click", function () {
    setLanguage("en");
});

arabicButton.addEventListener("click", function () {
    setLanguage("ar");
});

// Contact form
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    alert(translations[currentLanguage].formSuccess);
    contactForm.reset();
});
