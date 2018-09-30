import React from 'react';
import data from '../data';
class BlogPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            posts: data
        };
    }
    // componentWillMount(){}
    render() {
        return(
            <div className="container">      
                <div className="row justify-content-md-center">
                    <div className="col-md-10">
                        <div className="">
                            HueHue
                        </div>          
                    </div>
                </div> 
          </div>
        );
    }
}
export default BlogPage;