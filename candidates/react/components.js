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
  handleChange: function (ev) {
    App[this.props.value] = Number(ev.target.value);
  },
  render: function () {
    return (
      <input type="text" className="form-control" value={App[this.props.value]} onChange={this.handleChange} placeholder={this.props.placeholder} readOnly={this.props.readonly}/>
    );
  }
});

var ArrayButtonGroup = React.createClass({
  shouldComponentUpdate: function () {
    return false;
  },
  render: function () {
    return (
      <div className="btn-group">
        <BaseButton classes="btn btn-default" handler={window.App.unshift}>Unshift</BaseButton>
        <BaseButton classes="btn btn-default" handler={window.App.push}>Push</BaseButton>
        <BaseButton classes="btn btn-default" handler={window.App.remove}>Remove</BaseButton>
        <BaseButton classes="btn btn-default" handler={window.App.clear}>Clear</BaseButton>
      </div>
    );
  }
});

var ControlButtonGroup = React.createClass({
  shouldComponentUpdate: function () {
    return false;
  },
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
        <BaseInput value="rate" placeholder="rate, amount/second"/>
        <BaseInput value="amount" placeholder="amount to add"/>
        <BaseInput value="time" placeholder="total time, sec" readonly="true"/>
        <BaseInput value="total" placeholder="total" readonly="true"/>
      </div>
    );
  }
});

var Row = React.createClass({
  shouldComponentUpdate: function (prevProps) {
    return prevProps.itemKey !== this.props.itemKey ||
      prevProps.itemValue !== this.props.itemValue;
  },
  render: function () {
    return (
      <tr>
        <td>{this.props.itemKey}</td>
        <td>{this.props.itemValue}</td>
      </tr>
    );
  }
});

var Rows = React.createClass({
  render: function () {
    var rows = this.props.content.map(function (item) {
      return <Row
        key={item.key}
        itemKey={item.key} itemValue={item.value} />
    });
    return (
      <tbody>
        {rows}
      </tbody>
    );
  }
});
App.render = function () {
  App.total = App.content.length;
  React.renderComponent(
    <Controls  />,
    document.querySelector('#controls')
  );
  React.renderComponent(
    <Rows content={App.content}/>,
    document.querySelector('table')
  );
};
App.render();



