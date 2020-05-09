import React from 'react';
import { Link } from 'react-router-dom';
import CountryName from '../CountryName/CountryName';

export default function CountryDetail(props) {
  const country = props.country;

  return (
    <div>
      <h1>{country.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{country.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} Km
              <sup>2</sup>
            </td>
          </tr>
          {country && country.borders.length > 0 ? (
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {country.borders.map((item, key) => (
                    <li key={key}>
                      <Link to={`/CountriesList/${item}`}>
                        <CountryName countryCode={item} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ) : (
            <h3>This is an island </h3>
          )}
        </tbody>
      </table>
    </div>
  );
}
