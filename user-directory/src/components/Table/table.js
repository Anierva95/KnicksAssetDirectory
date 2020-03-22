import React, { useState } from 'react'
import TableRows from '../TableRows/Tablerows'

function Table(props) {

   const [sortAsset, updateSortAsset] = useState(false);
   const [sortFirst, updateSortFirst] = useState(false);
   const [sortLast, updateSortLast] = useState(false);
   const [sortPosition, updateSortPosition] = useState(false);

   const toggleSortAsset = () => {
     updateSortAsset(!sortAsset);
     updateSortFirst(false);
     updateSortLast(false);
     updateSortPosition(false);
   }
   const toggleSortFirst = () => {
    updateSortFirst(!sortFirst);
    updateSortAsset(false);
    updateSortLast(false);
    updateSortPosition(false);
  }
  const toggleSortLast = () => {
    updateSortLast(!sortLast);
    updateSortAsset(false);
    updateSortFirst(false);
    updateSortPosition(false);
  }
  const toggleSortPosition = () => {
    updateSortPosition(!sortPosition)
    updateSortAsset(false);
    updateSortFirst(false);
    updateSortLast(false);
  }

  let toggleClassAsset;
  let toggleClassFirst;
  let toggleClassLast;
  let toggleClassPosition;

  if (sortAsset) {
  toggleClassAsset = 'orange';
  } else {
  toggleClassAsset = 'unToggled';
  }
  if (sortFirst) {
  toggleClassFirst = 'orange';
  } else {
  toggleClassFirst = 'unToggled';
  }
  if (sortLast) {
  toggleClassLast = 'orange';
  } else {
  toggleClassLast = 'unToggled';
  }
  if (sortPosition) {
  toggleClassPosition = 'orange';
  } else {
  toggleClassPosition = 'unToggled';
  }


    return(
    <div class="container table">
        <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col" name="sortFirst" onClick={toggleSortFirst} className={toggleClassFirst}>First Name</th>
      <th scope="col" name="sortLast" onClick={toggleSortLast} className={toggleClassLast}>Last Name</th>
      <th scope="col" name="sortPosition" onClick={toggleSortPosition} className={toggleClassPosition}>Position</th>
      <th scope="col" onClick={toggleSortAsset} className={toggleClassAsset}>Asset Rank</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
      <TableRows
      playerSearch={props.playerSearch}
      sortAssets={sortAsset}
      sortFirst={sortFirst}
      sortLast={sortLast}
      sortPosition={sortPosition}
      />
  </tbody>
</table>
</div>
    )
}

export default Table