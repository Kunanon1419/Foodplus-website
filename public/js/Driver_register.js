$('body').AutoProvince({
    PROVINCE: '#province,#province_working', // select div สำหรับรายชื่อจังหวัด
    AMPHUR: '#amphur,#amphur_working', // select div สำหรับรายชื่ออำเภอ
    DISTRICT: '#district', // select div สำหรับรายชื่อตำบล
    POSTCODE: '#postcode', // input field สำหรับรายชื่อรหัสไปรษณีย์
    GEOGRAPHY: '#geography', // input field แสดงภาค
    CURRENT_PROVINCE: 4, //  แสดงค่าเริ่มต้น ใส่ไอดีจังหวัดที่เคยเลือกไว้
    CURRENT_AMPHUR: 4, // แสดงค่าเริ่มต้น  ใส่ไอดีอำเภอที่เคยเลือกไว้
    CURRENT_DISTRICT: 1, // แสดงค่าเริ่มต้น  ใส่ไอดีตำบลที่เคยเลือกไว้
    arrangeByName: true // กำหนดให้เรียงตามตัวอักษร
});

$('.btn:not(#search_location,#show_hide_password,#show_hide_Confirm_password,#submitForm)').not('[id^="upload-"]')
    .click(function () {
        $(this).parent().hide().next().css('display', 'flex')
        //e.preventDefault();
        //return false;
    });
/*reCAPTCHA callback*/
// set default checkbox to uncheck
$('#flexCheckDefault').prop('checked', false);
$('#flexCheckDefault').change(function () {
    let isChecked = $('#flexCheckDefault').is(':checked');
    if (isChecked) {
        $('#submitBtn').removeAttr('disabled');
    } else {
        $('#submitBtn').attr('disabled');
    }
    return false;
});
// hide or show password function
$("#show_hide_password").on('click', function (event) {
    event.preventDefault();
    if ($('#password').attr("type") == "text") {
        $('#password').attr('type', 'password');
        $('#show_hide_password i').addClass("fa-eye-slash");
        $('#show_hide_password i').removeClass("fa-eye");
    } else if ($('#password').attr("type") == "password") {
        $('#password').attr('type', 'text');
        $('#show_hide_password i').removeClass("fa-eye-slash");
        $('#show_hide_password i').addClass("fa-eye");
    }
});
$("#show_hide_Confirm_password").on('click', function (event) {
    event.preventDefault();
    if ($('#confirm_password').attr("type") == "text") {
        $('#confirm_password').attr('type', 'password');
        $('#show_hide_Confirm_password i').addClass("fa-eye-slash");
        $('#show_hide_Confirm_password i').removeClass("fa-eye");
    } else if ($('#confirm_password').attr("type") == "password") {
        $('#confirm_password').attr('type', 'text');
        $('#show_hide_Confirm_password i').removeClass("fa-eye-slash");
        $('#show_hide_Confirm_password i').addClass("fa-eye");
    }
});