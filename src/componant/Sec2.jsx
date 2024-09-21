import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default ()=>{
    return(
        <>
        <Row  className='mt-3 mx-0'>
            <Col md="1"></Col>
            <Col md="5" mt="3">
            <div className='row mx-0'>
                    <div className='col-1' style={{display:"flex",justifyContent:"right"}}>
                    <div style={{width:"3vw",backgroundColor:"white",height:"100%"}}></div>
                    </div>
                    <div className='col-11'>
                        <h3 style={{color:"white",fontFamily:"-moz-initial"}}>MGK Bouw BV</h3>
                    <p style={{color:"white",fontStyle:"italic"}}>Wat zal het zijn? Even opknappen voor de verkoop, een nieuwe badkamer, een dakkapel of een volledige verbouwing met aanbouw? Of heeft u zojuist een woning gekocht en daar moet nog heel wat aan gebeuren?
Dan bent u bij ons aan het juiste adres! MGK staat namelijk voor Met Gebundelde Krachten.</p>
                    <p style={{color:"white",fontStyle:"italic"}}>MGK Bouw BV kan al uw bouwwensen in vervulling laten gaan. Al ruim 35 jaar bedenken we de mooiste en meest praktische oplossingen voor maximaal woongenot en bent u verzekerd van een degelijk product tegen een aantrekkelijke prijs.</p>
                    <hr style={{backgroundColor:"white",height:"0.5vw"}}/>
                    </div>
                </div>
            </Col>
            <Col md="5" mt="3">
            <div className='row mx-0'>
                    <div className='col-1' style={{display:"flex",justifyContent:"right"}}>
                    <div style={{width:"3vw",backgroundColor:"white",height:"100%"}}></div>
                    </div>
                    <div className='col-11'>
                        <h3 style={{color:"white",fontFamily:"-moz-initial"}}>Altijd voor u bereikbaar</h3>
                    <p style={{color:"white",fontStyle:"italic",marginTop:"1.5vw"}} className="text-break">U heeft altijd maar één aanspreekpunt – ook tijdens de uitvoering – en zo leiden we u soepel door het bouwproces en ú weet op elk moment waar u aan toe bent. We zijn 24/7 bereikbaar, dus ook ’s avonds of in het weekend als dat beter uitkomt voor u.</p>
                    <p style={{color:"white",fontStyle:"italic",marginTop:"2vw"}}>Creativiteit en flexibiliteit is ons motto , dus als het maar enigszins mogelijk is om uw bouwplannen bij te stellen en uit te breiden, dan doen we dat. Als het niet kan – of het wordt onevenredig duur – dan zeggen we dat ook eerlijk.</p>
                    <hr style={{backgroundColor:"white",height:"0.5vw"}}/>
                    </div>
                </div>
            </Col>
            <Col md="1"></Col>
        </Row>
        </>
    )
}