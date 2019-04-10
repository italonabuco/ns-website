import React from 'react';
import styles from './Feedback.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSpinner, faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const feedback = (props) =>{

    let feedback = null;

    if(props.type === "loading"){
        feedback = (
            <div className={styles.Feedback}>
                <FontAwesomeIcon icon={faSpinner} spin size="3x"/>
                <h2>Enviando...</h2>
                <p>Estamos enviando seu contato, por favor, aguarde.</p>
            </div>
        );
    }else if(props.type === "success"){
        feedback = (
            <div className={styles.Feedback}>
                <FontAwesomeIcon icon={faCheckCircle} size="3x" color="#52ca1a"/>
                <h2>Sucesso!</h2>
                <p>Seu contato foi enviado com sucesso. Agradecemos e o retornaremos em breve!</p>
            </div>
        );
    }else if(props.type !== "form"){
        feedback = (
            <div className={styles.Feedback}>
                <FontAwesomeIcon icon={faExclamationCircle} size="3x" color="#f91d1d"/>
                <h2>Falha de envio!</h2>
                <p>Ocorreu um erro no envio do seu contato pelo nosso formulário. Pedimos desculpas pelo imprevisto!</p>
                <p>Por favor, verifique sua conexão com a internet e tente novamente.</p>
                <p>Ou entre em contato direto:</p>
                <p>(99) 98189-4692</p>
                <p>info@nabucosoftware.com</p>
            </div>
        );
    }


    return (
        <>
        {feedback}
        </>
    );
}

export default feedback;