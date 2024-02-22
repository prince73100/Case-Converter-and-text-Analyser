//import React,{useState} from 'react'

export default function About(props) {
    
    let mystyle={
        color:props.mode ==='dark'?'white':'#04182d',
        backgroundColor:props.mode ==='light'?'white':'#04182d'
    }

    // const[mystyle,setmystyle] = useState({
    //     color:'balck',
    //     backgrounColor:'white'
    // });
    // const[btntext,setbtntext] = useState("Enable Dark mystyle")
    // const togglemystyle =()=>{
    //     if(mystyle.color ==='white'){
    //         setmystyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         });
    //         setbtntext("Enable Dark mystyle");
    //     }
    //     else{
    //         setmystyle({
    //             color:'white',
    //             backgroundColor:'black'
    //         });
    //         setbtntext("Enable light mystyle");
    //     }
    // }
  return (
    <div className="container" >
        <h1 className='my-3' style={{color:props.mode ==='dark'?'white':'black'}}>About Us</h1>
        <div className="accordion" id="accordionPanelsStayOpenExample">
                    <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button" style={mystyle}type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                Accordion Item #1
                            </button>
                            </h2>
                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                            <div className="accordion-body" style={mystyle}>
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                Accordion Item #2
                            </button>
                            </h2>
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                            <div className="accordion-body" style={mystyle}>
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                Accordion Item #3
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                            <div className="accordion-body" style={mystyle}>
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
    </div>
        

  )
}
