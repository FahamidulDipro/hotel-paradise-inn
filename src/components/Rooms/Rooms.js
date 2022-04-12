import React, { useContext, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { LoadHotelsContext } from '../../App';
import Room from '../Room/Room';

const Rooms = () => {
   const rooms = useContext(LoadHotelsContext);
    return (
        <div>
            <h1>Choose Rooms</h1>
            <Container fluid className='mt-5'>
            <Row >
            {
                rooms.map(room=><Room key={room.id} room={room}></Room>)
            }
            </Row>
            </Container>
          
           
        </div>
    );
};

export default Rooms;