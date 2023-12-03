import React from 'react'
import styled from 'styled-components';
function Premier() {
  return (
    <Page>
        <div className="handshakewelcome">
            <img src="https://img.icons8.com/?size=48&id=1H52efUsDX7A&format=png" alt="" />
            <div>PREMIER FEATURES</div>
        </div>
        <div class="banner">
            <div id="empower">
                <div>Discover our product's</div> 
                <div style={{color:'#FE8162'}}>Capabilities</div> 
            </div> 
            <div id="below">Don't settle for mediocrity - embrace the future of management</div>
            <div id="below-next">with Manage Wise.</div>
        </div>
        <div className="top-two-cards">
            <div className="card-left">
                <div className="top-star">
                    <img src="https://img.icons8.com/?size=48&id=8ggStxqyboK5&format=png" alt="" />
                </div>
                <h1>Boost productivity and streamline workflow with us. Enjoy our intuitive interface and robust features.</h1>
            </div>
            <div className="card-right">
                <img src="https://framerusercontent.com/images/qJeaFhSmQ29M1S55GRW5kYb4.png?scale-down-to=1024" alt="" />
                <h2>Smart Task Management</h2>
                <h3>Say goodbye to chaos with our smart task management system</h3>
            </div>
        </div>
        <div className="bottom-three-cards">
            <div className="card-right">
                <img src="https://framerusercontent.com/images/LFrHT3kBfxtMGAZfWkyLvYAKsbg.png?scale-down-to=512" alt="" />
                <h2>Flexibile Scheduling</h2>
                <h3>Stay productive with our flexible scheduling system</h3>
            </div>
            <div className="card-right">
                <img src="https://framerusercontent.com/images/p65qwfjd0cd0ZHZoNFpsh7XU.png?scale-down-to=512" alt="" />
                <h2>Easy Communication</h2>
                <h3>Collaborate seamlessly with your team in real-time</h3>
            </div>
            <div className="card-right">
                <img src="https://framerusercontent.com/images/FaY6aekE67ytWg6HDfDpy2FaHY.png?scale-down-to=512" alt="" />
                <h2>Analytics</h2>
                <h3>Gain valuable insights with our advanced analytics feature</h3>
            </div>
        </div>
    </Page>
  )
}

const Page = styled.div`
    padding-top:10vh;
    height: auto;
    width:100vw;
    .handshakewelcome{
        margin-left:auto;
        margin-right:auto;
        margin-top:10vh;
        display: flex; flex-direction: row; color: #8247FF;
        font-family: 'Comic Sans MS';
        font-size: 14px;
        font-weight:bold;
        height: 30px;
        width: 280px;
        background-color:white;
        border: 0.5px solid rgba(130, 71, 255, 0.2);
        border-radius: 10px;
        align-items: center;
        gap: .5vw;
        justify-content:center;
    }
    .handshakewelcome>img{
        height: 30px;
        width: 30px;
    }
    .banner{
        margin-top:5vh;
        width: 100vw;
        height:14vh;
        display:flex; flex-direction: column; gap: 1vw;
        align-items: center;
    }
    #empower{
        font-size: 40px;
        font-weight:bold;
        display:flex; flex-direction: row; gap: 1vw;
    }
    
    #below,#below-next{
        color: #767575;
        font-weight:bold;
        width: 100vw;
        display:flex; flex-direction: row;
        justify-content:center;
    }
    .top-two-cards{
        display: flex; flex-direction:row;
        justify-content:center;
        gap:3vw; flex-wrap:wrap;
        margin-top:10vh;
    }
    .card-left{
        height: 60vh;
        width: 30vw;
        background-color:#EDEDFA;
        padding:1em;
        border-radius:15px;
        font-size: 34px;
    }
    .card-right{
        height:60vh;
        width: 28vw;
        border: 1px solid #EDEDFA;
        border-radius:20px;
    }
    .card-right>img{
        height:70%;
        width:100%;
    }
    .card-right>h3{
        color: #767575;
        margin-left: 10%;
    }
    .card-right>h2{
        margin-left:10%;
    }
    .top-star{
        background-color:white;
        width:50px;
        border-radius:10px;
        margin-top:3vh;
    }
    .card-left>img{
        height:30px;
        width:30px;
    }
    .card-left>h1{
        font-size:34px;
    }
    .bottom-three-cards{
        display:flex;
        flex-direction:row;
        gap:3vw;
        margin-top:5vh;
        justify-content:center;
        margin-bottom:5vh;
    }
`;
export default Premier