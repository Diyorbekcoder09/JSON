import "./Fruits.css"
import fruitsData from "../../fruitsData/fruits.json"

const Fruits = () => {
    return (
        <div className="fruits">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Meva turi</th>
                        <th>Meva rangi</th>
                        <th>Meva rasmi</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        fruitsData.map((d, i) => (
                            <tr>
                                <td>{d.id}</td>
                                <td>{d.meva_nomi}</td>
                                <td>{d.meva_rangi}</td>
                                <td><img src={d.img} alt="" className="user_img" /></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Fruits