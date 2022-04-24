const express = require('express');
const cors = require('cors')({
  origin: true
});
var axios = require('axios');
const router = express.Router();
const db = require('../api/db_connection');
const uuid = require('uuid');

router.post('/', async (req, res) => {
  const restaurant_info = {
    //*merchant
    First_name: req.body.first_name,
    Last_name: req.body.last_name,
    Tel: req.body.tel,
    Email: req.body.email,
    Id_card_number: req.body.Id_card_number,
    Password: req.body.password,
    //*restaurant 
    Restaurant_name: req.body.restaurant_name,
    Restaurant_type_id: 5,
    Bank: req.body.bank,
    Account_number: req.body.Account_number,
    Provinces_id: req.body.province,
    amphures_id: req.body.amphur,
    districts_id: req.body.district,

    url_Copy_Res_Id_card_number: req.body.url_Copy_Res_Id_card_number,
    // Id_exp_datepicker:req.body.Id_exp_datepicker,
    url_Restaurant_business_license: req.body.url_Restaurant_business_license,
    url_Copy_res_house_registration: req.body.url_Copy_res_house_registration,
    url_Restaurant_Photo: req.body.url_Restaurant_Photo,
    url_Copy_bank_book: req.body.url_Copy_bank_book
  }
  console.log(restaurant_info);

  await axios.post(
      'https://foodplus-project.web.app/api/merchant/register',
      restaurant_info, {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
    .then(function (response) {
      console.log(response.data.data);
      res.send('ลงทะเบียนร้านค้าเสร็จสิ้น');
    })
    .catch(function (error) {
      console.log(error);
    });

})
module.exports = router;