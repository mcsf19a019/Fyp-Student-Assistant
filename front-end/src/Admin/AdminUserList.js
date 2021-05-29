import { Link } from 'react-router-dom';
import { useState } from "react";

const UserList = ({ }) => {

  const [users, setUsers] = useState([
    { name: 'MCSF19A026-Ameena', email: 'mcsf19a026@pucit.edu.pk', password: 'Manager789', id: 1 },
    { name: 'MCSF19A022-Saher', email: 'mcsf19a022@pucit.edu.pk', password: 'yoshi123', id: 2 },
    { name: 'MCSF19A003-Maham', email: 'mcsf19a003@pucit.edu.pk', password: 'mario41', id: 3 },
    { name: 'MCSF19A019-Shoaib', email: 'mcsf19a019@pucit.edu.pk', password: 'shahzad12', id: 4},
    { name: 'MCSF19A027-Imran', email: 'mcsf19a027@pucit.edu.pk', password: 'Author741', id: 5},
    { name: 'MCSF19A004-Minahil', email: 'mcsf19a004@pucit.edu.pk', password: 'Murtaza963', id: 6},
    { name: 'MCSF19A030-Mahnoor', email: 'mcsf19a030@pucit.edu.pk', password: 'Saadia456', id: 7},
    { name: 'MCSF19A038-Asad', email: 'mcsf19a038@pucit.edu.pk', password: 'Fareed852', id: 8},
    { name: 'MCSF19A021-Farah', email: 'mcsf19a021@pucit.edu.pk', password: 'Mazhar369', id: 9},
    { name: 'MCSF19A031-Khadija', email: 'mcsf19a031@pucit.edu.pk', password: 'Haqnawaz147', id: 10}
  ])

  const handleDelete =(id)=>{
    const newUser= users.filter(users=>users.id !==id);
    setUsers(newUser);
}

  return (
    <div className="post-list">
      {users.map(user => (
        <div className="user-preview" key={user.id} >

            <h2>{ user.name } </h2>
            <p>{ user.email } </p>

            <div >
              <p>
                <button type='submit'>
                  Edit
                </button>

                <button type='submit'>
                  Approve
                </button>
                
                <button onClick={()=> handleDelete(users.id)}>
                  Disapprove
                </button>

                <button onClick={()=> handleDelete(users.id)}>
                  Delete
                </button>
            </p>
            </div>
        </div>
      ))}
    </div>
  );
}
 
export default UserList;