import React,{useContext, useState, useEffect} from 'react'
import { Context } from '../../Context/Context'
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
import Alert from "@mui/material/Alert";
import useStyles from "../../styles/styles"
import { Link  } from "react-router-dom";

const Confirmation = () => {  
    const {order, setOrder } = useContext(Context);
    const {setNext_step } = useContext(Context);

    const {paymentdone, setpaymentdone} = useContext(Context);

    const classes = useStyles();

    useEffect(() => {
      
        window.scrollTo(0, 0);
      
    }, [])

    return (
        (order.customer ? (
            <>
              <div>
                <Typography variant="h5">Tack för ditt köp, {order.customer.firstname} {order.customer.lastname}!</Typography>
                <Divider className={classes.divider} />
                <Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography>
              </div>
              <br />
              <Button component={Link} onClick={() =>{setNext_step(0)}} variant="outlined" type="button" to="/">Tillbaka till chronos</Button>

              <Snackbar
              open={paymentdone}
              autoHideDuration={3000}
              onClose={() => {
                setpaymentdone(false);
              }}
            >
              <Alert severity="success">Betalningen är bekräftad!</Alert>
            </Snackbar>
            </>
          ) : (
            <div style={{position:"absolute", left: 800}}className={classes.spinner}>
              <CircularProgress />
            </div>
          ))
    )
}

export default Confirmation
