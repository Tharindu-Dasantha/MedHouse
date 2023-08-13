import "./form.css"

function Form() {
    // lists for radio groups : {id, label}
    const distanceFromKarapitiya = [
        {id:"100500m" ,label:"100 - 500 m"},
        {id:"500m1km" ,label:"500 m - 1 km"},
        {id:"1km2km" ,label:"1 km - 2km"},
        {id:"2kmMore" ,label:"2 km - More"}
    ]
    const academicYear = [
        {id:"1y",label:"1st Year"},
        {id:"2y",label:"2nd Year"},
        {id:"3y",label:"3rd Year"},
        {id:"4y",label:"4th Year"},
        {id:"5y",label:"5th Year"},
        {id:"finaly",label:"Practical Year (final)"}

    ]
    const degreeProgram = [
        {id:"mbbs",label:"MBBS"},
        {id:"paramed",label:"Para Medical"}
    ]
    const accomodationReqPeriod = [
        {id:"l1m",label:"Less than 1 Month"},
        {id:"l3m",label:"Less than 3 Months"},
        {id:"1year",label:"1 Year"},
        {id:"m1year",label:"More than 1 Year"}
    ]
    const reasonToReqAccmd = [
        {id:"fAcademics",label:"For Academic"},
        {id:"fEPP",label:"For Extra Practical Period"},
        {id:"fEP",label:"For Exam Period"}
    ]

    return (
    <div className="accomodation-form">
        <h1>Registration Form</h1>
        <form action="" method="post">
            <h2>Personal Information</h2>
            <fieldset className="personal-info">
                
                <div className="first-name">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" name="fname" id="fname" required/>
                </div>
                <div className="second-name">
                    <label htmlFor="sname">Second Name</label>
                    <input type="text" name="sname" id="sname" required/>
                </div>
                <div className="full-name">
                    <label htmlFor="fullname">Full Name</label>
                    <input type="text" name="fullname" id="fullname" required />
                </div>
                <div className="birth-day">
                    <label htmlFor="birthday">Date of Birth</label>
                    <input type="date" name="birthday" id="birthday" required/>
                </div>
                <div className="nic-no">
                    <label htmlFor="NICnumber">NIC Number</label>
                    <input type="text" name="NICnumber" id="NICnumber" required/>
                </div>
                <div className="tel-num">
                    <label htmlFor="telnum">Telephone Number</label>
                    <input type="tel" name="telnum" id="telnum" required/>
                </div>
                <div className="mob-num">
                    <label htmlFor="mobnum">Mobile Number</label>
                    <input type="tel" name="mobnum" id="mobnum" required/>
                </div>
                <div className="email">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="emailA" id="emailA" required/>
                </div>
                <div className="permanent-address">
                    <label htmlFor="paddress">Permanent Address</label>
                    <textarea name="paddress" id="paddress" cols="30" rows="5" required></textarea>
                </div>
                <div className="nearest-city">
                    <label htmlFor="ncity">Nearest City</label>
                    <input type="text" name="ncity" id="ncity" required/>
                </div>
                <div className="district">
                    <label htmlFor="district">District</label>
                    <input type="text" name="district" id="district" required/>
                </div>
                <div className="country">
                    <label htmlFor="country">Country</label>
                    <input type="text" name="country" id="country" required/>
                </div>
                <div className="postal-code">
                    <label htmlFor="pcode">Postal Code</label>
                    <input type="text" name="pcode" id="pcode" required/>
                </div>
                <div className="radio-group-for-distance">
                    <label htmlFor="pcode">Distance from Karapitiya to nearest city</label>
                        <div className="radio-group-container">
                        {distanceFromKarapitiya.map(radioBtn => 
                        <span   key= {radioBtn.id}>
                        <input type="radio" name="radio-group-for-distance" id={radioBtn.id} value={radioBtn.label}/>
                        <label htmlFor={radioBtn.id}>{radioBtn.label}</label>
                        </span>
                        )}
                        </div>  
                </div>
            </fieldset>
            <br /><br />
            <h2>Guardian Information</h2>
            <fieldset className="guardian-infor">
                <div className="guardian-full-name">
                    <label htmlFor="guardian-fullname">Full Name</label>
                    <input type="text" name="guardian-fullname" id="guardian-fullname" required/>
                </div>
                <div className="guardian-permanent-address">
                    <label htmlFor="guardian-paddress">Permanent Address</label>
                    <textarea name="guardian-paddress" id="guardian-paddress" cols="30" rows="5" required></textarea>
                </div>
                <div className="contact-num">
                    <label htmlFor="contactnum">Contact No</label>
                    <input type="tel" name="contactnum" id="contactnum" required/>
                </div>

            </fieldset>
            <br /><br />
            <h2>Academic Information</h2>
            <fieldset className="academic-infor">

                <div className="radio-group-academic-year ">
                    <label htmlFor="pcode">Academic Year</label>
                        <div className="radio-group-container">
                        {academicYear.map(radioBtn => 
                        <span   key= {radioBtn.id}>
                        <input type="radio" name="radio-group-academic-year" id={radioBtn.id} value={radioBtn.label}/>
                        <label htmlFor={radioBtn.id}>{radioBtn.label}</label>
                        </span>
                        )}
                        </div>  
                </div>
                <div className="radio-group-degree-program">
                    <label htmlFor="pcode">Degree Program</label>
                        <div className="radio-group-container">
                        {degreeProgram.map(radioBtn => 
                        <span   key= {radioBtn.id}>
                        <input type="radio" name="radio-group-degree-program" id={radioBtn.id} value={radioBtn.label}/>
                        <label htmlFor={radioBtn.id}>{radioBtn.label}</label>
                        </span>
                        )}
                        </div>  
                </div>
                <div className="radio-group-accormodation-req-period">
                    <label htmlFor="pcode">Accommodation Request Period</label>
                        <div className="radio-group-container">
                        {accomodationReqPeriod.map(radioBtn => 
                        <span   key= {radioBtn.id}>
                        <input type="radio" name="radio-group-accormodation-req-period" id={radioBtn.id} value={radioBtn.label}/>
                        <label htmlFor={radioBtn.id}>{radioBtn.label}</label>
                        </span>
                        )}
                        </div>  
                </div>
                <div className="radio-group-reason-to-req-accm">
                    <label htmlFor="pcode">Reason to request accommodation</label>
                        <div className="radio-group-container">
                        {reasonToReqAccmd.map(radioBtn => 
                        <span   key= {radioBtn.id}>
                        <input type="radio" name="radio-group-reason-to-req-accm" id={radioBtn.id} value={radioBtn.label}/>
                        <label htmlFor={radioBtn.id}>{radioBtn.label}</label>
                        </span>
                        )}
                        </div>  
                </div>

            </fieldset>
            <br /><br />
            <h2>Emergency Contact Details</h2>
            <fieldset className="emergency-contact">
                <div className="emergency-first-name emergency-fieldset-extra-features">
                    <label htmlFor="e-fname">First Name</label>
                    <input type="text" name="e-fname" id="e-fname" required/>
                </div>
                
                <div className="emergency-contact-num emergency-fieldset-extra-features">
                    <label htmlFor="e-contactnum">Contact No</label>
                    <input type="tel" name="e-contactnum" id="e-contactnum" required/>
                </div>

                <div className="emergency-address emergency-fieldset-extra-features">
                    <label htmlFor="e-address">Permanent Address</label>
                    <textarea name="e-address" id="e-address" cols="30" rows="5" required></textarea>
                </div>

                <p className="e-honorary-p confirmation-extra-features" >I honorary certified above details are correct. </p>

                <div className="confirmation-name confirmation-extra-features">
                    
                    <input type="text" name="confirmationfname" id="confirmationfname" required/>
                    <label htmlFor="confirmationname">Name</label>
                </div>

                <div className="confirmation-date confirmation-extra-features">
                    
                    <input type="date" name="confirmationdate" id="confirmationdate" required/>
                    <label htmlFor="confirmationdate">Date</label>
                </div>
                </fieldset>

                <input type="submit" value="Submit" />

            
        </form>
    </div>
    );
}

export default Form;