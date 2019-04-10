import React, {Component} from 'react';
import Slider from 'react-animated-slider';
import styles from './SlideShow.css';
import horizontalCss from './horizontal.css'
import Button from '../UI/Button/Button';

//npm install react-animated-slider



class SlideShow extends Component{

	constructor(props){
		super(props);
		this.state = {
			dots: (
				<div className={styles.dotContent}>
					<div className={styles.dot}/>
					<div className={styles.dot}/>
					<div className={[styles.dot, styles.active].join(' ')}/>
					<div className={styles.dot}/>
					<div className={styles.dot}/>
				</div>
			),
			content: [
				{
					title: 'DESENVOLVIMENTO WEB',
					description: 'Crie o site ou sistema web que você precisa, garantindo integrações das mais avançadas tecnologias ou modernize seu sistema atual.',
					button: 'VER MAIS',
					image: require('../../assets/images/1.png'),
				},
				{
					title: 'APLICAÇÕES MÓVEIS',
					description: 'Crie uma aplicação móvel para IOS e Android de impacto que encaixa perfeitamente para sua empresa e seus clientes.',
					button: 'VER MAIS',
					image: require('../../assets/images/2.png'),
				},
				{
					title: 'UX / UI DESIGN',
					description: 'Construa o produto que você precisa sempre focando na experiência do usuário, utilizando um design eficiente, limpo e responsivo.',
					button: 'VER MAIS',
					image: require('../../assets/images/3.png'),
				}
			]
		};
	}

	setDots = (currentContentIndex) =>{
		let newDots = (
			<div className={styles.dotContent}>
				{this.state.content.map((item, index) =>{
					let classes = [styles.dot];
					if(index === currentContentIndex)
						classes.push(styles.active);
					
						console.log(classes.join(' '));
					return <div key={index} className={classes.join(' ')}/>;
				})}
			</div>
		);

		this.setState({dots: newDots});
	};

	render(){
		return(
			<>
				<Slider classNames={horizontalCss} autoplay={3000} touchDisabled={true} 
				// onSlideChange={event => this.setDots(this.state.content.length, event.slideIndex)}
				>
					{this.state.content.map((item, index) => (
						<div
							key={index}
							style={{ background: `#ffffff url('${item.image}') no-repeat center center`, backgroundSize: 'cover'}}
						>
							<div className={styles.sliderContent}> 
								<h1>{item.title}</h1>
								<p>{item.description}</p>
								<Button name="VER MAIS" scrollElement="#tab" type="transparent" style={{marginTop: '50px'}}/>
								{/* {this.state.dots} */}
							</div>
						</div>
					))}
				</Slider>
			</>
			
		);
	}
		
};

export default SlideShow;