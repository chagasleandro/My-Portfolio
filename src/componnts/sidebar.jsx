import SocialNetworks from './SocialNetworks';
import Avatar from '../componnts/img/eu.jpeg';
import '../styles/components/sidebar.sass';
import InformationContainer from './informationContainer';

const Sidebar = () => {
    return <aside id="sidebar">
        <img src={Avatar} alt="Leandro Chagas" />
        <p className="title">Desenvolvedor Front-End</p>
        <SocialNetworks />
        <InformationContainer />
        <a href="../componnts/img/curriculo.pdf" className="btn">Download currículo</a>
    </aside>;
};

export default Sidebar;