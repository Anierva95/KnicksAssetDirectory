import React from "react";
import players from "../../players.json"

function TableRows(props) {

  // Filter names via the input
  let filteredByName = players.filter(player => {
    return (player.First_Name.toUpperCase().indexOf(props.playerSearch.toUpperCase()) === 0 || player.Last_Name.toUpperCase().indexOf(props.playerSearch.toUpperCase()) === 0 );
  });

  let sortedByAsset;
  let sortedByFirstName;

  if (props.sortAssets) {
  sortedByAsset = filteredByName.sort((a,b) => {
    if (a.Asset_Rank > b.Asset_Rank) {
      return 1
    } else if (a.Asset_Rank < b.Asset_Rank) {
      return -1
    }
    return 0;
  })} else {
    sortedByAsset = filteredByName;
  };

  if (props.sortFirst) {
    sortedByFirstName = filteredByName.sort((a,b) => {
      if (a.First_Name > b.First_Name) {
        return 1
      } else if (a.First_Name < b.First_Name) {
        return -1
      }
      return 0;
    })} else {
      sortedByFirstName = filteredByName;
    };




  let playerRows = filteredByName.map(player => {
    return (
      <tr>
      <td>{player.First_Name}</td>
      <td>{player.Last_Name}</td>
      <td>{player.Position}</td>
      <td>{player.Asset_Rank}</td>
      <td>{player.Description}</td>
        </tr>
    )
  })

    return(
      <React.Fragment>
        {playerRows}
      </React.Fragment>
    )
}

export default TableRows;