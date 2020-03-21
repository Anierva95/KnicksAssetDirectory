import React from 'react'
import TableRows from '../TableRows/Tablerows'

function Table() {
    return(
    <div class="container">

        <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Position</th>
    </tr>
  </thead>
  <tbody>
      <TableRows/>
  </tbody>
</table>
</div>
    )
}

export default Table