import React, {useContext, useEffect, useState} from 'react'
import {ShopContainer, ShopHeader,ShopImage,  ButtonsWrapper, ShopWrapper, ShopCard, Img, ShopBuyButton, ShopSellButton, ShopH2} from "./ShopElements"
import energi1 from "../../images/energi1.svg"
import energi2 from "../../images/energi2.svg"
import energi3 from "../../images/energi3.svg"
import { commerce } from '../Commerce/commerce'
import { Product } from './Products/product'
import { Context } from '../Context/Context';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import Alert from "@mui/material/Alert";
import {
    Select,
    TextField,
    Snackbar,
    Grid,
    Button,
    Box,
    Typography,
    InputLabel,
    Divider,
    CircularProgress
  } from "@material-ui/core";
  import AOS from "aos";
  import "aos/dist/aos.css";

const Shop = ({light, id, imgStart, firstline, lightTxt, 
    headline, darkTxt, description, 
    buttonLabel, imga, 
    alt, primary, dark, dark2}) => {

    const { productcart, setProductcart } = useContext(Context);
    
    const {products, setProducts} = useContext(Context);
    const {update_state, setUpdate_state} = useContext(Context);
    
    const {status_added, setstatus_added} = useContext(Context)
 
    const add_cart = async (id, amount) =>{
        const cart = await commerce.cart.add(id, amount)
        console.log("seted cart", cart)
        setUpdate_state(!update_state)
        setstatus_added(true)
    }
    
    useEffect(() => {
        console.log("useffect shop on!")
        AOS.init();
    }, [update_state])
    
    if(products != 0){
    return (
        <>
   <ShopContainer light ={light} id={id}>
                <ShopHeader data-aos="fade-in" data-aos-delay="400">Shop</ShopHeader>
            <ShopWrapper>
                    {products.map( (option, i) =>{
                        {console.log("option new -->", option )}
                        return( 
                        <ShopCard data-aos="zoom-in" data-aos-delay="300">
                                <ShopHeader lightTxt = {!lightTxt}> {option.name.replace(/<[^>]+>/g, '')} </ShopHeader>
                                <ShopH2 lightTxt = {!lightTxt}>{option.description.replace(/<[^>]+>/g, '')}</ShopH2>


                                <ShopImage src ={option.image.url}></ShopImage>

                                <ButtonsWrapper>
                                
                                <IconButton style={{ marginLeft: 220}} onClick={() =>{ add_cart(option.id, 1) }} >
                                    <AddShoppingCartIcon/>
                                </ IconButton>

                            </ButtonsWrapper>
                        </ShopCard> )
                    })} 
               
            </ShopWrapper>
                    
            <Snackbar
              open={status_added}
              autoHideDuration={500}
              onClose={() => {
                setstatus_added(false);
              }}
            >
              <Alert severity="success">Tillagd i varukorgen</Alert>
            </Snackbar>

        </ShopContainer>
        </>
    )}
    else{
        return(
            <>


            </>
        )
    }

}

export default Shop
