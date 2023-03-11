import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios, { Axios } from 'axios'
import styles from './styles.module.css'
function Productspe() {
    const [Prodetail, setproductdetails] = useState({})

    let params = useParams()

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${params.productId}`)
            .then((res) => {
                setproductdetails(res.data)

            })
            .catch((err)=>{
                console.log(err)
            })

    }, [])


    return (
        <>
            <h1 style={{ textAlign: "center" }}>SPECIFICATION SECTION</h1>
            <div id={styles.productspec}>
                <img id={styles.productimg}
                    src={Prodetail.thumbnail}
                />
                <h2 style={{color:"blue"}}>{Prodetail.title}</h2>
                <p>{Prodetail.description}</p>
                <p >Brand :<b style={{color:"blue"}}>  {Prodetail.brand}</b></p>
              
                <p>price : <b style={{color:"green"}}>{Prodetail.price} $</b></p>
                <p>Rating :<b>  {Prodetail.rating}</b> /5 </p>
                <p>stock :<b>  {Prodetail.stock}</b> </p>
                <p>category:<b>  {Prodetail.category}</b> </p>

            </div>


        </>
    )
}

export default Productspe