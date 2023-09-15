import React from 'react';

export default function Map() {
  return (
    <>
        <iframe
        id='contacto'
        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6087.82281069497!2d-100.30869141460485!3d25.672331185252613!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1689312800791!5m2!1ses-419!2smx"
        // style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className='Map'
        ></iframe>
        <style jsx>{`
            .Map
            {
                width: 100%;
                height: 500px;
                border: none;
                filter: var(--color-map);
            }
            @media only screen and (max-width: 800px)
            {
                .Map
                {
                    height: 200px;
                }
            }
        `}</style>
    </>
  );
};
