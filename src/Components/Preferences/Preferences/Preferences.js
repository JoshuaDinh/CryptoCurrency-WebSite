import React from "react";
import "./preferences.css";
import AccountHeader from "../../Account/AccountHeader";

const Preferences = () => {
  return (
    <div className="preferences">
      <AccountHeader accountTitle="Preferences" />
      <form className="preferences__form">
        <label className="currency__label">Local Currency</label>
        <select name="user[native_currency]" id="user_native_currency">
          <option selected="selected" value="USD">
            US Dollar (USD)
          </option>
          <option value="EUR">Euro (EUR)</option>
          <option value="CNY">Chinese Renminbi Yuan (CNY)</option>
          <option value="GBP">British Pound (GBP)</option>
          <option value="CAD">Canadian Dollar (CAD)</option>
          <option disabled="disabled" value="">
            --
          </option>
          <option value="AFN">Afghan Afghani (AFN)</option>
          <option value="ALL">Albanian Lek (ALL)</option>
          <option value="DZD">Algerian Dinar (DZD)</option>
          <option value="AOA">Angolan Kwanza (AOA)</option>
          <option value="ARS">Argentine Peso (ARS)</option>
          <option value="AMD">Armenian Dram (AMD)</option>
          <option value="AWG">Aruban Florin (AWG)</option>
          <option value="AUD">Australian Dollar (AUD)</option>
          <option value="AZN">Azerbaijani Manat (AZN)</option>
          <option value="BSD">Bahamian Dollar (BSD)</option>
          <option value="BHD">Bahraini Dinar (BHD)</option>
          <option value="BDT">Bangladeshi Taka (BDT)</option>
          <option value="BBD">Barbadian Dollar (BBD)</option>
          <option value="BYN">Belarusian Ruble (BYN)</option>
          <option value="BYR">Belarusian Ruble (BYR)</option>
          <option value="BZD">Belize Dollar (BZD)</option>
          <option value="BMD">Bermudian Dollar (BMD)</option>
          <option value="BTN">Bhutanese Ngultrum (BTN)</option>
          <option value="BOB">Bolivian Boliviano (BOB)</option>
          <option value="BAM">
            Bosnia and Herzegovina Convertible Mark (BAM)
          </option>
          <option value="BWP">Botswana Pula (BWP)</option>
          <option value="BRL">Brazilian Real (BRL)</option>
          <option value="BND">Brunei Dollar (BND)</option>
          <option value="BGN">Bulgarian Lev (BGN)</option>
          <option value="BIF">Burundian Franc (BIF)</option>
          <option value="KHR">Cambodian Riel (KHR)</option>
          <option value="CVE">Cape Verdean Escudo (CVE)</option>
          <option value="KYD">Cayman Islands Dollar (KYD)</option>
          <option value="XAF">Central African Cfa Franc (XAF)</option>
          <option value="XPF">Cfp Franc (XPF)</option>
          <option value="CLP">Chilean Peso (CLP)</option>
          <option value="CNH">Chinese Renminbi Yuan Offshore (CNH)</option>
          <option value="COP">Colombian Peso (COP)</option>
          <option value="KMF">Comorian Franc (KMF)</option>
          <option value="CDF">Congolese Franc (CDF)</option>
          <option value="CRC">Costa Rican Colón (CRC)</option>
          <option value="HRK">Croatian Kuna (HRK)</option>
          <option value="CUC">Cuban Convertible Peso (CUC)</option>
          <option value="CZK">Czech Koruna (CZK)</option>
          <option value="DKK">Danish Krone (DKK)</option>
          <option value="DJF">Djiboutian Franc (DJF)</option>
          <option value="DOP">Dominican Peso (DOP)</option>
          <option value="XCD">East Caribbean Dollar (XCD)</option>
          <option value="EGP">Egyptian Pound (EGP)</option>
          <option value="ERN">Eritrean Nakfa (ERN)</option>
          <option value="EEK">Estonian Kroon (EEK)</option>
          <option value="ETB">Ethiopian Birr (ETB)</option>
          <option value="FKP">Falkland Pound (FKP)</option>
          <option value="FJD">Fijian Dollar (FJD)</option>
          <option value="GMD">Gambian Dalasi (GMD)</option>
          <option value="GEL">Georgian Lari (GEL)</option>
          <option value="GHS">Ghanaian Cedi (GHS)</option>
          <option value="GIP">Gibraltar Pound (GIP)</option>
          <option value="XAU">Gold (Troy Ounce) (XAU)</option>
          <option value="GTQ">Guatemalan Quetzal (GTQ)</option>
          <option value="GGP">Guernsey Pound (GGP)</option>
          <option value="GNF">Guinean Franc (GNF)</option>
          <option value="GYD">Guyanese Dollar (GYD)</option>
          <option value="HTG">Haitian Gourde (HTG)</option>
          <option value="HNL">Honduran Lempira (HNL)</option>
          <option value="HKD">Hong Kong Dollar (HKD)</option>
          <option value="HUF">Hungarian Forint (HUF)</option>
          <option value="ISK">Icelandic Króna (ISK)</option>
          <option value="INR">Indian Rupee (INR)</option>
          <option value="IDR">Indonesian Rupiah (IDR)</option>
          <option value="IQD">Iraqi Dinar (IQD)</option>
          <option value="IMP">Isle of Man Pound (IMP)</option>
          <option value="ILS">Israeli New Sheqel (ILS)</option>
          <option value="JMD">Jamaican Dollar (JMD)</option>
          <option value="JPY">Japanese Yen (JPY)</option>
          <option value="JEP">Jersey Pound (JEP)</option>
          <option value="JOD">Jordanian Dinar (JOD)</option>
          <option value="KZT">Kazakhstani Tenge (KZT)</option>
          <option value="KES">Kenyan Shilling (KES)</option>
          <option value="KWD">Kuwaiti Dinar (KWD)</option>
          <option value="KGS">Kyrgyzstani Som (KGS)</option>
          <option value="LAK">Lao Kip (LAK)</option>
          <option value="LVL">Latvian Lats (LVL)</option>
          <option value="LBP">Lebanese Pound (LBP)</option>
          <option value="LSL">Lesotho Loti (LSL)</option>
          <option value="LRD">Liberian Dollar (LRD)</option>
          <option value="LYD">Libyan Dinar (LYD)</option>
          <option value="LTL">Lithuanian Litas (LTL)</option>
          <option value="MOP">Macanese Pataca (MOP)</option>
          <option value="MKD">Macedonian Denar (MKD)</option>
          <option value="MGA">Malagasy Ariary (MGA)</option>
          <option value="MWK">Malawian Kwacha (MWK)</option>
          <option value="MYR">Malaysian Ringgit (MYR)</option>
          <option value="MVR">Maldivian Rufiyaa (MVR)</option>
          <option value="MTL">Maltese Lira (MTL)</option>
          <option value="MRO">Mauritanian Ouguiya (MRO)</option>
          <option value="MUR">Mauritian Rupee (MUR)</option>
          <option value="MXN">Mexican Peso (MXN)</option>
          <option value="MDL">Moldovan Leu (MDL)</option>
          <option value="MNT">Mongolian Tögrög (MNT)</option>
          <option value="MAD">Moroccan Dirham (MAD)</option>
          <option value="MZN">Mozambican Metical (MZN)</option>
          <option value="MMK">Myanmar Kyat (MMK)</option>
          <option value="NAD">Namibian Dollar (NAD)</option>
          <option value="NPR">Nepalese Rupee (NPR)</option>
          <option value="ANG">Netherlands Antillean Gulden (ANG)</option>
          <option value="TWD">New Taiwan Dollar (TWD)</option>
          <option value="NZD">New Zealand Dollar (NZD)</option>
          <option value="NIO">Nicaraguan Córdoba (NIO)</option>
          <option value="NGN">Nigerian Naira (NGN)</option>
          <option value="NOK">Norwegian Krone (NOK)</option>
          <option value="OMR">Omani Rial (OMR)</option>
          <option value="PKR">Pakistani Rupee (PKR)</option>
          <option value="XPD">Palladium (XPD)</option>
          <option value="PAB">Panamanian Balboa (PAB)</option>
          <option value="PGK">Papua New Guinean Kina (PGK)</option>
          <option value="PYG">Paraguayan Guaraní (PYG)</option>
          <option value="PEN">Peruvian Sol (PEN)</option>
          <option value="PHP">Philippine Peso (PHP)</option>
          <option value="XPT">Platinum (XPT)</option>
          <option value="PLN">Polish Złoty (PLN)</option>
          <option value="QAR">Qatari Riyal (QAR)</option>
          <option value="RON">Romanian Leu (RON)</option>
          <option value="RUB">Russian Ruble (RUB)</option>
          <option value="RWF">Rwandan Franc (RWF)</option>
          <option value="SHP">Saint Helenian Pound (SHP)</option>
          <option value="SVC">Salvadoran Colón (SVC)</option>
          <option value="WST">Samoan Tala (WST)</option>
          <option value="SAR">Saudi Riyal (SAR)</option>
          <option value="RSD">Serbian Dinar (RSD)</option>
          <option value="SCR">Seychellois Rupee (SCR)</option>
          <option value="SLL">Sierra Leonean Leone (SLL)</option>
          <option value="XAG">Silver (Troy Ounce) (XAG)</option>
          <option value="SGD">Singapore Dollar (SGD)</option>
          <option value="SBD">Solomon Islands Dollar (SBD)</option>
          <option value="SOS">Somali Shilling (SOS)</option>
          <option value="ZAR">South African Rand (ZAR)</option>
          <option value="KRW">South Korean Won (KRW)</option>
          <option value="SSP">South Sudanese Pound (SSP)</option>
          <option value="XDR">Special Drawing Rights (XDR)</option>
          <option value="LKR">Sri Lankan Rupee (LKR)</option>
          <option value="SRD">Surinamese Dollar (SRD)</option>
          <option value="SZL">Swazi Lilangeni (SZL)</option>
          <option value="SEK">Swedish Krona (SEK)</option>
          <option value="CHF">Swiss Franc (CHF)</option>
          <option value="STD">São Tomé and Príncipe Dobra (STD)</option>
          <option value="TJS">Tajikistani Somoni (TJS)</option>
          <option value="TZS">Tanzanian Shilling (TZS)</option>
          <option value="THB">Thai Baht (THB)</option>
          <option value="TOP">Tongan Paʻanga (TOP)</option>
          <option value="TTD">Trinidad and Tobago Dollar (TTD)</option>
          <option value="TND">Tunisian Dinar (TND)</option>
          <option value="TRY">Turkish Lira (TRY)</option>
          <option value="TMT">Turkmenistani Manat (TMT)</option>
          <option value="UGX">Ugandan Shilling (UGX)</option>
          <option value="UAH">Ukrainian Hryvnia (UAH)</option>
          <option value="CLF">Unidad de Fomento (CLF)</option>
          <option value="AED">United Arab Emirates Dirham (AED)</option>
          <option value="UYU">Uruguayan Peso (UYU)</option>
          <option value="UZS">Uzbekistan Som (UZS)</option>
          <option value="VUV">Vanuatu Vatu (VUV)</option>
          <option value="VEF">Venezuelan Bolívar (VEF)</option>
          <option value="VES">Venezuelan Bolívar Soberano (VES)</option>
          <option value="VND">Vietnamese Đồng (VND)</option>
          <option value="XOF">West African Cfa Franc (XOF)</option>
          <option value="YER">Yemeni Rial (YER)</option>
          <option value="ZMK">Zambian Kwacha (ZMK)</option>
          <option value="ZMW">Zambian Kwacha (ZMW)</option>
          <option value="ZWL">Zimbabwean Dollar (ZWL)</option>
        </select>
        <label className="time__zone-label">Time Zone</label>
        <select name="user[time_zone]" id="user_time_zone">
          <option value="Edinburgh">(GMT+00:00) Edinburgh</option>
          <option value="Lisbon">(GMT+00:00) Lisbon</option>
          <option value="London">(GMT+00:00) London</option>
          <option value="Monrovia">(GMT+00:00) Monrovia</option>
          <option value="UTC">(GMT+00:00) UTC</option>
          <option value="Amsterdam">(GMT+01:00) Amsterdam</option>
          <option value="Belgrade">(GMT+01:00) Belgrade</option>
          <option value="Berlin">(GMT+01:00) Berlin</option>
          <option value="Bern">(GMT+01:00) Bern</option>
          <option value="Bratislava">(GMT+01:00) Bratislava</option>
          <option value="Brussels">(GMT+01:00) Brussels</option>
          <option value="Budapest">(GMT+01:00) Budapest</option>
          <option value="Casablanca">(GMT+01:00) Casablanca</option>
          <option value="Copenhagen">(GMT+01:00) Copenhagen</option>
          <option value="Dublin">(GMT+01:00) Dublin</option>
          <option value="Ljubljana">(GMT+01:00) Ljubljana</option>
          <option value="Madrid">(GMT+01:00) Madrid</option>
          <option value="Paris">(GMT+01:00) Paris</option>
          <option value="Prague">(GMT+01:00) Prague</option>
          <option value="Rome">(GMT+01:00) Rome</option>
          <option value="Sarajevo">(GMT+01:00) Sarajevo</option>
          <option value="Skopje">(GMT+01:00) Skopje</option>
          <option value="Stockholm">(GMT+01:00) Stockholm</option>
          <option value="Vienna">(GMT+01:00) Vienna</option>
          <option value="Warsaw">(GMT+01:00) Warsaw</option>
          <option value="West Central Africa">
            (GMT+01:00) West Central Africa
          </option>
          <option value="Zagreb">(GMT+01:00) Zagreb</option>
          <option value="Zurich">(GMT+01:00) Zurich</option>
          <option value="Athens">(GMT+02:00) Athens</option>
          <option value="Bucharest">(GMT+02:00) Bucharest</option>
          <option value="Cairo">(GMT+02:00) Cairo</option>
          <option value="Harare">(GMT+02:00) Harare</option>
          <option value="Helsinki">(GMT+02:00) Helsinki</option>
          <option value="Jerusalem">(GMT+02:00) Jerusalem</option>
          <option value="Kaliningrad">(GMT+02:00) Kaliningrad</option>
          <option value="Kyiv">(GMT+02:00) Kyiv</option>
          <option value="Pretoria">(GMT+02:00) Pretoria</option>
          <option value="Riga">(GMT+02:00) Riga</option>
          <option value="Sofia">(GMT+02:00) Sofia</option>
          <option value="Tallinn">(GMT+02:00) Tallinn</option>
          <option value="Vilnius">(GMT+02:00) Vilnius</option>
          <option value="Baghdad">(GMT+03:00) Baghdad</option>
          <option value="Istanbul">(GMT+03:00) Istanbul</option>
          <option value="Kuwait">(GMT+03:00) Kuwait</option>
          <option value="Minsk">(GMT+03:00) Minsk</option>
          <option value="Moscow">(GMT+03:00) Moscow</option>
          <option value="Nairobi">(GMT+03:00) Nairobi</option>
          <option value="Riyadh">(GMT+03:00) Riyadh</option>
          <option value="St. Petersburg">(GMT+03:00) St. Petersburg</option>
          <option value="Tehran">(GMT+03:30) Tehran</option>
          <option value="Abu Dhabi">(GMT+04:00) Abu Dhabi</option>
          <option value="Baku">(GMT+04:00) Baku</option>
          <option value="Muscat">(GMT+04:00) Muscat</option>
          <option value="Samara">(GMT+04:00) Samara</option>
          <option value="Tbilisi">(GMT+04:00) Tbilisi</option>
          <option value="Volgograd">(GMT+04:00) Volgograd</option>
          <option value="Yerevan">(GMT+04:00) Yerevan</option>
          <option value="Kabul">(GMT+04:30) Kabul</option>
          <option value="Ekaterinburg">(GMT+05:00) Ekaterinburg</option>
          <option value="Islamabad">(GMT+05:00) Islamabad</option>
          <option value="Karachi">(GMT+05:00) Karachi</option>
          <option value="Tashkent">(GMT+05:00) Tashkent</option>
          <option value="Chennai">(GMT+05:30) Chennai</option>
          <option value="Kolkata">(GMT+05:30) Kolkata</option>
          <option value="Mumbai">(GMT+05:30) Mumbai</option>
          <option value="New Delhi">(GMT+05:30) New Delhi</option>
          <option value="Sri Jayawardenepura">
            (GMT+05:30) Sri Jayawardenepura
          </option>
          <option value="Kathmandu">(GMT+05:45) Kathmandu</option>
          <option value="Almaty">(GMT+06:00) Almaty</option>
          <option value="Astana">(GMT+06:00) Astana</option>
          <option value="Dhaka">(GMT+06:00) Dhaka</option>
          <option value="Urumqi">(GMT+06:00) Urumqi</option>
          <option value="Rangoon">(GMT+06:30) Rangoon</option>
          <option value="Bangkok">(GMT+07:00) Bangkok</option>
          <option value="Hanoi">(GMT+07:00) Hanoi</option>
          <option value="Jakarta">(GMT+07:00) Jakarta</option>
          <option value="Krasnoyarsk">(GMT+07:00) Krasnoyarsk</option>
          <option value="Novosibirsk">(GMT+07:00) Novosibirsk</option>
          <option value="Beijing">(GMT+08:00) Beijing</option>
          <option value="Chongqing">(GMT+08:00) Chongqing</option>
          <option value="Hong Kong">(GMT+08:00) Hong Kong</option>
          <option value="Irkutsk">(GMT+08:00) Irkutsk</option>
          <option value="Kuala Lumpur">(GMT+08:00) Kuala Lumpur</option>
          <option value="Perth">(GMT+08:00) Perth</option>
          <option value="Singapore">(GMT+08:00) Singapore</option>
          <option value="Taipei">(GMT+08:00) Taipei</option>
          <option value="Ulaanbaatar">(GMT+08:00) Ulaanbaatar</option>
          <option value="Osaka">(GMT+09:00) Osaka</option>
          <option value="Sapporo">(GMT+09:00) Sapporo</option>
          <option value="Seoul">(GMT+09:00) Seoul</option>
          <option value="Tokyo">(GMT+09:00) Tokyo</option>
          <option value="Yakutsk">(GMT+09:00) Yakutsk</option>
          <option value="Adelaide">(GMT+09:30) Adelaide</option>
          <option value="Darwin">(GMT+09:30) Darwin</option>
          <option value="Brisbane">(GMT+10:00) Brisbane</option>
          <option value="Canberra">(GMT+10:00) Canberra</option>
          <option value="Guam">(GMT+10:00) Guam</option>
          <option value="Hobart">(GMT+10:00) Hobart</option>
          <option value="Melbourne">(GMT+10:00) Melbourne</option>
          <option value="Port Moresby">(GMT+10:00) Port Moresby</option>
          <option value="Sydney">(GMT+10:00) Sydney</option>
          <option value="Vladivostok">(GMT+10:00) Vladivostok</option>
          <option value="Magadan">(GMT+11:00) Magadan</option>
          <option value="New Caledonia">(GMT+11:00) New Caledonia</option>
          <option value="Solomon Is.">(GMT+11:00) Solomon Is.</option>
          <option value="Srednekolymsk">(GMT+11:00) Srednekolymsk</option>
          <option value="Auckland">(GMT+12:00) Auckland</option>
          <option value="Fiji">(GMT+12:00) Fiji</option>
          <option value="Kamchatka">(GMT+12:00) Kamchatka</option>
          <option value="Marshall Is.">(GMT+12:00) Marshall Is.</option>
          <option value="Wellington">(GMT+12:00) Wellington</option>
          <option value="Chatham Is.">(GMT+12:45) Chatham Is.</option>
          <option value="Nuku'alofa">(GMT+13:00) Nuku'alofa</option>
          <option value="Samoa">(GMT+13:00) Samoa</option>
          <option value="Tokelau Is.">(GMT+13:00) Tokelau Is.</option>
          <option value="Azores">(GMT-01:00) Azores</option>
          <option value="Cape Verde Is.">(GMT-01:00) Cape Verde Is.</option>
          <option value="Mid-Atlantic">(GMT-02:00) Mid-Atlantic</option>
          <option value="Brasilia">(GMT-03:00) Brasilia</option>
          <option value="Buenos Aires">(GMT-03:00) Buenos Aires</option>
          <option value="Greenland">(GMT-03:00) Greenland</option>
          <option value="Montevideo">(GMT-03:00) Montevideo</option>
          <option value="Newfoundland">(GMT-03:30) Newfoundland</option>
          <option value="Atlantic Time (Canada)">
            (GMT-04:00) Atlantic Time (Canada)
          </option>
          <option value="Caracas">(GMT-04:00) Caracas</option>
          <option value="Georgetown">(GMT-04:00) Georgetown</option>
          <option value="La Paz">(GMT-04:00) La Paz</option>
          <option value="Puerto Rico">(GMT-04:00) Puerto Rico</option>
          <option value="Santiago">(GMT-04:00) Santiago</option>
          <option value="Bogota">(GMT-05:00) Bogota</option>
          <option value="Eastern Time (US &amp; Canada)">
            (GMT-05:00) Eastern Time (US &amp; Canada)
          </option>
          <option value="Indiana (East)">(GMT-05:00) Indiana (East)</option>
          <option value="Lima">(GMT-05:00) Lima</option>
          <option value="Quito">(GMT-05:00) Quito</option>
          <option value="Central America">(GMT-06:00) Central America</option>
          <option value="Central Time (US &amp; Canada)">
            (GMT-06:00) Central Time (US &amp; Canada)
          </option>
          <option value="Guadalajara">(GMT-06:00) Guadalajara</option>
          <option value="Mexico City">(GMT-06:00) Mexico City</option>
          <option value="Monterrey">(GMT-06:00) Monterrey</option>
          <option value="Saskatchewan">(GMT-06:00) Saskatchewan</option>
          <option value="Arizona">(GMT-07:00) Arizona</option>
          <option value="Chihuahua">(GMT-07:00) Chihuahua</option>
          <option value="Mazatlan">(GMT-07:00) Mazatlan</option>
          <option value="Mountain Time (US &amp; Canada)">
            (GMT-07:00) Mountain Time (US &amp; Canada)
          </option>
          <option selected="selected" value="Pacific Time (US &amp; Canada)">
            (GMT-08:00) Pacific Time (US &amp; Canada)
          </option>
          <option value="Tijuana">(GMT-08:00) Tijuana</option>
          <option value="Alaska">(GMT-09:00) Alaska</option>
          <option value="Hawaii">(GMT-10:00) Hawaii</option>
          <option value="American Samoa">(GMT-11:00) American Samoa</option>
          <option value="Midway Island">(GMT-11:00) Midway Island</option>
          <option value="International Date Line West">
            (GMT-12:00) International Date Line West
          </option>
        </select>
      </form>
    </div>
  );
};

export default Preferences;
