<template>
  <div class="monitorpieListComp">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Group</th>
          <th>Heart Rate</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Jack Huang (3001…</th>
          <td>SG004</td>
          <td>140</td>
          <td>2020/10/10 11:10:35</td>
        </tr>
        <tr>
          <th>Jack Huang (3001…</th>
          <td>SG004</td>
          <td>140</td>
          <td>2020/10/10 11:10:35</td>
        </tr>
        <tr>
          <th>Jack Huang (3001…</th>
          <td>SG004</td>
          <td>140</td>
          <td>2020/10/10 11:10:35</td>
        </tr>
        <tr>
          <th>Jack Huang (3001…</th>
          <td>SG004</td>
          <td>140</td>
          <td>2020/10/10 11:10:35</td>
        </tr>
        <tr>
          <th>Jack Huang (3001…</th>
          <td>SG004</td>
          <td>140</td>
          <td>2020/10/10 11:10:35</td>
        </tr>
        <tr>
          <th>Jack Huang (3001…</th>
          <td>SG004</td>
          <td>140</td>
          <td>2020/10/10 11:10:35</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style lang="scss" scoped>
.monitorpieListComp {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: right;
  // width: 100%;
  overflow-x: auto;
}
table > thead > tr {
  background-color: #dddfe5;
}
th, td {
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.3px;
  color: #707b91;
  white-space:nowrap; 
  text-align: left;
  // padding: 10px;
}
// table > thead > tr > th {
//   padding-left: 10px;
// }
</style>