import React from "react";

class AddForm extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            name: null,
            email: null
        };
    }
    formSubmit()
    {
        console.log(this.state);
    }
    render()
    {
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 offset-lg-4 py-3">
                            <div><h4>Insrt Form</h4></div>
                            <div className="form">
                                <input type='text' name="name" className="form-control mb-2" placeholder='Enter Name' onChange={(e)=>this.setState({name:e.target.value})}/>
                                <input type="email" name="email" className="form-control mb-2" placeholder='Enter Email' onChange={(e)=>this.setState({email:e.target.value})}/>
                                <button className="btn btn-primary w-100" onClick={ () => this.formSubmit()}>Submit</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
        
    }
}

export default AddForm;