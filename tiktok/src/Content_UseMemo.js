import React, { useEffect, useMemo, useRef, useState } from "react";
import {nanoid} from 'nanoid';


function Content_UseMemo(){

  const [nameProduct, setNameProduct] = useState('');
  const [priceProduct, setPriceProduct] = useState('');
  const [products, setProducts] = useState([]);
  const nameRef = useRef();
  console.log(nameRef);
  document.title = 'Content_UseMemo';

  const handleSubmit = () => {
    setProducts([
      ...products, 
      {
        id: nanoid(10),
        nameProduct, 
        priceProduct: +priceProduct
      }
    ])
    setNameProduct('')
    setPriceProduct('')
    nameRef.current.focus();
    console.log('chay vo day')
  }
  // const total = 
  //   products.reduce((result, productItem) => {
  //     console.log("Tính toán lại....");
  //     return result + productItem.priceProduct;
  //   }, 0)
  const total = useMemo(() => {
      let resultTotal = products.reduce((result, productItem) => {
        console.log("Tính toán lại....");
        return result + productItem.priceProduct;
      }, 0)
      return resultTotal;
  }, [products]) 
  console.log("Total: ", total);
  console.log("products: ", products)
  return(
    <div> 
      <h1>Content_UseMemo</h1>
      <div className="row">
        <div className="col-md-3 d-f" >
          <div className="input-group">
            <input 
              ref={nameRef}
              value={nameProduct}
              className="input"
              type="text" 
              name="text" 
              autoComplete="off" 
              onChange={e => setNameProduct(e.target.value)}/>
            <label className="user-label" id="productName">Product Name</label>
          </div>
          <br/>
          <div className="input-group">
            <input 
              value={priceProduct}
              id="productPrice"
              className="input"
              type="text" 
              name="text" 
              autoComplete="off" 
              onChange={e => setPriceProduct(e.target.value)}/>
            <label className="user-label" id="productPrice">Price</label>
          </div>
          <button type="button" onClick={handleSubmit}>Thêm</button>
        </div>
        <div className="col-md-9">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">ProductName</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {
                products.map(product => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.nameProduct}</td>
                    <td>{product.priceProduct}</td>
                  </tr>
                ))
              }
              <tr>
                <td colSpan={2}>Total</td>
                <td>{total}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Content_UseMemo;