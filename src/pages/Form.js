import React, { useState } from "react";
import './style/Form.css'
import  prizeImage  from '../assets/prize.png'

export default function Form() {
   const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      birthDate: "",
      phone: "",
      address: "",
      city: "",
      province: "",
      postalCode: "",
      email: "",
   });

   const [alerts, setAlerts] = useState([]);

   const {
      firstName,
      lastName,
      birthDate,
      phone,
      address,
      city,
      province,
      postalCode,
      email,
   } = formData;

   let patterns = {
      firstName: /^[a-z A-z-.]+$/,
      lastName: /^[a-z A-z-.]+$/,
      birthDate: /^[0-9]{4}[-]{1}[0-9]{2}[-]{1}[0-9]{2}$/,
      phone: /^[0-9]{10}$/,
      address: /^[a-zA-Z0-9 ,.]+$/,
      city: /^[a-z A-z-.]+$/,
      province: /^[a-z A-z-.]+$/,
      postalCode:
         /^[A-Za-z]{1}[0-9]{1}[A-Za-z]{1}[ ]?[0-9]{1}[A-Za-z]{1}[0-9]{1}$/,
      email: /^[a-z0-9.]+[@]{1}[a-z0-9]+[.]{1}[a-z]{2,}$/,
   };

   const onChange = (e) => {
      const value = formData[e.target.name];
      const name = e.target.name;
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const onSubmit = (e) => {
      e.preventDefault();

      // Validate all regex with custom alert messages and add the alerts
      if (!patterns.firstName.test(firstName))
         return setAlerts([...alerts, "First name does not match requirements"]);
      if (!patterns.lastName.test(lastName))
         return setAlerts([...alerts, "Last name does not match requirements"]);
      if (!patterns.birthDate.test(birthDate))
         return setAlerts([...alerts, "Birthdate does'nt match requirements"]);
      if (!patterns.phone.test(phone))
         return setAlerts([...alerts, "Phone does not match requirements"]);
      if (!patterns.address.test(address))
         return setAlerts([...alerts, "Address does not match requirements"]);
      if (!patterns.city.test(city))
         return setAlerts([...alerts, "City does not match requirements"]);
      if (!patterns.province.test(province))
         return setAlerts([...alerts, "Province does not match requirements"]);
      if (!patterns.postalCode.test(postalCode))
         return setAlerts([...alerts, "Postal code does not match requirements"]);
      if (!patterns.email.test(email))
         return setAlerts([...alerts, "Email does not match requirements"]);

      // Rest of your functionality here
   };

	return (
      <>
			<section className="registration-intro">
				<div className="prizeImage">
					<img  className="logo" src={prizeImage} alt="logo"/>
				</div>
				<p>
					Redeem your coupons and BuyMore
					Dollar points at your favourite restaurants.
				</p>
			</section>

			<h1>Registration</h1>

			{/* Registration Form */}
			<form onSubmit={(e) => onSubmit(e)}>
            {alerts.map((alert) => (
               <p className="alert">{alert}</p>
            ))}
		
				{/* Full Name */}
				<section className="full-name">
					<div>
						<label htmlFor="firstName">First Name</label>
						<input
                  type="text"
                  value={firstName}
                  name="firstName"
                  placeholder="First Name"
                  onChange={(e) => onChange(e)}
               />
					</div>
					<div>
						<label htmlFor="">Last Name</label>
						<input
                  type="text"
                  value={lastName}
                  name="lastName"
                  placeholder="Last Name"
                  onChange={(e) => onChange(e)}
               />
					</div>
				</section>

				{/* Date of Birth */}
				<section>
					<label htmlFor="dob">Date of Birth</label>
					<input
                  type="date"
                  value={birthDate}
                  name="birthDate"
                  placeholder="Birth Date"
                  onChange={(e) => onChange(e)}
               />
				</section>

				{/* Email Address */}
				<section>
					<label htmlFor="email">E-mail</label>
					<input
                  type="text"
                  value={email}
                  name="email"
                  placeholder="Email    "
                  onChange={(e) => onChange(e)}
               />
				</section>

				{/* Phone Number */}
				<label htmlFor="mobileNumber">Phone Number</label>
				<section className="phone-number">
					<select name="phoneCode" id="phoneCodes">
						<option value="+1">+1</option>
						<option value="+1">+1 ( US )</option>
					</select>
					<div>
               <input
                  type="number"
                  value={phone}
                  name="phone"
                  placeholder="Phone "
                  onChange={(e) => onChange(e)}
               />
					</div>
				</section>

				{/* Full Address */}
				<section>
					<label htmlFor="address">Address</label>
					<input
                  type="text"
                  value={address}
                  name="address"
                  placeholder="Address"
                  onChange={(e) => onChange(e)}
               />
					<div className="stateBox">
						<div>
							<label htmlFor="">Province</label>
							<select>
								<option value="Ontario">Ontario</option>
								<option value="Alberta">Alberta</option>
								<option value="British Columbia">British Columbia</option>
								<option value="Nova Scotia">Nova Scotia</option>
							</select>
						</div>
						<div>
							<label htmlFor="city">City</label>
							<input
                  type="text"
                  value={city}
                  name="city"
                  placeholder="City       "
                  onChange={(e) => onChange(e)}
               />
						</div>
					</div>
					<label htmlFor="postalCode">Postal Code</label>
					<input
                  type="number"
                  value={postalCode}
                  name="postalCode"
                  placeholder="Postal Code"
                  onChange={(e) => onChange(e)}
               />
				</section>

				{/* Agreement Section */}
				<section className="agreement">
					<input type="checkbox" id="checkBox1" name="agreement" ></input>
					<p className="checkbox" htmlFor="agreement">I acknowledge that I have read and agree to Rules and regulations.</p>
					<p></p>
					<input type="checkbox" id="checkBox2" name="scales"></input>
					<p className="checkbox">I agree to receive special offers and discount coupons via email.</p>
				</section>
				<input type="submit" id="submit" className="submit-btn" value="Submit"></input>
			</form>
		</>
	)
}