import React, {useState, useEffect} from "react";

////////////////////////This Is Class Component///////////////////////

// class Profile extends React.Component{
//     constructor(){
//         super()
//     }
//     componentDidMount(){
//         console.log("Called Life Cycle");
//     }
//     render(){
//         return(
//             <div>
//                 <h1>Hello Everyone I am Class Component</h1>
//             </div>
//         )
//     }
// }

/////////////This Is Function Component/////////////////////     // it is also called as stateless 

// function Profile(props){
    
//     const showPopUp = ()=>{
//         alert("Your Mouse is on function component sentence")
//     }

//     return(
//         <div>
//             <h1 onMouseOver={showPopUp}>{props.text}</h1>
//         </div>
//     )
// }

    // class Profile extends React.Component{
    //     constructor(){
    //         super();
    //         this.state={
    //             name:"Rushikesh",
    //             email:"rushi@123",
    //             cnt :0
    //         }
    //     }
    //     updateState(){
    //         this.setState({
    //             name:"Gurav",
    //             cnt:this.state.cnt+1
    //         })
    //     }
    //     render()
    //     {
    //         return(
    //             <div>
    //                 <h1>Count{this.state.cnt}</h1>
    //                 <h1>Hello Email{this.state.email}</h1>
    //                 <button onClick={()=>{this.updateState()}}>Update Name</button>
    //             </div>
    //         )
    //     }
// }


//////////////////////How to use lifecycle/////////////////

// class Profile extends React.Component{
//     constructor(){
//         super();
//         console.log("constructor");
//     }
//     componentDidMount(){
//         console.log("Component did mount ");
//     }

//     render(){
//         console.log("render");
//         return(
//             <div>
//                 <h1>Life Cycle Method</h1>
//             </div>
//         );
//     }
// }


/////////////////////Hooks///////////////////////// Hooks is only work in function component/////////

// function Profile(){
//     const [cnt, setCnt] = useState(0)
//     return (
//         <div>
//             <h1>Hooks in functional component {cnt}</h1>
//             <button onClick={()=>{setCnt(cnt+1)}}>Increament</button>
//         </div>
//     )
// }

///////////////////////////////useEffect Hooks//////////////////////it is work like a lifecycle into function////////
///////one useEffect method resolve three lifecycle method///////////

const Profile = ()=>{
    const [Cnt , setCnt]= useState(0)
    useEffect(()=>{
        console.log(Cnt);
    },[Cnt>=10])
    return(
        <div>
            <h1>I Am Form {Cnt}</h1>
            <button onClick={()=>setCnt(Cnt+1)}>Update State</button>
        </div>
    );
};

export default Profile;