import React, {Component} from 'react';

class GalleryList extends Component {

    render () {
        console.log('in GalleryList');
        return (
            // <div className="imageWrapper">
        <>
            {this.props.galleryItems.map((image) => {
                return <div><img src={image.path}/>
                        </div>
            })}
                           
                
             
             </>
        );
    }}

    export default GalleryList;