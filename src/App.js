import { useState } from "react";
import { FloatingLabel, Form, Card } from "react-bootstrap";
import { marked } from "marked";

marked.setOptions({
  breaks: true,
});

const App = () => {
  const asal = `
  # Ini header H1

  ## Ini sub header H2

  [title](https://www.example.com) ini contoh link

  \`ini contoh code\`

  \`\`\`
  {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25
  }
  \`\`\`

  1. First item
  2. Second item
  3. Third item

  - First item
  - Second item
  - Third item

  > ini adalah blockquote

  ![ini contoh gambar](image.jpg)
  
  **ini contoh bold text**
`;
  const [text, setText] = useState(asal);

  return (
    <div className="App row text-center d-flex align-items-center" >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        
      >
        <Card bg="secondary">
          <Card.Header>Editor</Card.Header>
          <Card.Body>
            <FloatingLabel controlId="floatingTextarea2" label="Type here">
              <Form.Control
                as="textarea"
                id="editor"
                placeholder="Leave a comment here"
                style={{ height: "100px", width: "850px" }}
                onChange={(event) => setText(event.target.value)}
                value={text}
              />
            </FloatingLabel>
          </Card.Body>
        </Card>
      </div>
      <div
        className="my-3"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card bg="light">
          <Card.Header>Preview</Card.Header>
          <Card.Body>
            <div
              id="preview"
              dangerouslySetInnerHTML={{
                __html: marked(text),
              }}
            ></div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default App;
