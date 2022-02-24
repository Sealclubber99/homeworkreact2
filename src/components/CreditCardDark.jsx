import React, {Component} from 'react';

class CreditCardDark extends Component {
    state ={
        statements: this.props.statements,
        total: this.props.total,
        terms:""
    }
    showTerms = () => {
        if(this.state.terms == ""){
            this.setState({terms:
            "By accepting this agreement you enter into a binding and eternal contract with the ruinous powers to \n" +
                    "engage in full and total custodianship of (1) human soul, granted to you in exchange for the payment \n" +
                    "described in your purchase summary. You will also be mailed a frozen fish as described to you in the \n" +
                    "listing. This fish, henceforth called the “fish vessel”, represents the binding terms of your \n" +
                    "custodianship, and must be kept frozen at all times to avoid the risk of an all-consuming flame that can \n" +
                    "never be quenched. You hereby indemnify Cob’s of any harm caused by allowing the fish vessel to \n" +
                    "thaw, including but not limited to property damage, incineration, and the formation of gaping maws of \n" +
                    "despair on your property.\n" +
                    "By consuming the fish vessel, you forfeit any rights to the above contracted soul, and agree to render \n" +
                    "your soul onto Cob’s, or our chosen agent, upon your expiration. To cancel this contract at any time, \n" +
                    "simply resurrect the fish vessel using the necromantic arts, then cast the living fish vessel into a suitable\n" +
                    "void, no less than 24 miles deep. Attach a notarized copy of your name, social security number, order \n" +
                    "number, and exact second of birth to ensure processing of your cancellation. "

            })
        }
        else{
            this.setState({terms:""})
        }
    }
    render() {

        return (
            //This was loosly based on this site https://getbootstrap.com/docs/4.0/examples/checkout/
            <div className={"row"}>
            <div className="col-md-8">
                <h4 className="mb-3">Billing Address</h4>
                <form className="needs-validation">
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <input type="text" className="form-control" id="FirstName" placeholder="First Name"/>
                            </div>
                            <div className="col-md-6 mb-3">

                                <input type="text" className="form-control" id="LastName" placeholder="Last Name"/>

                            </div>

                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="email" placeholder="Email Address"/>
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="address" placeholder="Street Address"/>
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="apt" placeholder="Apt/Suite/Unit (optional)"/>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <input type="text" className="form-control" id="city" placeholder="City"/>
                            </div>
                            <div className="col-md-6 mb-3">

                                <input type="text" className="form-control" id="state" placeholder="State"/>

                            </div>


                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">

                                <input type="text" className="form-control" id="zip" placeholder="Zip Code"/>

                            </div>

                        </div>

                        <div className="mb-3">
                            <input className="form-check-input" type="checkbox" value="" id="bills" checked/>
                            <label  style={{fontSize:8}} className="form-check-label" htmlFor="bills">
                                I agree to be billed ${this.state.total} and solemnly swear to adhere to the law of no backsies
                            </label>
                        </div>
                        <div className="mb-3">
                            <input className="form-check-input" type="checkbox" value="" id="tandc" checked/>
                            <label style={{fontSize:8}} className="form-check-label" htmlFor="tandc">
                                I accept the <a onClick={this.showTerms}>terms and conditions</a> of purchase
                            </label>
                            <p style={{fontSize:6, color:"yellow"}}>{this.state.terms}</p>
                        </div>
                        <div className="mb-3">
                            <input className="form-check-input" type="checkbox" value="" id="contact" checked/>
                            <label style={{fontSize:8}} className="form-check-label" htmlFor="contact">
                                I agree to be contacted tri-hourly with information on new deals
                            </label>
                        </div>
                        <div className="mb-3">
                            <input className="form-check-input" type="checkbox" value="" id="NewPay" checked/>
                            <label style={{fontSize:8}} className="form-check-label" htmlFor="NewPay">
                                I agree to be billed Monthly, and pay $500 cancellation fee at cancellation
                            </label>
                        </div>
                </form>
                <div >
                    <h4 className="mb-3">Payment Information</h4>
                    <form className="needs-validation">
                        <div className="row">
                            <div className="col-md-8 mb-3">
                                <input type="text" className="form-control" id="ccn" placeholder="Credit Card Number"/>
                            </div>
                            <div className="col-md-2 mb-3">
                                <input type="text" className="form-control" id="cvv" placeholder="CVV"/>
                            </div>
                            <div className="col-md-2 mb-3">
                                <input type="text" className="form-control" id="exp" placeholder="Expiration"/>
                            </div>

                        </div>

                    </form>

                </div>


            </div>
                <div className="col-md-4 mt-5 d-flex flex-column align-items-center">
                    <ul className={"p-0 m-0 "}>
                        {Object.entries(this.state.statements).map(([key, value]) => (
                            <li className={"list-group-item"}>{value}</li>
                        ))}
                        <li className={"list-group-item active"}>
                            Total Price: ${this.state.total}
                        </li>
                    </ul>
                    <button className={"btn btn-primary m-3"}>
                        Confirm Purchase
                    </button>
                </div>

            </div>
        );
    }
}

export default CreditCardDark;