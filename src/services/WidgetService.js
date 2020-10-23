const WIDGET_URL = "http://localhost:8080/api/widgets"

const findAllWidgets = () =>
  fetch(WIDGET_URL)
    .then(response => response.json())

const createWidget = () =>
  fetch(WIDGET_URL, {
    method: "POST",
    body: JSON.stringify({name: "NEW HEADING", type: "HEADING"}),
    headers: {
      "content-type": "application/json"
    }
  })
    .then(response => response.json())

export default {
  findAllWidgets, createWidget
}
