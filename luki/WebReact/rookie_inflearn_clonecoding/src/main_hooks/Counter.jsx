import React, { useState, useEffect} from 'react';
import styles from '../main_benner/main_benner.module.css';

const imgList = [
    "img/main/benner_1.png", 
    "img/main/benner_2.png", 
    "img/main/benner_3.png", 
    "img/main/benner_4.png", 
    "img/main/benner_5.png", 
    "img/main/benner_6.png", 
    "img/main/benner_7.png"];
let countFlag = true;

function Counter() {
    const [location, setLocation] = useState(1);
    useEffect(() => {
        const count = setInterval(() => {
            if(countFlag) {
                setLocation((location + 1) % 8);

                if(location <= 0) setLocation(7);
                else if(location > 7 ) setLocation(1);
            }
            console.log(location);
        }, 5000);
        return () => clearInterval(count);
    }, [location]);

    return(
        <div className={styles.control_main}>
            <p id={styles.control_location}>{location}/7</p>
            <div id={styles.control_elements} onClick={() => {
                setLocation((location - 1) % 8);

                if(location <= 0) setLocation(7);}}>
                <img id={styles.control_main_left} src="img/main/control_left.png" alt='left' />
            </div>
            <div id={styles.control_elements} onClick={() => !countFlag}>
                <img id={styles.control_main_center} src="img/main/control_center3.png" alt='center' />
            </div>
            <div id={styles.control_elements} onClick={() => {
                setLocation((location + 1) % 8);

                if(location > 7 ) setLocation(1);}}>
                <img id={styles.control_main_right} src="img/main/control_right.png" alt='right' />
            </div>
        </div>
    )
}

export default Counter;