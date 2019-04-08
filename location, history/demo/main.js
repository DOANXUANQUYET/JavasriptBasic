//location kiểu object, chứa những thông tin về vị trí của trang web hiện tại
console.log(location);

//_________________phương thức và thuộc tính hay sử dụng của location_____________
//  href chỉ vị trí tuyệt đối, có thể dùng để chuyển hướng trang như thẻ <a> trong html
console.log(location.href);

//dùng href để chuyển trang, thay đổi giá trị href hiện tại bằng địa chỉ muốn di chuyển, có thể truyền www.google.com
function redirect(url) {
    location.href = url;
}

// dùng phương thức assign trong location.assign(url);

function comeback(url) {
    location.assign(url);
}

//dùng phương thức replace , di chuyển nhưng k lưu lại history, không quay lại được trang trước đó
// sử dụng giống assign   location.replace(url);

//-----phương thức reload() không cần truyền tham số, dùng để load lại trang  location.reload();
// reload() có thể nhận tham số true hoặc false, mặc định là false
//khi truyền vào là true thì sẽ load lại trang và xoá, clearCache, khi load một đối tượng lần đầu tiên thì
//trình duyệt sẽ lưu lại dữ liệu đó trên cache để lần sau đỡ phải load

//history kiểu object, ghi lại lịch sử di chuyển trang trên trình duyệt,
//history.back()  và  history.forward() giống nút quay lại <- và tiến tới -> trang trên trình duyệt

//history.lenght sẽ ghi số lượng cách trang đã mở, quay lại vẫn giữ nguyên độ dài, hàm replace() sẽ ghi đề lên chứ không tăng
//history.go(số lượng page muốn quay lại), có thể là số âm

//DOM classList, trả về một danh sách các class đang áp dụng lên đối tượng
var headdingElement = document.querySelector('.heading');
console.log(headdingElement.classList);
//classList.add(tên class muốn thêm,..,..)
//classList.contains(tên class), trả về giá trị true - false , kiểm tra xem 1 class có đang được áp dụng hay k?
//classList.remove(tên class muốn xoá)
//*************** classList.toggle(tên class), kiểm tra class, nếu có rồi thì bỏ đi, nếu chưa có thì thêm vào */