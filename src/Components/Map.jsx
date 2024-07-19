import './Map.css'
export default function Map() {
    const mystyle = {
        border: "0",
        allowFullScreen: "",
        loading: "lazy",
        referrerPolicy: "no-referrer-when-downgrade"
    };
    return (
        <div className="mapSector">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26178.269911402953!2d-56.19314487074692!3d-34.89932835791671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a02b54fb39a1f9%3A0x32c8fe2346563b82!2s%2BT%20Arquitectura!5e0!3m2!1ses-419!2suy!4v1721109026321!5m2!1ses-419!2suy" width="450" height="400" style={mystyle}></iframe>
            <aside className='mapInfo'>
                <ul>
                    <div className="propMap">
                        <span className="material-symbols-outlined">
                            location_on
                        </span>
                        <p className='prop'>Paraguay 1690</p>
                    </div>
                    <div className="propMap">
                        <span className="material-symbols-outlined">
                            call
                        </span>
                        <p className='prop'>098-819-845</p>
                    </div>
                    <div className="propMap">
                        <span className="material-symbols-outlined">
                            email
                        </span>
                        <p className='prop'>EMAIL ACA</p>
                    </div>
                    
                
                </ul>
            </aside>
        </div>
    )
}