const menu = {
    starters: [
        { name: "Caesar Salad", description: "Fresh lettuce, croutons, and Caesar dressing" },
        { name: "Bruschetta", description: "Grilled bread with tomato and basil" }
    ],
    main: [
        { name: "Grilled Chicken", description: "Served with vegetables and mashed potatoes" },
        { name: "Spaghetti Carbonara", description: "Pasta with creamy sauce and pancetta" }
    ],
    desserts: [
        { name: "Cheesecake", description: "Rich and creamy cheesecake with berry sauce" },
        { name: "Tiramisu", description: "Layered Italian dessert with coffee and mascarpone" }
    ],
    drinks: [
        { name: "Cappuccino", description: "Rich espresso with steamed milk and foam" },
        { name: "Lemonade", description: "Freshly squeezed lemons with mint" }
    ]
};

function filterMenu(type) {
    const menuContainer = document.getElementById("menu-items");
    menuContainer.innerHTML = ''; // Clear previous items

    menu[type].forEach(item => {
        const menuItem = document.createElement("div");
        menuItem.className = "menu-item";
        menuItem.innerHTML = `<h3>${item.name}</h3><p>${item.description}</p>`;
        menuContainer.appendChild(menuItem);
    });
}

// Load starters by default
window.onload = function() {
    filterMenu('starters');
};
