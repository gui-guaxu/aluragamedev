class Matrix {
  constructor(rowNumber, columnNumber, assetsNumber, assetWidth, assetHeight) {
    this.rowNumber = rowNumber;
    this.columnNumber = columnNumber;
    this.assetsNumber = assetsNumber;
    this.assetWidth = assetWidth;
    this.assetHeight = assetHeight;
  }
  
  create() {
    
    let array = [];
    let x = 0;
    let y = 0;
    let actualAsset = 0;
    
    for(var i = 0; i < this.rowNumber; i++) {
      x = 0;
      for (var j = 0; j < this.columnNumber; j++) {
        array.push([x,y]);
        
        x = x + this.assetWidth;
        
        actualAsset++;
        
        if(actualAsset == this.assetsNumber) {
          break;
        }
        
      }
      y = y + this.assetHeight;
    }
    
    return array;
  }
}