/** @jsx React.DOM */

var BaseButton = React.createClass({
  handleClick: function () {
    this.props.handler();
  },
  render: function () {
    return (
      <button className={this.props.classes} onClick={this.handleClick}>{this.props.children}</button>
    );
  }
});

var BaseInput = React.createClass({
  render: function () {
    return (
      <input type="text" className="form-control" placeholder={this.props.placeholder} readOnly={this.props.readonly}/>
    );
  }
});

var ArrayButtonGroup = React.createClass({
  render: function () {
    return (
      <div className="btn-group">
        <BaseButton classes="btn btn-default" handler={window.App.unshiftItem}>Unshift</BaseButton>
        <BaseButton classes="btn btn-default" handler={window.App.pushItem}>Push</BaseButton>
        <BaseButton classes="btn btn-default" handler={window.App.removeItem}>Remove</BaseButton>
        <BaseButton classes="btn btn-default" handler={window.App.clearItems}>Clear</BaseButton>
      </div>
    );
  }
});

var ControlButtonGroup = React.createClass({
  render: function () {
    return (
      <div className="btn-group">
        <BaseButton classes="btn btn-success" handler={window.App.start}>Start</BaseButton>
        <BaseButton classes="btn btn-danger" handler={window.App.stop}>Stop</BaseButton>
      </div>
    );
  }
});
var Controls = React.createClass({
  render: function () {
    return (
      <div className="controls-wrapper">
        <ArrayButtonGroup />
        <ControlButtonGroup />
        <BaseInput placeholder="rate, amount/second"/>
        <BaseInput placeholder="amount to add"/>
        <BaseInput placeholder="total time, sec" readonly="true"/>
        <BaseInput placeholder="total" readonly="true"/>
      </div>
    );
  }
});

React.renderComponent(
  <Controls />,
  document.querySelector('#controls')
);

