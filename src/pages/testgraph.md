---
title: Chart Example
layout: src/layouts/Layout.astro
---

# Example Chart

Here is an example of a bar chart rendered using the custom rehype plugin:
```chart
{
  "chart": {
    "type": "line"
  },
  "series": [{
    "name": "sales",
    "data": [30,40,35,50,49,60,70,91,125]
  }],
  "xaxis": {
    "categories": [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
  }
}
```