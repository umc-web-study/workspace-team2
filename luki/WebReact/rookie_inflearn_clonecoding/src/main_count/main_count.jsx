import React, { Component } from 'react';
import styles from './main_count.module.css';
import MainCountSpinner from './count_review_spinner';

class MainCount extends Component{

    render(){
        return(
            <div className={styles.reviews}>
                <div id={styles.account_num}>
                    <h1 style={{marginBottom: '10px'}}><span style={{color: 'lightgreen'}}>965.131</span> 명이 <br/>인프런과 함께합니다.</h1>
                    <p style={{color: 'lightgray'}}>수년~십수년씩 커리어를 쌓고 노력해온 <br/>
                        지식공유자들이 지식과 노하우를 공유합니다.<br/>
                        당장 좋은 사수가 없거나, 교육을 받지 못하더라도 걱정하지 마세요.<br />
                        인프런에서 전문가들에게서 지식과 노하우를 배울 수 있습니다.</p>
                    <div id={styles.buttons}>
                        <button type="button" id={styles.left}>수강평 더보기</button>
                        <button type="button" id={styles.right}>기능/강좌 요청하기</button>
                    </div>
                </div>
                <div id={styles.spinner_wrapper}>
                    <MainCountSpinner />
                </div>
            </div>
        );
    }
}

export default MainCount;