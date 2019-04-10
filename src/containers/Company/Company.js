import React, {Component} from 'react';
import SectionBox from '../../components/SectionBox/SectionBox';

import TabContent from '../../components/TabContent/TabContent';
import Contact from '../../components/Contact/Contact';
import scrollToElement from 'scroll-to-element';

class Company extends Component{

    state = {
        sectionTitle: 'Conheça Nossa Empresa',
        sectionDescription: [
            'Nabuco Software é uma empresa de desenvolvimento web e móvel. Utilizamos a criatividade e tecnologia para criar os melhores produtos. Nós trabalhamos para projetar, criar e produzir projetos que nos façam sentir orgulho junto com nossos clientes e colaboradores.',
            'Estamos disponíveis para pequenos, médios e grandes projetos sempre buscando a melhor relação e o crescimento empresarial através de nossos serviços e produtos.'
        ],
        sectionChamada: 'Identidade Organizacional',
        active: 0,
        tabContent:{
            items: [
                [
                    {
                        title: 'Missão',
                        description: 'Construir uma relação de longo prazo com nossos clientes e colaboradores, além de proporcionar serviços excepcionais por meio da inovação e de tecnologias avançadas.',
                        icon: 'flag'
                    },
                    {
                        title: 'Visão',
                        description: 'Ser referência neste campo de atuação por fornecer serviços automatizados e avançados, relações empresariais e rentabilidade. ',
                        icon: 'chart'
                    },
                    {
                        title: 'Valores',
                        description: 'Nós acreditamos no tratamento ao cliente com respeito e honestidade para que possamos crescer não apenas utilizando criatividade e inovação, mas também através da ética empresarial e confiança.',
                        icon: 'star'
                    }
                ]
            ]
        }
    }

    tabMenuItemHandler = () => {
        console.log("Change menu " + this.state.active);
        let newActive = this.state.active;
        newActive = !newActive;
        this.setState({active: newActive});
    }

    componentDidMount(){
        
        if(this.props.location.hash == "#tab"){
            scrollToElement("#tab", {
                offset: -70,
                ease: 'out-circ',
                duration: 1000
            });
        }else{
            document.documentElement.scrollTop = 0;
        }
    }

    render(){
        return(
            <>
                <SectionBox title={this.state.sectionTitle} description={this.state.sectionDescription} divider space>
                </SectionBox>
                <SectionBox title={this.state.sectionChamada} bgColor="#ddd"  id="tab" divider>
                    <TabContent tabMenu={false} tabItems={this.state.tabContent.items} tabMenuItemClicked={this.tabMenuItemHandler} active={this.state.active}/>
                </SectionBox>
                <SectionBox image={require('../../assets/images/contact.png')} id="contact">
                    <Contact/>
                </SectionBox>
            </>
        );
    }
}

export default Company;