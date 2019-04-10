import React, {Component} from 'react';
import SectionBox from '../../components/SectionBox/SectionBox';
import Contact from '../../components/Contact/Contact';

class NotFound extends Component{

    state = {
        sectionTitle: "Página Não Encontrada!",
        sectionDescription: [
            "Desculpe-nos, não encontramos a página que você está procurando!"
        ]
    }

    render(){
        return(
            <>
                <SectionBox title={this.state.sectionTitle} description={this.state.sectionDescription} divider space/>
                <SectionBox image={require('../../assets/images/contact.png')} id="contact">
                    <Contact/>
                </SectionBox>
            </>
        );
    }
}

export default NotFound;