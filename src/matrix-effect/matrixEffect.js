import Canvas from "./canvas/canvas.js";

/**
 * @namespace {MatrixEffect2D}
 * @module MatrixEffect
 * @class
 */

class MatrixEffect {

    /**
     * @type {HTMLCanvasElement} #canvas
     */
    #canvas = null;

    /**
     * @type {HTMLElement} #wrapper
     */
    #wrapper = null;

    /**
     * @type {Object} #settings
     */
    #settings = null;

    /**
     * @type {number[]} #columnValues
     */
    #columnValues = [];

    /**
     * @type {number} #timeout
     */
    #timeout = 0;

    /**
     * 
     * @param {object} settings 
     */
    constructor(wrapper,settings){

        this.#canvas = Canvas.create(document.body.clientWidth,document.body.clientHeight,settings);

        this.#wrapper = wrapper || document.body;
        this.#settings = settings || {};

        this.#wrapper.appendChild(this.#canvas);
    };

    /**
     * 
     * @param {number[]} columnValues 
     * @param {this} ref 
     * @private
     */
    #buildMatrix(_this){

        Canvas.fillRect();

        _this.#columnValues.map((posY,index) => {

            let text = Math.round(Math.random());
            let posX = (index * 10);
            
            Canvas.fillText(text,posX,posY);

            if (posY > 650 + Math.random() * _this.#canvas.height){
                
                _this.#columnValues[index] = 0;

            } else {

                _this.#columnValues[index] = posY + 16;
            }
        });
    }

    /**
     * @private
     */
    #runAnimation(){

        let width = Math.round(this.#canvas.width/10);
        let _this = this;

        for(let x=0; x<width; x++){

            this.#columnValues.push(0);
        }

        this.#timeout = setInterval(() => this.#buildMatrix(_this),50);
    }

    /**
     * 
     */
    start(){

        this.#runAnimation();
    }

    /**
     * 
     */
    stop(){

        window.clearInterval(this.#timeout);
    }
};

export default MatrixEffect;