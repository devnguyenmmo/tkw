// Nội dung từ java.js
const purchases = [
    { name: 'Hà', phone: '091xx', product: 'iPhone 16 Pro Max' },
    { name: 'Phương', phone: '092xx', product: 'iPad Pro 12.9 inch' },
    { name: 'Duy', phone: '093xx', product: 'iPhone 16 Plus' },
    { name: 'Hoa', phone: '094xx', product: 'iPad Air 10.9' },
    { name: 'Nam', phone: '095xx', product: 'iPhone 16' },
    { name: 'Trung', phone: '096xx', product: 'iPad Mini 6' },
    { name: 'Ly', phone: '097xx', product: 'iPhone 16 Pro' },
    { name: 'Kiên', phone: '098xx', product: 'iPad 10.2' },
    { name: 'Tâm', phone: '099xx', product: 'iPhone 16' },
    { name: 'Thảo', phone: '090xx', product: 'iPad Pro' }
];

let currentPurchaseIndex = 0; // Biến theo dõi người mua hiện tại

function showNotification() {
    const notification = document.getElementById('notification');
    const messageElement = document.getElementById('purchase-message');

    // Xóa nội dung cũ
    messageElement.innerHTML = '';

    const purchase = purchases[currentPurchaseIndex]; // Lấy thông tin của người mua hiện tại
    const message = `${purchase.name} ${purchase.phone} vừa mua ${purchase.product}`; // Cập nhật thông điệp mua hàng

    messageElement.textContent = message; // Cập nhật nội dung thông báo
    notification.style.display = 'block'; // Hiển thị thông báo
    notification.style.opacity = '1'; // Đảm bảo thông báo được hiển thị

    // Ẩn thông báo sau 5 giây
    setTimeout(() => {
        notification.style.opacity = '0'; // Từ từ ẩn thông báo
        setTimeout(() => {
            notification.style.display = 'none'; // Ẩn hoàn toàn sau khi đã mờ
            currentPurchaseIndex = (currentPurchaseIndex + 1) % purchases.length; // Chuyển đến người tiếp theo
            showNotification(); // Hiển thị thông báo tiếp theo
        }, 500); // Thời gian mờ
    }, 5000); // Hiển thị trong 5 giây
}

// Bắt đầu hiển thị thông báo
showNotification();

// Nội dung từ java1.js
const rightbtn = document.querySelector('.fa-chevron-right');
const leftbtn = document.querySelector('.fa-chevron-left');
const imgNuber = document.querySelectorAll('.slider-product-one-content-items');
let index = 0;

rightbtn.addEventListener("click", function() {
    index = index + 1;
    if (index > imgNuber.length - 1) {
        index = 0;
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index * 100 + "%";
});

leftbtn.addEventListener("click", function() {
    index = index - 1;
    if (index <= 0) {
        index = imgNuber.length - 1;
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index * 100 + "%";
});

// Nội dung chuyển ảnh từ java.js
const images = document.querySelectorAll('.banner img');
const captions = document.querySelectorAll('.caption');
let currentImageIndex = 0; // Đổi tên biến để tránh xung đột

function updateCaptions() {
    captions.forEach((caption, index) => {
        caption.classList.remove('active'); // Bỏ lớp active khỏi tất cả caption
    });
    captions[currentImageIndex].classList.add('active'); // Thêm lớp active vào caption hiện tại
}

function slideImages() {
    currentImageIndex = (currentImageIndex + 1) % images.length; // Tính chỉ số ảnh tiếp theo
    updateCaptions(); // Cập nhật caption
}

// Cập nhật caption ngay lập tức
updateCaptions();
// Cập nhật caption mỗi 3 giây (thời gian phải bằng thời gian chuyển ảnh trong CSS)
setInterval(slideImages, 5000); // Thay đổi giữa các ảnh mỗi 3 giây
