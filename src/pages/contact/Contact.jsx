import React from 'react';
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import './Contact.scss'
import background2 from '../../assets/background/background2.jpg'
import mastcot_4x from '../../assets/img/Mascot_4x.jpg'
const Contacts = () => {
    const mapContainerStyle = {
        width: "100%",
        height: "400px",
    };

    const center = {
        lat: -3.745,
        lng: -38.523,
    };
    const locations = [
        { lat: -3.745, lng: -38.523 },
        { lat: -3.755, lng: -38.543 },
        { lat: -3.765, lng: -38.553 },
        // Thêm các địa điểm khác nếu cần
    ];
    return (
        <div className='contact_container'>
            <img src={background2} alt="background2" className='background_contact' />
            <div className="contact_wraper">
                <div className="contact_header">
                    <span>THÔNG TIN LIÊN HỆ</span>
                    <p>Vui lòng nhập thông tin liên hệ của bạn để được hỗ trợ hoặc hợp tác cùng FNet</p>
                </div>
                <div className="contact_body">
                    <div className="contact_body_left">
                        <img src={mastcot_4x} alt="mastcot_4x" className='contact_mastcot_4x' />
                    </div>
                    <div className="contact_body_right">
                        <div className="body_right_wraper">

                            <div className="contact_right_header">
                                <span>
                                    CÔNG TY CỔ PHẦN CÔNG NGHỆ FUS
                                </span>
                            </div>
                            <div className="contact_right_des">
                                <p>Tầng 5,  144-146 Nguyễn Thái Bình,
                                    Phường Nguyễn Thái Bình, Quận 1,
                                    Tp. Hồ Chí Minh
                                </p>
                            </div>
                            <div className="contact_right_infor">
                                <div className="infor_mail">
                                    <p>
                                        <a href="mailto:infor@fnet.com.vn">infor@fnet.com.vn</a>
                                    </p>
                                </div>
                                <div className="infor_divier"></div>
                                <div className="infor_phone">028 2200 0113</div>

                            </div>
                            <div className="contact_right_name">
                                <div className="name_h">
                                    <span>Họ</span>
                                    <input type="text" />
                                </div>
                                <div className="name_t">
                                    <span>Tên</span>
                                    <input type="text" />
                                </div>

                            </div>
                            <div className="contact_right_email">
                                <span>Email</span>
                                <input type="text" />
                            </div>
                            <div className="contact_right_notice">
                                <span>Vui lòng nhập thông tin</span>
                                <div className="notice">
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="contact_right_button">
                                <span>Gởi ngay</span>
                            </div>
                            <a href="https://www.facebook.com/fnet.com.vn" className="contact_right_facebook" target="_blank">
                                <span>Facebook</span>
                            </a>
                        </div>

                    </div>

                </div>
                <div className="contact_footer">
                    {/* <LoadScript googleMapsApiKey="8EF8F8E8-2084-42C3-BEED-40273AD4E3EE">
                        <GoogleMap
                            mapContainerStyle={mapContainerStyle}
                            center={center}
                            zoom={10}
                        >
                            {locations.map((location, index) => (
                                <Marker key={index} position={location} />
                            ))}
                        </GoogleMap>
                    </LoadScript> */}
                </div>
            </div>
        </div>
    );
};

export default Contacts;