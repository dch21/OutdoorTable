import React from "react";

class ComfirmationForm extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state);
    }

   
    render() {
        
        return (
            
            <div> 
                
               
            </div>
        )
    }

}
export default ComfirmationForm;


