import React from 'react'
import countries from '../../countries.json'

export default function CountryName(props) {
   const countryName = (countryCode) =>{
           const newArr =  countries.filter(item => item.cca3.includes(countryCode))
           return newArr[0].name.common
   }
    return (
        <div>
            {countryName(props.countryCode)}
        </div>
    )
}
