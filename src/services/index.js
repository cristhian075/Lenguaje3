import React from 'react'
import axios from 'axios'

const baseurl_Productos = process.env.REACT_APP_BASE_URL

export async function getProductos() {

    try {
        const response = await axios({
            url:`${baseurl_Productos}/api/listarproducto`,
            method:'GET'
        })

        return response
        
    } catch (e) {
        console.log(e)
    }
}


