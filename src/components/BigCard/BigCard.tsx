import Photo from "../../assets/photo.jpg"
import Like from "../../assets/like.svg";
import Dislike from "../../assets/dislike.svg";
import Save from "../../assets/save.svg";
import Dots from "../../assets/dots.svg";
import "./BigCard.css";

function BigCard() {
    return ( 
        <div className="bigCard-container">
            <div className="bigCard-main">
                <div className="bigCard-main-content">
                    <div className="bigCard-main-content_date">Apr 28, 2026</div>
                    <div className="bigCard-main-content_title">Lorem ipsum dolor sit amet consectetur adipisicing elit</div>
                    <div className="bigCard-main-content_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium distinctio vero et magnam eveniet. Culpa dignissimos nam at cum provident facere perspiciatis velit voluptatem ipsum inventore, quo ratione blanditiis rem.</div>
                </div>
                <img className="bigCard-main_img" src={Photo} alt="" />
            </div>
            <div className="bigCard-icon">
                <div className="bigCard-icon-left">
                    <img className="bigCard-icon-left_like" src={Like} alt="" />
                    <img className="bigCard-icon-left_dislike" src={Dislike} alt="" />
                </div>
                <div className="bigCard-icon-right">
                    <img className="bigCard-icon-right_save" src={Save} alt="" />
                    <img className="bigCard-icon-right_dots" src={Dots} alt="" />
                </div>
            </div>
        </div>
    );
}

export default BigCard;