import express from "express";
import { router } from "./router";

export const app = express().use(router).use(express.static("public"));
