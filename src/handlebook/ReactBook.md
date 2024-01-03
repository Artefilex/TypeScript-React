# Typescript Tipleri

- React.ReactNode: Herhangi bir şeyi içerebilen bir React düğümünü temsil eder. Bu genellikle bir bileşenin çocuklarını, JSX ifadelerini veya metin içerebilen herhangi bir şeyi ifade eder.

```tsx
import React from "react";

const MyComponent: React.FC = () => {
  const dynamicContent: React.ReactNode =
    Math.random() > 0.5 ? <p>Hello</p> : "World";

  return <div>{dynamicContent}</div>;
};
```

- React.ReactElement: Bir React öğesini temsil eder. Bu genellikle bir bileşenin JSX ifadesidir.

```tsx
import React from "react";

const MyComponent: React.FC = () => {
  const element: React.ReactElement = (
    <div>
      <p>cccccc</p>
    </div>
  );

  return element;
};
```

- React.CSSProperties: Bir CSS özelliklerini temsil eder. Bu, stillendirme nesnelerini tanımlamak için kullanılır.

```tsx
import React from "react";

const MyComponent: React.FC = () => {
  const style: React.CSSProperties = {
    color: "red",
    fontSize: "16px",
  };

  return <div style={style}>Styled Content</div>;
};
```

- React.ChangeEvent: Form elemanlarında değer değişikliklerini ele almak için kullanılır. Özellikle input, textarea, ve select elemanlarında kullanılır.

```tsx
import React, { useState } from "react";

const MyForm: React.FC = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return <input type="text" value={inputValue} onChange={handleInputChange} />;
};
```

- React.MouseEvent ve React.KeyboardEvent:

```tsx
import React from "react";

const MyButton: React.FC = () => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button clicked!", event.clientX, event.clientY);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    console.log("Key pressed!", event.key);
  };

  return (
    <button onClick={handleClick} onKeyPress={handleKeyPress}>
      Click Me
    </button>
  );
};
```

- ReactFormEvent: Form elemanlarının submit olaylarına yanıt olarak işlevleri ele almak için kullanılır.

```tsx
import React from "react";

const MyForm: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted!");
  };

  return <form onSubmit={handleSubmit}>Form Content</form>;
};
```

## Html Tipleri

1. Input Elemanları İçin:

- `React.InputHTMLAttributes`: `<input>` elemanı için kullanılır.
- `React.TextareaHTMLAttributes`: `<textarea>` elemanı için kullanılır.
- `React.SelectHTMLAttributes`: `<select>` elemanı için kullanılır.

```tsx
import React from 'react';

const MyInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return <input {...props} />;
};

const MyTextarea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = (props) => {
  return <textarea {...props} />;
};

const MySelect: React.FC<React.SelectHTMLAttributes<HTMLSelectElement>> = (props) => {
  return <select {...props} />;
};
```

2. Genel HTML Elemanları İçin:

- `React.HTMLProps`: Çeşitli HTML elemanları için genel bir türdür.

```tsx
import React from 'react';

const MyGenericElement: React.FC<React.HTMLProps<HTMLDivElement>> = (props) => {
  return <div {...props}>Hello, World!</div>;
};
```

- `ButtonHTMLAttributes`: React.ButtonHTMLAttributes tipi, `<button>` elemanı için kullanılır.
Bu tip, genel HTML özelliklerine ek olarak buton öğesi için özelleştirilmiş özellikleri içerir. Örneğin, type, disabled, onClick gibi butonla ilişkili özellikler bulunur.

```tsx
import React from 'react';

const MyButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return <button {...props}>Click me</button>;
};
```

- `AnchorHTMLAttributes`: React.AnchorHTMLAttributes tipi, `<a>` (link) elemanı için kullanılır.
Bu tip, genel HTML özelliklerine ek olarak link öğesi için özelleştirilmiş özellikleri içerir. Örneğin, href, target, onClick gibi linkle ilişkili özellikler bulunur.

```tsx
import React from 'react';

const MyLink: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = (props) => {
  return <a {...props} href="https://example.com">Visit Example</a>;
};
```

- `LabelHTMLAttributes`: React.LabelHTMLAttributes tipi, `<label>` elemanı için kullanılır.
Bu tip, genel HTML özelliklerine ek olarak etiket öğesi için özelleştirilmiş özellikleri içerir. Örneğin, for (htmlFor), form, onClick gibi etiketle ilişkili özellikler bulunur.

```tsx
import React from 'react';

const MyLabel: React.FC<React.LabelHTMLAttributes<HTMLLabelElement>> = (props) => {
  return <label {...props}>Username:</label>;
};
```

- `ImgHTMLAttributes`: React.ImgHTMLAttributes tipi, `<img>` elemanı için kullanılır.
Bu tip, genel HTML özelliklerine ek olarak resim öğesi için özelleştirilmiş özellikleri içerir. Örneğin, src, alt, width, height gibi resimle ilişkili özellikler bulunur.

```tsx
import React from 'react';

const MyImage: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => {
  return <img {...props} src="image.jpg" alt="A sample image" />;
};
```

- `FormHTMLAttributes`: React.FormHTMLAttributes tipi, `<form>` elemanı için kullanılır.
Bu tip, genel HTML özelliklerine ek olarak form öğesi için özelleştirilmiş özellikleri içerir. Örneğin, action, method, onSubmit gibi form ile ilişkili özellikler bulunur.

```tsx
import React from 'react';

const MyForm: React.FC<React.FormHTMLAttributes<HTMLFormElement>> = (props) => {
  return <form {...props}>Form content goes here</form>;
};
```