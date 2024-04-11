import { EnvelopeSimple, MapPin, Phone } from '@phosphor-icons/react';
import React from 'react';
import background2 from '../../assets/background/background2.jpg'

import './Register.scss'

const Register = () => {
    return (
        <div className="content_body_register">
            <img src={background2} alt="background2" className='background2' />
            <div className="body_register_wraper">

                <div className="register_wraper_left">
                    <h2>
                        <span>Đăng ký ngay với</span><br />
                        <span>FNet</span>
                    </h2>
                    <h4>Địa chỉ</h4>
                    <div className='address'>
                        <div className='address_icon'>
                            <MapPin size={32} color={'#008cfc'} />
                            <h5>CÔNG TY CỔ PHẦN CÔNG NGHỆ FUS</h5>
                        </div>
                        <p>Tầng 5,  144-146 Nguyễn Thái Bình, Phường Nguyễn Thái Bình, Quận 1, Tp. Hồ Chí Minh</p>
                    </div>
                    <h4>Liên hệ</h4>
                    <div className="mail">
                        <div className="mail_icon">
                            <EnvelopeSimple size={32} color={'#008cfc'} />
                            <h5>Hộp thư</h5>
                        </div>
                        <p>
                            <a href="mailto:infor@fnet.com.vn">infor@fnet.com.vn</a>
                        </p>
                        {/* <p>infor@fnet.com.vn</p> */}
                    </div>
                    <div className="phone">
                        <div className="phone_icon">
                            <Phone size={32} color={'#008cfc'} />
                            <h5>Điện thoại</h5>
                        </div>
                        <p>028 2200 0113</p>
                    </div>
                </div>
                <div className="register_wraper_right">
                    <div className='form_header'>Vui lòng nhập thông tin</div>
                    <div className='form_name'>
                        <div className="name">
                            <span>Tên</span>
                            <input type="text" className='input_form_name' />
                        </div>
                        <div className="ho">
                            <span>Họ</span>
                            <input type="text" className='input_form_ho' />
                        </div>
                    </div>
                    <div className='form_email'>
                        <span>Email</span>
                        <input type="email" className='input_form_email' />
                    </div>
                    <div className='form_address'>
                        <span>Địa chỉ</span>
                        <input type="text" className='input_form_address' />
                    </div>
                    <div className='form_body'>Chọn sản phẩm của bạn:</div>
                    <div className="product_time">
                        <div className='form_product'>
                            <span>Gói sản phẩm</span>
                            <select name="product" id="product" className='input_form_product'>
                                <option value="nomal">Gói chuyên dụng</option>
                                <option value="open">Gói mở rộng</option>
                            </select>
                        </div>
                        <div className='form_time'>
                            <span>Thời hạn</span>
                            <select name="time" id="time" className='input_form_time'>
                                <option value="6month">6 tháng</option>
                                <option value="12month">12 tháng</option>
                            </select>
                        </div>
                    </div>
                    <div className='form_policy'>
                        <input type="checkbox" className='input_form' />
                        <span>Tôi chấp nhận các điều khoản và điều kiện</span>
                    </div>
                    <div className="input_button">
                        Gởi ngay
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;