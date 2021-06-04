import express from "express";
let router = express.Router();

import ExampleController from "../app/Http/Controllers/ExampleController.js";

router.get("/example", (req, res) => ExampleController.index(req, res));
router.post("/example", (req, res) => ExampleController.store(req, res));
router.get("/example/:id", (req, res) => ExampleController.show(req, res));
router.put("/example/:id", (req, res) => ExampleController.update(req, res));
router.delete("/example/:id", (req, res) =>ExampleController.destroy(req, res));

export default router;
