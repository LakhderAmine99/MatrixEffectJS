import MatrixEffect from '../src/index.js';

function MatrixEffectDemo(){

    this.run = function(){  

        console.log("Application is up and running...");

        init();
    };

    function init(){

        const wrapper = document.querySelector('.wrapper');

        const settings = {
            
            color:"#66ff00",
            fontSize:16,
            fontName:"monospace"
        };

        let matrixEffect = new MatrixEffect(wrapper,settings);

        window.ondblclick = () => matrixEffect.start();
    }
};

const setup = () => {

    window.onload = () => {

        window.app = new MatrixEffectDemo();
        window.app.run();
    };
};

setup();