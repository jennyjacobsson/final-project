import React from 'react'
import styled from 'styled-components/macro'
import { PlantImg } from './PlantImg'
import Button from './Button'

const Header = styled.div`
padding: 20px 0;
background-color:lightblue;
text-align:center;
align-items:center;
justify-content:center;
color:gray;
`

const HeaderText = styled.h2`
margin:0;
font-size:25px;
`

const Container = styled.div`
margin:20px;
color:gray;
`
const Title = styled.h1`
`

const Text = styled.p`
margin-bottom:20px;
`

const Emoji = styled.img`
width:auto;
height:20px;
`

const Wrap = styled.div`
margin:15px 0;
font-size:14px;
`

export const InfoCard = () => {
  return (
    <>
      <Header>
        <HeaderText>PLANT MISSON</HeaderText>
      </Header>
      <Container>
        <PlantImg />
        <Title>Svärmorstunga i behov av nytt hem med mycket kärlek</Title>
        <Text>Lorem ipsum dolor sit amet, ex sensibus mnesarchum cum. Eu duo aperiam adversarium,
          meis dicunt euripidis ut vel. Aeterno lucilius in eam. Qui cibo partem dissentiunt at.
          Ex nec sale quodsi, ex eam hinc oporteat. Mutat delenit theophrastus ea usu, te utinam
          incorrupte dissentiet vim. Te doming sanctus dolorum duo, eam te errem veniam mucius.
        </Text>
        <Wrap>
          <Emoji src="https://cdn.pixabay.com/photo/2013/07/12/17/20/four-leaf-clover-152047_960_720.png" />Located in: Nyköping
        </Wrap>
        <Wrap><Emoji src="https://cdn.pixabay.com/photo/2013/07/12/17/20/four-leaf-clover-152047_960_720.png" /> Has screamed for 15 days.</Wrap>
        <Button label="I'LL SAVE YOU!" />
      </Container>
    </>
  )
}

// TODO: Write onlclick function, sen in as props in btn