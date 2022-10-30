import React, { Component } from 'react';
import styles from './footer_company.module.css';

class FooterCompany extends Component{
    render(){
        return(
            <section className={styles.company_flex}>
                <div className={styles.companys}>
                    <div id={styles.text_wrapper}>
                        <h3 style={{textAlign: 'center'}}>이미 많은 기업 구성원들이 인프런에서 성장하고 있어요</h3>
                    </div>
                    <div id={styles.img_wrapper}>
                        <div id={styles.company_logo}>
                            <img src="img/main/LINE.png" alt="라인" />
                        </div>
                        <div id={styles.company_logo}>
                            <img src="img/main/bros.png" alt="배민" />
                        </div>
                        <div id={styles.company_logo}>
                            <img src="img/main/SK.png" alt="슼" />
                        </div>
                        <div id={styles.company_logo}>
                            <img src="img/main/Naver.png" alt="네이버" />
                        </div>
                        <div id={styles.company_logo}>
                            <img src="img/main/Nexon.png" alt="넥슨" />
                        </div>
                        <div id={styles.company_logo}>
                            <img src="img/main/Sansung.png" alt="삼성" />
                        </div>
                        <div id={styles.company_logo}>
                            <img src="img/main/Kakao.png" alt="카카오" />
                        </div>
                        <div id={styles.company_logo}>
                            <img src="img/main/LG.png" alt="엘지" />
                        </div>
                        <div id={styles.company_logo}>
                            <img src="img/main/NC.png" alt="엔씨" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FooterCompany;