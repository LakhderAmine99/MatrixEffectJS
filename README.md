# MatrixEffectJS

A lightweight API for simulating the Matrix effect using javascript and html5 canvas API , feel free to use it on your apps :).

## How To Use ?

Take a look on the demo folder.

This is a simple example :

- Get the wrapper element from your html file if no wrapper has specified the document.body will be selected:

``` javascript

    const wrapper = document.querySelector('.wrapper');

```

- Set up the settings object with the styles that you wish to use:

``` javascript

    const settings = {
            
        color:"#66ff00",
        fontSize:16,
        fontName:"monospace"
    };

```

- Create the matrixEffect object and call the start method to start the matrix effect animation:

``` javascript

    let matrixEffect = new MatrixEffect(wrapper,settings);

    window.ondblclick = () => matrixEffect.start();
    
```

- If there's anything to modify or to optimize feel free to let me know or just go through it :).

## Demo In The Browser

<img src="https://github.com/LakhderAmine99/MatrixEffectJS/blob/main/screenshots/1.png">