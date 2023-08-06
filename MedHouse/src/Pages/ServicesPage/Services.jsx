import "./services.css";
import ServicesCard from "./Subfiles/ServicesCard";
import NoticeCard from "./Subfiles/NoticeCard";
import serviceData from "./Subfiles/servicesData";
import noticeBoardData from "./Subfiles/noticeBoardData"

const Services = () => {
  const serviceList = serviceData.map(card =>
    <ServicesCard
    key={card.id}
    imgSrc={card.imgSrc}
    service={card.service}
    details={card.details}
    link={card.link}
    />
    );

  const noticeList = noticeBoardData.map(card =>
    <NoticeCard
    key={card.id}
    title = {card.title}
    description={card.description}
    link={card.link}
    />
    );
  return (
    <div className="services-page-container">
      {/* services section */}
      <h2 className="page-heading">Services</h2>
      <div className="card-container">{serviceList}</div>

      {/* notices section */}
      <h2 className="page-heading">Notice Board</h2>
      <div className="card-container">
        {noticeList}
        <div className="notice-card">
          <h2 style={{color:"#A1C4D4"}}>new notice</h2>
          <div className="box">
          <span className="material-icons-outlined">add</span>
          </div>
        </div>
      </div>
      <div className="googlemap-location">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.606198624978!2d79.8903395!3d6.8176575999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25acc4a4a86e1%3A0x23e8b8390853ca4f!2sGeneral%20Sir%20John%20Kotelawala%20Defence%20University!5e0!3m2!1sen!2slk!4v1691311569897!5m2!1sen!2slk" 
              width="80%" 
              height="100%" 
              style={{border:"1px solid  #00487C"}} 
              allowFullScreen=""  
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      

        

    </div>
  )
}

export default Services
