const menu = {
    starters: [
        { 
            name: "סלט קיסר", 
            description: "חסה טרייה, קרוטונים ורוטב קיסר", 
            price: "₪35", 
            image: "images/salad.jpg" 
        },
        { 
            name: "ברוסקטה", 
            description: "לחם קלוי עם עגבניות ובזיליקום", 
            price: "₪28", 
            image: "images/drink.jpg" 
        }
    ],
    main: [
        { 
            name: "עוף בגריל", 
            description: "מוגש עם ירקות ופירה", 
            price: "₪70", 
            image: "images/drink.jpg" 
        },
        { 
            name: "ספגטי קרבונרה", 
            description: "פסטה ברוטב שמנת ופנצ'טה", 
            price: "₪65", 
            image: "images/salad.jpg" 
        }
    ],
    desserts: [
        { 
            name: "עוגת גבינה", 
            description: "עוגת גבינה עשירה עם רוטב פירות יער", 
            price: "₪40", 
            image: "images/salad.jpg" 
        },
        { 
            name: "טירמיסו", 
            description: "קינוח איטלקי עם קפה ומסקרפונה", 
            price: "₪38", 
            image: "images/drink.jpg" 
        }
    ],
    drinks: [
        { 
            name: "קפוצ'ינו", 
            description: "אספרסו עשיר עם חלב מוקצף", 
            price: "₪15", 
            image: "images/drink.jpg" 
        },
        { 
            name: "לימונדה", 
            description: "לימונים סחוטים טריים עם נענע", 
            price: "₪12", 
            image: "images/salad.jpg" 
        }
    ]
};

function filterMenu(type) {
    const menuContainer = document.getElementById("menu-items");
    menuContainer.innerHTML = ''; // נקה פריטים קודמים

    menu[type].forEach(item => {
        const menuItem = document.createElement("div");
        menuItem.className = "menu-item";
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div>
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p class="price">${item.price}</p>
            </div>
        `;
        menuContainer.appendChild(menuItem);
    });
}

// טוען את מנות הפתיחה כברירת מחדל
window.onload = function() {
    filterMenu('starters');
};
