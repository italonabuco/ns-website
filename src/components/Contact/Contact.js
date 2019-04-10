import React, {Component} from 'react';
import styles from './Contact.css';
import Button from '../UI/Button/Button';
import Input from  '../UI/Input/Input';
import Feedback from './Feedback/Feedback';
import axios from 'axios';

class Contact extends Component{

    state = {
        contactForm:{
            nome: {
                elementType: 'input',
                elementConfig:{
                    type: 'text',
                    placeholder: 'Nome'
                },
                value: '',
                validation:{
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig:{
                    type: 'email',
                    placeholder: 'E-mail'
                },
                value: '',
                validation:{
                    required: true,
                    email: true
                },
                valid: false,
                touched: false
            },
            empresa: {
                elementType: 'input',
                elementConfig:{
                    type: 'text',
                    placeholder: 'Empresa'
                },
                value: '',
                validation:{
                    required: true
                },
                valid: false,
                touched: false
            },
            telefone: {
                elementType: 'input',
                elementConfig:{
                    type: 'tel',
                    placeholder: '(DDD) Telefone'
                },
                value: '',
                validation:{
                    required: true
                },
                valid: false,
                touched: false
            },
            descricao: {
                elementType: 'textarea',
                elementConfig:{
                    rows: "5",
                    placeholder: 'Descrição do Projeto'
                },
                value: '',
                validation:{
                    required: true
                },
                valid: false,
                touched: false
            }
        },
        isFormValid: false,
        status: "form"
    }

    checkValidity = (value, rules) =>{
        let isValid = true;

        if(rules.required){
            isValid = value.trim() !== '' && isValid;
        }

        if(rules.minLength){
            isValid = value.length >= rules.minLength && isValid;
        }

        if(rules.maxLength){
            isValid = value.length <= rules.maxLength && isValid;
        }

        if(rules.email){
            isValid = this.validateEmail(value) && isValid;
        }

        return isValid;
    }

    validateEmail = (value) =>{
        const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return value.match(mailFormat) ? true : false;
    }

    contactHandler = (event) =>{
        event.preventDefault();

        let formData = {};

        for(let formElementIdentifier in this.state.contactForm){
            formData[formElementIdentifier] = this.state.contactForm[formElementIdentifier].value;
        }

        this.setState({status: "loading"});

        this.postingContactHandler(formData);

        console.log(formData);
    }

    postingContactHandler = (data) =>{
        axios.post("http://api.nabucosoftware.com/send",data)
            .then(response => {
                console.log(response);
                this.setState({status: response.data});
            })
            .catch(error => {
                this.setState({status: error.data});
            });
    }

    inputChangedHandler = (event, inputIdentifier) =>{
        const updatedContactForm = {
            ...this.state.contactForm
        };

        const updatedFormElement = {
            ...updatedContactForm[inputIdentifier]
        }

        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;        
        updatedContactForm[inputIdentifier] = updatedFormElement;

        let formValid = true;

        for( let key in updatedContactForm){
            formValid = updatedContactForm[key].valid && formValid;
        }

        this.setState({contactForm: updatedContactForm, isFormValid: formValid});

    }

    render(){

        const formElementArray = [];
        for(let key in this.state.contactForm){
            formElementArray.push({
                id: key,
                config: this.state.contactForm[key]
            });
        }

        let form = (
            <form onSubmit={this.contactHandler}>
                {/* <Input  elementType="..." elementConfig="..." value="..."/> */}
                {formElementArray.map(formElement => (
                    <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        />
                ))}
                <Button disabled={!this.state.isFormValid} style={{width:'100%', fontSize: '17px', height: '50px'}} type="green" name="Entrar em contato"/>
            </form>
        );

        return(
            <div className={styles.Contact}>
                <div className={styles.ContactInfo}>
                    <div className={styles.ContactInfoTitle}>
                        <h3>Tem um  projeto em mente? Vamos conversar!</h3>
                        <p>Garantimos entrar em contato o mais breve possível.</p>  
                    </div>
                    <div className={styles.ContactInfoItems}>
                        <div className={styles.ContactInfoItemsTitle}>
                            <h3>Veja algumas informações importantes para você:</h3>
                            <p>Ao aceitar um de nossos serviços, você ganha mais do que contratou!</p>
                        </div>
                        <div className={styles.ContactInfoOffers}>
                            <div className={styles.ContactInfoOffer}>
                                <div className={styles.Symbol}>&#x2714;</div>
                                <p>Tem a ideia mas não sabe o que colocar no seu site? Ganhe até 3(três) horas de consultoria <strong>GRÁTIS.*</strong></p>
                            </div>
                            <div className={styles.ContactInfoOffer}>
                                <div className={styles.Symbol}>&#x2714;</div>
                                <p>Treinamento de até 2(duas) horas e Garantia contra problemas técnicos por 30 (trinta) dias <strong>GRÁTIS.</strong></p>
                            </div>
                            <div className={styles.ContactInfoOffer}>
                                <div className={styles.Symbol}>&#x2714;</div>
                                <p><strong>DESCONTOS</strong> especiais para nossos planos de manutenção.</p>
                            </div>
                            <p>* Oferta válida somente para os serviços de desenvolvimento web e de aplicações móveis.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.ContactFields}>
                    <Feedback type={this.state.status}/>
                    {this.state.status == "form" ?
                        <>
                        <p>Estamos prontos para te ajudar no seu próximo projeto digital. Entre em contato e vamos começar!</p>
                        {form}
                        </>:
                        null
                    }
                </div>
            </div>
        );
    }
}

export default Contact;