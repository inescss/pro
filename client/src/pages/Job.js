import React from 'react'
import Layout from '../components/Layout';
import { Input } from "antd";
// import './Job.css';


const Job = () => {
    return (
        <div style={{display:"flex",background:"#DDD",fontSize:"15px"}}>
            <div>
            <Layout />
            </div>
            <div id="wrap">
            <form action="" autocomplete="on">
  <Input id="search" name="search" type="text" placeholder="Search for Jobs...."/>
      <Input id="search_submit" value="Rechercher" type="submit"/>
  </form>

            </div>
             
        </div>
    )
}

export default Job
