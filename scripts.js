const content = {
    en: {
        index: {
            title: "Welcome to My Final Project",
            description: "This is the homepage. Navigate to the Description page for more details about the project."
        },
        description: {
            title: "Project Description",
            intro: "Introduce the project, its objectives, and scope.",
            methodology: "Describe the methods used to complete the project.",
            results: "Present the results of your work.",
            conclusion: "Summarize your findings and discuss their implications."
        }
    },
    fa: {
        index: {
            title: "به پروژه نهایی من خوش آمدید",
            description: "این صفحه اصلی است. برای جزئیات بیشتر در مورد پروژه به صفحه توضیحات بروید."
        },
        description: {
            title: "توضیحات پروژه",
            intro: "پروژه، اهداف و دامنه آن را معرفی کنید.",
            methodology: "روش‌های استفاده شده برای تکمیل پروژه را شرح دهید.",
            results: "نتایج کار خود را ارائه دهید.",
            conclusion: "یافته‌های خود را خلاصه کرده و پیامدهای آنها را بحث کنید."
        }
    }
};

function setLanguage(lang) {
    localStorage.setItem('language', lang);
    document.body.classList.toggle('fa', lang === 'fa');
    updateContent(lang);
}

function getLanguage() {
    const lang = localStorage.getItem('language') || 'en';
    document.body.classList.toggle('fa', lang === 'fa');
    updateContent(lang);
}

function updateContent(lang) {
    const page = window.location.pathname.split('/').pop().replace('.html', '');
    const elements = document.querySelectorAll('#content h1, #content p, #content section h2, #content section p');
    
    elements.forEach((el) => {
        const key = el.getAttribute('data-key');
        el.textContent = content[lang][page][key];
    });
}

// Set the language when the page loads
window.onload = getLanguage;
