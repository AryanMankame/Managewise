import React from 'react'
import styled from 'styled-components'
import ExpandableCards from './ExpandableCards';

function FAQ() {
  return (
    <Page>
        <Left>
        <div className="handshakewelcome">
            <div>&#128587; FAQ</div>
        </div>
        <div class="banner">
            <div id="empower">Need</div>
            <div id="insight"> <div style={{color:'#FE8162'}}>Answers?</div> </div>
            <div id="below">Check out our most commonly asked questions below to find the information you need.</div>
        </div>
        </Left>
        <Right>
            <ExpandableCards title = "What is Manage Wise and what does it offer?" content="Manage Wise is a comprehensive management platform designed to streamline your business operations, enhance productivity, and drive success. It offers a range of features including task management, scheduling, communication tools, analytics, and more." />
            <ExpandableCards title = "Is Manage Wise suitable for small businesses and larger enterprises alike?" content = "Yes, Manage Wise is designed to cater to the needs of both small businesses and larger enterprises. Its scalable features and customizable options make it versatile for various business sizes." />
            <ExpandableCards title = "Can I access Manage Wise from different devices and platforms?" content = "Yes, Manage Wise offers cross-platform compatibility, allowing you to access and use the platform seamlessly on desktops, web browsers, and mobile devices." />
            <ExpandableCards title = "What kind of support options do you offer to users?" content = "We provide responsive customer support via chat and email to assist you with any inquiries, issues, or guidance you may need while using Manage Wise." />
            <ExpandableCards title = "How secure is the data stored within Manage Wise?" content = "Your data's security is a top priority. Manage Wise employs robust data encryption and follows industry best practices to ensure your sensitive information is safe and protected." />
        </Right>
    </Page>
  )
}

const Page = styled.div`
    min-height:100vh;
    width:100vw;
    display:flex;
    flex-direction: row;
`;
const Left = styled.div`
    width: 40%;
    min-height:100vh;
    padding-left:2vw;
    padding-top:12vh;
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
        width: 100%;
        height:14vh;
        display:flex; flex-direction: column; gap: 1vw;
        align-items: start;
    }
    #empower,#insight{
        font-size: 60px;
        font-weight:bold;
        line-height:5vh;
    }
    #below{
        color: #767575;
        font-weight:bold;
        width: 100vw;
        display:flex; flex-direction: row;
        font-size:18px;
        width: 60%;
        margin-top:2vh;
    }
`;
const Right = styled.div`
    width: 60%;
    min-height:100vh;
    display: flex; flex-direction: column; justify-content:center;
`;
export default FAQ