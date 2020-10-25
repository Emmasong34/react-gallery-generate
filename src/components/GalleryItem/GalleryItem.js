import React, {Component} from 'react';
import axios from 'axios';


class GalleryItem extends Component {

    state = {
        showDescription: false,
        count: 0
    }

    // functionality to show image description
    updateDescription = () => {
        console.log('clicked', this.state.showDescription);
        this.setState({
            showDescription: !this.state.showDescription
        })
    }

    //PUT request
    putImage = (imageId) => {
        console.log('in PUT request');
        axios({
            method: 'PUT',
            url: `/gallery/like/${imageId}`
        }).then((response) => {
            console.log(response);
            //get request
            this.props.getImages();
        }).catch((error) => {
            console.log(error);
        });
    }

    render () {
        return (
            
    <div className="bigBox">

            <div onClick={() => this.updateDescription()} className="imageWrapper">
            
                {/* conditional rendering to toggle between image and description */}
               {this.state.showDescription ===true ?
                        <p>{this.props.image.description}</p>
                        :
                        <img src={this.props.image.path}/> }
                    </div>  
        
                        {/* click event for counter, uses PUT request */}
                      <div className="buttonWrapper">  
                        <button onClick={() => this.putImage(this.props.image.id) }>l o v e</button>
                        </div>
                        
                        {/* shows how many times the love button has been clicked */}
                        <div className="likeCounterDisplay">
                        <p>{this.props.image.likes} people love this!</p>
                        </div>
                       
    </div>
        );
                         
     }
}
    export default GalleryItem;