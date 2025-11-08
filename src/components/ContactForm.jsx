import React, { useState } from 'react'

export default function ContactForm() {
  const [formData, setformData] = useState({
    username: "",
    email: "",
    message:  "",
  });
  const [sucess, setSucess] = useState("waiting")
  const [error, setError] = useState("");
  //Input Field Change Function
  const hanleInputChange = (e)=>{
    const {name, value} = e.target;
     setformData((prev)=>({...prev, [name]: value }));
  };
 //Form Submission
 const handleFormSubmission = (e)=>{
  e.preventDefault();
  setSucess("loading");

  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdbjYYNEKIC8sCurF-b4TJLQhmm9LeU8mupfe-KSOlGze-3ng/formResponse  ";
  const formBody = new FormData();
  formData.append("entry.321006058", formData.username);
  formBody.append("entry.1846917740", formData.email);
  formData.append("entry.299671657", formData.message);
  fetch(formUrl, {
    method: "POST", 
    mode: "no-cors",
    body: formBody,
  }).then(()=> {
    setSucess("submitted");
    setformData({
    username: "",
    email: "",
    message:  "",
  });
  }).catch((error)=>{
    setError(error.message);
  })
 };
  return (
    <div>
      <form onClick={handleFormSubmission} style={{display:"flex", flexDirection: "column", width:'30%', gap:"10px"}}>
        <input type="text" name="username" value={formData.username} placeholder='enter your name' onChange={hanleInputChange} />
        <input type="email" name="email" value={formData.email} placeholder='enter your name' onChange={hanleInputChange} />
        <textarea name="message" value={formData.message} rows={5} placeholder='enter your msg here...' onChange={hanleInputChange}></textarea>
        <button type='submit'>Send Message</button>
        <p>{error}</p>
      </form>
    </div>
  )
}
