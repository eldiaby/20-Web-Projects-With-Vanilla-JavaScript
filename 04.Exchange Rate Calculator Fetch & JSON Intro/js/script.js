/*
const htmlOption = `<optgroup label="Africa">
<option value="DZ">Algeria</option>
<option value="AO">Angola</option>
<option value="BJ">Benin</option>
<option value="BW">Botswana</option>
<option value="BF">Burkina Faso</option>
<option value="BI">Burundi</option>
<option value="CM">Cameroon</option>
<option value="CV">Cape Verde</option>
        <option value="CF">Central African Republic</option>
        <option value="TD">Chad</option>
        <option value="DJ">Djibouti</option>
        <option value="EG" selected>Egypt</option>
        <option value="GQ">Equatorial Guinea</option>
        <option value="ER">Eritrea</option>
        <option value="SZ">Eswatini</option>
        <option value="ET">Ethiopia</option>
        <option value="GA">Gabon</option>
        <option value="GM">Gambia</option>
        <option value="GH">Ghana</option>
        <option value="GN">Guinea</option>
        <option value="GW">Guinea-bissau</option>
        <option value="KE">Kenya</option>
        <option value="LS">Lesotho</option>
        <option value="LR">Liberia</option>
        <option value="LY">Libyan Arab Jamahiriya</option>
        <option value="MG">Madagascar</option>
        <option value="MW">Malawi</option>
        <option value="ML">Mali</option>
        <option value="MR">Mauritania</option>
        <option value="MU">Mauritius</option>
        <option value="MA">Morocco</option>
        <option value="MZ">Mozambique</option>
        <option value="NA">Namibia</option>
        <option value="NE">Niger</option>
        <option value="NG">Nigeria</option>
        <option value="RW">Rwanda</option>
        <option value="ST">Sao Tome and Principe</option>
        <option value="SN">Senegal</option>
        <option value="SC">Seychelles</option>
        <option value="SL">Sierra Leone</option>
        <option value="SO">Somalia</option>
        <option value="ZA">South Africa</option>
        <option value="SS">South Sudan</option>
        <option value="TZ">Tanzania, United Republic of</option>
        <option value="TG">Togo</option>
        <option value="TN">Tunisia</option>
        <option value="UG">Uganda</option>
        <option value="EH">Western Sahara</option>
        <option value="ZM">Zambia</option>
        <option value="ZW">Zimbabwe</option>
        </optgroup>
        
        <optgroup label="Asia">
        <option value="AF">Afghanistan</option>
        <option value="AM">Armenia</option>
        <option value="AZ">Azerbaijan</option>
        <option value="BH">Bahrain</option>
        <option value="BD">Bangladesh</option>
        <option value="BT">Bhutan</option>
        <option value="BN">Brunei Darussalam</option>
        <option value="KH">Cambodia</option>
        <option value="CN">China</option>
        <option value="CY">Cyprus</option>
        <option value="GE">Georgia</option>
        <option value="IN">India</option>
        <option value="ID">Indonesia</option>
        <option value="IR">Iran, Islamic Republic of</option>
        <option value="IQ">Iraq</option>
        <option value="IL">Israel</option>
        <option value="JP">Japan</option>
        <option value="JO">Jordan</option>
        <option value="KZ">Kazakhstan</option>
        <option value="KW">Kuwait</option>
        <option value="KG">Kyrgyzstan</option>
        <option value="LA">Lao People's Democratic Republic</option>
        <option value="LB">Lebanon</option>
        <option value="MY">Malaysia</option>
        <option value="MV">Maldives</option>
        <option value="MN">Mongolia</option>
        <option value="MM">Myanmar</option>
        <option value="NP">Nepal</option>
        <option value="KP">Korea, Democratic People's Republic of</option>
        <option value="KR">Korea, Republic of</option>
        <option value="OM">Oman</option>
        <option value="PK">Pakistan</option>
        <option value="PH">Philippines</option>
        <option value="QA">Qatar</option>
        <option value="SA">Saudi Arabia</option>
        <option value="SG">Singapore</option>
        <option value="LK">Sri Lanka</option>
        <option value="SY">Syrian Arab Republic</option>
        <option value="TW">Taiwan</option>
        <option value="TJ">Tajikistan</option>
        <option value="TH">Thailand</option>
        <option value="TL">Timor-leste</option>
        <option value="TM">Turkmenistan</option>
        <option value="AE">United Arab Emirates</option>
        <option value="UZ">Uzbekistan</option>
        <option value="VN">Viet Nam</option>
        </optgroup>
        
        <optgroup label="Europe">
        <option value="AL">Albania</option>
        <option value="AD">Andorra</option>
        <option value="AT">Austria</option>
        <option value="BY">Belarus</option>
        <option value="BE">Belgium</option>
        <option value="BA">Bosnia and Herzegovina</option>
        <option value="BG">Bulgaria</option>
        <option value="HR">Croatia</option>
        <option value="CY">Cyprus</option>
        <option value="CZ">Czech Republic</option>
        <option value="DK">Denmark</option>
        <option value="EE">Estonia</option>
        <option value="FI">Finland</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
        <option value="GR">Greece</option>
        <option value="HU">Hungary</option>
        <option value="IS">Iceland</option>
        <option value="IE">Ireland</option>
        <option value="IT">Italy</option>
        <option value="LV">Latvia</option>
        <option value="LT">Lithuania</option>
        <option value="LU">Luxembourg</option>
        <option value="MK">Macedonia, The Former Yugoslav Republic of</option>
        <option value="MT">Malta</option>
        <option value="MD">Moldova, Republic of</option>
        <option value="MC">Monaco</option>
        <option value="ME">Montenegro</option>
        <option value="NL">Netherlands</option>
        <option value="NO">Norway</option>
        <option value="PL">Poland</option>
        <option value="PT">Portugal</option>
        <option value="RO">Romania</option>
        <option value="RU">Russian Federation</option>
        <option value="SK">Slovakia</option>
        <option value="SI">Slovenia</option>
        <option value="ES">Spain</option>
        <option value="SE">Sweden</option>
        <option value="CH">Switzerland</option>
        <option value="GB">United Kingdom</option>
        <option value="VA">Holy See (Vatican City State)</option>
        </optgroup>
        
        <optgroup label="Americas">
        <option value="AG">Antigua and Barbuda</option>
        <option value="AR">Argentina</option>
        <option value="BS">Bahamas</option>
        <option value="BB">Barbados</option>
        <option value="BZ">Belize</option>
        <option value="BO">Bolivia</option>
        <option value="BR">Brazil</option>
        <option value="CA">Canada</option>
        <option value="CL">Chile</option>
        <option value="CO">Colombia</option>
        <option value="CR">Costa Rica</option>
        <option value="CU">Cuba</option>
        <option value="DM">Dominica</option>
        <option value="DO">Dominican Republic</option>
        <option value="EC">Ecuador</option>
        <option value="SV">El Salvador</option>
        <option value="GQ">Equatorial Guinea</option>
        <option value="GT">Guatemala</option>
        <option value="GY">Guyana</option>
        <option value="HT">Haiti</option>
        <option value="HN">Honduras</option>
        <option value="JM">Jamaica</option>
        <option value="MX">Mexico</option>
        <option value="NI">Nicaragua</option>
        <option value="PA">Panama</option>
        <option value="PY">Paraguay</option>
        <option value="PE">Peru</option>
        <option value="PR">Puerto Rico</option>
        <option value="TT">Trinidad and Tobago</option>
        <option value="US">United States of America</option>
        <option value="UY">Uruguay</option>
        <option value="VE">Venezuela</option>
        </optgroup>
        
        <optgroup label="Oceania">
        <option value="AS">American Samoa</option>
        <option value="AU">Australia</option>
        <option value="CK">Cook Islands</option>
        <option value="FJ">Fiji</option>
        <option value="FM">Micronesia, Federated States of</option>
        <option value="GU">Guam</option>
        <option value="KI">Kiribati</option>
        <option value="MH">Marshall Islands</option>
        <option value="MP">Northern Mariana Islands</option>
        <option value="NZ">New Zealand</option>
        <option value="PW">Palau</option>
        <option value="PG">Papua New Guinea</option>
        <option value="WS">Samoa</option>
        <option value="SB">Solomon Islands</option>
        <option value="TK">Tokelau</option>
        <option value="TV">Tuvalu</option>
        <option value="VU">Vanuatu</option>
        </optgroup>`;
        
        document.querySelectorAll('select').forEach(function (element) {
  element.insertAdjacentHTML('beforeend', htmlOption);
});
*/
'use strict';

// Variables elements
const currencyElement_one = document.querySelector('#first-currency-country');
const currencyElement_two = document.querySelector('#second-currency-country');
const amountElement_one = document.querySelector('#first-amount');
const amountElement_two = document.querySelector('#second-amount');
const btnSwap = document.querySelector('.btn-swap');
const rate = document.querySelector('.rate');

// Functions

const calculate = function () {
  const currency_one = currencyElement_one.value;
  const currency_two = currencyElement_two.value;
  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then((res) => res.json())
    .then((data) => {
      amountElement_two.value = (
        amountElement_one.value * data.rates[`${currency_two}`]
      ).toFixed(2);

      rate.innerHTML = `<p> 1 ${currency_one} = ${
        data.rates[`${currency_two}`]
      } ${currency_two} </p>`;
    });
};

const swapFunctions = function () {
  [currencyElement_one.value, currencyElement_two.value] = [
    currencyElement_two.value,
    currencyElement_one.value,
  ];
  calculate();
};

// Event listeners

currencyElement_one.addEventListener('change', calculate);
amountElement_one.addEventListener('input', calculate);
currencyElement_two.addEventListener('change', calculate);
amountElement_two.addEventListener('input', calculate);
btnSwap.addEventListener('click', swapFunctions);
calculate();
