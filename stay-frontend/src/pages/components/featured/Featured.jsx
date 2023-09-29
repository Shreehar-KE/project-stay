import "./featured.css"

const Featured = () => {
  return (
    <div className="list">
      <div className="overlayItem">
        <img src="https://www.trawell.in/admin/images/upload/653500199Trichy_Rockfort_Main.jpg" alt="Trichy" className="image" />
        <div className="overlayItemTitle">
          <span className="overlayTitle">Trichy</span>
          <span className="overlayCount">123 Listings</span>
        </div>
      </div>
      <div className="overlayItem">
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/32/Chennai_Central.jpg" alt="Chennai" className="image" />
        <div className="overlayItemTitle">
          <span className="overlayTitle">Chennai</span>
          <span className="overlayCount">123 Listings</span>
        </div>
      </div>
      <div className="overlayItem">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/CHIL_SEZ.jpg/800px-CHIL_SEZ.jpg" alt="coimbatore" className="image" />
        <div className="overlayItemTitle">
          <span className="overlayTitle">Coimbatore</span>
          <span className="overlayCount">123 Listings</span>
        </div>
      </div>
      <div className="overlayItem">
        <img src="https://assets-news.housing.com/news/wp-content/uploads/2022/07/28160317/Madurai-feature-compressed.jpg" alt="coimbatore" className="image" />
        <div className="overlayItemTitle">
          <span className="overlayTitle">Madurai</span>
          <span className="overlayCount">123 Listings</span>
        </div>
      </div>
    </div>
  )
}

export default Featured