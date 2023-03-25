import styled from "styled-components";

export const Wrapper = styled.div`
  width: 380px;
  height: 460px;
  background-color: #4B2A99;
  margin: 0px;
  border-radius: 20px;
  position: relative;
  
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 168px;
   
`

export const Counter = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;
    color: #EBD8FF;
    margin-top: 0px;
    margin-bottom: 16px;
   
`

export const Button = styled.button`
width: 196px;
height: 50px;
background: #EBD8FF;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
border-radius: 10.3108px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 22px;
text-transform: uppercase;

background-color: ${(props) => props.isFollower ?  '#5CD3A8' : '#EBD8FF'};
    
`
export const Section = styled.div`
position: relative;

`
export const IMG = styled.img`
padding-left: 36px;
padding-right: 36px;
padding-top: 28px;
`
export const ImgBoy = styled.img`
  width: 80px;
  height: 80px;

  margin-bottom: 26px;
  position: relative;
`
export const Content = styled.div`
display: flex;
justify-content: center;

`
export const TitleTwit = styled.p`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;
text-transform: uppercase;
color: #EBD8FF;
margin-top: 0px;
padding-left: 38px;
`

export const ImgRec= styled.img`
height: 20px;
Width:380px;
position: absolute;
top: 226px;
left: 0px;
`
export const ImgContainer = styled.div`
display: flex;
justify-content: center;

`
export const LogoImg = styled.img`
position: absolute;
top: 20px;
left: 20px;

`