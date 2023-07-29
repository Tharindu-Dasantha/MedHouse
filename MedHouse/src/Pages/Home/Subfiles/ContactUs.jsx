import backVector from  "../../../assets/contact_vector.svg"


function ContactUs() {
  return (
    <div className="contacts sections">
      <img className="back-img" src={backVector} alt="back vector"/>
      <h2 className="heading">Contact Us</h2>

      <form className="contact-form" action="" method="post">

        <div className="firstName flex-container">
          <label htmlFor="fname">First Name</label>
          <input type="text" name="fname" id="fname" placeholder="First Name"/>
        </div>

        <div className="lastName flex-container">
          <label htmlFor="lname">Last Name</label>
          <input type="text" name="lname" id="lname" placeholder="Last Name"/>
        </div>

        <div className="tel-num flex-container">
          <label htmlFor="telNum">Mobile Number</label>
          <input type="tel" name="telNum" id="telNum" placeholder="Mobile Number"/>
        </div>

        <div className="email flex-container">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="Email"/>
        </div>

        <div className="message flex-container">
          <textarea name="message" id="message" placeholder="Message"></textarea> 
        </div>
        

      </form>
    </div>
  )
}

export default ContactUs