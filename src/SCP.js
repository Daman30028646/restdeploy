import React from "react";

const SCP = ({scp}) =>
{
    return(
        <div>
            {
               scp.map(
                   (scp) => (
                    <div className="row">
                    
                    <div className="col px-5 mx-5"> 
                    <div className="card shadow-md p-2">
                        <table>
                            <tr>
                                <td>
                        <img src={scp.image} alt={scp.game} />
                        </td>
                        <td>
                        <div className="card-body">
                            <h2>{scp.item}</h2>
                            <p className="card-text">{scp["special containment procedures"]}</p>
                                <small className="text-muted">Description:<br></br>{scp.description}</small>
                        </div>
                        </td>
                        </tr>
                        </table>
                    </div>
                    <br></br><br></br>
                </div>
    </div>
                   )
               )
            }
        </div>
    )
};



export default SCP;