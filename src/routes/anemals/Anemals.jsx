import "./Anemals.css"
import animalsData from "../../animalsData/Animals.json"

const Anemals = () => {
    return (
        <div className="animals">

            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Hayvon turi</th>
                        <th>Hayvon nomi</th>
                        <th>Hayvon rasmi</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        animalsData.map((s, i) => (
                            <tr>
                                <td>{s.id}</td>
                                <td>{s.hayvon_turi}</td>
                                <td>{s.hayvon_nomi}</td>
                                <td><img src={s.img} alt="" className="user_img"/></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}

export default Anemals