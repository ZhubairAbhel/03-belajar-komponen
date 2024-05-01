const person = {
    name: 'Gregorio Y. Zara',
    imageId: '7vQD0fP',
    imageSize: 'm',
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    },
    url: 'https://i.imgur.com/'
  };    

  export function TodoList() {
    return (
      <div style={person.theme}>
        <h1>{person.name} s Todos</h1>
        <img
          className="avatar"
          src={`${person.url}${person.imageId}${person.imageSize}.jpg`}
          alt={person.name}
        />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
    );
  }