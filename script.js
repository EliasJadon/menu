const menu = {
    starters: [
        { name: "סלט קיסר", description: "חסה טרייה, קרוטונים ורוטב קיסר" },
        { name: "ברוסקטה", description: "לחם קלוי עם עגבניות ובזיליקום" }
    ],
    main: [
        { name: "עוף בגריל", description: "מוגש עם ירקות ופירה" },
        { name: "ספגטי קרבונרה", description: "פסטה ברוטב שמנת ופנצ'טה" }
    ],
    desserts: [
        { name: "עוגת גבינה", description: "עוגת גבינה עשירה עם רוטב פירות יער" },
        { name: "טירמיסו", description: "קינוח איטלקי עם קפה ומסקרפונה" }
    ],
    drinks: [
        { name: "קפוצ'ינו", description: "אספרסו עשיר עם חלב מוקצף" },
        { name: "לימונדה", description: "לימונים סחוטים טריים עם נענע" }
    ]
};

function filterMenu(type) {
    const menuContainer = document.getElementById("menu-items");
    menuContainer.innerHTML = ''; // נקה פריטים קודמים

    menu[type].forEach(item => {
        const menuItem = document.createElement("div");
        menuItem.className = "menu-item";
        menuItem.innerHTML = `<h3>${item.name}</h3><p>${item.description}</p>`;
        menuContainer.appendChild(menuItem);
    });
}

// טוען את מנות הפתיחה כברירת מחדל
window.onload = function() {
    filterMenu('starters');
};
