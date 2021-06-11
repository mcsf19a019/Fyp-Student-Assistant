import NavBarHome from '../RegistrationDir/NavbarHome';
import { useState } from "react";
import Axios from "axios";

const Clearnce = () => {
    const[application, setApplication]=useState("Write your clearance application here");
    const[DCClearance, setDCClearance]=useState(false);
    const[SecretaryDCClearance, setSecretaryDCClearance]=useState(false);
    const[AssistanceTreasurer, setAssistanceTreasurer]=useState(false);
    const[Library, setLibrary]=useState(false);
    const[NetworkAdmin, setNetworkAdmin]=useState(false);
    const[ExamCoordinator, setExamCoordinator]=useState(false);
    const[ProgramCoordinator, setProgramCoordinator]=useState(false);
    const[MainLibray, setMainLibray]=useState(false);
    const[HostelSuperintendent, setHostelSuperintendent]=useState(false);
    const[StudentAffairsCoordinator, setStudentAffairsCoordinator]=useState(false);
    


    const sendthereq=() =>{
        Axios.post("http://localhost:3001/insertclearancereq",{
            
        application,    
        DCClearance,
        SecretaryDCClearance,
        AssistanceTreasurer,
        Library,
        NetworkAdmin,
        ExamCoordinator,
        ProgramCoordinator,
        MainLibray,
        HostelSuperintendent,
        StudentAffairsCoordinator

        
        });

    };


    return (
        <div className="clearnce">
        <NavBarHome/>
            <h2 className="ClearanceTitle">Clearance Request</h2>
           
                <form>
                <div className="c1" id="body"> 

                  <textarea rows="13" cols="100" classname="textarea1" required placeholder={application} onChange={(e) => setApplication(e.target.value)}></textarea>
                  </div>
                  <div className="c2" id="submit">
                      <button className="B1" type="submit" onClick={sendthereq}>Submit</button>
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
                                  <input  className="tablerow" readOnly value={DCClearance}></input>
                              </td>
                          </tr>
                          
                          <tr>
                              
                              <td className="tablecontent"> Secretary DC Clearance</td>
                              <td className="tablecontent">
                                  <input className="tablerow" readOnly value={SecretaryDCClearance}></input>
                              </td>
                          </tr>

                                                    
                          <tr>
                              
                              <td className="tablecontent">Assistance Treasurer</td>
                              <td className="tablecontent">
                                  <input className="tablerow" readOnly value={AssistanceTreasurer}></input>
                              </td>
                          </tr>

                                                    
                          <tr>
                              
                              <td className="tablecontent">Library</td>
                              <td className="tablecontent">
                                  <input className="tablerow" readOnly value={Library}></input>
                              </td>
                          </tr>

                                                    
                          <tr>
                              
                              <td className="tablecontent">Network Admin</td>
                              <td className="tablecontent">
                                  <input className="tablerow" readOnly value={NetworkAdmin}></input>
                              </td>
                          </tr>

                                                    
                          <tr>
                              
                              <td className="tablecontent">Exam Coordinator</td>
                              <td className="tablecontent">
                                  <input className="tablerow" readOnly value={ExamCoordinator}></input>
                              </td>
                          </tr>

                                                    
                          <tr>
                              
                              <td className="tablecontent">Program Coordinator</td>
                              <td className="tablecontent">
                                  <input className="tablerow" readOnly value={ProgramCoordinator}></input>
                              </td>
                          </tr>

                                                    
                          <tr>
                              
                              <td className="tablecontent">Main Library</td>
                              <td className="tablecontent">
                                  <input className="tablerow" readOnly value={MainLibray}></input>
                              </td>
                          </tr>

                                                    
                          <tr>
                              
                              <td className="tablecontent">Hostel Superintendent</td>
                              <td className="tablecontent">
                                  <input className="tablerow"readOnly value={HostelSuperintendent}></input>
                              </td>
                          </tr>

                                                    
                          <tr>
                              
                              <td className="tablecontent">Student Affairs Coordinator</td>
                              <td className="tablecontent">
                                  <input className="tablerow" readOnly value={StudentAffairsCoordinator}></input>
                              </td>
                          </tr>

                                
                      </table>
                  </div>
                </form>
                <br/>
               <br/>
           
        </div>
      );
}
 
export default Clearnce;
