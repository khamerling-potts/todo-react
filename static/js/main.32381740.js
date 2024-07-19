(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    11: function (e, t, o) {
      e.exports = o(17);
    },
    17: function (e, t, o) {
      "use strict";
      o.r(t);
      var a = o(0),
        s = o.n(a),
        n = o(9),
        i = o.n(n),
        c = o(10),
        r = o(2),
        d = o(3),
        l = o(5),
        p = o(4),
        u = o(6),
        m = o(1),
        h =
          (o(7),
          (function (e) {
            function t(e) {
              var o;
              return (
                Object(r.a)(this, t),
                ((o = Object(l.a)(this, Object(p.a)(t).call(this, e))).update =
                  o.update.bind(Object(m.a)(Object(m.a)(o)))),
                o
              );
            }
            return (
              Object(u.a)(t, e),
              Object(d.a)(t, [
                {
                  key: "render",
                  value: function () {
                    var e = this.props.id;
                    return this.props.completed
                      ? s.a.createElement(
                          "div",
                          { id: this.props.id, className: "col-sm-12 listdiv" },
                          s.a.createElement(
                            "li",
                            { style: { color: "lightgrey" } },
                            s.a.createElement(
                              "button",
                              {
                                onClick: this.update,
                                id: this.props.id,
                                style: {
                                  marginRight: "10px",
                                  backgroundColor: "#ceffc9",
                                  color: "black",
                                },
                              },
                              "Done"
                            ),
                            s.a.createElement(
                              "span",
                              { className: this.props.id },
                              this.props.text,
                              " "
                            ),
                            s.a.createElement(
                              "button",
                              {
                                onClick: this.props.removeTodo.bind(this, e),
                                id: this.props.id,
                                style: {
                                  cssFloat: "right",
                                  backgroundColor: "#ffbdaf",
                                  color: "black",
                                },
                              },
                              "Delete"
                            )
                          )
                        )
                      : s.a.createElement(
                          "div",
                          { id: this.props.id, className: "col-sm-12 listdiv" },
                          s.a.createElement(
                            "li",
                            null,
                            s.a.createElement(
                              "button",
                              {
                                onClick: this.update,
                                id: this.props.id,
                                style: {
                                  marginRight: "10px",
                                  backgroundColor: "#ceffc9",
                                },
                              },
                              "Done"
                            ),
                            s.a.createElement(
                              "span",
                              { className: this.props.id },
                              this.props.text
                            ),
                            s.a.createElement(
                              "button",
                              {
                                onClick: this.props.removeTodo.bind(this, e),
                                id: this.props.id,
                                style: {
                                  cssFloat: "right",
                                  backgroundColor: "#ffbdaf",
                                },
                              },
                              "Delete"
                            )
                          )
                        );
                  },
                },
                {
                  key: "update",
                  value: function (e) {
                    console.log(e.target.id);
                    var t = e.target.id,
                      o = new XMLHttpRequest();
                    (o.onreadystatechange = function () {
                      4 === this.readyState &&
                        200 === this.status &&
                        (document.getElementsByClassName(t)[0].style.color =
                          "lightgrey");
                    }),
                      console.log(t),
                      o.open("PUT", "https://cse204.work/todos/" + t, !0),
                      o.setRequestHeader("Content-type", "application/json"),
                      o.setRequestHeader(
                        "x-api-key",
                        "f32d02-3f32cc-c59414-4b288d-c7f6a6"
                      ),
                      o.send(JSON.stringify({ completed: !0 })),
                      this.setState({ completed: !0 }),
                      console.log(this);
                  },
                },
              ]),
              t
            );
          })(a.Component)),
        f = (function (e) {
          function t() {
            return (
              Object(r.a)(this, t),
              Object(l.a)(this, Object(p.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(u.a)(t, e),
            Object(d.a)(t, [
              {
                key: "render",
                value: function () {
                  return s.a.createElement(
                    "div",
                    { className: "formdiv" },
                    s.a.createElement(
                      "form",
                      {
                        className: "addform",
                        id: "addform",
                        onSubmit: this.props.addTodo,
                      },
                      s.a.createElement(
                        "label",
                        { htmlFor: "add", className: "formlabel" },
                        "To Do List"
                      ),
                      s.a.createElement(
                        "div",
                        { className: "input-group" },
                        s.a.createElement("input", {
                          value: this.props.input || "",
                          onChange: this.props.onChange,
                          type: "text",
                          className: "form-control",
                          id: "add",
                          placeholder: "New item",
                        }),
                        s.a.createElement(
                          "div",
                          { className: "input-group-addon" },
                          s.a.createElement("input", {
                            type: "submit",
                            value: "Add Item",
                            className: "addbutton",
                          })
                        )
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(a.Component),
        b = (function (e) {
          function t(e) {
            var o;
            return (
              Object(r.a)(this, t),
              ((o = Object(l.a)(this, Object(p.a)(t).call(this, e))).onChange =
                function (e) {
                  Object(m.a)(Object(m.a)(o)).setState({
                    input: e.target.value,
                  });
                }),
              (o.addTodo = o.addTodo.bind(Object(m.a)(Object(m.a)(o)))),
              (o.removeTodo = o.removeTodo.bind(Object(m.a)(Object(m.a)(o)))),
              (o.sortTodos = o.sortTodos.bind(Object(m.a)(Object(m.a)(o)))),
              (o.state = { todos: [] }),
              o
            );
          }
          return (
            Object(u.a)(t, e),
            Object(d.a)(t, [
              {
                key: "render",
                value: function () {
                  var e = this;
                  return s.a.createElement(
                    "div",
                    null,
                    s.a.createElement(
                      "div",
                      { className: "App" },
                      s.a.createElement(
                        "h1",
                        null,
                        "Kyra Hamerling-Potts' ToDo App"
                      )
                    ),
                    s.a.createElement(
                      "section",
                      { id: "todos" },
                      s.a.createElement(
                        "div",
                        { className: "row" },
                        s.a.createElement(
                          "div",
                          { className: "col-sm-12 addbar" },
                          s.a.createElement(f, {
                            addTodo: this.addTodo,
                            newTodo: this.newTodo,
                            onChange: this.onChange,
                            input: this.state.input,
                          })
                        ),
                        s.a.createElement(
                          "div",
                          { className: "col-sm-12 list" },
                          s.a.createElement(
                            "ul",
                            { id: "todoList" },
                            this.state.todos.map(function (t) {
                              return s.a.createElement(h, {
                                key: t.id,
                                id: t.id,
                                completed: t.completed,
                                update: e.update,
                                removeTodo: e.removeTodo,
                                text: t.text,
                              });
                            })
                          )
                        ),
                        s.a.createElement(
                          "div",
                          { className: "col-sm-12 sortButton" },
                          s.a.createElement(
                            "button",
                            {
                              onClick: this.sortTodos,
                              style: { backgroundColor: "#ffefff" },
                              className: "sortbtn",
                            },
                            "Sort alphabetically"
                          )
                        )
                      )
                    )
                  );
                },
              },
              {
                key: "sortTodos",
                value: function () {
                  this.state.todos.sort(function (e, t) {
                    return e.text.localeCompare(t.text);
                  }),
                    this.setState({ todos: this.state.todos });
                },
              },
              {
                key: "addTodo",
                value: function (e) {
                  e.preventDefault();
                  var t = this,
                    o = { text: t.state.input },
                    a = new XMLHttpRequest();
                  (a.onreadystatechange = function () {
                    4 === this.readyState &&
                      200 === this.status &&
                      (t.setState({
                        todos: Object(c.a)(t.state.todos).concat([
                          JSON.parse(this.responseText),
                        ]),
                      }),
                      t.setState({ input: "" }));
                  }),
                    a.open("POST", "https://cse204.work/todos", !0),
                    a.setRequestHeader("Content-type", "application/json"),
                    a.setRequestHeader(
                      "x-api-key",
                      "f32d02-3f32cc-c59414-4b288d-c7f6a6"
                    ),
                    a.send(JSON.stringify(o));
                },
              },
              {
                key: "removeTodo",
                value: function (e) {
                  var t = this;
                  console.log(e);
                  var o = new XMLHttpRequest();
                  (o.onreadystatechange = function () {
                    if (4 === this.readyState && 200 === this.status) {
                      var o = t.state.todos.filter(function (t) {
                        if (t.id !== e) return t;
                      });
                      t.setState({ todos: o }), console.log(o);
                    }
                  }),
                    o.open("DELETE", "https://cse204.work/todos/" + e, !0),
                    o.setRequestHeader("Content-type", "application/json"),
                    o.setRequestHeader(
                      "x-api-key",
                      "f32d02-3f32cc-c59414-4b288d-c7f6a6"
                    ),
                    o.send();
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  console.log("componentdidmount activated");
                  fetch("https://cse204.work/todos", {
                    method: "GET",
                    headers: {
                      "x-api-key": "f32d02-3f32cc-c59414-4b288d-c7f6a6",
                    },
                  })
                    .then(function (e) {
                      return e.json();
                    })
                    .then(function (t) {
                      e.setState({ todos: t });
                    });
                },
              },
            ]),
            t
          );
        })(a.Component);
      i.a.render(s.a.createElement(b, null), document.getElementById("root"));
    },
    7: function (e, t, o) {},
  },
  [[11, 2, 1]],
]);
//# sourceMappingURL=main.59a44361.chunk.js.map
