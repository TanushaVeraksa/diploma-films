import React from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles (theme => ({
   showCard: size => {
      if(size==="sm"){
        return ({
         width: 255,
         height: 230,
         })
      }
      if(size==="lg") {
         return ({
            width: 825,
            height: 491,
         })
      }
   },
 }))

function ShowCard(props) {
    const { size = "sm", src, alt, id, title, description } = props;
    const classes = useStyles(size);
    return (
        <div className={classes.showCard}>
            <Link to = {`/show/${id}`}>
                <img src={src} alt={alt ? alt:"no-alt"}/>
            </Link>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

ShowCard.propTypes = {
    size: PropTypes.string,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    description: PropTypes.string
}

export default ShowCard