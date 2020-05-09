import React from 'react'
import countries from '../../countries.json'
import { Link } from 'react-router-dom';
import CountryDetail from '../CountryDetail/CountryDetail'


export default function CountriesList(props) {
    console.log("countries.length:", countries.length)
    
    return (
        <div>      
             <div className="container">
                <div className="row">
                    <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
                        <div className="list-group">
                            {countries.map((item, key) => (                        
                                <div key={key} className="text-left list-group-item list-group-item-action">
                                <Link to={`/countrieslist/${item.cca3}`} >{item.flag}{item.name.common}</Link>
                                </div>
                            ))}
                        </div>
                    </div>
                    {props.match.params.countryCode && 
                     <div className="col-7">
                      <CountryDetail country={countries.find(item => item.cca3.includes(props.match.params.countryCode))}/>                    
                    </div> 
                    } 
                </div>
             </div>         
        </div>
    )
}