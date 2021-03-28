// Call Auto Province Function
$('body').AutoProvince({
    PROVINCE: '#province', // select div สำหรับรายชื่อจังหวัด
    AMPHUR: '#amphur', // select div สำหรับรายชื่ออำเภอ
    DISTRICT: '#district', // select div สำหรับรายชื่อตำบล
    POSTCODE: '#postcode', // input field สำหรับรายชื่อรหัสไปรษณีย์
    GEOGRAPHY: '#geography', // input field แสดงภาค
    CURRENT_PROVINCE: 4, //  แสดงค่าเริ่มต้น ใส่ไอดีจังหวัดที่เคยเลือกไว้
    CURRENT_AMPHUR: 4, // แสดงค่าเริ่มต้น  ใส่ไอดีอำเภอที่เคยเลือกไว้
    CURRENT_DISTRICT: 1, // แสดงค่าเริ่มต้น  ใส่ไอดีตำบลที่เคยเลือกไว้
    arrangeByName: true // กำหนดให้เรียงตามตัวอักษร
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

// btn goto next element
$('.btn:not(#search_location,#show_hide_password,#show_hide_Confirm_password)').not('[id^="upload-"]')
.click(function () {
    $(this).parent().hide().next().show(); //hide parent and show next
    //e.preventDefault();
    //return false;
});

/*reCAPTCHA callback*/
/*function reCAPTCHACallback() {
    $('#submitBtn').removeAttr('disabled');
};*/

// checkbox and reCAPTCHA validation
/*$('#submitBtn').click(function () {
    let isChecked = $('#flexCheckDefault').is(':checked');
    if (!isChecked) {
        alert('กรุณายอมรับเงื่อนไขและข้อกำหนด');
    }
    else {
        //$('#reCAPTCHA').submit();
        //$(this).parent().hide().next().show();///hide parent and show next 
    }
    return false;
});*/