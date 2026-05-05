import Photo from "../../assets/photo.jpg"
import Like from "../../assets/like.svg";
import Dislike from "../../assets/dislike.svg";
import Save from "../../assets/save.svg";
import Dots from "../../assets/dots.svg";
import "./MediumCard.css";

function MediumCard() {
    return ( 
    <div className="mediumCard-container">
                <div className="mediumCard-main">
                    <img className="mediumCard-main_img" src={Photo} alt="" />
                    <div className="mediumCard-main-content">
                        <div className="mediumCard-main-content_date">Apr 28, 2026</div>
                        <div className="mediumCard-main-content_title">Lorem ipsum dolor sit amet consectetur adipisicing elit</div>
                    </div>
                </div>
                <div className="mediumCard-icon">
                    <div className="mediumCard-icon-left">
                        <img className="mediumCard-icon-left_like" src={Like} alt="" />
                        <img className="mediumCard-icon-left_dislike" src={Dislike} alt="" />
                    </div>
                    <div className="mediumCard-icon-right">
                        <img className="mediumCard-icon-right_save" src={Save} alt="" />
                        <img className="mediumCard-icon-right_dots" src={Dots} alt="" />
                    </div>
                </div>
            </div>
    );
}

export default MediumCard;