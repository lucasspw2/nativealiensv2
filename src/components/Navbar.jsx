import {
    DFlex, NavContent, LogoNative,
    ListMenu, ContainerSocial, ListContainer
} from './components';
import NativeLogo from '../assets/newlogo.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Button } from '@mui/material';
import { motion } from "framer-motion";

export default function Navbar({ scrollToBottom, about, nativeNave, time, faq }) {

    const styles = {
        social: { fontSize: 40, color: 'white' }
    }
    return (
        <DFlex>
            <LogoNative src={NativeLogo} alt="Native Aliens"/>
            <ListContainer>
                <ListMenu
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <NavContent onClick={e => scrollToBottom(about)}>ABOUT</NavContent>
                </ListMenu>
                <ListMenu
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <NavContent onClick={e => scrollToBottom(nativeNave)}>NAVE</NavContent>
                </ListMenu>
                <ListMenu
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <NavContent onClick={e => scrollToBottom(time)}>TEAM</NavContent>
                </ListMenu>
                <ListMenu
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <NavContent onClick={e => scrollToBottom(faq)}>FAQ</NavContent>
                </ListMenu>
            </ListContainer>
            <ContainerSocial>
                <motion.li
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <Button><a target="_blank" rel="noreferrer" href='https://www.instagram.com/nativealiensofficial/?r=nametag'><InstagramIcon sx={styles.social} /></a></Button>
                </motion.li>
                <motion.li
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <Button><a target="_blank" rel="noreferrer" href='https://twitter.com/AliensNative'><TwitterIcon sx={styles.social} /></a></Button>
                </motion.li>
            </ContainerSocial>
        </DFlex>
    )
}