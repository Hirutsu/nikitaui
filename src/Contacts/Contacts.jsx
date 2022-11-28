function Contacts() {
    return(
        <div className="contacts">
            <div className="contact_info">
                <div className="info">
                    <p>Областной клинический онкологический диспансер</p>
                    <div className='redline_new'>
                        <img src="images/redline.png" className='red_line'/>
                    </div>
                    <p>ул. Клиническая, 97, к.1, Саратов, Саратовская обл., 410053</p>
                    <p>pochta@mail.com</p>
                    <p>8 (845) 239-44-21</p>
                    <div className="icons">
                        <img src="images/logo_telegram.png" className="logo_tg"></img>
                        <img src="images/logo_vk.png" className="logo_vk"></img>
                        <img src="images/logo_youtube.png" className="logo_yt"></img>
                    </div>
                </div>
                <img src="images/photo.png" className="photo" />
            </div>
            <div className="map"/>
        </div>
    );
}

export default Contacts;