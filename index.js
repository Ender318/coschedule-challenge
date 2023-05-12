import { GiphyFetch } from "@giphy/js-fetch-api";
import { IGif } from "@giphy/js-types";
import {
  Carousel,
  Gif,
  Grid,
  Video,
  VideoOverlay
} from "@giphy/react-components";
import React, { useState } from "react";
import { useAsync } from "react-async-hook";
import { createRoot } from "react-dom/client";
import ResizeObserver from "react-resize-observer";

const giphyFetch = new GiphyFetch("3xuslNNW3hQtbOe4FKkNHSEDOkIY9tht");

