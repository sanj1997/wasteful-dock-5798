import "./Single.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Chart from "../../components/Chart/Chart";
import List from "../../components/Table/Table";
import {useParams} from 'react-router-dom';
import { productColumns, productRows } from "../../productdatatablesource";

const SingleProduct = () => {
  const {productId}=useParams();
  // console.log(userId);
  let obj=productRows.find(el=>(el.id===+productId));
  //console.log(obj);
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src={obj.img}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{obj.title}</h1>
                <div className="detailItem">
                  <span className="itemKey">Category:</span>
                  <span className="itemValue">{obj.category}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Quantity:</span>
                  <span className="itemValue">100</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Price</span>
                  <span className="itemValue">{obj.price}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Availability:</span>
                  <span className="itemValue">{obj.status==='active'?'In Stock':'Out of Stock'}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="Statistics ( Last 12 Months)" />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List/>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;