import Prisma from "@prisma/client";
const { PrismaClient } = Prisma;
const prisma = new PrismaClient();

const ExampleController = {
  index: async (req, res) => {
    res.json({
      mensaje: "index",
      data: await prisma.country.findMany({ where: { Code: "MEX" } }),
    });
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
