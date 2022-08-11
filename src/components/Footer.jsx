import Navbar from './Navbar';
import {ContainerFooter} from './components';

export default function Footer({ scrollToBottom, about, nativeNave, time, faq }) {

    return (
        <ContainerFooter>
           <Navbar scrollToBottom={scrollToBottom} about={about} nativeNave={nativeNave} time={time} faq={faq}/>
        </ContainerFooter>
    )
}