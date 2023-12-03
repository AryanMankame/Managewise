import React from 'react'
import styled from 'styled-components';
function Pricing() {
  return (
    <Page>
        <div className="handshakewelcome">
            <div>&#128178; Pricing</div>
        </div>
        <div class="banner">
            <div id="insight"> <div>Select your ideal</div> <div style={{color:'#FE8162'}}>Pricing</div> <div>plan</div></div>
            <div id="below">At Manage Wise, we believe in providing you with pricing</div>
            <div id="below-next">plans that adapt to your unique needs.</div>
        </div>
        <div className="three-cards">
            <div className="card-1">
                <img src="0.png" alt="" />
                <button id = "get-started">Get Started</button>
            </div>
            <div className="card-2">
                <img src="25.png" alt="" />
                <button id = "get-started-2">Get Started</button>
            </div>
            <div className="card-1">
                <img src="42.png" alt="" />
                <button id = "get-started">Get Started</button>
            </div>
        </div>
    </Page>
  )
}
const Page = styled.div`
    width: 100vw;
    display:flex; flex-direction:column;
    align-items:center;
    .handshakewelcome{
        margin-top:10vh;
        display: flex; flex-direction: row; color: #8247FF;
        font-family: 'Comic Sans MS';
        font-size: 14px;
        font-weight:bold;
        height: 30px;
        width: 100px;
        background-color:white;
        border: 0.5px solid rgba(130, 71, 255, 0.2);
        border-radius: 10px;
        align-items: center;
        gap: .5vw;
        justify-content:center;
        margin-bottom:5vh;
    }
    .banner{
        margin-top:2vh;
        width: 100vw;
        height:14vh;
        display:flex; flex-direction: column; gap: 1vw;
        align-items:center;
    }
    #insight{
        display:flex; flex-direction:row;
        gap: 1vw;
        font-size: 36px;
        font-weight:bold;
        line-height:5vh;
    }
    #below,#below-next{
        color: #767575;
        font-weight:bold;
        width: 100vw;
        display:flex; flex-direction: row;
        font-size:18px;
        width: 60%;
        margin-top:2vh;
        line-height:5px;
        justify-content:center;
    }
    #get-started,#get-started-2{
        border: none;
        font-family: 'Comic Sans MS';
        font-weight:bold;
        padding: 10px 30px;
        border-radius: 10px;
        cursor: pointer;
        &:hover{
            transform:scale(1.1);
        }
        margin-bottom:5vh;
    }
    #get-started{
        background-color: #fff;
        color: black;
    }
    #get-started-2{
        background-color: #8247FF;
        color: #fff;
    }
    .card-1,.card-2{
        height:auto;
        width:18vw;
        display:flex; flex-direction: column;
        align-items:start;
        padding-left:3vw;
        border-radius:15px;
    }
    .card-1{
        background-color:#EDEDFA;
    }
    .card-2{
        background-color:#1c1c1c;
    }
    .card-1>img,.card-2>img{
        height:30vh;
        width:70%;
        margin-top:5vh;
        margin-bottom:2vh;
    }
    .three-cards{
        display:flex; flex-direction:row;
        gap:1vw;
        margin-top:10vh;
        margin-bottom:10vh;
    }
`;
export default Pricing