import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
    return <div className="its-banner">
        <div className="content">
            <div className="text-content">
                <h1>SALES</h1>
                <p>
                It's someone who loves to groove, is always on the move, and crazy about reaching their goals!
                </p>
                <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">Shop Now</div>
                    </div>
            </div>
            <img className="banner-img" src={BannerImg} alt="" />
        </div>
    </div>;
};

export default Banner;
