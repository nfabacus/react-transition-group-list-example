import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Container,
  ListGroup,
  Button,
} from 'react-bootstrap';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function TodoList() {
  const [items, setItems] = useState(() => [
    {
      id: uuid(),
      text: 'Buy eggs',
    },
    {
      id: uuid(),
      text: 'Pay bills',
    },
    {
      id: uuid(),
      text: 'Invite friends over',
    },
    {
      id: uuid(),
      text: 'Fix the TV',
    },
  ]);
  return (
    <Container style={{ marginTop: '2rem' }}>
      <ListGroup style={{ marginBottom: '1rem' }}>
        <TransitionGroup className="todo-list">
          {items.map(({ id, text }) => (
            <CSSTransition
              key={id}
              timeout={500}
              classNames="item"
            >
              <ListGroup.Item>
                <Button
                  className="remove-btn"
                  variant="danger"
                  size="sm"
                  onClick={() =>
                    setItems((items) =>
                      items.filter((item) => item.id !== id)
                    )
                  }
                >
                  &times;
                </Button>
                {text}
              </ListGroup.Item>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
      <Button
        onClick={() => {
          const text = prompt('Enter some text');
          if (text) {
            setItems((items) => [
              ...items,
              {
                id: uuid(),
                text,
              },
            ]);
          }
        }}
      >
        Add Item
      </Button>
    </Container>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<TodoList />);
