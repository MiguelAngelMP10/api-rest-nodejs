const ExampleController = {
  index: function (req, res) {
    res.json({ mensaje: "index" });
  },

  store: function (req, res) {
    res.json({ mensaje: "store" });
  },

  show: function (req, res) {
    res.json({ mensaje: "show" });
  },

  update: function (req, res) {
    res.json({ mensaje: "update" });
  },
  
  destroy: function (req, res) {
    res.json({ mensaje: "destroy" });
  },
};

export default ExampleController;
