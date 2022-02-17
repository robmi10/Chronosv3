import React, {useContext, useState, useEffect} from 'react'
import { Context } from '../Context/Context';
import "./Cart.css"
import { commerce } from '../Commerce/commerce';
import Productstart from "./Productscart";
import { Navbar2 } from '../navbar/navbar2';
import { Button } from '@material-ui/core';
import { Link } from "react-router-dom";
import {
    Select,
    TextField,
    Snackbar,
    Grid,
    Box,
    Typography,
    InputLabel,
    CircularProgress
  } from "@material-ui/core";
import Alert from "@mui/material/Alert";
import { Navbar3 } from '../navbar/navbar3';

const Cart = ({toggle}) => {
    const {update_state, setUpdate_state} = useContext(Context)
    const {products, setProducts} = useContext(Context);
    const {productcart, setProductcart} = useContext(Context);
    

    const {status_cart_amount, setstatus_cart_amount} = useContext(Context);
    const {status_cart_delete, setstatus_cart_delete} = useContext(Context);

    const {delete_cart, setDelete_cart} = useContext(Context);

    const [product_get, setProduct_get] = useState(null)

    //const [delete_cart, setDelete_cart] = useState(false)
    
    // const cart_ = JSON.parse(localStorage.getItem('cart'));

    const fetch_cart = async ()  =>{
        const cart = await commerce.cart.retrieve()

        console.log("inside fetch cart new", cart)
        setProduct_get(cart)
    }

    const delete_all_cart = async ()  =>{
        const cart = await commerce.cart.empty()

        console.log("inside delete all cart", cart)
        setDelete_cart(true)
    }

    useEffect(() => {
        fetch_cart()

    }, [status_cart_delete, status_cart_amount, delete_cart])

    if(product_get != null && productcart.total_items > 0){
    return (
        <>
        <Navbar3 toggle = {toggle}/>
        
            <div className="bodyall">
                <div>

                              <Productstart products = {product_get.line_items}/>  
                <div className="PutToCenter"> 
                    <div className ="CartCheckoutContainer2"> 
                        <h3>Total Belopp: {product_get.subtotal.formatted} $</h3> 
                    </div>
                    
                    <div className ="CartCheckoutContainer3">
                        <Button className="TotalAmountdisplayButton" component={Link} color = "primary" variant= "contained" type="button" to="/checkout">Utcheckning</Button>
                        <Button className="TotalAmountdisplayButton2" color = "secondary"  variant= "contained" type="button" onClick={() =>{delete_all_cart()}}>Ta bort varukorg</Button>
                    </div> 
                
                </div>
                </div>   


                </div>
                
                    
               
                <Snackbar
                open={status_cart_amount}
                autoHideDuration={2000}
                onClose={() => {
                    setstatus_cart_amount(false);
                }}
                >
                <Alert severity="success">Uppdaterad belopp</Alert>
                </Snackbar>

                <Snackbar
                open={status_cart_delete}
                autoHideDuration={2000}
                onClose={() => {
                    setstatus_cart_delete(false);
                }}
                >
                <Alert severity="success">Produkt borttagen</Alert>
                </Snackbar>

                <Snackbar
                open={delete_cart}
                autoHideDuration={2000}
                onClose={() => {
                    setDelete_cart(false);
                }}
                >
                <Alert severity="success">Varukorgen är tom</Alert>
                </Snackbar>
        </>
    )}
    else if(productcart.total_items === 0){
            return(
                <>
                  <Navbar3 toggle = {toggle}/>
        
            <div className="bodyall">
                <div>

              
                <h1>Varukorgen är tom!</h1>
                </div>   


                </div>
              

                <Snackbar
                open={delete_cart}
                autoHideDuration={2000}
                onClose={() => {
                    setDelete_cart(false);
                }}
                >
                <Alert severity="success">Varukorgen är tom</Alert>
                </Snackbar>
        </>
            )
    }
    else{
        return(
            <>
                <div className ="bodyall">
                <CircularProgress/>
                </div>
            </>
        )
    }
}

export default Cart
