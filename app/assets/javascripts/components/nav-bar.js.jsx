/** @jsx React.DOM */

var NavBar = React.createClass({
    propTypes: {
        userSignedIn: React.PropTypes.bool,
        links: React.PropTypes.array,
        myAccountLink: React.PropTypes.string,
        logoutLink: React.PropTypes.string,
        loginLink: React.PropTypes.string,
        signUpLink: React.PropTypes.string
    },

    render: function() {
        var signedInLinks;
        if (this.props.userSignedIn) {
            signedInLinks = React.DOM.ul(null,
                this.props.links.map(function(link) {
                    return React.DOM.li(null,
                            React.DOM.a({href: link.path}, link.name)
                        )
                })
            );
        }

        var rightLinks;
        if (this.props.userSignedIn) {
            rightLinks = React.DOM.ul({className: "nav nav-bar navbar-right"},
                    React.DOM.li(null,
                        React.DOM.a({href: this.props.myAccountLink}, "My Account")),
                    React.DOM.li(null,
                        React.DOM.a({href: this.props.logoutLink, method: 'delete'}, "Logout"))
                );
        } else {
            rightLinks = React.DOM.ul({className: "nav navbar-nav navbar-right"},
                    React.DOM.li(null,
                        React.DOM.a({href: this.props.loginLink}, "Login")),
                    React.DOM.li(null,
                        React.DOM.a({href: this.props.signUpLink}, "Sign Up"))
                );
        }

        return (
            <div className="row">
                <nav className="navbar navbar-default">
                    <div className="col-md-10 col-md-offset-1">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">Small Groups App</a>
                        </div>
                        <div className="collapse navbar-collapse" id="navbar-collapse">
                            {signedInLinks}
                            {rightLinks}
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
});