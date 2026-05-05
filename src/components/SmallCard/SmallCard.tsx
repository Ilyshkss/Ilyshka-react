import Photo from "../../assets/photo.jpg"
import Like from "../../assets/like.svg";
import Dislike from "../../assets/dislike.svg";
import Save from "../../assets/save.svg";
import Dots from "../../assets/dots.svg";
import "./SmallCard.css";

function SmallCard() {
    return ( 
        <div className="smallCard-container">
            <div className="smallCard-main">
                <div className="smallCard-main-content">
                    <div className="smallCard-main-content_date">Apr 28, 2026</div>
                    <div className="smallCard-main-content_title">Lorem ipsum dolor sit amet consectetur adipisicing elit</div>
                </div>
                <img className="smallCard-main_img" src={Photo} alt="" />
            </div>
            <div className="smallCard-icon">
                <div className="smallCard-icon-left">
                    <img className="smallCard-icon-left_like" src={Like} alt="" />
                    <img className="smallCard-icon-left_dislike" src={Dislike} alt="" />
                </div>
                <div className="smallCard-icon-right">
                    <img className="smallCard-icon-right_save" src={Save} alt="" />
                    <img className="smallCard-icon-right_dots" src={Dots} alt="" />
                </div>
            </div>
        </div>
    );
}

export default SmallCard;