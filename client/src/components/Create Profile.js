<!DOCTYPE html PUBLIC

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'



<link rel="shortcut icon" type="image/x-icon" href="https://aafp.org/favicon.ico">
<link rel="stylesheet" href="./Create an AAFP.org Account_files/style.css" type="text/css">
<link href="./Create an AAFP.org Account_files/Site.css" rel="stylesheet" type="text/css">



<script type="text/javascript">
	$.validator.setDefaults({
		onkeyup: function (element) {
			if (element.name == 'Email') {
				return false;
			}
		}
	});
</script>

<!--[if lt IE 9]>
           <script src="/Account/Scripts/IeFix.js" type="text/javascript"></script>
    <![endif]-->

<!-- font override to fix invisible passwords -->
<!--[if lte IE 8]> 
<style> 
  input { 
    font-family: Arial !important; 
  } 
</style> 
<![endif]-->
<style id="fit-vids-style">
	.fluid-width-video-wrapper {
		width: 100%;
		position: relative;
		padding: 0;
	}

	.fluid-width-video-wrapper iframe,
	.fluid-width-video-wrapper object,
	.fluid-width-video-wrapper embed {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>
</head>

<body>
	
	

	<!-- Main content -->
	<div id="main" class="page-wrap">


		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">

			
  
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
			  <ul className="navbar-nav mr-auto">
				<li className="nav-item active">
				  <a className="nav-link" href="">Home <span class="sr-only">(current)</span></a>
				</li>
				<li class="nav-item">
				  <a class="nav-link" href="#">Supervisor</a>
				</li>
  
  
				<li class="nav-item">
				  <a class="nav-link" href="#">Resident</a>
				</li>
			  </ul>
			  <form class="form-inline my-2 my-lg-0">
				<!--<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
				<button class="btn btn-outline-success my-2 my-sm-0" type="submit">
				  Search
			  </button>-->
			  </form>
			</div>
		  </nav>


		<section style="min-height: 70px;" id="content" class="full extra-width no-gutter">
			<div>
				<!--No Navagation-->
				<form action=""
				 id="IndividualAccount" method="post" novalidate="novalidate"> <input type="hidden" id="initialEmail" name="initialEmail">
					<input type="hidden" id="initialUsername" name="initialUsername">
					<input data-val="true" data-val-required="The Key field is required." id="Key" name="Key" type="hidden" value="00000000-0000-0000-0000-000000000000"><input
					 id="FaafpFellowshipYear" name="FaafpFellowshipYear" type="hidden" value=""><input data-val="true"
					 data-val-required="The IsMember field is required." id="IsMember" name="IsMember" type="hidden" value="False"><input
					 id="LoginUrl" name="LoginUrl" type="hidden" value="">
					<div id="stepTabs" class="ui-tabs ui-widget ui-widget-content ui-corner-all">



						<div id="step-1" class="tabStep ui-tabs-panel ui-widget-content ui-corner-bottom">
							<hgroup class="horizontal-gradient">
								<h1 class="horizontal-gradient">Create A Profile...<span class="sub-info"></span></h1>
							</hgroup>

							<div class="alert-box -info" style="margin-right:10px;margin-left:10px;">
								<!-- see style variable -->
								<div class="alert-box__icon"><span class="fa fa-exclamation-circle fa-2x -white"></span></div>
								<!-- see fa variables -->

								<div class="alert-box__content">
									<p> <i>Enter your profile pic...</i></p>
									<p>Select a file: <input type="file" name="myFile"></p>
								</div>
							</div>
							<div class="gridcolparsys">
								<div class="four-column">
									<label for="FirstName">First Name <span class="required">*</span></label>
									<input data-val="true" data-val-required="This field is required." id="FirstName" maxlength="30" name="FirstName"
									 size="16" tabindex="1" title="First name" type="text" value="Stephen" class="valid">
									<span class="field-validation-valid" data-valmsg-for="FirstName" data-valmsg-replace="true"></span>
								</div>
								<div class="four-column">
									<label for="LastName">Last Name <span class="required">*</span></label>
									<input data-val="true" data-val-required="This field is required." id="LastName" maxlength="30" name="LastName"
									 size="16" tabindex="1" title="Last name" type="text" value="Smith" class="valid">
									<span class="field-validation-valid" data-valmsg-for="LastName" data-valmsg-replace="true"></span>
								</div>
								<div class="three-column">

								</div>
								<div class="clearfix"></div>
								<div class="four-column">


									</select>
								</div>
								<div class="four-column" id="alliedHealthSegmentContainer">
									<p class="mobile-hide"><br></p>
									<label for="AlliedHealthSegment">Area of Speciality <span class="required">*</span></label>
									<select id="AlliedHealthSegment_Key" name="AlliedHealthSegment.Key" tabindex="1">
										<option value="">-- Please select a category --</option>
										<option value="5909884d-a819-45f9-ac76-5bf72158f146">Internal Medicine</option>
										<option value="5d5ef695-80f3-4e2f-a81f-852563da7ed6">Brain Surgeon</option>
										<option value="b9c79379-0cd1-4df3-aeae-ac9c6441f060">Podiatry</option>
										<option value="956cda04-cef0-4e24-acb8-f4691f9a92ac">Emergency Medical Responder (EMT/Paramedic/EMS)</option>
										<option value="27625023-9651-4836-9c6a-9f92ddf9807e">Health Education Specialist</option>
										<option value="c7b6100b-42ab-457c-808a-bd0b24aaaa3e">Lab Director</option>
										<option value="559c1436-1e24-4038-80e1-fcf3d3be7681">Med Techs (lab)</option>
										<option value="f7bb8ca0-34a1-4349-a647-e52ce2cffc2c">Chiropracty</option>
										<option value="fdc3b8af-05ff-4440-9a0d-836e48c3baed">NA (nurse assistant)</option>
										<option value="1e02ce9f-d089-4ef9-976d-64ffd87014ac">NP (nurse practitioner)</option>
										<option value="56d76df1-bfe4-40ae-9f0b-2d2ad3e71dce">Nurse (RN/LPN)</option>
										<option value="ee0e713b-9e4a-4f16-896e-bc224a409f6a">Office (Practice) Manager</option>
										<option value="50f9de54-2337-4214-910d-8bfea320b786">Other</option>
										<option value="27c9e01d-a46e-40b6-8c1f-c1f8a63267c2">PA (physician assistant)</option>
										<option value="c95bb359-edcd-4d4c-a7d2-461bb9b94bd4">Practice administrator</option>
									</select>
								</div>
								<div class="clearfix"></div>
								<div class="four-column">
									<label for="Email">
										Email address <span class="required">*</span>
									</label>
									<span class="field-validation-valid" data-valmsg-for="Email" data-valmsg-replace="true"></span>
									<input data-val="true" data-val-regex="Invalid email" data-val-regex-pattern="^([\w\!\#$\%\&amp;\&#39;\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&amp;\&#39;\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-zA-Z0-9]{1}[a-zA-Z0-9\-]{0,62}[a-zA-Z0-9]{1})|[a-zA-Z])\.)+[a-zA-Z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$"
									 data-val-required="This field is required." id="Email" maxlength="80" name="Email" pattern="^([\w\!\#$\%\&amp;\&#39;\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&amp;\&#39;\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-zA-Z0-9]{1}[a-zA-Z0-9\-]{0,62}[a-zA-Z0-9]{1})|[a-zA-Z])\.)+[a-zA-Z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$"
									 placeholder="" size="16" tabindex="1" type="email" value="SSmith@yahoo.com">
									<span id="email_ok" class="field-validation-valid">
										<img alt="Email available." src="">
										Email available.
									</span>
								</div>
								<div class="clearfix"></div>
								<div class="four-column" <p><span class="required"></span></p>
								</div>
								<div class="two-column tabButton clearfix">

								</div>
							</div>
						</div>
						<div id="step-2" class="tabStep ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide">
							<hgroup class="horizontal-gradient">
								<h1 class="horizontal-gradient">Create An Account - Mailing Address<span class="sub-info"></span></h1>
							</hgroup>
							<div class="gridcolparsys">
								<div id="Addresses_0">
									<input data-val="true" data-val-required="The Key field is required." id="Addresses_0__Key" name="Addresses[0].Key"
									 type="hidden" value="00000000-0000-0000-0000-000000000000">
									<input id="Addresses_0__County" name="Addresses[0].County" type="hidden" value="">
									<input id="Addresses_0__CongressDistrictNumber" name="Addresses[0].CongressDistrictNumber" type="hidden" value="">
									<input id="Addresses_0__StateHouse" name="Addresses[0].StateHouse" type="hidden" value="">
									<input id="Addresses_0__StateSenate" name="Addresses[0].StateSenate" type="hidden" value="">
									<input id="Addresses_0__MetroStatArea" name="Addresses[0].MetroStatArea" type="hidden" value="">
									<input id="Addresses_0__CarrierRoute" name="Addresses[0].CarrierRoute" type="hidden" value="">
									<input id="Addresses_0__DeliveryPoint" name="Addresses[0].DeliveryPoint" type="hidden" value="">
									<input id="Addresses_0__TimeZone" name="Addresses[0].TimeZone" type="hidden" value="">
									<input id="Addresses_0__Urbanization" name="Addresses[0].Urbanization" type="hidden" value="">
									<input id="Addresses_0__BarCode" name="Addresses[0].BarCode" type="hidden" value="">
									<input id="Addresses_0__Fips" name="Addresses[0].Fips" type="hidden" value="">
									<input data-val="true" data-val-number="The field AverageLongitude must be a number." data-val-required="The AverageLongitude field is required."
									 id="Addresses_0__AverageLongitude" name="Addresses[0].AverageLongitude" type="hidden" value="0">
									<input data-val="true" data-val-number="The field AverageLatitude must be a number." data-val-required="The AverageLatitude field is required."
									 id="Addresses_0__AverageLatitude" name="Addresses[0].AverageLatitude" type="hidden" value="0">
									<input data-val="true" data-val-required="The ReturnCode field is required." id="Addresses_0__ReturnCode" name="Addresses[0].ReturnCode"
									 type="hidden" value="AddressDPVConfirmed">
									<input data-val="true" data-val-required="The NoValidationRequired field is required." id="Addresses_0__NoValidationRequired"
									 name="Addresses[0].NoValidationRequired" type="hidden" value="False">
									<input id="Addresses_0__AddressType" name="Addresses[0].AddressType" type="hidden" value="">
									<input data-val="true" data-val-required="The IsBilling field is required." id="Addresses_0__IsBilling" name="Addresses[0].IsBilling"
									 type="hidden" value="False">
									<div class="four-column">
										<label for="Addresses_0__Address1">Address line 1 <span class="required">*</span></label>
										<span class="field-validation-valid" data-valmsg-for="Addresses[0].Address1" data-valmsg-replace="true"></span>
										<input data-val="true" data-val-required="This field is required." id="Addresses_0__Address1" maxlength="75"
										 name="Addresses[0].Address1" tabindex="1" title="Address line 1" type="text" value="28 Westhampton Way"
										 class="">
									</div>
									<div class="four-column">
										<label>Address line 2 </label>
										<input id="Addresses_0__Address2" maxlength="75" name="Addresses[0].Address2" tabindex="1" title="Address line 2"
										 type="text" value="" class="blurred">
									</div>
									<div class="clearfix"></div>
									<div class="two-column">
										<label>Zip <span class="required">*</span></label>
										<input data-val="true" data-val-conditionallyrequired="This field is required."
										 data-val-conditionallyrequired-conditionalproperty="Country" data-val-conditionallyrequired-conditionalvalue="UNITED STATES"
										 data-val-conditionallyrequired-negativeconditionalvalue=" " id="Addresses_0__PostalCode" maxlength="20" name="Addresses[0].PostalCode"
										 tabindex="1" title="Postal code" type="text" value="23173" class="">
									</div>
									<div class="clearfix"></div>
									<div class="four-column">
										<label>City <span class="required">*</span></label>
										<input data-val="true" data-val-required="This field is required." id="Addresses_0__City" maxlength="40" name="Addresses[0].City"
										 tabindex="1" title="City" type="text" value="Richmond" class="">
									</div>
									<div class="one-column">
										<label>State <span class="required">*</span></label>
										<span class="field-validation-valid" data-valmsg-for="Addresses[0].State" data-valmsg-replace="true"></span>
										<select class="address_state" data-val="true" data-val-required="This field is required." id="Addresses_0__State"
										 name="Addresses[0].State" tabindex="1">
											<option value="AA">VA</option>
											<option value="AE">AE</option>
											<option value="AK">AK</option>
											<option value="AL">AL</option>
											<option value="AP">AP</option>
											<option value="AR">AR</option>
											<option value="AS">AS</option>
											<option value="AZ">AZ</option>
											<option value="CA">CA</option>
											<option value="CO">CO</option>
											<option value="CT">CT</option>
											<option value="DC">DC</option>
											<option value="DE">DE</option>
											<option value="FL">FL</option>
											<option value="FM">FM</option>
											<option value="FP">FP</option>
											<option value="GA">GA</option>
											<option value="GU">GU</option>
											<option value="HI">HI</option>
											<option value="IA">IA</option>
											<option value="ID">ID</option>
											<option value="IL">IL</option>
											<option value="IN">IN</option>
											<option value="KS">KS</option>
											<option value="KY">KY</option>
											<option value="LA">LA</option>
											<option value="MA">MA</option>
											<option value="MD">MD</option>
											<option value="ME">ME</option>
											<option value="MI">MI</option>
											<option value="MN">MN</option>
											<option value="MO">MO</option>
											<option value="MP">MP</option>
											<option value="MS">MS</option>
											<option value="MT">MT</option>
											<option value="NC">NC</option>
											<option value="ND">ND</option>
											<option value="NE">NE</option>
											<option value="NH">NH</option>
											<option value="NJ">NJ</option>
											<option value="NM">NM</option>
											<option value="NV">NV</option>
											<option value="NY">NY</option>
											<option value="OH">OH</option>
											<option value="OK">OK</option>
											<option value="OR">OR</option>
											<option value="PA">PA</option>
											<option value="PR">PR</option>
											<option value="RI">RI</option>
											<option value="SC">SC</option>
											<option value="SD">SD</option>
											<option value="TN">TN</option>
											<option value="TX">TX</option>
											<option value="UT">UT</option>
											<option value="VA">VA</option>
											<option value="VI">VI</option>
											<option value="VT">VT</option>
											<option value="WA">WA</option>
											<option value="WI">WI</option>
											<option value="WV">WV</option>
											<option value="WY">WY</option>
										</select>
									</div>
									<div class="four-column">
										<label>Country <span class="required">*</span></label>
										<select data-val="true" data-val-required="This field is required." id="Addresses_0__Country" name="Addresses[0].Country"
										 tabindex="1">
											<option value="AFGHANISTAN">AFGHANISTAN</option>
											<option value="ALBANIA">ALBANIA</option>
											<option value="ALGERIA">ALGERIA</option>
											<option value="ANDORRA">ANDORRA</option>
											<option value="ANGOLA">ANGOLA</option>
											<option value="ANGUILLA">ANGUILLA</option>
											<option value="ANTARCTICA">ANTARCTICA</option>
											<option value="ANTIGUA">ANTIGUA</option>
											<option value="ARGENTINA">ARGENTINA</option>
											<option value="ARMENIA">ARMENIA</option>
											<option value="ARUBA">ARUBA</option>
											<option value="AUSTRALIA">AUSTRALIA</option>
											<option value="AUSTRIA">AUSTRIA</option>
											<option value="AZERBAIJAN">AZERBAIJAN</option>
											<option value="BAHAMAS">BAHAMAS</option>
											<option value="BAHRAIN">BAHRAIN</option>
											<option value="BANGLADESH">BANGLADESH</option>
											<option value="BARBADOS">BARBADOS</option>
											<option value="BELARUS">BELARUS</option>
											<option value="BELGIUM">BELGIUM</option>
											<option value="BELIZE">BELIZE</option>
											<option value="BENIN">BENIN</option>
											<option value="BERMUDA">BERMUDA</option>
											<option value="BHUTAN">BHUTAN</option>
											<option value="BOLIVIA">BOLIVIA</option>
											<option value="BOSNIA">BOSNIA</option>
											<option value="BOTSWANA">BOTSWANA</option>
											<option value="BRAZIL">BRAZIL</option>
											<option value="BRITISH VIRGIN ISLANDS">BRITISH VIRGIN ISLANDS</option>
											<option value="BRUNEI">BRUNEI</option>
											<option value="BULGARIA">BULGARIA</option>
											<option value="BURKINA FASO">BURKINA FASO</option>
											<option value="BURUNDI">BURUNDI</option>
											<option value="CAMBODIA">CAMBODIA</option>
											<option value="CAMEROON">CAMEROON</option>
											<option value="CANADA">CANADA</option>
											<option value="CAPE VERDE">CAPE VERDE</option>
											<option value="CAYMAN ISLANDS">CAYMAN ISLANDS</option>
											<option value="CENTRAL AFRICAN REPUBLIC">CENTRAL AFRICAN REPUBLIC</option>
											<option value="CHAD">CHAD</option>
											<option value="CHILE">CHILE</option>
											<option value="CHINA">CHINA</option>
											<option value="COLOMBIA">COLOMBIA</option>
											<option value="COMOROS">COMOROS</option>
											<option value="CONGO">CONGO</option>
											<option value="COOK ISLANDS">COOK ISLANDS</option>
											<option value="COSTA RICA">COSTA RICA</option>
											<option value="Côte d&#39;Ivoire">Côte d'Ivoire</option>
											<option value="CROATIA">CROATIA</option>
											<option value="CUBA">CUBA</option>
											<option value="CYPRUS">CYPRUS</option>
											<option value="CZECH REPUBLIC">CZECH REPUBLIC</option>
											<option value="DEMOCRATIC REPUBLIC OF THE CONGO">DEMOCRATIC REPUBLIC OF THE CONGO</option>
											<option value="DENMARK">DENMARK</option>
											<option value="DJIBOUTI">DJIBOUTI</option>
											<option value="DOMINICA">DOMINICA</option>
											<option value="DOMINICAN REPUBLIC">DOMINICAN REPUBLIC</option>
											<option value="EAST TIMOR">EAST TIMOR</option>
											<option value="ECUADOR">ECUADOR</option>
											<option value="EGYPT">EGYPT</option>
											<option value="EL SALVADOR">EL SALVADOR</option>
											<option value="EQUATORIAL GUINEA">EQUATORIAL GUINEA</option>
											<option value="ERITREA">ERITREA</option>
											<option value="ESTONIA">ESTONIA</option>
											<option value="ETHIOPIA">ETHIOPIA</option>
											<option value="FALKLAND ISLANDS">FALKLAND ISLANDS</option>
											<option value="FAROE ISLANDS">FAROE ISLANDS</option>
											<option value="FIJI">FIJI</option>
											<option value="FINLAND">FINLAND</option>
											<option value="FRANCE">FRANCE</option>
											<option value="FRENCH ANTILLES">FRENCH ANTILLES</option>
											<option value="FRENCH GUIANA">FRENCH GUIANA</option>
											<option value="FRENCH POLYNESIA">FRENCH POLYNESIA</option>
											<option value="GABON">GABON</option>
											<option value="GAMBIA">GAMBIA</option>
											<option value="GEORGIA">GEORGIA</option>
											<option value="GERMANY">GERMANY</option>
											<option value="GHANA">GHANA</option>
											<option value="GIBRALTAR">GIBRALTAR</option>
											<option value="GREECE">GREECE</option>
											<option value="GREENLAND">GREENLAND</option>
											<option value="GRENADA">GRENADA</option>
											<option value="GUATEMALA">GUATEMALA</option>
											<option value="GUINEA">GUINEA</option>
											<option value="GUINEA-BISSAU">GUINEA-BISSAU</option>
											<option value="GUYANA">GUYANA</option>
											<option value="HAITI">HAITI</option>
											<option value="HONDURAS">HONDURAS</option>
											<option value="HONG KONG">HONG KONG</option>
											<option value="HUNGARY">HUNGARY</option>
											<option value="ICELAND">ICELAND</option>
											<option value="INDIA">INDIA</option>
											<option value="INDONESIA">INDONESIA</option>
											<option value="IRAN">IRAN</option>
											<option value="IRAQ">IRAQ</option>
											<option value="IRELAND">IRELAND</option>
											<option value="ISRAEL">ISRAEL</option>
											<option value="ITALY">ITALY</option>
											<option value="JAMAICA">JAMAICA</option>
											<option value="JAPAN">JAPAN</option>
											<option value="JORDAN">JORDAN</option>
											<option value="KAZAKHSTAN">KAZAKHSTAN</option>
											<option value="KENYA">KENYA</option>
											<option value="KIRIBATI">KIRIBATI</option>
											<option value="KUWAIT">KUWAIT</option>
											<option value="KYRGYZ">KYRGYZ</option>
											<option value="LAOS">LAOS</option>
											<option value="LATVIA">LATVIA</option>
											<option value="LEBANON">LEBANON</option>
											<option value="LESOTHO">LESOTHO</option>
											<option value="LIBERIA">LIBERIA</option>
											<option value="LIBYA">LIBYA</option>
											<option value="LIECHTENSTEIN">LIECHTENSTEIN</option>
											<option value="LITHUANIA">LITHUANIA</option>
											<option value="LUXEMBOURG">LUXEMBOURG</option>
											<option value="MACAU">MACAU</option>
											<option value="MACEDONIA">MACEDONIA</option>
											<option value="MADAGASCAR">MADAGASCAR</option>
											<option value="MALAWI">MALAWI</option>
											<option value="MALAYSIA">MALAYSIA</option>
											<option value="MALDIVES">MALDIVES</option>
											<option value="MALI">MALI</option>
											<option value="MALTA">MALTA</option>
											<option value="MARSHALL ISLANDS">MARSHALL ISLANDS</option>
											<option value="MARTINIQUE">MARTINIQUE</option>
											<option value="MAURITANIA">MAURITANIA</option>
											<option value="MAURITIUS">MAURITIUS</option>
											<option value="MEXICO">MEXICO</option>
											<option value="MICRONESIA">MICRONESIA</option>
											<option value="MOLDOVA">MOLDOVA</option>
											<option value="MONACO">MONACO</option>
											<option value="MONGOLIA">MONGOLIA</option>
											<option value="MONTSERRAT">MONTSERRAT</option>
											<option value="MOROCCO">MOROCCO</option>
											<option value="MOZAMBIQUE">MOZAMBIQUE</option>
											<option value="MYANMAR">MYANMAR</option>
											<option value="NAMIBIA">NAMIBIA</option>
											<option value="NAURU">NAURU</option>
											<option value="NEPAL">NEPAL</option>
											<option value="NETHERLANDS">NETHERLANDS</option>
											<option value="NETHERLANDS ANTILLES">NETHERLANDS ANTILLES</option>
											<option value="NEW CALEDONIA">NEW CALEDONIA</option>
											<option value="NEW ZEALAND">NEW ZEALAND</option>
											<option value="NICARAGUA">NICARAGUA</option>
											<option value="NIGER">NIGER</option>
											<option value="NIGERIA">NIGERIA</option>
											<option value="NORTH KOREA">NORTH KOREA</option>
											<option value="NORWAY">NORWAY</option>
											<option value="OMAN">OMAN</option>
											<option value="PAKISTAN">PAKISTAN</option>
											<option value="PALAU">PALAU</option>
											<option value="PALESTINE">PALESTINE</option>
											<option value="PANAMA">PANAMA</option>
											<option value="PAPUA NEW GUINEA">PAPUA NEW GUINEA</option>
											<option value="PARAGUAY">PARAGUAY</option>
											<option value="PERU">PERU</option>
											<option value="PHILIPPINES">PHILIPPINES</option>
											<option value="POLAND">POLAND</option>
											<option value="PORTUGAL">PORTUGAL</option>
											<option value="QATAR">QATAR</option>
											<option value="ROMANIA">ROMANIA</option>
											<option value="RUSSIA">RUSSIA</option>
											<option value="RWANDA">RWANDA</option>
											<option value="SAINT HELENA">SAINT HELENA</option>
											<option value="SAINT KITTS AND NEVIS">SAINT KITTS AND NEVIS</option>
											<option value="SAINT LUCIA">SAINT LUCIA</option>
											<option value="SAINT PIERRE AND MIQUELON">SAINT PIERRE AND MIQUELON</option>
											<option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
											<option value="SAMOA">SAMOA</option>
											<option value="SAN MARINO">SAN MARINO</option>
											<option value="Sao Tome and Principe">Sao Tome and Principe</option>
											<option value="SAUDI ARABIA">SAUDI ARABIA</option>
											<option value="SCOTLAND">SCOTLAND</option>
											<option value="SENEGAL">SENEGAL</option>
											<option value="SERBIA">SERBIA</option>
											<option value="SEYCHELLES">SEYCHELLES</option>
											<option value="SIERRA LEONE">SIERRA LEONE</option>
											<option value="SINGAPORE">SINGAPORE</option>
											<option value="SLOVAKIA">SLOVAKIA</option>
											<option value="SLOVENIA">SLOVENIA</option>
											<option value="SOLOMON ISLANDS">SOLOMON ISLANDS</option>
											<option value="SOMALIA">SOMALIA</option>
											<option value="SOUTH AFRICA">SOUTH AFRICA</option>
											<option value="SOUTH KOREA">SOUTH KOREA</option>
											<option value="SPAIN">SPAIN</option>
											<option value="SRI LANKA">SRI LANKA</option>
											<option value="SUDAN">SUDAN</option>
											<option value="SURINAME">SURINAME</option>
											<option value="SWAZILAND">SWAZILAND</option>
											<option value="SWEDEN">SWEDEN</option>
											<option value="SWITZERLAND">SWITZERLAND</option>
											<option value="SYRIA">SYRIA</option>
											<option value="TAIWAN">TAIWAN</option>
											<option value="TAJIKISTAN">TAJIKISTAN</option>
											<option value="TANZANIA">TANZANIA</option>
											<option value="THAILAND">THAILAND</option>
											<option value="TOGO">TOGO</option>
											<option value="TOKELAU">TOKELAU</option>
											<option value="TONGA">TONGA</option>
											<option value="TRINIDAD AND TOBAGO">TRINIDAD AND TOBAGO</option>
											<option value="TUNISIA">TUNISIA</option>
											<option value="TURKEY">TURKEY</option>
											<option value="TURKMENISTAN">TURKMENISTAN</option>
											<option value="TURKS and CAICOS ISLANDS">TURKS and CAICOS ISLANDS</option>
											<option value="TUVALU">TUVALU</option>
											<option value="UGANDA">UGANDA</option>
											<option value="UKRAINE">UKRAINE</option>
											<option value="UNITED ARAB EMIRATES">UNITED ARAB EMIRATES</option>
											<option value="UNITED KINGDOM">UNITED KINGDOM</option>
											<option selected="selected" value="UNITED STATES">UNITED STATES</option>
											<option value="URUGUAY">URUGUAY</option>
											<option value="UZBEKISTAN">UZBEKISTAN</option>
											<option value="VANUATU">VANUATU</option>
											<option value="VATICAN">VATICAN</option>
											<option value="VENEZUELA">VENEZUELA</option>
											<option value="VIETNAM">VIETNAM</option>
											<option value="YEMEN">YEMEN</option>
											<option value="YUGOSLAVIA">YUGOSLAVIA</option>
											<option value="ZAIRE">ZAIRE</option>
											<option value="ZAMBIA">ZAMBIA</option>
											<option value="ZIMBABWE">ZIMBABWE</option>
										</select>
									</div>
								</div>
								<div class="clearfix"></div>
								<div class="four-column">
									<p><span class="required"></span></p>
								</div>
								<div class="two-column tabButton">

								</div>
							</div>
						</div>
						<div id="step-3" class="tabStep ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide">
							<hgroup class="horizontal-gradient">
								<h1 class="horizontal-gradient">Create An Account - Account Info<span class="sub-info"></span></h1>
							</hgroup>
							<div class="gridcolparsys">
								<div class="three-column">
									<label for="WebLogin">Username <span class="required">*</span></label>
									<input data-val="true" data-val-regex="Invalid username: Usernames must be at least 3 characters, may not contain spaces, and may only contain letters, numbers and the following symbols: . @ - _"
									 data-val-regex-pattern="^[\w]{1}[\wa-zA-Z\d_@.-]*[\w]{2}$" data-val-required="This field is required." id="WebLogin"
									 maxlength="80" name="WebLogin" tabindex="1" type="text" value="">
								</div>
								<div class="eight-column">
									<span class="field-validation-valid" data-valmsg-for="WebLogin" data-valmsg-replace="true"></span>
									<span id="username_not_ok" class="field-validation-error-display-none">
										<img alt="That username is not available. Please choose another." src="./Create an AAFP.org Account_files/exclamation.png">
										That username is not available. Please choose another.
									</span>
								</div>
								<div class="clearfix"></div>
								<div class="four-column">
									<label for="Password">
										Password <span class="required">*</span>
									</label>
									<span class="field-validation-valid" data-valmsg-for="Password" data-valmsg-replace="true"></span>
									<input data-val="true" data-val-regex="Remember that passwords must be at least 8 characters and include at least 1 uppercase letter, 1 lowercase letter, and 1 number."
									 data-val-regex-pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$" data-val-required="This field is required." id="Password"
									 maxlength="50" name="Password" tabindex="1" type="password">
									<label for="ConfirmPassword">
										Confirm password <span class="required">*</span>
									</label>
									<span id="confirmPasswordMatch" class="field-validation-error-display-none">
										<img alt="The password and confirmation password do not match." src="./Create an AAFP.org Account_files/exclamation.png">&nbsp;The
										password and confirmation password do not match.
									</span> <span data-valmsg-replace="true" data-valmsg-for="ConfirmPassword" class="field-validation-valid"></span>
									<input type="password" name="ConfirmPassword" maxlength="50" id="ConfirmPassword" data-val-required="This field is required."
									 data-val="true" tabindex="1">
								</div>
								<div class="four-column">
									<div class="calloutbox section margin-left">
										<div class=" mobile calloutbox-center highlights flex-default">
											<div class="container secondary" style="padding: 10px 0; margin-bottom: 0;">
												<h6>Password Requirements</h6>
												<ul>
													<li>8 characters minimum</li>
													<li>1 uppercase letter</li>
													<li>1 lowercase letter</li>
													<li>1 number</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div class="clearfix"></div>
								<div class="clearfix"></div>
								<div class="full" style="text-align: center">
									<p class="float-left"><span class="required"></span></p>
									<p>

										<p></p>
										<p>
											<label id="captchaError" style="display:none" class="error">Please verify that you are not a robot.</label>
										</p>
										<div class="tabButton center">
											<button type="submit" id="submit" class="button button-primary large" tabindex="1">Create My Account</button>
										</div>
								</div>
							</div>
						</div>
					</div>
					<div id="existingAccount" style="display: none" class="tabStep">
						<hgroup class="horizontal-gradient">
							<h1 class="horizontal-gradient">Existing Account<span class="sub-info"></span></h1>
						</hgroup>
						<div class="gridcolparsys">
							<div class="full">
								<h4 class="margin-bottom">
									Our records show that you already have an account with us under that email address.
								</h4>

								<p>Using the email address you entered on Step 1, you can:</p>
								<ul>
									
								</ul>
							</div>
							<div class="full">
								<h4 class="margin-bottom">Ready to Log In?</h4>
								<input class="button button-tertiary" style="clear: none; margin-left: 20px; padding: 10px 25px;" type="button"
								 id="login" value="Log in" tabindex="1">

							</div>

						</div>
					</div>
				</form>
			</div>
		</section>

		<!-- /Main content -->
		<div class="clearfix"></div>
	</div>
	<script type="text/javascript">
		jQuery.validator.unobtrusive.adapters.add("conditionallyrequired", ["conditionalproperty", "conditionalvalue"], function (options) {
			options.rules["conditionallyrequired"] = {
				conditionalproperty: options.params.conditionalproperty,
				conditionalvalue: options.params.conditionalvalue
			};
			options.messages["conditionallyrequired"] = options.message;
		});

		jQuery.validator.addMethod("conditionallyrequired", function (val, element, params) {
			if ($("select[id$='__Country']").val() == params.conditionalvalue && $(element).val() == "")
				return false;
			else
				return true;
		});
	</script>


	<script type="text/javascript">
		function trim(str) {
			return (str.length > 40) ? str.substring(0, 40).toLowerCase() : str.toLowerCase();
		}

		var head1 = trim(jQuery("h1").text());
		var memberIdSC = getMemberIdEnCodedWithCookie();

		s.pageName = "myaccount:createaccount";
		s.referrer = document.referrer;

		s.prop1 = "create an account";
		s.prop3 = "main";
		s.prop14 = memberIdSC;
		s.prop17 = "public";

		s.prop40 = "membership"
		s.prop41 = "administrative"
		s.prop42 = "nf"


	</script>

	<script type="text/javascript">_satellite.pageBottom();</script>
	<script>
		/* jQuery(document).ready(function() { */
		/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
		// console.log('---------- page-fire call fired ------------');
		var s_code = s.t(); if (s_code) document.write(s_code)
/* }); */
	</script>


	<div class="ui-dialog ui-widget ui-widget-content ui-corner-all" tabindex="-1" role="dialog" aria-labelledby="ui-dialog-title-BusyDialog"
	 style="display: none; z-index: 1002; outline: 0px; height: auto; width: 200px; top: 255.5px; left: 575.5px;">
		<div id="BusyDialog" class="ui-dialog-content ui-widget-content" scrolltop="0" scrollleft="0" style="width: auto; min-height: 0px; height: 39.04px;">Processing..
			<img src="./Create an AAFP.org Account_files/ajax-loader.gif"></div>
	</div>
	<div class="ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable" tabindex="-1" role="dialog"
	 aria-labelledby="ui-dialog-title-AddressVerificationDialog" style="display: none; z-index: 1000; outline: 0px; position: absolute; top: 220.5px; left: 525.5px;">
		<div class="ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix"><span class="ui-dialog-title" id="ui-dialog-title-AddressVerificationDialog">Address
				Verification</span><a href="https://nf.aafp.org/account/home/new?target=HTTP://www.aafp.org/cgi-bin/lg.pl?redirect=https://www.aafp.org/medical-school-residency/resident-resources.html#"
			 class="ui-dialog-titlebar-close ui-corner-all" role="button"><span class="ui-icon ui-icon-closethick">close</span></a></div>
		<div id="AddressVerificationDialog" class="ui-dialog-content ui-widget-content"></div>
		<div class="ui-resizable-handle ui-resizable-n" style="z-index: 1000;"></div>
		<div class="ui-resizable-handle ui-resizable-e" style="z-index: 1000;"></div>
		<div class="ui-resizable-handle ui-resizable-s" style="z-index: 1000;"></div>
		<div class="ui-resizable-handle ui-resizable-w" style="z-index: 1000;"></div>
		<div class="ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se ui-icon-grip-diagonal-se" style="z-index: 1000;"></div>
		<div class="ui-resizable-handle ui-resizable-sw" style="z-index: 1000;"></div>
		<div class="ui-resizable-handle ui-resizable-ne" style="z-index: 1000;"></div>
		<div class="ui-resizable-handle ui-resizable-nw" style="z-index: 1000;"></div>
		<div class="ui-dialog-buttonpane ui-widget-content ui-helper-clearfix">
			<div class="ui-dialog-buttonset"><button type="button" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only"
				 role="button" aria-disabled="false"><span class="ui-button-text">Save</span></button><button type="button" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only"
				 role="button" aria-disabled="false"><span class="ui-button-text">Edit</span></button></div>
		</div>
	</div>
	<div class="ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable" tabindex="-1" role="dialog"
	 aria-labelledby="ui-dialog-title-ExistingAccountDialog" style="display: none; z-index: 1000; outline: 0px; position: absolute; top: 253.5px; left: 525.5px;">
		<div class="ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix"><span class="ui-dialog-title" id="ui-dialog-title-ExistingAccountDialog">Possible
				Existing Account</span><a href="https://nf.aafp.org/account/home/new?target=HTTP://www.aafp.org/cgi-bin/lg.pl?redirect=https://www.aafp.org/medical-school-residency/resident-resources.html#"
			 class="ui-dialog-titlebar-close ui-corner-all" role="button"><span class="ui-icon ui-icon-closethick">close</span></a></div>
		<div id="ExistingAccountDialog" class="ui-dialog-content ui-widget-content"></div>
		<div class="ui-resizable-handle ui-resizable-n" style="z-index: 1000;"></div>
		<div class="ui-resizable-handle ui-resizable-e" style="z-index: 1000;"></div>
		<div class="ui-resizable-handle ui-resizable-s" style="z-index: 1000;"></div>
		<div class="ui-resizable-handle ui-resizable-w" style="z-index: 1000;"></div>
		<div class="ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se ui-icon-grip-diagonal-se" style="z-index: 1000;"></div>
		<div class="ui-resizable-handle ui-resizable-sw" style="z-index: 1000;"></div>
		<div class="ui-resizable-handle ui-resizable-ne" style="z-index: 1000;"></div>
		<div class="ui-resizable-handle ui-resizable-nw" style="z-index: 1000;"></div>
	</div>
	<div class="ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable" tabindex="-1" role="dialog"
	 aria-labelledby="ui-dialog-title-CreateConfirmationDialog" style="display: none; z-index: 1000; outline: 0px; position: absolute; top: 253.5px; left: 525.5px;">
		<div class="ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix"><span class="ui-dialog-title" id="ui-dialog-title-CreateConfirmationDialog">Success</span><a
			 href="https://nf.aafp.org/account/home/new?target=HTTP://www.aafp.org/cgi-bin/lg.pl?redirect=https://www.aafp.org/medical-school-residency/resident-resources.html#"
			 class="ui-dialog-titlebar-close ui-corner-all" role="button"><span class="ui-icon ui-icon-closethick">close</span></a></div>
		<div id="CreateConfirmationDialog" class="ui-dialog-content ui-widget-content"></div>
		<div class="ui-resizable-handle ui-resizable-n" style="z-index: 1000;"></div>
		<div class="ui-resizable-handle ui-resizable-e" style="z-index: 1000;"></div>
		<div class="ui-resizable-handle ui-resizable-s" style="z-index: 1000;"></div>
		<div class="ui-resizable-handle ui-resizable-w" style="z-index: 1000;"></div>
		<div class="ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se ui-icon-grip-diagonal-se" style="z-index: 1000;"></div>
		<div class="ui-resizable-handle ui-resizable-sw" style="z-index: 1000;"></div>
		<div class="ui-resizable-handle ui-resizable-ne" style="z-index: 1000;"></div>
		<div class="ui-resizable-handle ui-resizable-nw" style="z-index: 1000;"></div>
	</div>
	<div style="background-color: rgb(255, 255, 255); border: 1px solid rgb(204, 204, 204); box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 3px; position: absolute; transition: visibility 0s linear 0.3s, opacity 0.3s linear 0s; opacity: 0; visibility: hidden; z-index: 2000000000; left: 0px; top: -10000px;">
		<div style="width: 100%; height: 100%; position: fixed; top: 0px; left: 0px; z-index: 2000000000; background-color: rgb(255, 255, 255); opacity: 0.05;"></div>
		<div class="g-recaptcha-bubble-arrow" style="border: 11px solid transparent; width: 0px; height: 0px; position: absolute; pointer-events: none; margin-top: -11px; z-index: 2000000000;"></div>
		<div class="g-recaptcha-bubble-arrow" style="border: 10px solid transparent; width: 0px; height: 0px; position: absolute; pointer-events: none; margin-top: -10px; z-index: 2000000000;"></div>
		<div style="z-index: 2000000000; position: relative;"><iframe title="recaptcha challenge" src="./Create an AAFP.org Account_files/bframe.html"
			 name="c-7m7nqsolts82" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
			 style="width: 100%; height: 100%;"></iframe></div>
	</div>
</body>

</html>