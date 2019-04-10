import React, {Component} from 'react';
import SlideShow from '../../components/SlideShow/SlideShow';
import SectionBox from '../../components/SectionBox/SectionBox';

import TabContent from '../../components/TabContent/TabContent';
import Contact from '../../components/Contact/Contact';
import scrollToElement from 'scroll-to-element';

class Home extends Component{

    state = {
        sectionTitle: 'Ajudamos empresas a transformar ideias em produtos de alta qualidade por meio da criatividade e inovação',
        sectionDescription: [
            'Somos uma empresa de desenvolvimento web e móvel, e trabalhamos para projetar, criar e produzir projetos que nos façam sentir orgulho junto com nossos clientes e colaboradores.',
        ],
        sectionOferecemos: 'O Que Oferecemos',
        active: 0,
        tabContent:{
            menu: [
                'SERVIÇOS',
                'VANTAGENS'
            ],
            items: [
                [
                    {
                        title: 'Desenvolvimento Web',
                        description: 'Crie o site ou sistema web que você precisa, garantindo integrações das mais avançadas tecnologias ou modernize seu sistema atual.',
                        icon: 'code'
                    },
                    {
                        title: 'Aplicações Móveis',
                        description: 'Crie uma aplicação móvel para IOS e Android de impacto que encaixa perfeitamente para sua empresa e seus clientes.',
                        icon: 'mobile'
                    },
                    {
                        title: 'Consultoria e Inovação em TI',
                        description: 'Confie em nossas consultorias para agilizar sua produção, implementando novas tecnologias e consolidados serviços.',
                        icon: 'lamp'
                    }
                ],
                [
                    {
                        title: 'Desenvolvimento Ágil',
                        description: 'Possuímos um alto processo interativo que seguem diretrizes que garantem um desenvolvimento bem sucedido.',
                        icon: 'agil'
                    },
                    {
                        title: 'UX / UI Design',
                        description: 'Construa o produto que você precisa sempre focando na experiência do usuário, utilizando um design eficiente, limpo e responsivo.',
                        icon: 'design'
                    },
                    {
                        title: 'Compromisso',
                        description: 'Trabalhamos para entregar o melhor serviço mantendo contato com o cliente antes, durante e após a conclusão do projeto.',
                        icon: 'compromisso'
                    }
                ]
            ]
        },
    }

    tabMenuItemHandler = (index) => {
        console.log("Change menu " + this.state.active);
        let newActive = this.state.active;
        newActive = index;
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
                <SlideShow/>
                <SectionBox title={this.state.sectionTitle} description={this.state.sectionDescription} divider>
                </SectionBox>
                <SectionBox title={this.state.sectionOferecemos} bgColor="#ddd"  id="tab">
                    <TabContent tabMenu={this.state.tabContent.menu} tabItems={this.state.tabContent.items} tabMenuItemClicked={this.tabMenuItemHandler} active={this.state.active}/>
                </SectionBox>
                <SectionBox image={require('../../assets/images/contact.png')} id="contact">
                    <Contact/>
                </SectionBox>
            </>
        );
    }
}

export default Home;