document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Ngăn trang tải lại khi gửi form

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    // Kiểm tra username và password
    if (username === "2212407" && password === "1234") {
        message.style.color = "green"; // Đổi màu chữ sang xanh
        message.textContent = "Đăng nhập thành công!";
        
        // Hiển thị thông báo bằng Notification API
        if (Notification.permission === "granted") {
            new Notification("Xin Chào Người Dùng!");
        } else if (Notification.permission !== "denied") {
            Notification.requestPermission().then(permission => {
                if (permission === "granted") {
                    new Notification("Xin Chào Người Dùng!");
                }
            });
        }
    } else {
        message.style.color = "red"; // Đổi màu chữ sang đỏ
        message.textContent = "Sai tên đăng nhập hoặc mật khẩu!"; // Hiển thị thông báo lỗi
    }
});
