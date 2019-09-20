import React from "react";

function VineyardList(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <h3>{props.vineyardName}</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <p>{props.vineyardDetails}</p>
                    {/* possibly insert link to vineyard website? */}
                </div>
            </div>
        </div>
            // <div className="card">
            //     <div className="card-header" id="vine1">
            //         <h5 className="mb-0">
            //             <button className="btn btn-link" data-toggle="collapse" data-target="#vineyard1" aria-expanded="true" aria-controls="vineyard1">
            //                 VINEYARD 1
            //   </button>
            //         </h5>
            //     </div>

            //     <div id="vineyard1" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
            //         <div className="card-body">
            //             VINEYARD INFO. VINEYARD INFO. VINEYARD INFO. VINEYARD INFO. VINEYARD INFO.
            // </div>
            //     </div>
            // </div>
    )
}

export default VineyardList;