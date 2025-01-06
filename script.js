document.getElementById('search-form').addEventListener('submit', function(e) {
    e.preventDefault();

    var query = document.getElementById('search-bar').value.trim();

    // Kiểm tra nếu chuỗi nhập vào là một URL hợp lệ
    if (isValidUrl(query)) {
        // Nếu là URL, thêm "http://" nếu người dùng không nhập
        if (!/^https?:\/\//i.test(query)) {
            query = 'http://' + query;
        }
        window.location.href = query; // Chuyển hướng đến URL
    } else {
        // Nếu không phải URL, tìm kiếm trên Google
        window.location.href = 'https://www.google.com/search?q=' + encodeURIComponent(query);
    }
});

// Hàm kiểm tra xem chuỗi có phải là URL hợp lệ không
function isValidUrl(string) {
    var pattern = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,6}(\/[a-z0-9-]*)*\/?$/i;
    return pattern.test(string);
}
