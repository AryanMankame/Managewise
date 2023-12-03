import React from 'react'
import styled from 'styled-components';
function Contact() {
  return (
    <Page>
        <Upper>
            <div className="card">
                <div className="left">
                    <div className="handshakewelcome">
                        <div> &#128075; DON'T MISS OUT</div>
                    </div>
                    <div class="banner">
                    <div id="empower">Unleash your </div>
                        <div id="insight"> <div style={{color:'#FE8162'}}>Potential</div> with us</div>
                        <div id="below">Join our community of ambitious </div>
                        <div id="below-next">individuals and organizations eager to </div>
                        <div id="below-next-1">make a difference. </div>
                        <button id = "get-started-2">Try out now</button>
                    </div>
                </div>
                <div className="right">
                    <img src="side-right.png" alt="" />
                </div>
            </div>
        </Upper>
        <Lower>
            <div className="lfh">
                <div className="logo">
                    <img src="https://framerusercontent.com/images/MwRbsJrk7ItYxeL7mKvPzrq3g.png" alt="" />
                    <div>ManageWise</div>
                </div>
                <div className="names">
                    <div>Features</div>
                    <div>FAQ</div>
                    <div>Pricing</div>
                    <div>Testimonials</div>
                </div>
            </div>
            <div className="lsh">
                <div>© 2022 ManageWise, Inc.</div>
                <div id = "logos">
                    <img src="https://img.icons8.com/?size=50&id=32309&format=png" alt="" />
                    <img src="https://img.icons8.com/?size=50&id=phOKFKYpe00C&format=png" alt="" />
                    <img src="https://img.icons8.com/?size=50&id=8808&format=png" alt="" />
                </div>
            </div>
        </Lower>
    </Page>
  )
}

const Page = styled.div`
    width: 100vw;
`;
const Upper = styled.div`
    width:100vw; overflow-x:hidden;
    display:flex; flex-direction: row;
    align-items:center; justify-content:center;
    .card{
        height:70vh;
        width:80vw;
        display:flex; flex-direction:row;
        border:1px solid #ededfa;
        border-radius:20px;
        margin-top:3vh;
        margin-bottom:10vh;
    }
    .left{
        display:flex; flex-direction:column;
        width:50%;
        margin-left:4vw;
    }
    .right>img{
        height:90%;
        width:90%;
    }
    .handshakewelcome{
        margin-top:10vh;
        display: flex; flex-direction: row; color: #8247FF;
        font-family: 'Comic Sans MS';
        font-size: 14px;
        font-weight:bold;
        height: 30px;
        width: 180px;
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
    }
    #insight{
        display:flex; flex-direction:row;
        gap: 1vw;
        font-size: 36px;
        font-weight:bold;
        line-height:5vh;
    }
    #below,#below-next,#below-next-1{
        color: #767575;
        font-weight:bold;
        width: 100vw;
        display:flex; flex-direction: row;
        font-size:18px;
        width: 60%;
        margin-top:2vh;
        line-height:5px;
    }
    #empower,#insight{
        font-size: 42px;
        font-weight:bold;
        line-height:5vh;
    }
    #get-started-2{
        margin-top:3vh;
        border: none;
        font-family: 'Comic Sans MS';
        font-weight:bold;
        width:150px;
        padding: 10px 30px;
        border-radius: 10px;
        cursor: pointer;
        &:hover{
            transform:scale(1.1);
        }
        margin-bottom:5vh;
        background-color: #8247FF;
        color: #fff;
    }
`;
const Lower = styled.div`
    background:linear-gradient(180deg,rgb(255, 255, 255) 0%,rgb(253, 242, 236) 100%);
    height:50vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    .lfh,.lsh{
        width: 80vw;
        display: flex; flex-direction: row;
        justify-content: space-between;
    }
    .lsh{
        margin-top:30vh;
    }
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
    #logos{
        display:flex; flex-direction:row; gap:10px;
    }
    #logos>img{
        height:30px; width:30px;
        &:hover{
            transform:scale(1.1);
            cursor:pointer;
        }
    }
    .names>div{
        &:hover{
            color:grey;
            cursor:pointer;
        }
    }
`;
export default Contact