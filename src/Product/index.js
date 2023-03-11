import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Product() {
    let navigate  = useNavigate()

    const [products, setproducts] = useState([])

    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then((res) => { setproducts(res.data.products) })
            .catch((err)=>{
                console.log(err)
            })

        
    }, [])
    return (
        <>
            <div id={styles.pro}>
                <h1>PRODUCT COMPONENT</h1>
                <div id={styles.productwrap}>
                    {products.map((item, i) => {
                        return (
                            <div className={styles.productcard} onClick={()=>
                            navigate(`/products/${item.id}`)}>
                                <img className={styles.img}
                                src={item.thumbnail}
                            
                                
                                />
                                <h2 style={{color:"black"}}>{item.title}</h2>
                                <p>price : <b style={{color:"green"}}>{item.price} $</b></p>
                                <p>Rating :<b>  {item.rating}</b> /5</p>
                            </div>
                            
                        )

                    })}





                </div>
            </div>
        </>
    )
}

export default Product