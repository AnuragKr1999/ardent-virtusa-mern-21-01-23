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

import React from 'react';

function List1(props) {
    let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    let ListOfNumber = num.map((ele, index) => {
        return <li key={index}>{ele * 5}</li>
    });
    return (
        <div>
            <h1>Five times of Number  List</h1>
            <ul>
                {ListOfNumber}
            </ul>
        </div>
    );
}

export function List2(props) {
    const Namelist = props.list;

    const nlist = Namelist.map((name, index) => {
        return (
            <li key={index} >{name}</li>
        )
    })

    return (
        <>
            <h3>Name List</h3>
            <ul>
                {nlist}
            </ul>
        </>

    )


}


export function Blog(props) {
    const Sidebar = (
        <ul>
            {props.posts.map((post) => {
                return (
                    <li key={post.id}>
                        {post.title}
                    </li>
                )
            })}
        </ul>
    );
    const Content = props.posts.map((post) => {
        return (<div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>)
    });

    return (
        <div>
            <h2>Blog Problem</h2>
            {Sidebar}
            <hr />
            {Content}
        </div>
    )

}







function ListItem(props) {
    const item = props.item;
    console.log(item);

    return (<li key={item}>{item}</li>)
}

export function SubList(props) {
    const MyList = props.Data;
    const ListItems = MyList.map((element) => {
        <ListItem item={element} />
    });
    return (
        <div>
            <h2>Incorrect Key Example</h2>
            <ol>{ListItems}</ol>
        </div>
    )

}












const People = ({ firstname, lastname }) => {
    <div>
        {firstname} {lastname}
    </div>
}

export function OtherMap(props) {
    const peopleList = props.data;
    return (
        <div>
            <>
                <h1>People Data</h1>
                {peopleList.map((p, i) => { <People {...p} key={i} /> })}
            </>

        </div>
    )
}





export default List1;

//export default {List1,List2}
