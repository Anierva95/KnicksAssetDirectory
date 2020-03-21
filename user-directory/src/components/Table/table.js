import React from 'react'
import TableRows from '../TableRows/Tablerows'

function Table(props) {
    return(
    <div class="container table">
        <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Position</th>
      <th scope="col">Asset Rank</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
      <TableRows
      playerSearch={props.playerSearch}
      />
  </tbody>
</table>
</div>
    )
}

export default Table