import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../utility/addToDb';
import Book from '../Book/Book';


const ListedBooks = () => {
    const [readList, setReadList] = useState([])
    const allBooks = useLoaderData();

    useEffect(()=>{
        const stredReadList = getStoredReadList();
        const stredReadListInt = stredReadList.map(id => parseInt(id))
        console.log(stredReadList, stredReadListInt, allBooks)
        const readBookList = allBooks.filter(book => stredReadListInt.includes(book.bookId))
        setReadList(readBookList)
    },[])
    return (
        <div>
            <h2 className='text-3xl my-4 font-bold'>Listed Books</h2>
            <Tabs className='w-3/4 my-4'>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-2xl'>Books I Read: {readList.length}</h2>
                    {
                        readList.map(book => <Book
                        key={book.bookId} book={book}
                        ></Book>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2 className='text-2xl'>My Wish List</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;