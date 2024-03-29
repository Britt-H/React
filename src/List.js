const todos = [
    {completed: false, description: "Finish the Lists & Tables checkpoint"},
    {completed: false, description: "Clean my desk"},
    {completed: false, description: "Make lunch"},
  ]

function List () {
//     const listItems = todos.map((todo, index) => <li key = {Table}>{todo}</li>)
//     return <ul>{listItems}</ul>
// }
  const rows = todos.map(({completed, description}, index) => (
    <tr key={index}>
      <td>{description}</td>
      <td>{completed ? "Yes" : "No"}</td>
    </tr>
  ))

  return (
    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

export default List