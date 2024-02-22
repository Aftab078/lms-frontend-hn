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