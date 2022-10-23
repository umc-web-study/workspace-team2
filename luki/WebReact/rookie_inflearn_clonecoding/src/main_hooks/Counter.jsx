import React, { useState, useEffect, useRef} from 'react';
import styles from '../main_benner/main_benner.module.css';

const imgList = [
    "img/main/benner_1.png", 
    "img/main/benner_2.png", 
    "img/main/benner_3.png", 
    "img/main/benner_4.png", 
    "img/main/benner_5.png", 
    "img/main/benner_6.png", 
    "img/main/benner_7.png"];


function Counter() {
    const [location, setLocation] = useState(1);
    const [image, setImage] = useState(imgList[0]);
    const [count_flag, setCountFlag] = useState(true);

    useEffect(() => {
        const count = setInterval(() => {
            if(count_flag) {  
                
                if(location === 7) {
                    setLocation(1);
                    setImage(imgList[0]);
                }
                else if(location === 1){
                    setLocation(2);
                    setImage(imgList[1]);
                }
                else {
                    setLocation((location + 1) % 8);
                    setImage(imgList[location - 1]);
                }
            }
        }, 3000);
        return () => clearInterval(count);
    }, [location, image, count_flag]);

    return(
        <section>
            <div className={styles.benner_img}>
                <img id={styles.benner} src={image} alt='benner'/>
            </div>
            <div className={styles.main_benner}>
                <div className={styles.control_main}>
                    <p id={styles.control_location}>{location}/7</p>
                    <div id={styles.control_elements} onClick={() => {
                        console.log(location);
                        if(location === 7) {
                            setLocation(6);
                            setImage(imgList[5]);
                        }
                        else if(location === 1){
                            setLocation(7);
                            setImage(imgList[6]);
                        }
                        else {
                            setLocation((location - 1));
                            setImage(imgList[location - 1]);
                        }
                    }}>
                        <img id={styles.control_main_left} src="img/main/control_left.png" alt='left' />
                    </div>
                    <div id={styles.control_elements} onClick={() => {
                        setCountFlag(!count_flag);
                        console.log(count_flag);
                    }}>
                        <img id={styles.control_main_center} src="img/main/control_center3.png" alt='center' />
                    </div>
                    <div id={styles.control_elements} onClick={() => {
                        setCountFlag(!count_flag);
                        if(location === 7) {
                            setLocation(1);
                            setImage(imgList[0]);
                        }
                        else if(location === 1){
                            setLocation(2);
                            setImage(imgList[1]);
                        }
                        else {
                            setLocation((location + 1) % 8);
                            setImage(imgList[location - 1]);
                        }

                        console.log(location);
                        setCountFlag(!count_flag);
                    }}>
                        <img id={styles.control_main_right} src="img/main/control_right.png" alt='right' />
                    </div>
                </div>
                <div className={styles.control_event} style={{ borderLeft: '1px solid #ddd', paddingLeft: '1rem' }}>
                    <div className={styles.events} onClick={() => {
                        setImage(imgList[0]);
                        setLocation(1);
                        }}>
                        <p>떠먹는 CS</p>
                    </div>
                    <div className={styles.events} onClick={() => {
                        setImage(imgList[1]);
                        setLocation(2);
                        }}>
                        <p>지식공유신청</p>
                    </div>
                    <div className={styles.events} onClick={() => {
                        setImage(imgList[2]);
                        setLocation(3);
                        }}>
                        <p>왕초보 모여라</p>
                    </div>
                    <div className={styles.events} onClick={() => {
                        setImage(imgList[3]);
                        setLocation(4);
                        }}>
                        <p>신규 강의</p>
                    </div>
                    <div className={styles.events} onClick={() => {
                        setImage(imgList[4]);
                        setLocation(5);
                        }}>
                        <p>Top 50</p>
                    </div>
                    <div className={styles.events} onClick={() => {
                        setImage(imgList[5]);
                        setLocation(6);
                        }}>
                        <p>입문 로드맵</p>
                    </div>
                    <div className={styles.events} onClick={() => {
                        setImage(imgList[6]);
                        setLocation(7);
                        }}>
                        <p>인프런은</p>
                    </div>
                    <div className={styles.events}>
                        <p>인프런 동료 찾기</p>
                    </div>
                    <div className={styles.control_eventList}>
                        <img src="./img/main/event_close.png" alt='event_close' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Counter;