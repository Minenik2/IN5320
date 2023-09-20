function Table(props) {
  console.log(props.apiData);

  if (!props.apiData.results) {
    // If the API request isn't completed return "loading...""
    return <p>Loading...</p>;
  } else {
    // Write your code here:
    
    return <table>
      <tr>
        <th>Country</th>
        <th>Continet</th>
        <th>Population</th>
        <th>Population Growth</th>
      </tr>
      {props.apiData.results.map((liste) => <tr> <td>{liste.Country}</td> 
        <td>{liste.Continent}</td>
        <td>{liste.Population}</td>
        <td>{liste.PopulationGrowth}</td></tr>)}
      
    </table>;
  }
}

export default Table;
