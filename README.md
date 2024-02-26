 # LMS Frontend 

 ### Setup instruction 

 1. Clone the project 


 ```git clonehttps://github.com/Aftab078/lms-frontend-hn.git
 ```
 2. Move into the directory 
``
 cd lms-frontend-hn
```
3. install dependencies 


```npm install 
````

4. run the server 

```npm run dev
```

  ### Setup instruction for tailwind 

  [Tail wind offical instruction] 
 5. install tailwind 

 ```npm install -D tailwind 
 ```
 6. Create the Tailwind file with install of the css

 ```npx tailwindcss init
 ```


 7. Add file extension to tailwind config file

 ```"./src/**/*.{html,js,jsx,ts,tsx}"
 ```
 8. Add the tailwind directive at the 'index.css' file 

 ```
 @tailwind base;
@tailwind components;
@tailwind utilities;
 ```

  ### Adding pluging and dependancies

  ```
npm install @reduxjs/toolkit react-redux react-rout
er-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
  ```


  ### Configure auto import sort esline

    1. Install simple import sort

    ```
     npm i -D eslint-plugin-simple-import-sort
    ```
    2. Add rule in '.eslint.cjs'

    ```
         'simple-import-sort/imports': 'error',
    ```
    3. Add simple-import-sort plugin in .eslint.cjs

    ```
      plugins: [..., 'simple-import-sort'],
   ```

   4. To enable auto import sort file save in vscode

   -Open 'setting.json'
   -add the following config

   ```
   "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
   }
   ```