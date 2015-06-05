var NavBar = React.createClass({
    propTypes: {
        userSignedIn: React.PropTypes.bool,
        links: React.PropTypes.array,
        myAccountLink: React.PropTypes.string,
        logoutLink: React.PropTypes.string,
        loginLink: React.PropTypes.string,
        signUpLink: React.PropTypes.string
    }

    render: function() {
        return (
            <div class="row">
                <nav class="navbar navbar-default">
                    <div class="col-md-10 col-md-offset-1">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a class="navbar-brand" href="#">Small Groups App</a>
                        </div>
                        <div class="collapse navbar-collapse" id="navbar-collapse">
                        
                            if (this.props.user_signed_in) {
                                <ul class="nav navbar-nav">
                                    this.props.links.map(function(link) {
                                        <li><a href={link[1]}>{link[0]}</li>
                                    })
                                </ul>
                            }

                            <ul class="nav navbar-nav navbar-right">
                                if (this.props.user_signed_in) {
                                    <li><a href={this.props.my_account_link}>My Account</a></li>
                                    <li><a href={this.props.logout_link} method="delete">Logout</a></li>
                                } else {
                                    <li><a href={this.props.login_link}>Login</a></li>
                                    <li><a href={this.props.sign_up_link}></a></li>
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
});