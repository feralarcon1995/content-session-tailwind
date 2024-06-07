# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



## Estilizando tus Proyectos React con Eficiencia


**Tailwind CSS** es un framework de CSS utilitario que permite construir interfaces de usuario directamente en el HTML o JSX de React mediante clases predefinidas. En lugar de escribir estilos CSS personalizados, Tailwind proporciona una amplia gama de clases de utilidad que pueden ser aplicadas a los elementos HTML para darles estilos específicos.

### Objetivo de Tailwind CSS

El objetivo principal de Tailwind CSS es facilitar el desarrollo rápido de interfaces de usuario. Permite a los desarrolladores aplicar estilos directamente a los componentes HTML o JSX sin tener que escribir CSS personalizado. Esto promueve la creación de componentes consistentes y reutilizables, y agiliza el proceso de desarrollo al reducir la necesidad de escribir y mantener archivos CSS separados.


- **Desarrollo rápido**: Las clases utilitarias de Tailwind permiten aplicar estilos rápidamente sin necesidad de escribir CSS personalizado.
- **Consistencia**: Facilita la creación de una apariencia consistente en toda la aplicación al usar un conjunto común de clases de utilidad.
- **Reutilización de componentes**: Es más fácil crear y reutilizar componentes estilizados en un proyecto de React.
- **Mantención simplificada**: Reduce la complejidad de los archivos CSS, ya que no es necesario definir y mantener tantos estilos personalizados.
- **Responsive design**: Tailwind facilita el diseño responsivo con clases específicas para diferentes tamaños de pantalla.
- **Configuración**: Es altamente configurable y permite extender y personalizar las clases utilitarias según las necesidades del proyecto.


- **Verboso en el HTML/JSX**: El uso de muchas clases de utilidad puede hacer que el HTML o JSX se vea desordenado y difícil de leer.
- **Curva de aprendizaje**: Requiere aprender el conjunto de clases de utilidad de Tailwind, lo que puede ser un obstáculo para los nuevos desarrolladores.
- **Separación de archivos**: Algunos desarrolladores prefieren mantener la separación entre HTML y CSS, y Tailwind puede romper con esta convención al mezclar estilos con el marcado.
- **Dependencia de JavaScript**: Si se utiliza junto con React, Tailwind CSS puede aumentar el tamaño del bundle de JavaScript, aunque esto es comúnmente mitigado mediante la purga de clases no utilizadas en producción.
- **Estilos inline-like**: Puede dar la sensación de estar aplicando estilos en línea, lo cual es generalmente desaconsejado en CSS tradicional por cuestiones de mantenibilidad y separación de preocupaciones.


El plugin IntelliSense para Tailwind CSS en VS Code ofrece autocompletado, sugerencias contextuales y documentación en tiempo real para las clases de Tailwind. Facilita el desarrollo al reducir errores tipográficos y permite ver descripciones de clases directamente en el editor. También reconoce personalizaciones del archivo `tailwind.config.js`.

VSC Marketplace Link: [https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss]()

[https://tailwindcss.com]()


## Guía de instalación con vite
[https://tailwindcss.com/docs/guides/vite]()

```
    npm install -D tailwindcss postcss autoprefixer
```



### Inicializamos Tailwind en el proyecto

```
    npx tailwindcss init -p
```

Esto genera tus archivos `tailwind.config.js` y `postcss.config.js`

### Configuramos las rutas de las plantillas
Abrimos el archivo `tailwind.config.js`

```
	/** @type {import('tailwindcss').Config} */
	export default {
	  content: [],
	  theme: {
	    extend: {},
	  },
	  plugins: [],
	}
```

Reemplazamos el valor de content: [] por esto }

```
	content: [ "./index.html", "./src/**/*.{js,ts,jsx,tsx}", ],
```

### Añadimos las ultimas configuraciones
Abrimos el archivo `index.css` y pegamos lo siguiente arriba de todo

```
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
```


### Levantamos el proyecto de react 
Abrimos la terminal y corremos 
```
	npm run dev
```

Y ya podemos usar clases de tailwind sin problemas 

```
	export default function App(){ 
		return ( 
			<h1 className="text-3xl font-bold underline"> Hello world! </h1> 
		)
	}
```




