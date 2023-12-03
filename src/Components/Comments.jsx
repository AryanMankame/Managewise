import React from 'react'
import styled from 'styled-components'
import Carousel from 'react-grid-carousel'
function Comments() {
  return (
    <Page>
        <div className="handshakewelcome">
        <div style = {{
            display:'flex', flexDirection: 'row', gap : 5
        }}> <div style={{color:'red',fontSize:18}}>&#10084;</div> Testimonials</div>
        </div>
        <div class="banner">
            <div id="insight"> <div>Hear from our</div> <div style={{color:'#FE8162'}}>Satisfied</div> <div>Clients</div></div>
            <div id="below">Discover why our clients love working with us. Read their</div>
            <div id="below-next">testimonials and learn how we has helped businesses.</div>
        </div>
        <div className="carouel-div">
            <Carousel containerClassName = "carousel-div" cols={4} rows={1} loop = {true} autoplay={1000}>
                <Carousel.Item>
                    <div className="comment">
                        <img src="alex.png" alt="" />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="comment">
                        <img src="david.png" alt="" />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="comment">
                        <img src="sarah.png" alt="" />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="comment">
                        <img src="emily.png" alt="" />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="comment">
                        <img src="sarah.png" alt="" />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="comment">
                        <img src="alex.png" alt="" />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="comment">
                        <img src="david.png" alt="" />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="comment">
                        <img src="alex.png" alt="" />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="comment">
                        <img src="david.png" alt="" />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="comment">
                        <img src="alex.png" alt="" />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="comment">
                        <img src="david.png" alt="" />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="comment">
                        <img src="alex.png" alt="" />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="comment">
                        <img src="david.png" alt="" />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="comment">
                        <img src="emily.png" alt="" />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="comment">
                        <img src="sarah.png" alt="" />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="comment">
                        <img src="emily.png" alt="" />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="comment">
                        <img src="sarah.png" alt="" />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="comment">
                        <img src="david.png" alt="" />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="comment">
                        <img src="sarah.png" alt="" />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="comment">
                        <img src="emily.png" alt="" />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="comment">
                        <img src="david.png" alt="" />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="comment">
                        <img src="sarah.png" alt="" />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="comment">
                        <img src="emily.png" alt="" />
                    </div>
                </Carousel.Item>
                {/* ... */}
            </Carousel>
        </div>
        
    </Page>
  )
}
const Page = styled.div`
width:100vw;
display:flex;
flex-direction:column;
align-items:start;
overflow-x:hidden;
.handshakewelcome{
    margin-top:10vh;
    display: flex; flex-direction: row; color: #8247FF;
    font-family: 'Comic Sans MS';
    font-size: 14px;
    font-weight:bold;
    height: 30px;
    width: 120px;
    background-color:white;
    border: 0.5px solid rgba(130, 71, 255, 0.2);
    border-radius: 10px;
    align-items: center;
    gap: .5vw;
    justify-content:center;
    margin-bottom:5vh;
    margin-left:10vw;
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
    margin-left:10vw;
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
    margin-left:10vw;
}
.comment{
    height:40vh;
    width:20vw;
    border-radius:20px;
    border:1px solid #ededfa;
}
.comment>img{
    height:100%;
}
.carousel-div{
    width:85vw;
    margin-top:5vh;
    margin-left:3vw;
}
`;
export default Comments