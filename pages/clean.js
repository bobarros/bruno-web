import indexTree from 'pagesTrees/indexTree.json';

////////////////////////////////////////////////////////////////////// React

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default function Home() {
  return (
    indexTree.map((element, indexElement) => {

      const divStyleElement = {
        width: `${element.width}px`,
        height: `${element.height}px`,
        left: `${element.left}px`,
        position: "relative",
        display: "block",
        backgroundColor: getRandomColor()
      };

      return <div style={divStyleElement}>teste</div>;
    })
    
  );
}
