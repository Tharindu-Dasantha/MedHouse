import { Link } from "react-router-dom";
import "./forms.css";


function Clearance() {
  return (
    <div className="clearance">
      <div className="header">
        <Link to="/services">Back</Link>
        <h2>Clearance</h2>
        <Link to="/">Home</Link>
      </div>
      <form action="">
        <label htmlFor="student_name">Student name</label>
        <input type="text" />
        <label htmlFor="student_id">Student ID</label>
        <input type="number" name="student_id" id="student_id" />
        <label htmlFor="student_mail">Student Email</label>
        <input type="email" name="student_mail" id="student_mail" />
        <label htmlFor="room_id">Room ID</label>
        <input type="number" name="room_id" id="room_id" />
        <label htmlFor="registration_year">Registration Year</label>
        <input type="number" name="registration_year" id="registration_year" />
        <label htmlFor="duration">Duration you are going to use this room</label>
        <input type="text" />
        <label htmlFor="availability_item">Please mark abailability of item</label>
        <label htmlFor="items_beds">Beds </label>
        <input type="checkbox" name="item" id="items_beds_1" />
        <label htmlFor="items_beds_1">1</label>
        <input type="checkbox" name="item" id="items_beds_2" />
        <label htmlFor="items_beds_2">2</label>
        <input type="checkbox" name="item" id="items_beds_4" />
        <label htmlFor="items_beds_4">4</label>
        <label htmlFor="towel_rack">Towel rack - 2</label>
        <input type="checkbox" name="towel_rack" id="towel_rack" />
        <label htmlFor="chair">Chair 2</label>
        <input type="checkbox" name="chair" id="chair" />
        <label htmlFor="tabel">Tabel 2</label>
        <input type="checkbox" name="table" id="table" />
        <label htmlFor="cardboard">Cardboard Wood 1</label>
        <input type="checkbox" name="cardboard" id="cardboard" />
        <label htmlFor="key">Extra Key 1</label>
        <input type="checkbox" name="key" id="key" />
        <label htmlFor="HandOver">Hand Over Date</label>
        <input type="date" name="HandOver" id="HandOver" />
        <label htmlFor="Other">Other Notes</label>
        <textarea name="Other" id="Other" cols="30" rows="10"></textarea>
        <label htmlFor="honor">I honor certified this clearance information is correct.</label>
        <input type="text" />
        <input type="submit" value="done" />
      </form>
    </div>
  );
}

export default Clearance;
