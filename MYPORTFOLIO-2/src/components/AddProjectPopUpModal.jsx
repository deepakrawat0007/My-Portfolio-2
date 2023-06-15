import React from 'react'
const API_KEY = "https://portfolio-server-05cm.onrender.com"

const AddProjectPopUpModal = ({closePopUp}) => {

    const submitbutton = async (e) => {
        e.preventDefault()
        const data = e.target
        const formData = new FormData(data)
        // console.log(formData);
        try {
            await fetch(`${API_KEY}/AddProject`, { method: "POST", body: formData, headers: { "authorization": localStorage.getItem('token') } })
                .then((res) => {
                    return res.json()
                }).then((data) => {
                    alert("Project Added in Portfolio")
                    closePopUp()
                    // toast.success("Post Success")
                   
                    // console.log(data);
                    // navigate('/posts')
                })
                .catch((err) => {  //41800508701
                    // console.log(err)
                    // toast.error(err.response.data.message)
                })


        } catch (error) {
            // toast.error(error.response.data.message)
        }

    }

  return (
    <div className='popup addPop'>
        <p>Enter Project Details</p>
        <div className="input">
        <form onSubmit={(e) => submitbutton(e)}>
                        <div className='file-desc' >
                            <input type={"file"} name='file' placeholder="No Image Selected" />
                        </div>
                        <div className="author-location">
                            <input type={"text"} name="name" placeholder="Project Name" />
                            <input type={"text"} name="stack" placeholder="Project Stack" />
                        </div>
                        <div className='file-desc'>
                            <input type={"text"} name="dplink" placeholder="Project Deployed Link" />
                            <input type={"text"} name="github" placeholder="Project Github Link" />
                        </div>
                        <div className='btns'>
                            <button onClick={closePopUp}>Cancel</button>
                            <button type='submit' >Add</button>
                        </div>
                    </form>
        </div>
    </div>
  )
}

export default AddProjectPopUpModal