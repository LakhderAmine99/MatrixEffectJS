/**
 * @namespace {MatrixEffect2D}
 * @class
 * @module Canvas
 */
class Canvas {

    /**
     * @type {HTMLCanvasElement} #canvas
     */
    #canvas = null;

    /**
     * @type {CanvasRenderingContext2D} #drawingContext
     */
    #renderingContext = null;

    /**
     * @type {Object} #options
     */
    #options = null;

    /**
     * @empty
     */
    constructor(){}

    /**
     * 
     * @param {number} width 
     * @param {number} height 
     * @returns 
     */
    create(width,height,options){

        this.#canvas = document.createElement('canvas');
        this.#renderingContext = this.#canvas.getContext('2d');

        this.#canvas.width = width;
        this.#canvas.height = height;

        this.#options = options || {};

        this.#renderingContext.fillStyle = options.color || 'black';
        this.#renderingContext.font = options.fontSize + "px" +" "+ options.fontName;

        return this.#canvas;
    }

    /**
     * 
     * @param {number} x 
     * @param {number} y 
     * @param {number} width 
     * @param {number} height 
     * @param {number} opacity 
     */
    fillRect(x=0,y=0,width=this.#canvas.width,height=this.#canvas.height,opacity=0.05){

        this.context.fillStyle = "rgba(0,0,0,"+opacity+")";
        
        this.context.fillRect(x,y,width,height);

        this.context.fillStyle = this.#options.color;
    }

    /**
     * 
     * @param {string} text 
     * @param {number} x 
     * @param {number} y 
     * @param {number} size 
     */
    fillText(text,x,y,size){

        this.context.beginPath();
        this.context.fillText(text,x,y,size);
        this.context.closePath();
    }

    /**
     * 
     * @param {number} x 
     * @param {number} y 
     * @param {number} width 
     * @param {number} height 
     */
    clearRect(x=0,y=0,width=this.#canvas.width,height=this.#canvas.height){

        this.context.clearRect(x,y,width,height);
    }

    get context(){
        return this.#renderingContext;
    }
};

export default new Canvas();