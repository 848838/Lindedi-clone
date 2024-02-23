import { useState } from "react"
import React from 'react'
import Home from "./Home"
const MyModal = () => {
    const [Showcard, setShowcard] = useState(   )

   

    return (

        < >


            <div class="mb-3 mx-auto" style={{ border: '2px solid black', background: 'whitesmoke', width: '40vh', height: '30vh' }}>
                <label for="formFile" class="form-label"></label>
               
                <input class="form-control" type="file" id="formFile" />
            </div>
            {Showcard && <MyModal/>}

        </>
    )
}

export default MyModal