import "./noticeCard.css"

const NoticeCard = ({title, description, link}) => {
  return (
    <div className="notice-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link}>{"link ->"}</a>

    </div>
  )
}

export default NoticeCard