import { createContext } from "react";
import { useState } from "react";
export const Context = createContext();

export const ContextProvider = ({children}) =>{
    const [products, setProducts] = useState(0)
    const [productcart, setProductcart] = useState(0)
    const [ update_state, setUpdate_state] = useState(false)
    const [ next_step, setNext_step ] = useState(0)
    
    const [ Shipping_data, setShipping_data] = useState(false)

    const [ Shipping_Country, setShipping_Country] = useState(false)
    const [ Shipping_Subdivision, setShipping_Subdivision] = useState(false)
    const [ Shipping_Option, setShipping_Option] = useState(false) 

    const [ order, setOrder] = useState(false) 

    const [ id_, setId] = useState(false) 

    const [ status_added, setstatus_added] = useState(false) 

    const [ status_cart_amount, setstatus_cart_amount] = useState(false) 

    const [ status_cart_delete, setstatus_cart_delete] = useState(false) 

    
    const [paymentdone, setpaymentdone] = useState(false)

    const [SideBarOpen, setSideBarOpen] = useState(false)

    const [toogle_navbar, setToogle_navbar] = useState(false)

    const [toogle_isOpen, setToogle_isOpen] = useState(false)

    
    const [delete_cart, setDelete_cart] = useState(false)
    
    return(
        <Context.Provider value ={{products, setProducts, productcart, setProductcart,  update_state, setUpdate_state, next_step, setNext_step,
            Shipping_data, setShipping_data, Shipping_Country, setShipping_Country, Shipping_Subdivision, setShipping_Subdivision,
            Shipping_Option, setShipping_Option, order, setOrder, id_, setId, status_added, setstatus_added, 
            status_cart_amount, setstatus_cart_amount, status_cart_delete, setstatus_cart_delete, paymentdone, setpaymentdone,
            SideBarOpen, setSideBarOpen, toogle_navbar, setToogle_navbar, toogle_isOpen, setToogle_isOpen,
            delete_cart, setDelete_cart
            }}>
            {children}
        </Context.Provider>
    )
}