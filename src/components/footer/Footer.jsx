import React from 'react';
import facebook from '../../assets/logo/facebook.png'
import twichter from '../../assets/logo/twichter.png'

import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer_container'>
      <div className="footer_intro">
        <div className="footer_intro_left">
          <div className="intro_left_header">CÔNG ​TY CỔ PHẦN CÔNG NGHỆ FUS</div>
          <div className="intro_left_body">Tầng 5, 144-146 Nguyễn Thái Bình, Phường Nguyễn Thái Bình, Quận 1, Tp. Hồ Chí Minh</div>
          <div className="intro_left_footer">
            <p>
              <a href="mailto:infor@fnet.com.vn">infor@fnet.com.vn</a>
            </p>
            <p>028 2200 0113</p>
          </div>
        </div>
        <div className="footer_intro_right">
          <div className="intro_right">ĐIỀU HUỚNG</div>
          <a href="/">Trang chủ</a>
          <a href="/Csbm">Chính sách bảo mật</a>
          <a href="/Cstt">Chính sách thanh toán</a>
        </div>
      </div>
      <div className="footer_policy">
        <div className="policy_header">© 2024 by Fusoft.vn</div>
        <div className="policy_body">
          <a href="https://www.facebook.com/fnet.com.vn" target="_blank">
            <img src={facebook} alt="facebook" className='facebook'/>
          </a>
          <a href="https://twitter.com/wix" target="_blank">
            <img src={twichter} alt="twichter" className='twichter' />
          </a>
        </div>
        <div className="policy_footer">Sản phẩm thuộc fusoft.vn</div>
      </div>
    </div>
  );
};

export default Footer;