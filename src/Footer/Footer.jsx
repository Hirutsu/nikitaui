function Footer() {
    return(
        <footer>
            <div className='footer'>
                <div className='footer_left'>
                    <p>2022 © ГУЗ «Областной клинический онкологический диспансер»</p>
                    <p className='red_text'>Политика конфиденциальности</p>
                </div>
                <div className='footer_right'>
                    <img src="images/logo_telegram.png" className='logo_tg' />
                    <img src="images/logo_vk.png" className='logo_vk' />
                    <img src="images/logo_youtube.png" className='logo_yt' />
                    <p>Разработка сайта</p>
                    <img src="images/logo_spaceapp.png" className='logo_spaceapp' />
                </div>
            </div>
        </footer>
    );
}

export default Footer;