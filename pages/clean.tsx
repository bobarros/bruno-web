const indexTree = [
  {
    "width": 1440,
    "height": 1688,
    "left": 0,
    "children": [
      {
        "width": 518,
        "height": 432,
        "left": 461
      },
      {
        "width": 1440,
        "height": 658,
        "left": 0
      },
      {
        "width": 1440,
        "height": 598,
        "left": 0
      }
    ]
  },
  {
    "width": 1440,
    "height": 489,
    "left": 0,
    "children": [
      {
        "width": 1440,
        "height": 243,
        "left": 0
      },
      {
        "width": 1440,
        "height": 60,
        "left": 0
      },
      {
        "width": 1080,
        "height": 78,
        "left": 180
      }
    ]
  }
];

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
        position: "relative" as 'relative',
        display: "block",
        backgroundColor: getRandomColor()
      } ;

      return <div style={divStyleElement}>teste</div>;
    })
    
  );
}
