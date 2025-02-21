import React from "react";
import styles from "./style.module.scss";

const Notification: React.FC = ({ onNotificationClick, text }) => {
    return (
        <div
            className={styles.notification}
            onClick={() => {
                onNotificationClick();
            }}
        >
            <div className={styles.canc} style={{ backgroundImage: `url('/assets/cancel.svg')` }}></div>
            <p>{text}</p>
        </div>
    );
};

export default Notification;
