# MatrixEffectJS

A lightweight API for simulating the Matrix effect using javascript and html5 canvas API , feel free to use it on your apps :).

## How To Use ?

Take a look on the demo folder.

This is a simple example :

``` javascript

    const wrapper = document.querySelector('.wrapper');

    const settings = {
            
        color:"#66ff00",
        fontSize:16,
        fontName:"monospace"
    };

    let matrixEffect = new MatrixEffect(wrapper,settings);

    window.ondblclick = () => matrixEffect.start();
    
```

## About

To Be Complated...
