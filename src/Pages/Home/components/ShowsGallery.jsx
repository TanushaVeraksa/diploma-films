import React from 'react';
import ShowCard from "../../../components/ShowCard";
import { connect } from "react-redux";

function ShowsGallery(props) {
   console.log(props.shows);
    return (
        <div>
            {/* {props.shows.map(show=><ShowCard src = {show.image.medium} id = {show.id}/>)}  */}
        </div>
    )
}

const mapStateToProps = (state) => ({
   shows: state.show.shows
})

export default connect(mapStateToProps)(ShowsGallery);