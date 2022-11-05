function Contacts() {
    return(
        <div className="contacts">
            <div className="contact_info">
                <div className="info">
                    <p>Областной клинический онкологический диспансер</p>
                    <div className='redline_new'>
                        <img className='red_line'/>
                    </div>
                    <p>ул. Клиническая, 97, к.1, Саратов, Саратовская обл., 410053</p>
                    <p>pochta@mail.com</p>
                    <p>8 (845) 239-44-21</p>
                    <div className="icons">
                        <img className="logo_tg"></img>
                        <img className="logo_vk"></img>
                        <img className="logo_yt"></img>
                    </div>
                </div>
                <div className="photo" />
            </div>
            <div className="map"/>
        </div>
    );
}

export default Contacts;