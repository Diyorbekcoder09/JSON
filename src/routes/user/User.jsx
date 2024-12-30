import "./User.css"
import userData from "../../userData/User.json"

const User = () => {
  return (
    <div className="User">

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Username</th>
            <th>Email</th>
            <th>Img</th>
          </tr>
        </thead>

        <tbody>
          {
            userData.map((e, i) => (
              <tr>
                <td>{e.id}</td>
                <td>{e.username}</td>
                <td>{e.email}</td>
                <td><img src={e.img} alt="" className="user_img"/></td>
              </tr>
            ))
          }
        </tbody>
      </table>


    </div>
  )
}

export default User