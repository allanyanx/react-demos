function UserList() {
    const userInfo = [
        {
            username: "Harold",
            location: "Bellavista",
            email: "pengulot1@gmail.com"
        },
        {
            username: "Allan",
            location: "Pedro Carbo",
            email: "allanyanx@gmail.com"
        },
        {
            username: "Sol Sweet",
            location: "Samborondon campo",
            email: "gabriela@gmail.com"
        }
    ];
  return (
    <div>
        {
            userInfo.map(
                ({username, location, email}) => (
                    <ul key={Math.random}>
                        <li>{username}</li>
                        <li>{location}</li>
                        <li>{email}</li>
                    </ul>
                )
            )
        }
    </div>
  )
}

export default UserList;