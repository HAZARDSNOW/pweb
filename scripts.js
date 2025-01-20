const content = {
    en: {
        index: {
            title: "Welcome to My Final Project",
            description: `
                University of Isfahan<br>
                Faculty of Computer Engineering<br>
                Final Project Documentation for the Computer Skills Workshop Course<br>
                Setting up a personal website using GitHub Pages hosting service<br>
                Course Instructor: Dr. Ali Behlouli<br>
                First Semester of the Academic Year 2024 - 1
            `
        },
        description: {
            title: "Project Description",
            intro: "Project Overview",
            methodology: "Project Steps",
            results: "Optional Items",
            conclusion: `
                GitHub Pages is a powerful and free service provided by GitHub, allowing users to host static websites directly from a GitHub repository. It is a great solution for developers, individuals who want to host their projects, documents, samples, or portfolios without needing to set up complex servers or use other hosting services.
                <br><br>
                The project aims to create two websites:
                <ul>
                    <li>A personal academic website.</li>
                    <li>A website to explain and introduce the final project for a computer science and programming course.</li>
                </ul>
                Use various tools and templates, design the website content, and prepare it using Microsoft Office. Additionally, design the website using HTML and CSS codes. Choose practical templates and extensions to attract more audience to the page.
                <br><br>
                The items mentioned here are optional and will include additional points if completed.
            `
        }
    },
    fa: {
        index: {
            title: "دانشگاه اصفهان",
            description: `
                دانشگاه اصفهان<br>
                دانشکده مهندسی کامپیوتر<br>
                مستند پروژه پایانی درس کارگاه مهارت های کامپیوتری<br>
                راه اندازی وبسایت شخصی با استفاده از سرویس میزبانی صفحه‌های گیت‌هاب<br>
                استاد درس: دکتر علی بهلولی<br>
                نیمسال اول سال تحصیلی ۱۴۰۴ - ۱
            `
        },
        description: {
            title: "توضیحات پروژه",
            intro: "شرح پروژه",
            methodology: "مراحل انجام پروژه",
            results: "موارد اختیاری",
            conclusion: `
                گیت‌هاب پیجز یک سرویس قدرتمند و رایگان ارائه شده توسط گیت‌هاب است که به کاربران امکان می‌دهد سایت‌های استاتیک خود را مستقیماً از یک مخزن گیت‌هاب میزبانی کنند. این سرویس راه‌حل خوبی برای توسعه‌دهندگان و افرادی است که می‌خواهند پروژه‌ها، اسناد، نمونه‌ها یا پورتفولیوهای خود را بدون نیاز به تنظیم سرورهای پیچیده یا استفاده از سرویس‌های میزبانی دیگر میزبانی کنند.
                <br><br>
                هدف این پروژه ایجاد دو وب‌سایت است:
                <ul>
                    <li>وب‌سایت شخصی علمی.</li>
                    <li>وب‌سایتی برای توضیح و معرفی پروژه پایانی یک درس علوم کامپیوتر و برنامه‌نویسی.</li>
                </ul>
                از ابزارها و قالب‌های مختلف استفاده کنید، محتوای وب‌سایت را طراحی کنید و آن را با استفاده از مایکروسافت آفیس آماده کنید. همچنین، وب‌سایت را با استفاده از کدهای HTML و CSS طراحی کنید. قالب‌ها و افزونه‌های کاربردی را برای جذب بیشتر مخاطبان به صفحه انتخاب کنید.
                <br><br>
                موارد ذکر شده در اینجا اختیاری هستند و در صورت تکمیل شامل امتیازات اضافی خواهند بود.
            `
        }
    }
};

function setLanguage(lang) {
    localStorage.setItem('language', lang);
    document.body.classList.toggle('fa', lang === '[_{{{CITATION{{{_1{](https://github.com/iamedriancamacho/FIS/tree/8fe6ba1a14ce13cba2ad5d21abf91a11dec3db5d/univadmin%2Funivhome.php)
