import {
  DFlex, DescriptionOpensea,
  BackgroundContainer, ContainerPrincipal, AlienPrincipal
} from './components';

import Alien1 from '../assets/alien1.webp';
import Alien2 from '../assets/alien2.webp';
import Alien3 from '../assets/alien3.webp';
import Planeta1 from '../assets/borja_01.webp';
import { motion } from "framer-motion";
import ButtonOpensea from './Button/ButtonOpensea';
import Navbar from './Navbar';


export default function Principal({ scrollToBottom, about, nativeNave, time, faq }) {

  return (
    <BackgroundContainer imgUrl={Planeta1}>
      <Navbar scrollToBottom={scrollToBottom} about={about} nativeNave={nativeNave} time={time} faq={faq} />
      <DFlex>
        <AlienPrincipal>
          <motion.img
            initial={{ x: -850, y: 0 }}
            animate={{ x: 0, y: 0 }}
            transition={{
              x: { duration: 2 },
              default: { ease: "linear" }
            }}
            src={Alien1} style={{ width: '50%', marginRight: '-10%', marginBottom: '-0.4%' }}
          />

          <motion.img
            initial={{ x: -950, y: 0 }}
            animate={{ x: 0, y: 0 }}
            transition={{
              x: { duration: 1.3 },
              default: { ease: "linear" }
            }}
            src={Alien2} style={{ width: '30%', marginRight: '-5%', marginBottom: '-0.4%' }} />

          <motion.img
            initial={{ x: -950, y: 0 }}
            animate={{ x: 0, y: 0 }}
            transition={{
              x: { duration: 1 },
              default: { ease: "linear" }
            }}
            src={Alien3} style={{ width: '20%', marginLeft: '-2.7%', marginBottom: '-0.4%' }} />
        </AlienPrincipal>
        <ContainerPrincipal>
          <DescriptionOpensea>NATIVE ALIENS NFT COLLECTION</DescriptionOpensea>
          <ButtonOpensea>
            <a target="_blank" rel="noreferrer" href='https://opensea.io/collection/nativealiens'>
              View on Opensea
            </a>
          </ButtonOpensea>
        </ContainerPrincipal>
      </DFlex>
    </BackgroundContainer>
  )
}