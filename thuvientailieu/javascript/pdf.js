// Lấy tham số từ URL
const urlParams = new URLSearchParams(window.location.search);
const pdfUrl = urlParams.get('url');

// Tạo iframe để hiển thị PDF
if (pdfUrl) {
    const iframe = document.createElement('iframe');
    iframe.src = pdfUrl;
    document.getElementById('pdf-container').appendChild(iframe);
} else {
    document.getElementById('pdf-container').textContent = 'Không tìm thấy URL của PDF.';
}