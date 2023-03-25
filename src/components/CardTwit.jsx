import {Wrapper, Container, TitleTwit, Button, Section, IMG, ImgBoy, Content, Counter, ImgRec, ImgContainer, LogoImg} from './CardTwit.style'
import picture2 from '../assets/picture2 1.png'
import boy from '../assets/boy.png'
import React, { useState, useEffect } from "react";
import picture1 from '../assets/Rectangle 1.png';
import Logo from '../assets/Logo.png';


const Card = () => {

    const [counter, setCounter] = useState(() => {
        const storedValue = localStorage.getItem("counter");
        return storedValue !== null ? JSON.parse(storedValue) : 100500;
      });

    const [isFollower, setIsFollower] = useState(false);

    useEffect(() => {
 
        const storedIsFollower = localStorage.getItem("isFollower");
        
        if (storedIsFollower !== null) {
          setIsFollower(JSON.parse(storedIsFollower));
       
        }
      }, []);
     

   

    const handleClick = () => {
        if (isFollower) {
          setCounter(counter - 1);
         
        } else {
          setCounter(counter + 1);
        }
        setIsFollower(!isFollower);
        localStorage.setItem('isFollower', !isFollower);
       
    };
    
    localStorage.setItem('counter', counter);
    const text = isFollower ? "FOLLOWING" : "FOLLOW";
    const formattedNumber = counter.toLocaleString().replace(/\s/g, ",")
    

    return (

        <Container>
            <Wrapper>
                <LogoImg src={Logo} alt='logo'></LogoImg>
                <IMG src={picture2} alt=''></IMG>
                <ImgRec src={picture1} alt='boy'></ImgRec>
                <ImgContainer>
                  <ImgBoy src={boy} alt='boy'></ImgBoy>
                </ImgContainer>
                <Content>
                    <Section>
                      <TitleTwit>777 tweets</TitleTwit>
                      <Counter>{formattedNumber} FOLLOWERS</Counter>
                      <Button isFollower = {isFollower} onClick={handleClick} type="button">{text}</Button>
                    </Section>
                </Content>
            </Wrapper>
        </Container>
    )

}


export default Card;