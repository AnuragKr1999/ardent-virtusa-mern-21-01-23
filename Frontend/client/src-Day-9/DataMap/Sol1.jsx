// const NameList = ['Anjani', 'Debasish', 'Azim', 'Sourav']

//   const posts = [
//     { id: 1, title: 'Title 1', body: 'Body 1' },
//     { id: 2, title: 'Title 2', body: 'Body 2' },
//     { id: 3, title: 'Title 3', body: 'Body 3' },
//     { id: 4, title: 'Title 4', body: 'Body 4' }
//   ]

//   const people = [
//     { firstname: 'Title 1', lastname: 'Body 1' },
//     { firstname: 'Title 2', lastname: 'Body 2' },
//     { firstname: 'Title 3', lastname: 'Body 3' },
//     { firstname: 'Title 4', lastname: 'Body 4' }
//   ]



//   return (
//     <>
//       <List1 />
//       <br />
//       <List2 list={NameList} />
//       <br />
//       <Blog posts={posts} />
//       <br />
//       <SubList Data={posts} />
//       <br />
//       <OtherMap data={people} />
//       <br />
//       <CorrectNameList myLists={NameList} />
//       <br />
//       <MainApp data={people} />
//     </>
// )

function ListItem(props) {
    const item = props.item;
    return (
        // No need to specify the key here.  
        <li> {item} </li>
    );
}
function CorrectNameList(props) {
    const myLists = props.myLists;
    const listItems = myLists.map((strLists) =>
        // The key should have been specified here.  
        <ListItem key={myLists.toString()} item={strLists} />
    );
    return (
        <div>
            <h2>Correct Key Usage Example</h2>
            <ol>{listItems}</ol>
        </div>
    );
}

export default CorrectNameList;
