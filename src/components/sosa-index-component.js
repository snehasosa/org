import React,{Component} from 'react';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";

 class SosaIndex extends Component{
	render(){

		return(
		<div>
		<div className="row" style={{margin:'0 auto', textAlign:'center',  padding:'20px'}}>
  			<div className="col-sm-4" style={{ height:'300px', width:'300px',padding:'30px',backgroundColor:' #ff9933',}} >

  				<p><b>Office :</b></p>

  				<p>The Registered office of the Association shall be situated at the Administrative Block/office, Sneha  school campus, panchanahalli-577182</p>

  			</div>
  			<div className="col-sm-4" style={{ height:'300px', width:'300px',padding:'30px',backgroundColor:'#808000',}}>

  				<p><b>Our Vision :</b></p>
  				<p> “TOGETHER WE CAN CHANGE ” </p>
  			</div>
 			
 			 <div className="col-sm-4" style={{ height:'300px', width:'300px',padding:'30px',backgroundColor:'#ffff66',}}>
 			 	<p><b>Volunteer your time :</b></p>


				<p>WE WELCOME PARENTS, GRANDPARENTS, AND FRIENDS INTO OUR ASSOCIATION FOR HELP WITH SOCIAL WORKS.</p>

 			 </div>
		</div>


		<footer  style={{backgroundColor:'#ff9900', height:'110px', padding:'15px', color:'#ffffff'}}  >
					
				<p style={{textAlign:'left'}}>Copyright &copy; SOSA<br/> All Rights Reserved.</p>
			

				<p style={{textAlign:'right'}} >Powered by : &nbsp; KOMS IT SOLUTIONS</p>
		


		
		</footer>
		</div>


);
}
}



export default SosaIndex;