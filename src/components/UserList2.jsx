function UserList2() {
    const users = [
        { id: 1, name: "Harold", age: 23 },
        { id: 2, name: "Angel", age: 23 },
        { id: 3, name: "Allan", age: 22 }
    ]

  return (
    <div>
        {
            users.map(
                ({id, name, age}) => (
                    <ul key={id}>
                        <li>{name}</li>
                        <li>{age}</li>
                    </ul>
                )
            )
        }
    </div>
  )
}

export default UserList2;