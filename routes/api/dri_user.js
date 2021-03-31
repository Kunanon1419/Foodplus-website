const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const driver_info = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        Id_card_number:req.body.Id_card_number,
        tel: req.body.tel,
        email: req.body.email,
        sex: req.body.sex,
        province: req.body.province,
        ampur: req.body.ampur,
        district: req.body.district,
        province_working:req.body.province_working,
        amphur_working:req.body.amphur_working,
        password: req.body.password,
        url_Money_transfer_slip:req.body.url_Money_transfer_slip,
        url_Copy_Driver_Id_card_number:req.body.url_Copy_Driver_Id_card_number,
        Id_exp_datepicker:req.body.Id_exp_datepicker,
        url_Copy_driver_license:req.body.url_Copy_driver_license,
        Driver_exp_datepicker:req.body.Driver_exp_datepicker,
        url_copy_Act_legislation:req.body.url_copy_Act_legislation,
        Act_legislation_exp_date:req.body.Act_legislation_exp_date
    }
    // if (!driver_info.first_name || !driver_info.email) {
    //     return res.status(400).json({
    //         msg: "Please include a name and email"
    //     });
    // }
    //res_users.push(newUser);
    res.json(driver_info);
    res.redirect('/');
})
module.exports = router;