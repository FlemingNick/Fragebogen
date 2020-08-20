import React, {useState, useRef} from 'react'
import './Fragebogen.modules.css'
import Frage from './Frage/Frage';

const Fragebogen = () => {
    const Questions = [
        "Ich arbeite gerne in großen Gruppen",
        "Der Umgang mit Kunden bereitet mir Spaß",
        "Ich übernehme gerne Verantwortung für mein Team﻿",
        "Ich kann gut mit Geld umgehen﻿",
        "Ich kann meine Mitmenschen schnell für neue Dinge begeistern﻿",
        "Situationen und Abläufe systematisch beobachten und analysieren﻿",
        "Ich kann mich gut in die Lage Anderer versetzen﻿",
        "Ich stelle gerne neue Produkte vor﻿",
        "Ich kann mich schnell in komplexe Sachverhalte einarbeiten﻿",
        "In meiner Freizeit bin ich stets bemüht neue Kenntnisse zu erlernen﻿",
        "Variablen in Mathe machen mir Angst﻿",
        "Wenn mein PC den Geist aufgibt, versuche ich das Probleme selber zu lösen anstatt direkt einen Techniker zu rufen﻿",
        "Anstatt Gespräche zu beginnen warte ich, bis jemand anderes das Wort ergreift﻿",
        "Ich bezeichne mich selbst als sehr kreativ﻿",
        "Ich habe Freude daran,  technischen Problemen auf den Grund zu gehen, auch wenn es manchmal zeitaufwändig﻿"
    ];

    const [score, setScore] = useState({
        Anwendungsentwickler : 0,
        Admin: 0,
        ECommerce: 0,
        Mediengestalter: 0,
        Buro: 0,
        Marketing: 0
    });

    const handleSubmit = () => {

    };

    const onChangeHandler = (event) => {
        console.log(myRef.current.getMyState())
    };

    const myRef = useRef()

    return(

        <div className="Fragebogen" onChange={onChangeHandler}>

            {Questions.map(element => (
                <Frage number={Questions.indexOf(element)} question={Questions[Questions.indexOf(element)]} ref={myRef}/>
            ))}

            <button onSubmit={handleSubmit} className="ErgebnisButton">Ergebis anzeigen</button>
        </div>
    )
}

export default Fragebogen