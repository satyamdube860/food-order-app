import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) =>{
    return(
<Fragment>
    <header className ="text-center bg-success fixed-top ">
        <h1 className = "display-3 text-center d-flex text-black-50 d-inline justify-content-center">ReactMeals</h1>
        <div className='d-flex '>
        <HeaderCartButton onClick={props.onShowCart}/>
       <button className={classes.button}>Details</button>
       </div>
         </header>
    <div className = "  mt-5 ">
        <img src ={mealsImage} alt ="Image in header" width="100%" height="500px"/>
    </div>
</Fragment>
    );
};
export default Header;