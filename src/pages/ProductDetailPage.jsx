import { useEffect, useState } from "react";
import axios from "axios";

import ReactLoading from 'react-loading';
import {useParams } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;


export default function ProductDetailPage() {
    const [product, setProduct] = useState({});
    const [qtySelect, setQtySelect] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [isScreenLoading, setIsScreenLoading] = useState(false);


    const {id: product_id} = useParams();

    useEffect(() => {
        const getProducts = async () => {
          setIsScreenLoading(true);
          try {
            const res = await axios.get(`${BASE_URL}/v2/api/${API_PATH}/product/${product_id}`);
            setProduct(res.data.product);
          } catch (error) {
            alert("取得產品失敗");
          } finally {
            setIsScreenLoading(false);
          }
        };
        getProducts();

      }, []);

    const addCartItem = async(product_id, qty) => {
        setIsLoading(true);
        try {
          await axios.post(`${BASE_URL}/v2/api/${API_PATH}/cart`, {
            data: {
              product_id,
              qty: Number(qty)
            }
          })
    

        } catch (error) {
          alert("加入購物車失敗")
        } finally {
          setIsLoading(false);
        }
      }

    return (
        <>
            <div className="container mt-5">
              <div className="row">
                  <div className="col-6">
                  <img className="img-fluid" src={product.imageUrl} alt={product.title} />
                  </div>
                  <div className="col-6">
                  <div className="d-flex align-items-center gap-2">
                      <h2>{product.title}</h2>
                      <span className="badge text-bg-success">{product.category}</span>
                  </div>
                  <p className="mb-3">{product.description}</p>
                  <p className="mb-3">{product.content}</p>
                  <h5 className="mb-3">NT$ {product.price}</h5>
                  <div className="input-group align-items-center w-75">
                      <select
                      value={qtySelect}
                      onChange={(e) => setQtySelect(e.target.value)}
                      id="qtySelect"
                      className="form-select"
                      >
                      {Array.from({ length: 10 }).map((_, index) => (
                          <option key={index} value={index + 1}>
                          {index + 1}
                          </option>
                      ))}
                      </select>
                      {/* <button onClick={() => addCartItem(product_id, qtySelect)} type="button" className="btn btn-primary">
                      加入購物車
                      </button> */}
                      <button
                          disabled={isLoading}
                          onClick={() => addCartItem(product_id, qtySelect)}
                          type="button"
                          className="btn btn-primary d-flex align-items-center gap-2"
                          >
                          加入購物車
                          {isLoading && (
                              <ReactLoading
                              type={"spin"}
                              color={"#000"}
                              height={"1.5rem"}
                              width={"1.5rem"}
                              />
                          )}
                      </button>
                </div>
                  </div>
              </div>
            </div>
            {isScreenLoading && (
              <div
                className="d-flex justify-content-center align-items-center"
                style={{
                  position: "fixed",
                  inset: 0,
                  backgroundColor: "rgba(255,255,255,0.3)",
                  zIndex: 999,
                }}
              >
                <ReactLoading type="spin" color="black" width="4rem" height="4rem" />
              </div>
            )}
        </>
    );
}