function customRendere(element,container){
    // const domElement = document.createElement(element.type);
    // domElement.innerHTML   =  element.label;
    // domElement.setAttribute('href',element.props.href);
    // domElement.setAttribute('target',element.target);

    // container.appendChild(domElement);

    //More generic way
    const domElement = document.createElement(element.type);
    domElement.innerHTML   =  element.label;
    for(let prop in element.props){
        if(prop === 'label') continue;
        domElement.setAttribute(prop,element.props[prop]);
    }
    container.appendChild(domElement);

}

const container = document.getElementById("root");

const reactElement = {
    type:"a",
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    label:"Click me"
}

customRendere(reactElement,container);