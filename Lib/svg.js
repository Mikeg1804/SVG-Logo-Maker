class Svg {
    construction () {
        this.textEl = ''
        this.shapeEl = ''
    }
    build(){
        return `<svg width="300" height="200" version ='1.1'>${this.shapeEl}${this.textEl}</svg>`
    }
    setText(LogoName, TextColor){
        this.textEl = `<text x='150' y='100' font-size='20' text-anchor='right' fill='${TextColor}'>${LogoName}</text>`
    }
    setShape(Shape){
        this.shapeEl = Shape.build()
    }
}

module.exports = Svg