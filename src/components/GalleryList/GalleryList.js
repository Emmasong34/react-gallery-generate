import React, {Component} from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {

    render () {
        console.log('in GalleryList');
        return (
            // <div className="imageWrapper">
            <>
                {this.props.galleryItems.map((image) => {
                    //  return <div><img src={image.path}/></div>
                    return <GalleryItem image={image} getImages={this.props.getImages}/>
                    
                })}
            </>
        );
    }}

    export default GalleryList;