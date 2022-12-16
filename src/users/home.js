import {Link} from "react-router-dom";
const Home = () => {
    return(
        <>
            <h1>Trending Today</h1>
            <div className ="wd-box">
                    <h3> Top 7 Hits:</h3>
           <div className="list-group">
             <table>
             <tbody>
                   <tr className="list-group-item">
                     <td>
                          <h6>
                              Song 1
                           </h6>
                     </td>

                     <td>
                     </td>
                     <td>
                     </td>
                     <td>
                             <Link to="#" >
                               <button className="btn btn-primary btn-sm">View</button>
                             </Link>
                      </td>
                   </tr>
                   <tr className="list-group-item">
                     <td>
                                <h6>
                                    Song 2
                                  </h6>
                     </td>
                     <td>
                      </td>
                      <td>
                      </td>
                     <td>
                         <Link to="#">
                           <button className="btn btn-primary btn-sm">View</button>
                         </Link>
                     </td>
                     </tr>

                     <tr className="list-group-item">
                     <td>
                                <h6>
                                    Song 3
                                  </h6>
                     </td>
                     <td>
                     </td>
                     <td>
                     </td>
                     <td>
                         <Link to="#">
                           <button className="btn btn-primary btn-sm">View</button>
                         </Link>
                     </td>
                   </tr>
                   <tr className="list-group-item">
                     <td>
                                <h6>
                                    Song 4
                                  </h6>
                     </td>
                     <td>
                     </td>
                     <td>
                     </td>
                     <td>
                         <Link to="#">
                           <button className="btn btn-primary btn-sm">View</button>
                        </Link>
                      </td>
                  </tr>
                   <tr className="list-group-item">
                                       <td>
                                                  <h6>
                                                      Song 5
                                                    </h6>
                                       </td>
                                       <td>
                                       </td>
                                       <td>
                                       </td>
                                       <td>
                                           <Link to="#">
                                             <button className="btn btn-primary btn-sm">View</button>
                                           </Link>
                                       </td>
                                     </tr>
                                     <tr className="list-group-item">
                                       <td>
                                                  <h6>
                                                      Song 6
                                                    </h6>
                                       </td>
                                       <td>
                                       </td>
                                       <td>
                                       </td>
                                       <td>
                                           <Link to="#">
                                             <button className="btn btn-primary btn-sm">View</button>
                                          </Link>
                                        </td>
                                    </tr>
                                    <tr className="list-group-item">
                                                                           <td>
                                                                                      <h6>
                                                                                          Song 7
                                                                                        </h6>
                                                                           </td>
                                                                           <td>
                                                                           </td>
                                                                           <td>
                                                                           </td>
                                                                           <td>
                                                                               <Link to="#">
                                                                                 <button className="btn btn-primary btn-sm">View</button>
                                                                              </Link>
                                                                            </td>
                                                                        </tr>
                  </tbody>
            </table>
           </div>
           </div>




        </>
    );
}

export default Home;