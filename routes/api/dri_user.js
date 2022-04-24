const express = require('express');
var axios = require('axios');
const router = express.Router();
const db = require('../api/db_connection');
const uuid = require('uuid');

router.post('/', async (req, res) => {
  const driver_info = {
    First_name: req.body.first_name,
    Last_name: req.body.last_name,
    Id_card_number: req.body.Id_card_number,
    Tel: req.body.tel,
    Email: req.body.email,
    Address: req.body.Address,
    Provinces: req.body.province,
    amphures: req.body.amphur, //*อำเภอ
    // districts: req.body.district, //*ตำบล
    Password: req.body.password,
    Bank: req.body.bank,
    Account_number: req.body.Account_number,

    Additional_document: req.body.url_Money_transfer_slip,
    url_Copy_Driver_Id_card_number: req.body.url_Copy_Driver_Id_card_number,
    Id_exp_datepicker: req.body.Id_exp_datepicker,
    url_Copy_driver_license: req.body.url_Copy_driver_license,
    Driver_exp_datepicker: req.body.Driver_exp_datepicker,
    url_Copy_Act_legislation: req.body.url_copy_Act_legislation,
    Act_legislation_exp_date: req.body.Act_legislation_exp_date,

    //*Working area,user has only one chance to select 
    Provinces_id: req.body.province_working,
    amphures_id: req.body.amphur_working,
  }
  console.log(driver_info);
  await axios.post(
      'https://foodplus-project.web.app/api/driver/register',
      driver_info, {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
    .then(function (response) {
      console.log(response.data);
      res.send('ลงทะเบียนคนขับสำเร็จ');
    })
    .catch(function (error) {
      console.log(error.data);
      // res.send('ลงทะเบียนคนขับไม่สำเร็จ');
    });

})

module.exports = router;