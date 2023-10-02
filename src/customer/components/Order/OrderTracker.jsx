import React from 'react'
import { Stepper } from '@mui/material'
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';


const setps = [
    "Placed",
    "Order Confirmed",
    "Shipped",
    "Out for Delivery",
    "Delivered"
]



const OrderTracker = ({ activeStep }) => {
    return (
        <div className='w-full'>
            <Stepper activeStep={activeStep} alternativeLabel>

                {setps.map((label) => <Step>
                    <StepLabel sx={{ color: "#9155FD", fontSize: "44px" }}>{label}</StepLabel>
                </Step>)}
            </Stepper>
        </div>
    )
}

export default OrderTracker
