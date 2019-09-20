import React from "react";
import "./style.css"

function Card(props) {
    return (
        <div className="card">
            <div className="row no-gutters">
                <div className="col-sm-3">
                    <img src="Countryside-Vinyard-Wine-Label.png" className="card-img rounded mx-auto d-block" alt="wineLabel"></img>
                </div>
                <div className="col-sm-9">
                    <div className="card-body">
                        <h5 className="card-title">Wine Name</h5>
                        <p className="card-text">2012 Pinot Noir</p>
                        <p className="card-text">Short wine description</p>
                        <p className="card-text">750ml | $25.00</p>

                    <form>
                        <div className="form-row">
                            <div className="col-1">
                                <input type="text" className="form-control text-center" placeholder="1" />
                            </div>
                            <div className="col-9">
                                <button href="#" className="btn btn-primary ">Add to Cart</button>
                            </div>
                        </div>
                    </form>

                    <a href="#" className="card-link">Customer Reviews</a>
                    </div>
                </div>
            </div>
        </div>
            )
        }
        
export default Card;