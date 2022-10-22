import React, { Component } from 'react';
import styles from './main_header.module.css';


class MainHeader extends Component{
    render() {
        return (
            <section>
                <div className={styles.header} >
                <div className={styles.item}>
                    <img src="img/main/edu.png" alt="edu" style={{width: '50%', height:'85%'}}/>
                    <p>교육</p>
                </div>
                <div className={styles.item}>
                    <img src="img/main/edu.png" alt="edu" style={{width: '50%', height:'85%'}}/>
                    <p>채용</p>
                </div>
                <div className={styles.item_right}>
                    <p>지식공유 참여</p>
                </div>
                </div>
                <div className={styles.header_hr}>
                    <hr style={{width: '100%'}}></hr>
                </div>
                <div className={styles.menuBar}>
                    <div className={styles.logoImg}>
                        <img src="img/main/logo.png" alt="logo"/>
                    </div>
                    <div className={styles.item} ><h3>강의</h3></div>
                    <div className={styles.item}><h3>로드맵</h3></div>
                    <div  className={styles.item}><h3>멘토링</h3></div>
                    <div className={styles.item}><h3>커뮤니티</h3></div>
                    <div className={styles.item}><h3>인프런</h3></div>
                    <div className={styles.right_item_search}>
                        <input type="search" id={styles.top_search}/>
                    </div>
                    <div className={styles.right_item}>
                        <button type="button" id={styles.login_btn}>로그인</button>
                    </div>
                    <div className={styles.right_item} >
                        <button type="button" id={styles.signup_btn}>회원가입</button>
                    </div>
                </div>
            </section>
        );
    }
    
}

export default MainHeader