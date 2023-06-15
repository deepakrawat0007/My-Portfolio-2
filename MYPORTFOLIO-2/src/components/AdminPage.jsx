import React, { useEffect, useState } from 'react'
import AddProjectPopUpModal from './AddProjectPopUpModal';
import axios from "axios";
const API = "https://portfolio-server-05cm.onrender.com"

export const AdminPage = () => {
  const [projects , setProjects] = useState([]);
  const [popUp , setPopUp] = useState(false);

  const handleAdd = () =>{
    setPopUp(true)
  }
  const closePopUp = ()=>{
    setPopUp(false)
  }

  useEffect(()=>{
    axios.get(`${API}/AllProjects`)
    .then((res)=>{
      // console.log(res.data)
      setProjects(res.data)
    })
    .catch((e)=>{
      alert(e.message)
    })
   
  },[popUp])

  const handleDelete = (id) =>{
     axios.delete(`${API}/deleteProject/${id}`)
     .then((res)=>{
      setProjects(res.data.projects)
     })
     .catch((e)=>{
      alert(e.message)
     })
  }
    
  return (
   <>
   {popUp?(<AddProjectPopUpModal closePopUp={closePopUp}/>):''}
   <div className="head"><p>Admin Pannel</p></div>
   <div className="search">
    <input placeholder='Enter Project Name'/> 
    <button>Search</button>
    <button onClick={handleAdd}>Add New Project +</button>
   </div>

   <section class="intro" style={{backgroundImage:"url(https://mdbootstrap.com/img/Photos/new-templates/glassmorphism-article/img7.jpg)"}}>
  <div class="bg-image h-100" >
    <div class="mask d-flex align-items-center h-100">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="card mask-custom">
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-borderless text-white mb-0">
                    <thead>
                      <tr>
                        <th scope="col">Project/Id.</th>
                        <th scope='col'>Icon</th>
                        <th scope="col">Name</th>
                        <th scope="col">Stack</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {projects?.map((items)=>(
                        <tr key={items._id}>
                        <th scope="row">PRN{items._id[items._id.length-1]}{items._id[items._id.length-2]}</th>
                        <td><img style={{borderRadius:"10px"}} src={items.img} width={60} height={35} alt={items.name}/></td>
                        <td>{items.name}</td>
                        <td>{items.stack}</td>
                        <td><button onClick={()=>handleDelete(items._id)}>Delete</button></td>
                      </tr>
                      ))}
                             
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
   
   </>
  )
}
