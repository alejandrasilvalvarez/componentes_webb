import { useState } from "react";

function QuestionsList() {
    const preguntasRespuestas = [
        { pregunta: "Bienvenido al quiz de react, presione Adelante para continuar ", respuesta: "Quiz realizado por Diana Silva" },
        { pregunta: "Cómo se define un nuevo componente en React?", respuesta: "Un componente se define utilizando la función 'function' o 'class', igual se puede crear un componente en una constante, como lo visto en el primer tutorial. Hasta ahora los hemos llamado desde index.js" },
        { pregunta: "Cómo se define un nuevo estado?", respuesta: "Se define utilizando el hook 'useState'. Un estado en React es un almacén de datos mutable, los hooks permiten usar estado y otras características de React sin escribir una clase, lo importamos de la siguiente manera: \n \n import { useState } from 'react' \n \n En el ejemplo de los likes lo definimos de la sigueinte manera: \n \n const [likes, setLikes] = useState(props.likes);" },
        { pregunta: "F o V ... El inicializador del estado puede ser una función.", respuesta: "Verdadero. El estado inicial puede ser una función que devuelve el valor inicial." },
        { pregunta: "Qué es el virtual DOM?", respuesta: "El virtual DOM es una representación ideal o virtual de la IU en memoria del DOM real y se utiliza para mejorar el rendimiento de las actualizaciones del DOM en React, esto mediante una biblioteca, como la que usamos 'ReactDOM'." },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleAvanzar = () => {
        if (currentIndex < preguntasRespuestas.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handleRetroceder = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleReiniciar = () => {
        if (currentIndex > 0) {
            setCurrentIndex(0);
        }
    };

    return (
        <div className="text-center mt-3">

            <div>
                <button className="mx-2" onClick={handleReiniciar} disabled={currentIndex === 0}>
                    Reiniciar
                </button>
                <button className="mx-2" onClick={handleRetroceder} disabled={currentIndex === 0}>
                    Atrás
                </button>
                <button className="mx-2" onClick={handleAvanzar} disabled={currentIndex === preguntasRespuestas.length - 1}>
                    Adelante
                </button>

            </div>
            <br></br>
            <div>
                <h3>{preguntasRespuestas[currentIndex].pregunta}</h3>
                <p className="mx-auto"
                    style={{
                        width: '450px',
                        whiteSpace: 'pre-line',
                        textAlign: 'justify',
                    }}
                    dangerouslySetInnerHTML={{
                        __html: preguntasRespuestas[currentIndex].respuesta,
                    }}

                ></p>
            </div>
        </div>
    );
}

export default QuestionsList;