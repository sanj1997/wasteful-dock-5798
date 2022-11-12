import "./List.scss"
import Sidebar from "../../components/Sidebar/Sidebar"
import Navbar from "../../components/Navbar/Navbar"
import ProductDataTable from "../../components/ProductDataTable/ProductDataTable"

const ProductList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <ProductDataTable/>
      </div>
    </div>
  )
}

export default ProductList