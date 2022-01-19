import styled from "styled-components";
import * as palette from "../../styles/variables";

export const PayContainer = styled.div`
* {
    font-family: ${palette.FONT_FAMILY} !important;
}
#pay * {
    box-sizing: border-box;
    width: 100%;
}
#pay {
    position: relative;
    top: 5vw;
}
#pay_container_main {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
}
#pay_container {
    width: 49.5vw;
    background: #ffffff;
    border: 0.03125vw solid #00b3db73;
    box-sizing: border-box;
    box-shadow: 0px 0px 0.75vw rgba(15, 36, 44, 0.15);
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    padding: 2.1875vw 2.75vw 4vw 2.75vw;
}
#pay_block1 h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 2.25vw;
    line-height: 2.8125vw;
    color: #ff4081;
}
#pay_block2 {
    width: 100%;
    height: 100%;
    margin-top: 1.5625vw;
    display: grid;
    grid-template-columns: 45% 45%;
    gap: 10%;
}
#pay_block2_container1_wrapper {
    display: grid;
    grid-template-rows: 10.5625vw 10.5625vw;
    gap: 1.6875vw;
}
.pay_block2_container1 {
    cursor: pointer;
    font-style: normal;
    font-weight: bold;
    text-align: center;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0.03125vw solid #181b1d44;
    transition: 1s ease;
    background: #ffffff;
    border-radius: 0.5vw;
    position: relative;
}
.pay_block2_container2 {
    color: white;
    background: linear-gradient(135deg, #12c5e7 0%, #0385b1 100%);
    border: 5px solid rgba(0, 179, 219, 0.3);
    box-shadow: 0px 0px 12px rgba(15, 36, 44, 0.15);
    border-radius: 0.5vw;
    transition: 1s ease-in-out;
}
.pay_block2_container1 #success {
    display: none;
}
.pay_block2_container2 #success {
    position: absolute;
    background: #ffffff;
    border-radius: 0.25vw;
    top: 0;
    right: 0;
    width: 4.875vw;
    padding: 0.1vw 0;
    align-items: center;
    text-align: center;
    color: #ff4081;
    display: block;
    margin: 0.5vw 0.5vw 0 0;
}
.pay_block2_container2 #success p {
    margin: 0;
    font-size: 0.875vw;
    font-style: normal;
    font-weight: 600;
    line-height: 1.5vw;
}
#pay_block2_container1_block1 {
    width: fit-content;
    height: fit-content;
}
#plantype {
    font-size: 1.5vw;
    margin: 0;
    color: rgba(33, 46, 52, 0.8);
    font-style: normal;
    font-weight: bold;
    text-align: center;
}
#amount {
    font-size: 2vw;
    margin: 0;
    font-style: normal;
    font-weight: bold;
    text-align: center;
    opacity: 0.8;
    line-height: 2vw;
    margin-top: 0.5vw;
}
#permonth {
    font-size: 1vw;
    margin: 0;
    font-style: normal;
    font-weight: normal;
    text-align: center;
    color: rgba(33, 46, 52, 0.6);
}
.pay_block2_container2 #plantype {
    color: white;
}
.pay_block2_container2 #amount {
    color: white;
}
.pay_block2_container2 #permonth {
    color: white;
}
/*===================paymentblock===================*/
#pay_block2_container2 {
    background: #ffffff;
    border: 0.03125vw solid #181b1d44;
    box-sizing: border-box;
    border-radius: 0.5vw;
    color: #0f1d46;
    opacity: 1;
    font-style: normal;
    display: flex;
    flex-direction: column;
    padding: 2.25vw 1.875vw;
}
#pay_block2_container2 #pay_block2_container2_block1 {
    display: grid;
    padding: 0 0.75vw;
    height: 100%;
}
#pay_block2_mini_main {
    display: grid;
    grid-template-rows: auto auto;
}
#pay_block2_mini {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
#pay_block2_container2_block1_title {
    width: 100%;
    border: none;
    border-bottom: 0.0125vw solid #00000048;
    height: 3vw;
}
#pay_block2_container2_block1_title h1 {
    margin: 0;
    font-size: 1.25vw;
    font-style: normal;
    font-weight: 600;
    color: #0f1d46;
}
#pay_block2_mini_container p {
    color: #0f1d46;
    margin: 0;
}
#pay_block2_mini #pay_block2_mini_container {
    width: fit-content;
    height: fit-content;
}
#prize_title {
    font-style: normal;
    font-weight: normal;
    font-size: 1vw;
    line-height: 1.5vw;
    color: #0f1d46;
}
#pay_prize {
    font-style: normal;
    font-weight: 600;
    font-size: 1.25vw;
    color: #0f1d46;
}
#pay_block2_cupon {
    width: 100%;
    height: 2.5vw;
    border: 0.03125vw solid #00b3db;
    box-sizing: border-box;
    border-radius: 0.25vw;
    position: relative;
}
#pay_block2_cupon input {
    width: 100%;
    height: 100%;
    border: none;
    position: absolute;
    color: #0f1d46;
    font-style: normal;
    font-weight: normal;
    font-size: 0.875vw;
    line-height: 1.5vw;
    background: transparent;
    position: absolute;
    padding: 0.625vw 3.2vw 0.625vw 0.625vw;
    outline: none;
}
#applybtn {
    color: #ff4081;
    font-style: normal;
    font-weight: normal;
    font-size: 0.875vw;
    line-height: 1.5vw;
    cursor: pointer;
    position: absolute;
    width: fit-content;
    right: 0.625vw;
    top: 0.375vw;
}
#pay_block2_container2_block1_btn button {
    background: #ff4081;
    border-radius: 0.5vw;
    width: 100%;
    height: 3.5vw;
    border: none;
    outline: none;
    font-style: normal;
    font-weight: 600;
    font-size: 1.125vw;
    color: white;
}
#login_main .footer {
    margin-top: 10vw;
}
@media (max-width: 650px) {
    #pay_container_main {
        height: 100%;
    }
    #login_main .footer {
        margin-top: 30vw;
    }
    #pay {
        position: unset;
        padding-top: 20vw;
    }
    #pay_container {
        width: 90%;
        height: fit-content;
        border-radius: 1vw;
        padding: 4vw;
    }
    #pay_block2 {
        width: 100%;
        height: 100%;
        margin-top: 1.5625vw;
        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: auto auto;
        gap: 0;
    }
    #pay_container {
        border: unset;
        box-shadow: unset;
    }
    .pay_block2_container1 {
        padding: 7vw 0;
        border-radius: 3vw;
    }
    #pay_block2_container2 {
        height: 90vw;
        margin-top: 10vw;
        border-radius: 3vw;
        padding: 5vw;
    }
    #pay_block2_container1_wrapper {
        grid-template-rows: auto;
        gap: 5vw;
        margin-top: 5vw;
    }
    .pay_block2_container2 #success {
        width: 25vw;
        padding: 2.5vw 0;
        font-size: 3vw;
        border-radius: 1vw;
        margin: 1.5vw;
    }
    #plantype {
        font-size: 6vw;
    }
    #pay_block1 h1 {
        font-size: 6vw;
    }
    #pay_block2_container2_block1_title h1 {
        font-size: 5vw;
    }
    #pay_block2_container2_block1_title {
        height: 10vw;
    }
    #prize_title {
        font-size: 4vw;
        padding: 1vw 0;
    }
    #pay_prize {
        font-size: 4vw;
    }
    #pay_block2_mini {
        height: fit-content;
    }
    #pay_block2_cupon {
        height: 10vw;
    }
    #applybtn {
        font-size: 3.8vw;
        top: 50%;
        right: 1%;
        transform: translateY(-50%);
    }
    #pay_block2_cupon input {
        font-size: 5vw;
        padding: 0 0 0 1.5vw;
    }
    #pay_block2_container2_block1_btn button {
        border-radius: 1.2vw;
        height: 11vw;
        font-size: 4vw;
    }
    #amount {
        font-size: 9vw;
        line-height: 8vw;
        margin-top: 3vw;
    }
    #permonth {
        font-size: 4vw;
    }
    #pay_block2_container1_block1 {
        padding: 2vw 0 0 0;
    }
    .pay_block2_container2 #success p {
        font-size: 3vw;
    }
}
`