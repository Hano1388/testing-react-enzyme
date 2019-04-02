export default {
  "definitions": {},
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "http://example.com/root.json",
  "type": "object",
  "title": "The Root Schema",
  "required": [
    "todos",
    "auth"
  ],
  "properties": {
    "todos": {
      "$id": "#/properties/todos",
      "type": "array",
      "title": "The Todos Schema",
      "items": {
        "$id": "#/properties/todos/items",
        "type": "string",
        "title": "The Items Schema",
        "default": "",
        "examples": [
          "first todo",
          "second todo"
        ],
        "pattern": "^(.*)$"
      }
    },
    "auth": {
      "$id": "#/properties/auth",
      "type": "boolean",
      "title": "The Auth Schema",
      "default": false,
      "examples": [
        true
      ]
    }
  }
}
