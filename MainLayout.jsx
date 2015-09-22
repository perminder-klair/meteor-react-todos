MainLayout = React.createClass({
  render() {
    return (
      <div>
        <main>{this.props.content}</main>
        <footer>We love Meteor</footer>
      </div>
    );
  }
});
