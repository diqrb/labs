import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import TwoGisIcon from '@mui/icons-material/Map'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
            <InstagramIcon />
            <FacebookIcon />
            <WhatsAppIcon />
            <TwoGisIcon />
        </div>
        <p>&copy; 2022 Dilnaz Kurbanova</p> 
    </div>
  )
}

export default Footer