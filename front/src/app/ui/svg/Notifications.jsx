import React from "react";

const Notifications = () => {
    return (
        <div className="flex items-center">
            <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
            >
                <path
                    d="M12.8001 23.4665C13.4607 23.4673 14.1051 23.2623 14.6438 22.88C15.1825 22.4977 15.5887 21.957 15.806 21.3332H9.79429C10.0115 21.957 10.4177 22.4977 10.9564 22.88C11.4951 23.2623 12.1396 23.4673 12.8001 23.4665ZM20.2668 15.5583V10.6666C20.2668 7.23513 17.9361 4.34449 14.7788 3.47516C14.4663 2.68796 13.7025 2.1333 12.8001 2.1333C11.8977 2.1333 11.134 2.68796 10.8215 3.47516C7.66417 4.34555 5.33352 7.23513 5.33352 10.6666V15.5583L3.51273 17.3791C3.41348 17.478 3.33478 17.5955 3.28114 17.7249C3.2275 17.8543 3.19999 17.9931 3.2002 18.1332V19.1999C3.2002 19.4828 3.31258 19.7541 3.51261 19.9541C3.71265 20.1541 3.98396 20.2665 4.26686 20.2665H21.3334C21.6163 20.2665 21.8876 20.1541 22.0877 19.9541C22.2877 19.7541 22.4001 19.4828 22.4001 19.1999V18.1332C22.4003 17.9931 22.3728 17.8543 22.3191 17.7249C22.2655 17.5955 22.1868 17.478 22.0875 17.3791L20.2668 15.5583Z"
                    fill="#8B8B8B"
                />
                <circle cx="18.8391" cy="5.20926" r="2.80496" fill="#015190" />
            </svg>
            {/* Agrega aquí cualquier texto o contenido adicional para las notificaciones  */}
        </div>
    );
};

export default Notifications;
