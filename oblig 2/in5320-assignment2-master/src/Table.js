function Table(props) {
  console.log(props.apiData);

  if (!props.apiData.results) {
    // If the API request isn't completed return "loading...""
    return <p>Loading...</p>;
  } else {
    // Write your code here:
    const countriesComponent = []
    for (const iterator of props.apiData.results) {
      countriesComponent.push(<tr> <td>{iterator.Country}</td> 
      <td>{iterator.Continent}</td>
      <td>{iterator.Population}</td>
      <td>{iterator.PopulationGrowth}</td></tr>)
    }
    const countryMap = props.apiData.results.map((liste) => <td> {liste.Country} </td>)
    return <table>
      <tr>
        <th>Country</th>
        <th>Continet</th>
        <th>Population</th>
        <th>Population Growth</th>
      </tr>
      {countriesComponent}
      
    </table>;
  }
}

export default Table;
