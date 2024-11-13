import React from "react";

function MapContract() {
    return (
        <>
            <div className="map-section">
                <div className="google-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.5868520277966!2d105.73765481473136!3d21.017188693497864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab28d1f31c97%3A0x30c4b429c8a1da47!2zVMOieSBN4buDLCBOYW0gVOG7qyBMacOqbSwgSGFub2ksIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1700000000000"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </>
    );
}

export default MapContract;
