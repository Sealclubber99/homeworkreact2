import React, { Component } from "react";
// import PropTypes from 'prop-types';
import image1 from "./images/1.jpg";
import image2 from "./images/2.jpg";
import image3 from "./images/3.jpg";
import image4 from "./images/4.jpg";
import image5 from "./images/5.jpg";
import image6 from "./images/6.jpg";
const images = [image1, image2, image3, image4, image5, image6];
const fish_styles = {
    width: "200px",
    maxHeight: "300px",
};
class CounterDark extends Component {
    state = {
        value: this.props.value,
        price: this.props.price,
        discount:this.props.discount,
        total_price:0,
        name: this.props.name,
        sale_string: " "
    };

    increase = () => {
        this.setState({ value: this.state.value + 1 });
        this.setState({total_price: (this.state.value+1) * this.state.price});
        this.setState({sale_string: (this.state.name + " || $" + this.state.price + " X " + (this.state.value+1) + " = $" + ((this.state.value+1) * this.state.price))})
        this.props.handleChange(this.state.name + " || $" + this.state.price + " X " + (this.state.value+1) + " = $" + ((this.state.value+1) * this.state.price), this.props.id, this.state.price);
    };
    decrease = () => {
        if (this.state.value > 0) {
            this.setState({ value: this.state.value - 1 });
            if(this.state.value-1 == 0){
                this.setState({sale_string:""});
                this.props.handleChange("", this.props.id, (this.state.price * -1))
            }
            else{
                this.props.handleChange(this.state.name + " || $" + this.state.price + " X " + (this.state.value-1) + " = $" + ((this.state.value-1) * this.state.price), this.props.id, (this.state.price * -1));
            }
            this.setState({total_price: (this.state.value -1) * this.state.price})
        }

    };
    render() {
        console.log("src", this.state.location);
        return (
            <div  style={{display:'flex', flexDirection:"column", alignItems:"center", justifyContent:"space-between"}} className={"col-sm-3 equal m-4 bg-secondary rounded"}>
                {/*<span className={"glyphicon glyphicon-print"}></span>*/}
                <span>{this.state.name}</span>
                <img style={fish_styles} className={"img-thumbnail"} src={images[this.props.id - 1]} />

                <div style={{display:"flex", flexDirection:"column", alignItems:"center"}} className={"col-sm-8"}>
                    <span className={"badge badge-secondary bg-dark"}> <del className={"text-danger"}>  {this.state.discount} </del> &nbsp;  {this.state.price} </span>
                    <div style={{display:"flex", flexDirection:"row"}} >

                        <button style={{fontWeight:"bolder", width: 30, height:30, display:"flex", justifyContent:"center", alignItems:"center"}} className={"btn btn-primary"} onClick={this.increase}>+</button>{" "}

                        <span style={{width:30, height:20}} className={"badge badge-primary m-2 bg-danger"}>{this.state.value}</span>
                        <button style={{fontWeight:"bolder", width: 30, height:30, display:"flex", justifyContent:"center", alignItems:"center"}} className={"btn btn-primary"} onClick={this.decrease}>-</button>
                    </div>
                </div>




            </div>
        );
    }
}

CounterDark.propTypes = {};

export default CounterDark;
