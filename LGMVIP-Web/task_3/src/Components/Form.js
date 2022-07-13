import React ,{useState}from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Form(props) {
    const [data, setData] = useState({
        Name: "",
        Email: "",
        Website: "",
        image: "",
        gender: "",
        HTML: "",
        CSS: "",
        JAVASCRIPT: ""
      });
    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value});
    };
    const handleReset=(e)=>{
        e.preventDefault();
        setData({
            Name: "",
            Email: "",
          Website: "",
          image: "",
          gender:"",
          HTML:"",
          CSS:"",
          JAVASCRIPT:""
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
       props.addStudent({
            id: Math.floor(Math.random() * 1000),
            name:data.Name,
            email:data.Email,
            website: data.Website,
        image: data.image,
        gender: data.gender,
        HTML:data.HTML,
        CSS: data.CSS,
        JAVASCRIPT: data.JAVASCRIPT
          })
        setData({
          Name:"",
          Email:"",
          Website:"",
          image:"",
          gender:"",
          HTML:"",
          CSS:"",
          JAVASCRIPT:""
        });
    }

    return (
        <div className="cards">
      <div className="card-body">
      <form>
          <div className="datagroup">
            <label className="label mb-4"> Name</label>
            <input
              type="text"
              onChange={handleChange}
              name="Name"
              className=" inputfield w-75 mb-4"
              value={data.Name}
            />
          </div>
          <div className="datagroup">
            <label className="label mb-4"> Email</label>

            <input
              type="email"
              onChange={handleChange}
              name="Email"
              className=" inputfield w-75 mb-4"
              value={data.Email}
            />
          </div>

          <div className="datagroup">
            <label className="label mb-4"> Website</label>

            <input
              type="url"
              onChange={handleChange}
              name="Website"
              className=" inputfield w-75 mb-4"
              value={data.Website}
            />
          </div>
          <div className="datagroup">
            <label className="label mb-4"> Image Link</label>

            <input
              type="url"
              onChange={handleChange}
              name="image"
              className=" inputfield w-75 mb-4"
              value={data.image}
            />
          </div>

          <div className="datagroup">
            <label className="label mb-4">Gender:</label>
            <label className="">
              <input
                type="radio"
                onChange={handleChange}
                name="gender"
                className=""
                value="Male"
                checked={data.gender === 'Male'}
              />
              Male
            </label>
            <label className="">
          
              <input
                type="radio"
                onChange={handleChange}
                name="gender"
                className="m-1"
                value="Female"
                checked={data.gender === 'Female'}
              />
              Female
            </label>
          </div>

          <div className="datagroup">
            <label className="label mb-4">Skills:</label>
            <label className="">
              <input
                type="checkbox"
                onChange={handleChange}
                class="form-check-input m-1"
                name="HTML"
                value="HTML"
                checked={data.HTML === 'HTML'}
              />
              HTML
            </label>
            <label className="">
              <input
                type="checkbox"
                onChange={handleChange}
                class="form-check-input m-1"
                name="CSS"
                value="CSS"
                checked={data.CSS === 'CSS'}

              />
              CSS
            </label>

            <label className="">
              <input
                type="checkbox"
                onChange={handleChange}
                class="form-check-input m-1"
                name="JAVASCRIPT"
                value="JAVASCRIPT"
                checked={data.JAVASCRIPT === 'JAVASCRIPT'}
              />
              JAVASCRIPT
            </label>
            {/* </div> */}
          </div>

          <button
            className="bt btn-success "
            onClick={handleSubmit}
            type="submit"
          >
            Enroll
          </button>
          <button
            className="bt btn-danger m-5"
            onClick={handleReset}
        
          >
           Reset
          </button>
        </form>
      </div>
      </div>
    )

}
