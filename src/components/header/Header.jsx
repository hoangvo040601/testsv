import { UserCircle } from '@phosphor-icons/react';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import fnet from '../../assets/logo/fnet_logo.png'
import './Header.scss'
const Header = () => {
    return (
        <div className='header_container'>
            <div className="header_logo">
                <Link to='/'>
                    <img src={fnet} alt="fnet" className='fnet' />
                </Link>
            </div>
            <div className='header_list'>
                <ul>
                    <NavLink to='/' className={({ isActive, isPending }) => isActive ? "active" : "list_item"}>Trang chủ</NavLink>
                    <NavLink to='infor' className='list_item'>Về FNet</NavLink>
                    <NavLink to='prize' className='list_item'>Bảng Giá</NavLink>
                    <a href='https://fus.gitbook.io/fnet' className='list_item' target="_blank">Hướng Dẫn</a>
                    <NavLink to='dowload' className='list_item'>Tải Về</NavLink>
                    <NavLink to='news' className='list_item'>Tin Tức</NavLink>
                    <NavLink to='contact' className='list_item'>Liên Hệ</NavLink>
                </ul>
            </div>
            <div className="header_login">
                <UserCircle size={30} color={'#008cfc'} />
                <span>Đăng nhập</span>
            </div>
        </div>
    );

}
export default Header;