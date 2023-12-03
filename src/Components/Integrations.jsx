import React from 'react'
import styled from 'styled-components';
function Integrations() {
  return (
    <Page>
        <Upper>
            <div className="handshakewelcome">
                <div> &#129321; AND MORE...</div>
            </div>
            <div class="banner">
            <div id="empower">Explore an array of features that elevate your</div>
                <div id="insight"> <div style={{color:'#FE8162'}}>Productivity</div> to new heights</div>
                <div id="below">Discover the tools that will revolutionize the way you </div>
                <div id="below-next">manage and optimize your operations</div>
            </div>
            <div className="bottom-three-cards">
                <div className="card-right">
                    <img src="mobile.png" alt="" />
                    <h2>Flexibile Scheduling</h2>
                    <p>Enjoy the flexibility of cross-platform compatibility. Our product works seamlessly across desktop, web, and mobile devices, allowing you to work from your preferred device.</p>
                </div>
                <div className="card-right">
                    <img src="bell.png" alt="" />
                    <h2>Easy Communication</h2>
                    <p>Trust in our robust data encryption to keep your sensitive information safe and secure. Rest easy knowing your data is protected at all times.</p>
                </div>
                <div className="card-right">
                    <img src="fire.png" alt="" />
                    <h2>Analytics</h2>
                    <p>Gain valuable insights with our advanced analytics feature</p>
                </div>
            </div>
        </Upper>
        <Lower>
            <div className="handshakewelcome">
                <img src="tools.png" alt="" />
                <div>INTEGRATIONS</div>
            </div>
            <div className="banner">
                <div className="p1">
                    <div>Enable</div>
                    <div style = {{color:'#FE8162'}}>Integration</div>
                    <div>with</div>
                </div>
                <div className="p2">
                    <div>other popular tools and</div>
                </div>
                <div className="p3">
                    <div>platforms</div>
                </div>
                <div className="l1">Seamlessly connect and amplify your workflow</div>
                <div className="l2">by enabling integration with a diverse array of </div>
                <div className="l3">widely-used tools and platforms.</div>
                <div className="framer-img">
                    <img src="https://framerusercontent.com/images/sQd7MkwgkdQRRQ1a99k5Z1zLfA.png?scale-down-to=1024" alt="" />
                </div>
            </div>
        </Lower>
    </Page>
  )
}
const Lower = styled.div`
    width: 100vw;
    background-color:rgb(28, 28, 28);
    padding-top:18vh;
    display: flex; flex-direction: column;
    justify-content:flex-end;
    .handshakewelcome{
        margin-left:auto;
        margin-right:auto;
        display: flex; flex-direction: row; color: #8247FF;
        font-family: 'Comic Sans MS';
        font-weight:bold;
        font-size:14px;
        height: 25px;
        width: 160px;
        background-color:white;
        border: 0.5px solid rgba(130, 71, 255, 0.2);
        border-radius: 10px;
        align-items: center;
        gap: .5vw;
        justify-content:center;
        padding:5px;
        margin-bottom:2vh;
    }
    .handshakewelcome>img{
        height:20px; width:20px;
    }
    .banner{
        margin-top:2vh;
        width: 100vw;
        height:14vh;
        display:flex; flex-direction: column; gap: 1vw;
        align-items: center;
    }
    .p1,.p2,.p3{
        color:white;
        display:flex; flex-direction: row; gap: 1vw;
        font-size:48px; font-weight:bold;
        margin-left:auto;
        margin-right:auto;
        word-spacing:5px;
        line-height:2rem;
    }
    .p3{
        margin-bottom:2vh;
    }
    .l1,.l2,.l3{
        color:#767575;
        display:flex; flex-direction: row; gap: 1vw;
        margin-left:auto;
        margin-right:auto;
        font-size:18px;
        line-height:5px;
    }
    .framer-img{
        height:50vh;
        width:100vw;
        display:flex; flex-direction:row;
        align-items:flex-end;
        justify-content:center;
    }
    .framer-img>img{
        height:90%;
        width:40%;
    }
`;
const Upper = styled.div`
    min-height:100vh;
    padding-top:10vh;
    padding-left:10vw;
    .card-left>h1{
        font-size:34px;
    }
    .bottom-three-cards{
        display:flex;
        flex-direction:row;
        gap:3vw;
        margin-top:20vh;
        justify-content:flex-start;
    }
    .card-right{
        height:auto;
        width: 22vw;
        border: 1px solid;
        border-radius:20px;
        display:flex; flex-direction:column;
        align-items:center;
        background-color:#212121;
        padding-top:4rem;
        padding-bottom:2rem;
        padding-left:1rem;
        padding-right:1rem;
    }
    .card-right>img{
        height:100px;
        width:100px;
        align-text:center;
    }
    .card-right>p{
        color: #767575;
        padding-left:5px;
    }
    .card-right>h2{
        color:white;
    }
`;
const Page = styled.div`
    overflow-x:hidden;
    height:auto;
    width: 100vw;
    background-color: rgb(28, 28, 28);
    .handshakewelcome{
        margin-right:auto;
        margin-top:10vh;
        display: flex; flex-direction: row; color: #8247FF;
        font-family: 'Comic Sans MS';
        font-weight:bold;
        height: 30px;
        width: 160px;
        background-color:white;
        border: 0.5px solid rgba(130, 71, 255, 0.2);
        border-radius: 10px;
        align-items: center;
        gap: .5vw;
        justify-content:center;
    }
    .handshakewelcome{
        font-size:16px;
    }
    .banner{
        margin-top:2vh;
        width: 100vw;
        height:14vh;
        display:flex; flex-direction: column; gap: 1vw;
        align-items: start;

    }
    #empower{
        font-size: 45px;
        font-weight:bold;
        display:flex; flex-direction: row; gap: 1vw;
        color:white;
    }
    #insight{
        display:flex; flex-direction: row; gap: 1vw;
        font-size: 45px;
        color:white;
        font-weight:bold;
    }
    #below,#below-next{
        color: #767575;
        font-weight:bold;
        width: 100vw;
        display:flex; flex-direction: row;
        justify-content:flex-start;
    }
    
`;

export default Integrations