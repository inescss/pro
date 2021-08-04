import React from 'react'
import Layout from '../components/Layout';
import './home.css';
const Home = () => {
    return (
        <div className="all">
        <div className="one ">
            <Layout/>
           
        </div>
        <div className="two">
        <img  style={{ height: "200px",width: "250px", marginBottom: "-10px",marginLeft: "-700px" }}
          src="https://i.pinimg.com/originals/2d/6d/78/2d6d78cb202b3771de194b3a68be706c.jpg"
          alt=""
        /> 
         <p style={{textAlign:"center", justifyContent:"left"}}>
          job search help people find jobs.<br/>
         It’s now the largest job website in the world,<br/>
         boasting 250 million monthly users with 10 new job listings added every second.<br/>
         Biggest doesn’t always mean best, but we chose Indeed as the best overall job website due to its size,<br/>
         the number of industries, lifestyles catered to, and its unmatched update frequency. 
         </p>
         
         <img style={{ height: "400px",width: "1110px", paddingBottom:"60px",paddingTop:"10px"}}
         src="https://financialtribune.com/sites/default/files/field/image/17january/11_mr_job_530_2.jpg"alt="" />
         
         <h1 style={{textAlign:'center', marginBottom: "50px",marginTop: "50px" }}>How it works</h1>
        
        </div>
        </div>
    )
}

export default Home
