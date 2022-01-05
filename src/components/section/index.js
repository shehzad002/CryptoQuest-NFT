import avatar from './../../assets/avatar-3.webp';

function Section() {
    return(
        <> <br /><br />
        <div className="container">
           <div className="jumbotron">
               <div className="card">
                   <div className="row" style={{padding: "5px"}}>
                       <div className="col-sm-4">
                            <center><img src={avatar} alt="avatar" className="img-fluid" /></center>

                       </div>
                       <div className="col-sm-4">
                       <h1>Woodland Respite</h1>
                       <p>Detailed information coming soon.</p>
                       <h2>0.1 Eth</h2> <input type="number" placeholder="Quantity" className="form-control" />
                      <br /> <button className='btn btn-danger btn-lg'>MINT NOW</button> <button className="btn btn-success btn-lg">WHITELIST TOKEN</button> 
                     
                       </div>
                       <div className="col-sm-4">
                           <h1>Third Party Wallets <span class="badge bg-secondary" style={{borderRadius: "20px"}}>?</span></h1>
                       </div>
                   </div>
               </div>
           </div>

        </div>
        <br /> <br />
        </>
    );
}

export default Section;