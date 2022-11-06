import React, { Component } from 'react';
import styles from './footer_benner.module.css';

class FooterBenner extends Component{
    render() {
        return(
            <div className={styles.footer_benner}>
                <div id={styles.container}>
                    <p>지식을 나눠주세요.<br />쉽게 시작하고 합당한 보상을 받을 수 있어요</p>
                    <button type="button" id={styles.more_btn}>지식공유 알아보기</button>
                </div>
            </div>
        );
    }
}

export default FooterBenner;