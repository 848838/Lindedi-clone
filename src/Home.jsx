import React, { useEffect } from 'react'
import MainServerdata from './Data'
import MyModal from './MyModal'
import { useNavigate } from 'react-router-dom'
import { useState} from 'react'
import Login from './Login'
import Signup from './Signup'

const Home = () => {
    const [card, setcard] = useState(MainServerdata)
    const [like, setlike] = useState(true)
    let Navigate = useNavigate()
    useEffect(() => {
        if(localStorage.getItem('token')){
            Navigate('/home')
        }else{}
        Navigate('/home')
    }, )

    const onlike = () => {
        if (!like) {
            setlike(true)
        } else {
            setlike(false)
        }
    }

    const MainCard = () => {
        const [Showcard, setShowcard] = useState(false)

        return (
            <>

                <div className=' container-fluid d-flex' style={{ justifyContent: 'center', width: '80vh' }}>

                    <div className="card  my-4  " style={{ width: '90vh', display: 'flex', textAlign: 'center', justifyContent: 'center' }}>
                        <div className="card-body">
                            <form className=" d-flex py-4 mx-auto " role="search" style={{ width: '39vh', cursor: 'pointer ' }}>
                                <input style={{ borderRadius: 300, padding: '1vh', cursor: 'pointer' }} className="form-control me-2" type="search" placeholder="Start post  , try writing with Al" aria-label="search" />

                            </form>

                            <i style={{ color: '#54aaff', cursor: 'pointer' }} className="bi bi-image-fill "></i>
                            <button onClick={() => setShowcard(true)} className='container-fluid  ' style={{ textDecoration: 'none', color: 'black', border: 'none' }} to="#" >Media</button>
                            <button onClick={() => setShowcard(false)} className='container-fluid  ' style={{ textDecoration: 'none', color: 'black', border: 'none' }} to="#" >cancel</button>

                            <i style={{ color: '#fc894c', cursor: 'pointer' }} className="bi bi-calendar-week"></i>
                            <a className='container-fluid  ' style={{ textDecoration: 'none', color: 'black' }} to="#" >Event</a>

                            <i style={{ color: '#ff5800', cursor: 'pointer' }} className="bi bi-pencil-fill"></i>
                            <a className='container-fluid   ' style={{ textDecoration: 'none', color: 'black' }} to="#" >Write articles</a>

                        </div>

                    </div>

                </div>
                {Showcard && <MyModal />}
            </>

        )
    }
    return (
        <>
            <MainCard />
            {/* eslint-disable-line */}
            <div className=' container-fluid d-flex' style={{ justifyContent: 'center', width: '80vh' }}>

                <div className="card-body ">
                    {


                        MainServerdata.map((element) => {
                            const { id, caption, imageurl } = element;
                            return (
                                <div key={element.id}>
                                    <div className=' my-5' style={{ width: '80vh' }}>
                                        <div className="card  my-4 mx-auto  " style={{ width: '70vh', height: '96vh', display: 'flex' }}>


                                            <a style={{ color: 'orange', textDecoration: 'none' }} className='mx-5 my-4 ' to='/'>Thomas shelby</a>
                                            <img style={{ justifyContent: 'center', height: '60vh' }} src={element.imageurl} className="card-img-top my-5" alt="..." />
                                            <p style={{ justifyContent: 'center', fontSize: '16px ', width: '67vh', margin: 'auto' }} className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. loreasdasdassssssssssssssssssssssssssssssdsadaswedqe</p>

                                            <div className='conatiner fluid mx-5 my-4 ' style={{ cursor: 'pointer' }}>

                                                {like ?

                                                    (<i key={element.id} onClick={onlike} style={{ fontSize: 20 }} className="fa-solid fa-thumbs-up mx-4"></i>) : (<i key={element.id} style={{ fontSize: 20 }} onClick={onlike} className="fa-regular fa-thumbs-up mx-4"></i>)}
                                                <i style={{ fontSize: 20 }} className="fa-regular fa-comment mx-5"></i>
                                                <i style={{ fontSize: 20 }} className="fa-solid fa-signs-post mx-5"></i>
                                                <i style={{ fontSize: 20 }} className="fa-solid fa-paper-plane mx-5"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )

                        })

                    }


                </div>




            </div>

        </>
    )
}

export default Home;