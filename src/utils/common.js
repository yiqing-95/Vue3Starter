/** 

function copyProps(itemsArr) {
    var copy = []; var i = 0;
    
    itemsArr.forEach(function(item) {
      item.props.forEach(function(prop) {
        copy[i] = Object.assign({}, item);
        copy[i].props = [Object.assign({}, prop)];
        i++;
      });
    }); 
    
    return copy;
  }

  */