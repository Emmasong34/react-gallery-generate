import React, {Component} from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {

    render () {
        console.log('in GalleryList');
        return (
            <>
                {/* looping through galleryItems array */}
                {this.props.galleryItems.map((image) => {
                    // sends information to GalleryItem component
                    return <GalleryItem image={image} getImages={this.props.getImages}/>
                    
                })}
            </>
        );
    }}

    export default GalleryList;