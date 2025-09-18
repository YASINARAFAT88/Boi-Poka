import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../utility/addToDb';
import Book from '../Book/Book';


const ListedBooks = () => {
    const [readList, setReadList] = useState([])
    const [sort, setSort] = useState('')
    const allBooks = useLoaderData();

    useEffect(() => {
        const stredReadList = getStoredReadList();
        const stredReadListInt = stredReadList.map(id => parseInt(id))
        console.log(stredReadList, stredReadListInt, allBooks)
        const readBookList = allBooks.filter(book => stredReadListInt.includes(book.bookId))
        setReadList(readBookList)
    }, [])

    const handleSort = sortType =>{
        setSort(sortType)
        if(sortType === "No Of Pages"){
            const sortedReadList = [...readList].sort((a, b) => a.totalPages - b.totalPages)
            setReadList(sortedReadList)
        }
        if(sortType === "Ratings"){
            const sortedReadList = [...readList].sort((a, b) => a.totalPages - b.totalPages)
            setReadList(sortedReadList)
        }
    }
    return (
        <div>
            <h2 className='text-3xl my-4 font-bold'>Listed Books</h2>
            <details className="dropdown">
                <summary className="btn m-1">{sort ? `Sort By: ${sort}` : 'Sort By:'}</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                   <li onClick={()=> handleSort('Ratings')}><a>Ratings</a></li>
                    <li onClick={()=> handleSort('No Of Pages')}><a>No Of Pages</a></li>
                </ul>
            </details>
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