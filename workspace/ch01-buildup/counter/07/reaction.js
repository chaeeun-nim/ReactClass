let _root;
let _stateValue;

const reaction = {
  createElement: (tag, props, ...children) => {
    // 요소노드 생성
    const elem = document.createElement(tag);

    // 속성 추가
    if (props) {
      for (const attrName in props) {
        const value = props[attrName];
        if(attrName.toLowerCase().startsWith('on')){
          elem.addEventListener(attrName.toLowerCase().substring(2), value);
        }else{
          elem.setAttribute(attrName, value);
        }
      }
    }

    // 자식 노드 추가
    for (let child of children) {
      if (typeof child === "string" || typeof child === "number") {
        child = document.createTextNode(child);
      } else if(typeof child === 'function'){
        child = child();
      }
      elem.appendChild(child);
    }

    // 생성한 노드 반환
    return elem;
  },
  // 루트 노드를 관리하는 객체를 생성해서 반환
  createRoot: (rootNode)=>{
    let _appComponent;
    return _root = {
      render(appFn){
        _appComponent = _appComponent || appFn;
        rootNode.firstChild?.remove();
        rootNode.appendChild(_appComponent());
      },
    };
  }, 

  useState : (initialValue)=>{
    _stateValue = _stateValue || initialValue;

    function setValue(newValue){
      const oldValue = _stateValue; // 이전 상태값
      _stateValue = newValue; // 현재 상태값

      // Object.is(a,b) a,b 가 같은지 여부를 반환
      // 객체일때 같은 메모리 주소를 가지고 있으면 트루~
      if(!Object.is(oldValue, newValue)){
        _root.render();
      }
    }

    //const[counst, setCount] = Reaction.useState(0);
    return [_stateValue, setValue];
  }
};

export default reaction;

