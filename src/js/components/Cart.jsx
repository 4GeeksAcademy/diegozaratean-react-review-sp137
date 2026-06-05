import React, { useState } from "react";

const Cart = ({cantidad = 1})=>{

    const [count, setCount] = useState(cantidad)
    const [items, setItems] = useState(1)



    function addCount(){
        console.log('addCount')
        
        // count++
        setCount(count + items)
        // setCount(x) =====> count = x
        // count++ ====> count = count + 1
        // setCount(count++) =====> count = count++
        // setCount(count++) =====> count = count = count + 1
        
    }



    function restar(){
        if(items > 1){
            setItems(items - 1)
        }
    }

    
    
    return(
        <div className="text-center mt-5">

            <h4>
                {count}
                <i className="bi bi-bag-x"></i>
            </h4>


            <div className="card" style={{width: "20rem"}}>
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp&w=256" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Aprende React</h5>
                    <p className="card-text">Libro aprende React , en este libro aprenderas sobre componenentes, class, props y hooks, especialmente el useState</p>
                    <button onClick={restar} >-</button>
                    <input type="number" value={items}  />
                    <button onClick={()=>setItems(items + 1)}  >+</button>
                    <a onClick={addCount} href="#" className="btn btn-primary">Agregar al carrito</a>
                </div>
            </div>
            <a onClick={()=>setCount(0)} href="#" className="btn btn-danger">Limpiar carrito</a>
        </div>
    )
}

export default Cart