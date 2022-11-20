import styled from "styled-components";
import React, { useState } from "react";
import leftIcon from "../img/leftarrow.png";
import rightIcon from "../img/rightarrow.png";


const Calendar = () => {

    const [color, setColor] = useState('white');

    const onClickDate = () => {
        color === 'white' ? setColor('black') : setColor('white');
    }

    const todaydatelist = {
        years: new Date().getFullYear(), //오늘 연도
        months: new Date().getMonth() + 1, //오늘 월
        dates: new Date().getDate(), //오늘 날짜
        days: new Date().getDay(), //오늘 요일
      };

    const [year, setYear] = useState(new Date().getFullYear());
    const [month, setMonth] = useState(new Date().getMonth() + 1);
    const [nowdate, setTodaydate] = useState(new Date().getDate());

    const previousMonth = () => {
        if (month === 1) {
            setYear(year - 1);
            setMonth(12);
        } else setMonth(month - 1);
    };
    const nextMonth = () => {
        if (month === 12) {
            setYear(year + 1);
            setMonth(1);
        } else setMonth(month + 1);
    };
    const generateCalendar = (year, month) => {
        const startDay = new Date(year, month - 1, 1).getDay();
        const endDate = new Date(year, month, 0).getDate();
        const weekNumber = Math.ceil((startDay + endDate) / 7);
        const calendar = [];

        let nowDate = 0;
        let nowDay = 0;

        for (let j = 0; j < weekNumber; j++) {
            const nowWeek = [];
            for (let i = 0; i < 7; i++) {
                if (startDay <= nowDay && nowDate < endDate) {
                    nowDate++;
                    nowWeek.push(nowDate);
                } else {
                    nowWeek.push(0);
                }
                nowDay++;
            }
            calendar.push(nowWeek);
        }
        return renderCalendar({ calendar });
    };
    const renderCalendar = ({ calendar }) => {
        const result = [];

        for (let j = 0; j < calendar.length; j++) {
            const row = [];
            var Todaystyle;
            for (let i = 0; i < 7; i++) {
                let date = calendar[j][i] ? calendar[j][i] : null;
                console.log(nowdate, ' ', date)
                if (date === nowdate && todaydatelist.years === year && todaydatelist.months === month) {
                    Todaystyle = {
                        verticalAlign: 'top',
                        fontSize: '10px',
                        fontFamily: 'HUScribble130',
                        lineHeight: 'auto',
                        color: 'black',
                        backgroundColor: 'white',
                        borderRadius: '50%',
                        width: '1.3rem',
                        height: '1.3rem',
                        margin: '0 1.3rem',
                    };
                }
                else {
                    Todaystyle = {
                        verticalAlign: 'top',
                        fontSize: '10px',
                        fontFamily: 'HUScribble130',
                        lineHeight: 'auto',
                        color: 'white',
                    };
                }
                row.push(
                    <DayBoxWrapper>
                        <DayBox></DayBox>
                        <div style={Todaystyle}><Text>{date}</Text></div>
                    </DayBoxWrapper>
                );
            }
            result.push(<Daylist>{row}</Daylist>);
        }

        return result;
    };

    return (
        <CalendarBox>
            <Month>

                <MonthText>
                    {year}년{month}월
                </MonthText>
                <Btn><img
                    src={leftIcon}
                    alt="left-icon"
                    style={{ height: "15px", width: "15px", color: 'white' }}
                    onClick={previousMonth}
                /></Btn>
                <Btn><img
                    src={rightIcon}
                    alt="right-icon"
                    style={{ height: "15px", width: "15px" }}
                    onClick={nextMonth}
                /></Btn>
            </Month>

            <DayWrapper>
                <Day sun>일</Day>
                <Day>월</Day>
                <Day>화</Day>
                <Day>수</Day>
                <Day>목</Day>
                <Day>금</Day>
                <Day sat>토</Day>
            </DayWrapper>
            <Datelist>{generateCalendar(year, month)}</Datelist>
        </CalendarBox>
    );
};


const CalendarBox = styled.div`


    width:10px;
    height:10px;
    display: flex;
    align-items: center;
    ustify-content: flex-start;
    flex-direction: column;
    padding: 18px 31px;
    gap: 36px;
    margin-left:15rem;
    margin-top:4rem;

`;

const Month = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
const MonthText = styled.div`
    width:80px;
    text-align: center;
    vertical-align: top;
    font-size: 15px;
    font-family: HUScribble150;
    line-height: auto;
    color: white;
    margin-right:15rem;
`;

const Btn = styled.div`
    &:hover{cursor:pointer;};
    margin-right: 1rem;
    margin-left: 1rem;
`;

const Datelist = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 5px;
`;
const DayBox = styled.div`
    width: 20px;
    height: 20px;
    border-radius:50%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 3.5px 4.5px;
    margin: 1rem;
    background-color: #696969;
    opacity:0.5;
`;
const Text = styled.div`

    vertical-align: top;
    font-size: 10px;
    font-family: HUScribble130;
    line-height: auto;
    color: 'white';

`;

const DayBoxWrapper = styled.div`

    align-items:center;
    text-align:center;

`;
const Daylist = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 7px;
`;

const Day = styled.div`
    display:flex;
    margin-right:1.8rem;
    margin-left:1.8rem;
    font-size:10px;
    color: ${props=>props.sun? 'red' : props=>props.sat? 'blue' : 'white'};
`;

const DayWrapper = styled.div`
    display:flex;
`;

export default Calendar;


