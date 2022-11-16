import "./DataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { productColumns, productRows } from "../../productdatatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
import {useSelector,useDispatch} from 'react-redux';

const ProductDataTable = () => {
  const [data, setData] = useState(productRows);
  //const {productRows,productColumns}=useSelector(store=>store.products)
  //const dispatch=useDispatch();
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
    //dispatch()
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/products/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        All Products
        <Link to="/products/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={productColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default ProductDataTable;