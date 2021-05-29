import {useState} from 'react';
const Importants = () => {
    const [imps, setImps] = useState([
        {title: 'found key', body:"body 1",id:1},
        {title: 'found bag', body:"body 2",id:2},
        {title: 'found money', body:"body 3",id:3},
        {title: 'found usb', body:"body 4",id:4},
        {title: 'found moral', body:"body 5",id:5},
        {title: 'found book', body:"body 6",id:6},
        {title: 'found GPA', body:"body 7",id:7},
        {title: 'found snakeFriend', body:"body 8",id:8},
        
    ])
    return ( 
        <div className="importants">
            <div className="shortouter">
                {imps.map(imp =>(
                    <div className="impPreview" key={imp.id}>
                    <h4>{imp.title}</h4>
                    <p>{imp.body}</p>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Importants;