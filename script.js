// ==================== MENU DATA ====================
const menuData = [
    // CÀ PHÊ PHA MÁY
    { id: 1, name: 'Cà phê đá', price: 12000, category: 'coffee' },
    { id: 2, name: 'Cà phê đen', price: 10000, category: 'coffee' },
    { id: 3, name: 'Cà phê sữa đá', price: 15000, category: 'coffee' },
    { id: 4, name: 'Cà phê muối', price: 17000, category: 'coffee' },
    { id: 5, name: 'Bạc xỉu', price: 18000, category: 'coffee' },
    { id: 6, name: 'Ca cao sữa', price: 15000, category: 'coffee' },
    
    // SINH TỐ
    { id: 7, name: 'Sinh tố Bơ', price: 20000, category: 'smoothie' },
    { id: 8, name: 'Sinh tố Sầu riêng', price: 25000, category: 'smoothie' },
    { id: 9, name: 'Sinh tố Mít', price: 20000, category: 'smoothie' },
    { id: 10, name: 'Sinh tố Dâu', price: 20000, category: 'smoothie' },
    { id: 11, name: 'Sinh tố Mãng cầu', price: 20000, category: 'smoothie' },
    { id: 12, name: 'Sinh tố Kiwi', price: 20000, category: 'smoothie' },
    
    // TRÀ TRÁI CÂY
    { id: 13, name: 'Trà đào', price: 17000, category: 'tea' },
    { id: 14, name: 'Trà vải', price: 17000, category: 'tea' },
    { id: 15, name: 'Trà Kiwi', price: 17000, category: 'tea' },
    { id: 16, name: 'Trà chanh dây hạt đác', price: 20000, category: 'tea' },
    { id: 17, name: 'Trà dâu tầm hạt đác', price: 20000, category: 'tea' },
    { id: 18, name: 'Trà mãng cầu', price: 20000, category: 'tea' },
    { id: 19, name: 'Trà chanh Thái xanh', price: 17000, category: 'tea' },
    { id: 20, name: 'Trà dưa lưới', price: 17000, category: 'tea' },
    { id: 21, name: 'Trà dâu', price: 17000, category: 'tea' },
    { id: 22, name: 'Trà ổi hồng', price: 17000, category: 'tea' },
    
    // TRÀ SỮA
    { id: 23, name: 'Trà sữa thái xanh', price: 20000, category: 'milktea' },
    { id: 24, name: 'Trà sữa thái đỏ', price: 20000, category: 'milktea' },
    { id: 25, name: 'Sữa tươi TCĐD', price: 20000, category: 'milktea' },
    { id: 26, name: 'Trà sữa Matcha', price: 20000, category: 'milktea' },
    { id: 27, name: 'Matcha latte', price: 20000, category: 'milktea' },
    { id: 28, name: 'Cacao latte', price: 20000, category: 'milktea' },
    { id: 29, name: 'Trà sữa việt quất', price: 20000, category: 'milktea' },
    { id: 30, name: 'Trà sữa socola', price: 20000, category: 'milktea' },
    
    // ĂN VẶT & ĐIỂM TÂM
    { id: 31, name: 'Bánh tráng trộn', price: 15000, category: 'food' },
    { id: 32, name: 'Trái cây ly', price: 10000, category: 'food' },
    { id: 33, name: 'Mì ly', price: 10000, category: 'food' },
    { id: 34, name: 'Bánh Flan', price: 4000, category: 'food' },
    { id: 35, name: 'Hủ tiếu', price: 25000, category: 'food' },
    { id: 36, name: 'Cơm sườn', price: 25000, category: 'food' },
    
    // GIẢI KHÁT
    { id: 37, name: 'Lipton tắc xí muội', price: 10000, category: 'drink' },
    { id: 38, name: 'Tắc xí muội', price: 10000, category: 'drink' },
    { id: 39, name: 'Đá me', price: 10000, category: 'drink' },
    { id: 40, name: 'Trà đường', price: 8000, category: 'drink' },
    
    // THUỐC LÁ
    { id: 41, name: 'Saigon Melon', price: 22000, category: 'tobacco' },
    { id: 42, name: 'SaiGon Xì Gà', price: 22000, category: 'tobacco' },
    { id: 43, name: 'Hero', price: 25000, category: 'tobacco' },
    { id: 44, name: 'Jet', price: 30000, category: 'tobacco' },
    { id: 45, name: 'SaiGon Silver', price: 20000, category: 'tobacco' },
    
    // ĐÁ XAY
    { id: 46, name: 'Matcha Đá Xay', price: 25000, category: 'icecream' },
    { id: 47, name: 'Oreo Đá Xay', price: 25000, category: 'icecream' },
    
    // SODA
    { id: 48, name: 'Soda Đủ Vị', price: 15000, category: 'soda' }
];

// Category names mapping
const categoryNames = {
    'coffee': 'Cà Phê',
    'smoothie': 'Sinh Tố',
    'tea': 'Trà Trái Cây',
    'milktea': 'Trà Sữa',
    'food': 'Đồ Ăn',
    'drink': 'Giải Khát',
    'tobacco': 'Thuốc Lá',
    'icecream': 'Đá Xay',
    'soda': 'Soda'
};

// ==================== CART MANAGEMENT ====================
let cart = [];

// Load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('cafeCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cafeCart', JSON.stringify(cart));
}

// Add item to cart
function addToCart(itemId, quantity) {
    const item = menuData.find(i => i.id === itemId);
    if (!item || quantity <= 0) return;
    
    const existingItem = cart.find(i => i.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: quantity
        });
    }
    
    saveCart();
    updateCartUI();
    showNotification(`✅ Đã thêm ${item.name} vào giỏ hàng!`);
}

// Remove item from cart
function removeFromCart(itemId) {
    cart = cart.filter(i => i.id !== itemId);
    saveCart();
    updateCartUI();
    showNotification('🗑️ Đã xóa món khỏi giỏ hàng');
}

// Clear entire cart
function clearCart() {
    if (cart.length === 0) return;
    
    if (confirm('Bạn có chắc muốn xóa toàn bộ giỏ hàng?')) {
        cart = [];
        saveCart();
        updateCartUI();
        showNotification('🗑️ Đã xóa toàn bộ giỏ hàng');
    }
}

// Update cart UI
function updateCartUI() {
    const cartItems = document.getElementById('cartItems');
    const totalPrice = document.getElementById('totalPrice');
    const cartCount = document.querySelector('.cart-count');
    
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart items
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Giỏ hàng trống</p>';
        totalPrice.textContent = '0đ';
        return;
    }
    
    let html = '';
    let total = 0;
    
    cart.forEach(item => {
        const subtotal = item.price * item.quantity;
        total += subtotal;
        
        html += `
            <div class="cart-item">
                <div class="cart-item-header">
                    <span class="cart-item-name">${item.name}</span>
                    <button class="cart-item-remove" onclick="removeFromCart(${item.id})">×</button>
                </div>
                <div class="cart-item-details">
                    <span>${item.quantity} × ${formatPrice(item.price)}</span>
                    <span style="font-weight: 700">${formatPrice(subtotal)}</span>
                </div>
            </div>
        `;
    });
    
    cartItems.innerHTML = html;
    totalPrice.textContent = formatPrice(total);
}

// ==================== ORDER FUNCTION ====================
/**
 * ⚠️ QUAN TRỌNG: CẤU HÌNH THÔNG TIN LIÊN HỆ
 */
const PHONE_NUMBER = '0984771687'; // ← Số điện thoại (bỏ số 0 đầu khi dùng WhatsApp)
const WHATSAPP_NUMBER = '84984771687'; // ← Số WhatsApp (84 + số không có 0)
const ZALO_NUMBER = '0984771687'; // ← Số Zalo

function orderViaSMS() {
    if (cart.length === 0) {
        alert('Giỏ hàng trống! Vui lòng chọn món trước khi đặt hàng.');
        return;
    }
    
    // Tạo nội dung đơn hàng
    let message = '☕ ĐƠN HÀNG CÀ PHÊ SANG\n';
    message += '━━━━━━━━━━━━━━━━\n\n';
    
    cart.forEach((item, index) => {
        message += `${index + 1}. ${item.name}\n`;
        message += `   SL: ${item.quantity} × ${formatPrice(item.price)} = ${formatPrice(item.price * item.quantity)}\n\n`;
    });
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    message += '━━━━━━━━━━━━━━━━\n';
    message += `💰 TỔNG CỘNG: ${formatPrice(total)}\n\n`;
    message += '📍 Vui lòng ghi địa chỉ giao hàng:';
    
    // Hiển thị popup chọn phương thức
    showOrderOptions(message);
}

function showOrderOptions(message) {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        z-index: 10001;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.3s ease;
    `;
    
    modal.innerHTML = `
        <div style="
            background: white;
            border-radius: 20px;
            padding: 2rem;
            max-width: 400px;
            width: 90%;
            text-align: center;
        ">
            <h3 style="
                font-size: 1.5rem;
                margin-bottom: 1.5rem;
                color: #6B4423;
            ">📱 Chọn Cách Đặt Hàng</h3>
            
            <button onclick="sendViaWhatsApp('${encodeURIComponent(message)}')" style="
                width: 100%;
                padding: 1rem;
                margin-bottom: 0.8rem;
                background: linear-gradient(135deg, #25D366, #128C7E);
                color: white;
                border: none;
                border-radius: 50px;
                font-weight: 700;
                font-size: 1rem;
                cursor: pointer;
                box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
            ">
                <span style="font-size: 1.2rem;">💬</span> WhatsApp
            </button>
            
            <button onclick="sendViaZalo('${encodeURIComponent(message)}')" style="
                width: 100%;
                padding: 1rem;
                margin-bottom: 0.8rem;
                background: linear-gradient(135deg, #0068FF, #0084FF);
                color: white;
                border: none;
                border-radius: 50px;
                font-weight: 700;
                font-size: 1rem;
                cursor: pointer;
                box-shadow: 0 4px 15px rgba(0, 104, 255, 0.3);
            ">
                <span style="font-size: 1.2rem;">💙</span> Zalo
            </button>
            
            <button onclick="sendViaSMS('${encodeURIComponent(message)}')" style="
                width: 100%;
                padding: 1rem;
                margin-bottom: 0.8rem;
                background: linear-gradient(135deg, #6B4423, #8B6F47);
                color: white;
                border: none;
                border-radius: 50px;
                font-weight: 700;
                font-size: 1rem;
                cursor: pointer;
                box-shadow: 0 4px 15px rgba(107, 68, 35, 0.3);
            ">
                <span style="font-size: 1.2rem;">📱</span> SMS (Chỉ trên điện thoại)
            </button>
            
            <button onclick="copyOrderText('${encodeURIComponent(message)}')" style="
                width: 100%;
                padding: 1rem;
                margin-bottom: 1rem;
                background: transparent;
                color: #6B4423;
                border: 2px solid #6B4423;
                border-radius: 50px;
                font-weight: 700;
                font-size: 1rem;
                cursor: pointer;
            ">
                <span style="font-size: 1.2rem;">📋</span> Copy Đơn Hàng
            </button>
            
            <button onclick="this.parentElement.parentElement.remove()" style="
                background: transparent;
                border: none;
                color: #999;
                cursor: pointer;
                font-size: 0.9rem;
                text-decoration: underline;
            ">Đóng</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

function sendViaWhatsApp(encodedMessage) {
    const message = decodeURIComponent(encodedMessage);
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
    document.querySelector('div[style*="z-index: 10001"]').remove();
    showNotification('✅ Đang mở WhatsApp...');
}

function sendViaZalo(encodedMessage) {
    const message = decodeURIComponent(encodedMessage);
    // Zalo deep link (hoạt động tốt trên mobile)
    const zaloURL = `https://zalo.me/${ZALO_NUMBER}`;
    window.open(zaloURL, '_blank');
    document.querySelector('div[style*="z-index: 10001"]').remove();
    
    // Copy message to clipboard
    copyToClipboard(message);
    showNotification('✅ Đang mở Zalo... Đơn hàng đã copy vào clipboard!');
}

function sendViaSMS(encodedMessage) {
    const message = decodeURIComponent(encodedMessage);
    const smsLink = `sms:${PHONE_NUMBER}?body=${encodeURIComponent(message)}`;
    
    try {
        window.location.href = smsLink;
        document.querySelector('div[style*="z-index: 10001"]').remove();
        showNotification('📱 Đang mở ứng dụng tin nhắn...');
    } catch (error) {
        alert('SMS chỉ hoạt động trên điện thoại. Vui lòng chọn WhatsApp hoặc Zalo!');
    }
}

function copyOrderText(encodedMessage) {
    const message = decodeURIComponent(encodedMessage);
    copyToClipboard(message);
    document.querySelector('div[style*="z-index: 10001"]').remove();
    showNotification('✅ Đã copy đơn hàng! Bạn có thể dán vào bất kỳ ứng dụng nào.');
}

function copyToClipboard(text) {
    // Tạo textarea tạm
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
        document.execCommand('copy');
    } catch (err) {
        console.error('Copy failed:', err);
    }
    
    document.body.removeChild(textarea);
}

// ==================== MENU RENDERING ====================
function renderMenu(filter = 'all') {
    const menuGrid = document.getElementById('menuGrid');
    const filteredItems = filter === 'all' 
        ? menuData 
        : menuData.filter(item => item.category === filter);
    
    let html = '';
    
    filteredItems.forEach(item => {
        html += `
            <div class="menu-item" data-category="${item.category}">
                <div class="item-category">${categoryNames[item.category]}</div>
                <div class="item-header">
                    <h3 class="item-name">${item.name}</h3>
                    <span class="item-price">${formatPrice(item.price)}</span>
                </div>
                <div class="item-controls">
                    <div class="quantity-control">
                        <button class="qty-btn" onclick="decrementQty(${item.id})">−</button>
                        <input type="number" class="qty-input" id="qty-${item.id}" value="1" min="1" max="99" readonly>
                        <button class="qty-btn" onclick="incrementQty(${item.id})">+</button>
                    </div>
                    <button class="add-to-cart-btn" onclick="addItemToCart(${item.id})">
                        Thêm vào giỏ
                    </button>
                </div>
            </div>
        `;
    });
    
    menuGrid.innerHTML = html;
}

// Increment quantity
function incrementQty(itemId) {
    const input = document.getElementById(`qty-${itemId}`);
    let value = parseInt(input.value);
    if (value < 99) {
        input.value = value + 1;
    }
}

// Decrement quantity
function decrementQty(itemId) {
    const input = document.getElementById(`qty-${itemId}`);
    let value = parseInt(input.value);
    if (value > 1) {
        input.value = value - 1;
    }
}

// Add item with quantity
function addItemToCart(itemId) {
    const input = document.getElementById(`qty-${itemId}`);
    const quantity = parseInt(input.value);
    addToCart(itemId, quantity);
    input.value = 1; // Reset quantity
}

// ==================== CATEGORY FILTER ====================
function filterCategory(category) {
    // Update active tab
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');
    
    // Render filtered menu
    renderMenu(category);
}

// ==================== CART TOGGLE ====================
function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('overlay');
    
    cartSidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

// ==================== UTILITY FUNCTIONS ====================
function formatPrice(price) {
    return price.toLocaleString('vi-VN') + 'đ';
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #6B4423 0%, #8B6F47 100%);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 50px;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideInRight 0.3s ease, fadeOut 0.3s ease 2.7s;
        font-weight: 600;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== SCROLL ANIMATIONS ====================
function handleScrollAnimation() {
    const elements = document.querySelectorAll('.menu-item, .contact-item');
    
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        
        if (isVisible) {
            element.classList.add('fade-in');
        }
    });
}

window.addEventListener('scroll', handleScrollAnimation);

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
    // Render initial menu
    renderMenu();
    
    // Load saved cart
    loadCart();
    
    // Initial scroll animation check
    handleScrollAnimation();
    
    console.log('🎉 Website đã sẵn sàng!');
    console.log('📱 Số điện thoại nhận đơn:', PHONE_NUMBER);
    console.log('💡 Để đổi số điện thoại, tìm dòng: const PHONE_NUMBER trong file script.js');
});

// ==================== KEYBOARD SHORTCUTS ====================
document.addEventListener('keydown', function(e) {
    // Press 'C' to toggle cart
    if (e.key === 'c' || e.key === 'C') {
        if (!e.target.matches('input, textarea')) {
            toggleCart();
        }
    }
    
    // Press 'Escape' to close cart
    if (e.key === 'Escape') {
        const cartSidebar = document.getElementById('cartSidebar');
        const overlay = document.getElementById('overlay');
        if (cartSidebar.classList.contains('active')) {
            cartSidebar.classList.remove('active');
            overlay.classList.remove('active');
        }
    }
});
