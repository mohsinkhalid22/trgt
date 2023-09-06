import React from 'react'

const SingleProduct = ({title,description,images,price}) => {
    return (
        <>

            <div className="col-md-3">
                <div className="card p-4 shadow border-0">
                    <img style={{width:'100%',height:'200px',objectFit:'contain'}} src={images[0]} alt="" />
                    <h5>{title}</h5>
                <button className="btn btn-success">
                    Add To Cart
                </button>
                </div>
            </div>

        </>
    )
}

export default SingleProduct