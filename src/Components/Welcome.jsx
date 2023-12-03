import React from 'react'
import styled from 'styled-components';
function Welcome() {
  return (
    <Outer>
    <Page>
        <Navdiv>
            <div className="logo">
                <img src="https://framerusercontent.com/images/MwRbsJrk7ItYxeL7mKvPzrq3g.png" alt="" />
                <div>ManageWise</div>
            </div>
            <div className="navdata">
                <div>Features</div>
                <div>
                    <img src="https://img.icons8.com/?size=24&id=avuEODGMIvIk&format=png" alt="" />
                </div>
                <div>FAQ</div>
                <div>
                    <img src="https://img.icons8.com/?size=24&id=avuEODGMIvIk&format=png" alt="" />
                </div>
                <div>Pricing</div>
                <div>
                    <img src="https://img.icons8.com/?size=24&id=avuEODGMIvIk&format=png" alt="" />
                </div>
                <div>Testimonials</div>
                <button>
                    Buy Template
                </button>
            </div>
        </Navdiv>
        <hr />
        <div className="handshakewelcome">
            <img src="https://img.icons8.com/?size=48&id=1H52efUsDX7A&format=png" alt="" />
            <div>WELCOME TO MANAGE WISE!</div>
        </div>
        <div class="banner">
            <div id="empower">Empower your business with</div>
            <div id="insight"> <div style={{color:'#FE8162'}}>Strategic</div> insights</div>
            <div id="below">Powerful management platform designed to streamline your business</div>
            <div id="below-next">operations, boost productivity, and drive success</div>
            <div className="buttons">
                <button className="get-started-button">Get Started</button>
                <button className="watch-demo-button">
                    <div>Watch Demo</div>
                    <img className = "watch-demo-button-img" src="https://img.icons8.com/?size=50&id=36067&format=png" alt="" />
                </button>
            </div>
        </div>
    </Page>
    <div className="center-photo">
        <img src="https://framerusercontent.com/images/t9qCSNfZSNdBCMSiohCGNEIl4.jpg" alt="" />
    </div>
    </Outer>
  )
}
const Outer = styled.div`
    height:130vh;
    width:100vw;
    .center-photo{
        height: 60vh;
        width: 100vw;
        text-align:center;
    }
    .center-photo>img{
        margin-top:10vh;
        height:100%;
        width: 60%;
        box-shadow: 0 0.6021873017743928px 0.36131238106463576px -0.9166666666666666px #fafcff14, 0 2.288533303243457px 1.3731199819460744px -1.8333333333333333px #fafcff14, 0 10px 6.000000000000001px -2.75px #fafcff11, 0 34px 30px -16px #e3e7ed;
    }
    
`;
const Page = styled.div`
    display:flex; flex-direction: column;
    height: 70vh; width: 100vw;
    background:linear-gradient(180deg,rgb(253, 242, 236) 0%,rgb(255, 255, 255) 100%);
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
        width: 100vw;
        height:14vh;
        display:flex; flex-direction: column; gap: 1vw;
        align-items: center;
    }
    #empower,#insight{
        font-size: 60px;
        font-weight:bold;
    }
    #insight{
        display:flex; flex-direction: row; gap: 1vw;
    }
    #below,#below-next{
        color: #767575;
        font-weight:bold;
        width: 100vw;
        display:flex; flex-direction: row;
        justify-content:center;
    }
    .btns-div{
        height: 5vh;
        width: 100vw;
    }
    .get-started,.watch-demo{
        height: 50px;
        width: 15vw;
    }
    .watch-demo{
        display:flex; flex-direction: row; gap: 1vw;
    }
    .buttons {
        margin-top:3vh;
        display: flex;
        justify-content: space-between;
        gap:2vw;
      }
      
      .get-started-button {
        background-color: #8247FF;
        color: #fff;
        border: none;
        font-family: 'Comic Sans MS';
        font-weight:bold;
        padding: 10px 30px;
        border-radius: 10px;
        cursor: pointer;
        &:hover{
            transform:scale(1.1);
        }
      }
      
      .watch-demo-button {
        background-color: #fff;
        display:flex; flex-direction: row; gap: 1vw;
        color: #555;
        border: 1px solid #555;
        font-family: 'Comic Sans MS';
        font-weight:bold;
        padding: 10px 20px;
        border-radius: 10px;
        cursor: pointer;
        &:hover{
            transform:scale(1.1);
        }
      }
      .watch-demo-button-img{
        height:20px; width: 20px;
      }
      @media (max-width:500px){
        #empower,#insight{
            font-size: 20px;
            font-weight:bold;
            margin-top:3vh;
        }
        #below,#below-next{
            font-size:12px;
            margin-left:5vw;
        }
    }
`;
const Navdiv = styled.div`
    height: 10vh; width: 100vw;
    display: flex; flex-direction: row;
    justify-content: space-between;
    .logo{
        height: 100%;
        width: 15vw;
        display: flex; flex-direction: row;
        align-items:center;
        gap: 1vw;
        font-weight: bold;
        font-size:20px;
        font-family: 'Comic Sans MS';
    }
    .logo>img{
        height: 50px;
        width: 50px;
        margin-left: 2vw;
    }
    .navdata{
        width: 40vw;
        display:flex; flex-direction:row;
        gap: 1.5vw;
        align-items:center;
        font-weight:medium;
        font-size:18px;
        font-family: 'Comic Sans MS';
        margin-right: 1vw;
    }
    .navdata>div{
        &:hover{
            color:grey;
            cursor:pointer;
        }
    }
    .navdata>div>img{
        height:5px; width:5px;
    }
    button{
        height: 62%;
        width: 9vw;
        margin-left:1vw;
        border-radius: 10px;
        border: 0px;
        background-color:white;
        font-family: 'Comic Sans MS';
        font-weight:bold;
        font-size:16px;
        &:hover{
            border:1px solid black;
            cursor:pointer;
        }
    }
    @media (max-width:500px){
        .logo>div{
            display:none;
        }
        .navdata{
            display:none;
        }
    }
`;
export default Welcome