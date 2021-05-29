import NavBarHome from '../RegistrationDir/NavbarHome';
import { useState } from "react";

const Clearnce = () => {
    const[application, setApplication]=useState("Write your clearance application here");


    return (
        <div className="clearnce">
        <NavBarHome/>
            <h2 className="ClearanceTitle">Clearance Request</h2>
           
                <form>
                <div className="c1" id="body"> 

                  <textarea rows="13" cols="100" classname="textarea1" required placeholder={application} onChange={(e) => setApplication(e.target.value)}></textarea>
                  </div>
                  <div className="c2" id="submit">
                      <button className="B1" type="submit">Submit</button>
                      <br></br>
                  </div>

                  <div className="status">
                      <br></br>
                        <h4 className="tableCaption">Clearance Status</h4>
                      <table className="table1">
                          
                          <tr className="tablecontent">
                              <th className="tableheader">Department Name</th>
                              <th className="tableheader">Status</th>
                          </tr>

                          <tr>
                              <td className="tablecontent">DC Clearance</td>
                              <td className="tablecontent">
                                  <input  className="tablerow" readOnly placeholder="None"></input>
                              </td>
                          </tr>
                          
                          <tr>
                              
                              <td className="tablecontent"> Secretary DC Clearance</td>
                              <td className="tablecontent">
                                  <input className="tablerow" readOnly placeholder="None"></input>
                              </td>
                          </tr>

                                                    
                          <tr>
                              
                              <td className="tablecontent">Assistance Treasurer</td>
                              <td className="tablecontent">
                                  <input className="tablerow" readOnly placeholder="None"></input>
                              </td>
                          </tr>

                                                    
                          <tr>
                              
                              <td className="tablecontent">Library</td>
                              <td className="tablecontent">
                                  <input className="tablerow" readOnly placeholder="None"></input>
                              </td>
                          </tr>

                                                    
                          <tr>
                              
                              <td className="tablecontent">Network Admin</td>
                              <td className="tablecontent">
                                  <input className="tablerow" readOnly placeholder="None"></input>
                              </td>
                          </tr>

                                                    
                          <tr>
                              
                              <td className="tablecontent">Exam Coordinator</td>
                              <td className="tablecontent">
                                  <input className="tablerow" readOnly placeholder="None"></input>
                              </td>
                          </tr>

                                                    
                          <tr>
                              
                              <td className="tablecontent">Program Coordinator</td>
                              <td className="tablecontent">
                                  <input className="tablerow" readOnly placeholder="None"></input>
                              </td>
                          </tr>

                                                    
                          <tr>
                              
                              <td className="tablecontent">Main Library</td>
                              <td className="tablecontent">
                                  <input className="tablerow" readOnly placeholder="None"></input>
                              </td>
                          </tr>

                                                    
                          <tr>
                              
                              <td className="tablecontent">Hostel superintendent</td>
                              <td className="tablecontent">
                                  <input className="tablerow"readOnly placeholder="None"></input>
                              </td>
                          </tr>

                                                    
                          <tr>
                              
                              <td className="tablecontent">Student Affairs Coordinator</td>
                              <td className="tablecontent">
                                  <input className="tablerow" readOnly placeholder="None"></input>
                              </td>
                          </tr>

                                
                      </table>
                  </div>
                </form>
               
           
        </div>
      );
}
 
export default Clearnce;
