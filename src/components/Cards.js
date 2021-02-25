import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards' id='projects'>
      <h1>Projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/project-images/ecommerce.png'
              text='MERN Ecommerce App'
              label='MERN'
              href='https://ecommerce-ak.herokuapp.com/'
            />
            <CardItem
              src='/images/project-images/devconnector.png'
              text='MERN Developer Connector'
              label='MERN'
              href='https://dev-connector-ak.herokuapp.com/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/project-images/ieeebracu.png'
              text='IEEE BRACU SB'
              label='Wordpress'
              href='http://ieeebracu.com/'
            />
            <CardItem
              src='/images/project-images/blog.PNG'
              text='Laravel CMS'
              label='Laravel'
              href='https://blog.ashrafkabir.com/'
            />
            <CardItem
              src='/images/project-images/todos.PNG'
              text='Laravel Task Manager'
              label='Laravel'
              href='https://todos.ashrafkabir.com/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/project-images/forum.png'
              text='Laravel Forum App'
              label='Laravel'
              href='https://forum.ashrafkabir.com/'
            />
            <CardItem
              src='/images/project-images/project05.PNG'
              text='Laravel Blog'
              label='Laravel'
              href='https://larablog.ashrafkabir.com/'
            />
            <CardItem
              src='/images/project-images/alumni.png'
              text='Alumni Management'
              label='PHP PDO, MySql'
              href='http://alumni.ieeebracu.com/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
