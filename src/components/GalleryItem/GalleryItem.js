import React, {Component} from 'react';


class GalleryItem extends Component {

    state = {
        showDescription: false,
        count: 0
    }
    updateDescription = () => {
        console.log('clicked', this.state.showDescription);
        this.setState({
            showDescription: !this.state.showDescription
        })
    }

    likeCounter = () => {
        console.log('in likeCounter');
        this.setState({
          count: this.state.count +1
        });
      }

    render () {
        return (
            
            <div onClick={() => this.updateDescription()} className="imageWrapper">
            
               {this.state.showDescription ===true ?
                        <p>{this.props.image.description}</p>
                        :
                        <img src={this.props.image.path}/> }
                      </div>  
        
                      <div class="buttonWrapper">  
                        <button onClick={this.likeCounter}>l o v e</button>
                        </div>
                       
    
        );
                         
     }
}
    export default GalleryItem;