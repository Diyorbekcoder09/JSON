import "./Cars.css"
import carsData from "../../carsData/Cars.json"

const Cars = () => {
    return (
        <div className="cars">

            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Mashina nomi</th>
                        <th>Mshina rangi</th>
                        <th>Mashina imgi</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        carsData.map((z, i) => (
                            <tr>
                                <td>{z.id}</td>
                                <td>{z.mashina_nomi}</td>
                                <td>{z.mashina_rangi}</td>
                                <td><img src={z.img} alt="" className="car_img" /></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}

export default Cars